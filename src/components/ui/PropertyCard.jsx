import { ArrowRight } from "lucide-react";

// Datos de la ficha que se destacan en la tarjeta grande (etiquetas de `financials`).
const FEATURED_FIGURES = ["Capital invertido", "Rendimiento anual", "Ingreso medio estimado"];

function pickFigures(financials = []) {
  return FEATURED_FIGURES.map((prefix) => financials.find((f) => f.label.startsWith(prefix))).filter(Boolean);
}

// Tarjeta grande: el ejemplo principal (caso real con fotos reales del inmueble).
function FeaturedCard({ property, onSelect }) {
  const { address, location, image, images, beds, baths, sqm, yieldLabel, yieldValue, themeColor, tag, descriptionBullets, financials } = property;
  const stats = `${beds} hab · ${baths} ${baths === 1 ? "baño" : "baños"} · ${sqm} m²`;
  const figures = pickFigures(financials);
  // Tres fotos reales más, en miniatura (solo en pantallas anchas).
  const thumbs = (images ?? []).filter((src) => src !== image).filter((_, i) => [1, 4, 7].includes(i));

  return (
    <button
      type="button"
      onClick={() => onSelect(property)}
      style={{ "--theme-color": themeColor }}
      className="group relative block min-h-[520px] w-full overflow-hidden rounded-3xl text-left shadow-xl transition-all duration-500 ease-in-out hover:shadow-[0_0_80px_-20px_hsl(var(--theme-color)/0.7)] md:min-h-[540px]"
      aria-label={`Ver ficha de ${address}, ${location}`}
    >
      <img
        src={image}
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
      />
      {/* legibilidad: oscurece de abajo arriba (móvil) y de izquierda a derecha (escritorio) */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          background:
            "linear-gradient(to top, hsl(var(--theme-color) / 0.96), hsl(var(--theme-color) / 0.7) 55%, hsl(var(--theme-color) / 0.15) 100%)",
        }}
      />
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            "linear-gradient(to right, hsl(var(--theme-color) / 0.95), hsl(var(--theme-color) / 0.72) 42%, hsl(var(--theme-color) / 0.05) 78%)",
        }}
      />

      <div className="absolute left-6 top-6 flex flex-wrap gap-2 md:left-10 md:top-10">
        {tag && (
          <span className="rounded-full bg-black/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white backdrop-blur-md">
            {tag}
          </span>
        )}
        <span className="rounded-full bg-[var(--color-gold)] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
          Ejemplo principal
        </span>
      </div>

      <div className="relative flex h-full min-h-[520px] flex-col justify-end p-6 pt-24 text-white md:min-h-[540px] md:max-w-[34rem] md:p-10">
        <span className="inline-flex w-fit items-center rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide backdrop-blur-md">
          {yieldLabel}: {yieldValue}
        </span>

        <h3 className="mt-4 font-[var(--font-display)] text-3xl font-semibold tracking-tight md:text-5xl">{address}</h3>
        <p className="mt-2 text-base text-white/85 md:text-lg">{location}</p>
        <p className="mt-1 text-sm text-white/65">{stats}</p>

        {descriptionBullets?.length > 0 && (
          <ul className="mt-5 space-y-2">
            {descriptionBullets.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-white/90">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[var(--color-gold-2)]" />
                {item}
              </li>
            ))}
          </ul>
        )}

        {figures.length > 0 && (
          <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-white/20 pt-5">
            {figures.map((figure) => (
              <div key={figure.label}>
                <dt className="text-[10px] font-semibold uppercase leading-tight tracking-wide text-[var(--color-gold-2)]">
                  {figure.label.replace(/\s*\(.*\)$/, "")}
                </dt>
                <dd className="mt-1 font-[var(--font-display)] text-base font-semibold md:text-xl">{figure.value}</dd>
              </div>
            ))}
          </dl>
        )}

        <div
          className="mt-6 flex w-full items-center justify-between rounded-lg border px-4 py-3 backdrop-blur-md md:w-fit md:gap-10"
          style={{
            background: "hsl(var(--theme-color) / 0.2)",
            borderColor: "hsl(var(--theme-color) / 0.45)",
          }}
        >
          <span className="text-sm font-semibold tracking-wide">Ver ficha completa</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>

      {thumbs.length > 0 && (
        <div className="absolute bottom-10 right-10 hidden flex-col gap-3 lg:flex">
          {thumbs.map((src) => (
            <img
              key={src}
              src={src}
              alt=""
              loading="lazy"
              decoding="async"
              className="h-24 w-36 rounded-xl border border-white/30 object-cover shadow-lg"
            />
          ))}
          <span className="text-right text-[10px] font-semibold uppercase tracking-wide text-white/70">Fotos reales</span>
        </div>
      )}
    </button>
  );
}

export default function PropertyCard({ property, onSelect }) {
  if (property.featured) return <FeaturedCard property={property} onSelect={onSelect} />;

  const { address, location, image, beds, baths, sqm, yieldLabel, yieldValue, themeColor, tag } = property;
  const stats = `${beds} hab · ${baths} ${baths === 1 ? "baño" : "baños"} · ${sqm} m²`;

  return (
    <button
      type="button"
      onClick={() => onSelect(property)}
      style={{ "--theme-color": themeColor }}
      className="group relative block aspect-[3/4] w-full overflow-hidden rounded-2xl text-left shadow-lg transition-all duration-500 ease-in-out hover:scale-[1.03] hover:shadow-[0_0_60px_-15px_hsl(var(--theme-color)/0.6)]"
      aria-label={`Ver ficha de ${address}, ${location}`}
    >
      <img
        src={image}
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, hsl(var(--theme-color) / 0.92), hsl(var(--theme-color) / 0.55) 35%, transparent 65%)",
        }}
      />

      {tag && (
        <span className="absolute left-4 top-4 rounded-full bg-black/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white backdrop-blur-md">
          {tag}
        </span>
      )}

      <div className="relative flex h-full flex-col justify-end p-6 text-white">
        <span className="inline-flex w-fit items-center rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide backdrop-blur-md">
          {yieldLabel}: {yieldValue}
        </span>

        <h3 className="mt-4 font-[var(--font-display)] text-2xl font-semibold tracking-tight">{address}</h3>
        <p className="mt-1 text-sm text-white/80">{location}</p>
        <p className="mt-1 text-xs text-white/60">{stats}</p>

        <div
          className="mt-6 flex items-center justify-between rounded-lg border px-4 py-3 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0"
          style={{
            background: "hsl(var(--theme-color) / 0.2)",
            borderColor: "hsl(var(--theme-color) / 0.35)",
          }}
        >
          <span className="text-sm font-semibold tracking-wide">Ver ficha</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </button>
  );
}
