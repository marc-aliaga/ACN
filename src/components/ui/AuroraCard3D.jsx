import { useCallback, useEffect, useId, useRef } from "react";

// ---------------------------------------------------------------------------
// Tesela con una tarjeta 3D. Adaptación del "aurora credit card bento": una
// pieza que flota en una tesela oscura, con un degradado que fluye por su cara,
// luz que recorre el grano y una inclinación que sigue al puntero. Todo es
// CSS/SVG, sin canvas ni dependencias.
//
// Es la carcasa: la cara de la tarjeta (logo, textos) se pasa como `children`,
// posicionada en unidades `cqw` para que escale con el tamaño de la tarjeta.
// La usan la portada del dossier (/invierte) y la invitación VIP de la home.
// ---------------------------------------------------------------------------

// Colores de marca en ciclo: navy → azul del logo → teal → dorado.
const BRAND_COLORS = ["#0A2A6B", "#06528A", "#007586", "#2AA7B8", "#CCB178", "#B18730"];

const HIGHLIGHT = "rgba(255, 255, 255, 0.92)";
const TILT = 15;

/** Una vuelta del ciclo de color, como porcentaje de la altura de la capa. */
const PERIOD = 28;
const CAUSTIC_PERIOD = 23.1;
const FIBRE_PERIOD = 120;

// Filamentos a lo largo del grano: [desplazamiento px, peso]. Desiguales a
// propósito (parecen fibra, no tela) y fijos, para que servidor y cliente
// dibujen lo mismo.
const FIBRES = [
  [2, 0.1], [8, -0.06], [15.5, 0.16], [22, -0.05], [30.5, 0.08], [39.5, -0.07], [48, 0.13],
  [57.5, -0.05], [67.5, 0.09], [76.5, -0.06], [86.5, 0.15], [96.5, -0.05], [106.5, 0.07], [116.5, -0.06],
];

function fibreGradient() {
  const stops = ["transparent 0px"];
  for (const [at, weight] of FIBRES) {
    const colour = weight > 0 ? `rgba(255,255,255,${weight})` : `rgba(0,0,0,${-weight})`;
    stops.push(`transparent ${(at - 1.3).toFixed(1)}px`, `${colour} ${at}px`, `transparent ${(at + 1.3).toFixed(1)}px`);
  }
  stops.push(`transparent ${FIBRE_PERIOD}px`);
  return `repeating-linear-gradient(180deg, ${stops.join(", ")})`;
}

function causticGradient() {
  const a = (CAUSTIC_PERIOD * 0.473).toFixed(2);
  const b = (CAUSTIC_PERIOD * 0.5).toFixed(2);
  const c = (CAUSTIC_PERIOD * 0.527).toFixed(2);
  return `repeating-linear-gradient(180deg, transparent 0%, transparent ${a}%, ${HIGHLIGHT} ${b}%, transparent ${c}%, transparent ${CAUSTIC_PERIOD}%)`;
}

/** Solo el ciclo de color: la luz va en su propia capa. */
function bandGradient(colors) {
  const step = PERIOD / colors.length;
  const stops = colors.map((color, i) => `${color} ${(i * step).toFixed(2)}%`);
  stops.push(`${colors[0]} ${PERIOD.toFixed(2)}%`);
  return `repeating-linear-gradient(180deg, ${stops.join(", ")})`;
}

const STYLE_ID = "aurora-card-styles";

const STYLES = `
@keyframes aurora-card-flow {
  from { transform: rotate(-25deg) translate3d(0, 0, 0); }
  to   { transform: rotate(-25deg) translate3d(0, 28%, 0); }
}
@keyframes aurora-card-caustic {
  from { transform: rotate(-25deg) translate3d(0, 0, 0); }
  to   { transform: rotate(-25deg) translate3d(0, -23.1%, 0); }
}
@keyframes aurora-card-fibre {
  from { transform: rotate(-25deg) translate3d(0, 0, 0); }
  to   { transform: rotate(-25deg) translate3d(0, 120px, 0); }
}
@keyframes aurora-card-float {
  0%, 100% { transform: translate3d(0, 5px, 0); }
  50%      { transform: translate3d(0, -7px, 0); }
}
.aurora-card__flow    { animation: aurora-card-flow 26s linear infinite; }
.aurora-card__caustic { animation: aurora-card-caustic 19s linear infinite; }
.aurora-card__fibre   { animation: aurora-card-fibre 34s linear infinite; }
.aurora-card__float   { animation: aurora-card-float 7s ease-in-out infinite; }

.aurora-card__tilt {
  transform:
    perspective(1100px)
    rotateX(var(--aurora-rx, 0deg))
    rotateY(var(--aurora-ry, 0deg))
    translate3d(var(--aurora-tx, 0px), var(--aurora-ty, 0px), 0)
    scale(var(--aurora-scale, 1));
  transition: transform 420ms cubic-bezier(0.22, 0.7, 0.28, 1);
}
.aurora-card:active .aurora-card__tilt { --aurora-scale: 1.01; }

.aurora-card {
  transition: transform 800ms cubic-bezier(0.165, 0.84, 0.44, 1);
}
.aurora-card:hover { transform: scale(1.02); }

/* Rendimiento: las animaciones solo corren mientras la tarjeta se ve en pantalla. */
.aurora-card:not([data-visible="true"]) .aurora-card__flow,
.aurora-card:not([data-visible="true"]) .aurora-card__caustic,
.aurora-card:not([data-visible="true"]) .aurora-card__fibre,
.aurora-card:not([data-visible="true"]) .aurora-card__float { animation-play-state: paused; }

/* En móvil y tableta se omiten las dos capas con filtros SVG (turbulencia + desplazamiento),
   que se repintan cada fotograma y son lo más caro del efecto. Quedan las bandas de color,
   el grano y el brillo del borde. */
@media (max-width: 1023px), (pointer: coarse) {
  .aurora-card__grain { display: none; }
}

.aurora-card__glyph-box { transition: background-color 300ms ease, color 300ms ease; }
.aurora-card:hover .aurora-card__glyph-box,
.aurora-card:focus-visible .aurora-card__glyph-box {
  background-color: var(--aurora-accent);
  color: #0a0a0c;
}

@media (prefers-reduced-motion: reduce) {
  .aurora-card__flow, .aurora-card__caustic, .aurora-card__fibre, .aurora-card__float { animation: none !important; }
  .aurora-card__tilt { transition: none; transform: none; }
  .aurora-card, .aurora-card__glyph-box { transition: none; }
  .aurora-card:hover { transform: none; }
}
`;

function useStyles() {
  useEffect(() => {
    if (typeof document === "undefined" || document.getElementById(STYLE_ID)) return;
    const tag = document.createElement("style");
    tag.id = STYLE_ID;
    tag.textContent = STYLES;
    document.head.appendChild(tag);
  }, []);
}

// Dos granos: uno suave bajo las cáusticas y uno fino bajo los filamentos.
// El filtro va en una caja quieta del tamaño de la tarjeta, nunca en la capa
// que se mueve (si no, con la tarjeta girando en 3D aparecen cortes en las fibras).
const GRAINS = [
  { key: "soft", blur: 2 },
  { key: "fine", blur: 0.3 },
];

function GrainFilters({ id }) {
  return (
    <svg width="0" height="0" className="pointer-events-none absolute" aria-hidden="true" focusable="false">
      <defs>
        {GRAINS.map(({ key, blur }) => (
          <filter key={key} id={`${id}-${key}`} x="-15%" y="-15%" width="130%" height="130%" colorInterpolationFilters="sRGB">
            <feTurbulence type="fractalNoise" baseFrequency="0.003 0.01" numOctaves={1} seed={7} result="warp" />
            <feDisplacementMap in="SourceGraphic" in2="warp" scale={14} xChannelSelector="R" yChannelSelector="G" result="bent" />
            <feTurbulence type="fractalNoise" baseFrequency="0.009" numOctaves={1} seed={19} result="patch" />
            <feColorMatrix
              in="patch"
              type="matrix"
              values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0.55 0 0 0 0.38"
              result="patchAlpha"
            />
            <feComposite in="bent" in2="patchAlpha" operator="in" />
            <feGaussianBlur stdDeviation={blur} />
          </filter>
        ))}
      </defs>
    </svg>
  );
}

const RING_MASK = {
  WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
  mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
  WebkitMaskComposite: "xor",
  maskComposite: "exclude",
};

/**
 * @param tileTitle  Titular de la tesela (arriba a la izquierda).
 * @param action     Icono del recuadro de arriba a la derecha.
 * @param ariaLabel  Texto accesible del enlace.
 * @param colors     Ciclo de color de la cara (por defecto, los de marca).
 * @param glow       Color del foco de luz que sigue al puntero.
 * @param children   La cara de la tarjeta, en unidades cqw.
 * Cualquier otra prop (href, target, rel…) va al <a> raíz.
 */
export default function AuroraCard3D({
  tileTitle,
  action,
  ariaLabel,
  colors = BRAND_COLORS,
  glow = "#CCB178",
  children,
  className = "",
  ...anchorProps
}) {
  useStyles();

  const id = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const rootRef = useRef(null);
  const frameRef = useRef(0);
  const grain = `${id}-grain`;

  const reset = useCallback(() => {
    const root = rootRef.current;
    if (!root) return;
    root.style.setProperty("--aurora-rx", "0deg");
    root.style.setProperty("--aurora-ry", "0deg");
    root.style.setProperty("--aurora-tx", "0px");
    root.style.setProperty("--aurora-ty", "0px");
  }, []);

  useEffect(() => () => cancelAnimationFrame(frameRef.current), []);

  // Marca la tarjeta como visible/no visible: el CSS pausa las animaciones cuando no se ve.
  useEffect(() => {
    const root = rootRef.current;
    if (!root || typeof IntersectionObserver === "undefined") {
      if (root) root.dataset.visible = "true";
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        root.dataset.visible = entry.isIntersecting ? "true" : "false";
      },
      { rootMargin: "100px 0px" }
    );
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  const handlePointerMove = (event) => {
    const root = rootRef.current;
    if (!root) return;
    const { clientX, clientY } = event;
    cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => {
      const box = root.getBoundingClientRect();
      const x = (clientX - box.left) / box.width;
      const y = (clientY - box.top) / box.height;
      // El foco de luz sigue al puntero aunque la tarjeta no se mueva.
      root.style.setProperty("--aurora-mx", `${clientX - box.left}px`);
      root.style.setProperty("--aurora-my", `${clientY - box.top}px`);
      root.style.setProperty("--aurora-rx", `${(0.5 - y) * TILT * 2}deg`);
      root.style.setProperty("--aurora-ry", `${(x - 0.5) * TILT * 2}deg`);
      root.style.setProperty("--aurora-tx", `${(x - 0.5) * 22}px`);
      root.style.setProperty("--aurora-ty", `${(y - 0.5) * 16}px`);
    });
  };

  const handlePointerLeave = () => {
    cancelAnimationFrame(frameRef.current);
    reset();
  };

  // Bandas de color en la cara, acabando en el oscuro de la tesela. Va bajo las
  // bandas animadas, así la cara nunca se ve vacía en el primer pintado.
  const faceWash = `linear-gradient(168deg, ${colors.map((c, i) => `${c} ${((i / colors.length) * 90).toFixed(1)}%`).join(", ")}, #0a1224 100%)`;

  return (
    <a
      ref={rootRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      aria-label={ariaLabel}
      className={`aurora-card group relative isolate flex h-full min-h-[500px] w-full flex-col overflow-hidden rounded-[2rem] bg-[#0b1224] p-7 text-left text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] focus-visible:ring-offset-2 ${className}`}
      style={{ "--aurora-accent": glow }}
      {...anchorProps}
    >
      {/* anillo: un filo fino, más un foco que sigue al puntero */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] bg-white/10 p-px"
        style={RING_MASK}
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] p-px text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
        style={{
          background: `radial-gradient(320px circle at var(--aurora-mx, 50%) var(--aurora-my, 50%), ${glow} 0%, color-mix(in srgb, currentColor 42%, transparent) 30%, transparent 75%)`,
          ...RING_MASK,
        }}
      />

      {/* cabecera de la tesela */}
      <span className="relative flex items-start justify-between gap-4">
        <span className="max-w-[12ch] font-[var(--font-display)] text-[1.6rem] font-semibold leading-[1.12] tracking-[-0.02em]">
          {tileTitle}
        </span>
        <span
          aria-hidden="true"
          className="aurora-card__glyph-box grid size-10 shrink-0 place-items-center rounded-xl bg-white/10 text-white/70"
        >
          {action}
        </span>
      </span>

      {/* la tarjeta */}
      <span className="relative mt-auto flex flex-1 items-center justify-center pt-8 [perspective:1100px]">
        <span className="aurora-card__float block w-[88%] max-w-[390px]" style={{ containerType: "inline-size" }}>
          <span
            className="aurora-card__tilt relative block aspect-[3/4] overflow-hidden text-white will-change-transform"
            style={{
              background: faceWash,
              borderRadius: "4.5cqw",
              boxShadow: [
                "0 0.4cqw 0.9cqw color-mix(in srgb, currentColor 10%, transparent)",
                "0 1.1cqw 2.4cqw -0.6cqw color-mix(in srgb, currentColor 12%, transparent)",
              ].join(", "),
            }}
          >
            <GrainFilters id={grain} />

            {/* bandas de color, cada una fundiéndose con la siguiente */}
            <span
              aria-hidden="true"
              className="aurora-card__flow pointer-events-none absolute left-[-100%] top-[-150%] h-[400%] w-[300%] blur-[14px]"
              style={{ background: bandGradient(colors) }}
            />

            {/* luz que recorre el grano */}
            <span
              aria-hidden="true"
              className="aurora-card__grain pointer-events-none absolute inset-0"
              style={{ filter: `url(#${grain}-soft)`, opacity: 0.34, mixBlendMode: "plus-lighter" }}
            >
              <span
                className="aurora-card__caustic absolute left-[-55%] top-[-90%] h-[280%] w-[210%]"
                style={{ background: causticGradient() }}
              />
            </span>

            {/* filamentos a lo largo del grano */}
            <span
              aria-hidden="true"
              className="aurora-card__grain pointer-events-none absolute inset-0"
              style={{ filter: `url(#${grain}-fine)`, opacity: 0.95, mixBlendMode: "overlay" }}
            >
              <span
                className="aurora-card__fibre absolute left-[-55%] top-[-70%] h-[240%] w-[210%]"
                style={{ background: fibreGradient() }}
              />
            </span>

            {/* grano fino, para que el degradado no haga bandas */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.16] mix-blend-overlay"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)'/%3E%3C/svg%3E\")",
              }}
            />

            {/* luz en el borde y viñeta suave: dan lectura al texto de abajo */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-[inherit]"
              style={{
                background: [
                  "linear-gradient(200deg, rgba(255,255,255,0.24) 0%, transparent 24%)",
                  "linear-gradient(0deg, rgba(9,6,22,0.72) 0%, rgba(9,6,22,0.3) 34%, transparent 58%)",
                  "radial-gradient(130% 80% at 50% 116%, rgba(9,6,22,0.5) 0%, transparent 60%)",
                ].join(", "),
              }}
            />

            {/* la cara: lo que pasa cada página */}
            {children}
          </span>
        </span>
      </span>
    </a>
  );
}
