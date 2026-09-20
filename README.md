# Rent2Rent Investors — Web

Landing page para inversores de operaciones rent to rent. React + Vite +
Tailwind v4 + Framer Motion. Estilo minimalista neobanco: negro/blanco con
acento violeta, mucho espacio, formas simétricas (inspirado en Revolut).

## Arrancar en local

```bash
npm install
npm run dev
```

## Editar el contenido

Todo el copy y los datos (incluidas las cifras de las métricas y del gráfico)
viven en:

```
src/data/content.js
```

**Importante:** las cifras de rendimiento, payback, capital invertido, tasa de
impago y las del gráfico de track record son **datos de ejemplo** para poder
ver el diseño funcionando. Están marcadas con comentarios en `content.js` —
sustitúyelas por datos reales/auditados y pon `isPlaceholderData = false`
antes de publicar (esto quita el aviso "Cifras de ejemplo" que aparece bajo
cada bloque de métricas).

`APPLY_URL` y `DOSSIER_URL` (arriba de `content.js`) son placeholders:
apúntalos al Calendly/TypeForm de los fundadores y al PDF del dossier de
inversión respectivamente.

## Estructura

- `src/components/` — una sección por archivo: `Nav`, `Hero` (título +
  subtítulo + métricas rotativas + CTAs), `TrackRecord` (gráfico animado +
  3 métricas), `Footer`.
- `src/components/ui/` — primitivas: `Container`, `RotatingMetric` (carrusel
  de métricas del hero), `AreaChart` (SVG animado con Framer Motion),
  `CountUp` (números que suben al entrar en viewport), `icons`.
- `src/index.css` — paleta de marca (`@theme`: negro `--color-ink`, blanco
  `--color-paper`, violeta `--color-violet`) y clases reutilizables
  (`.surface-dark`, `.btn-primary`, `.btn-ghost`, etc.).

## Secciones actuales

1. **Hero** (fondo negro) — kicker, título, subtítulo y, debajo, un bloque
   compacto (no ocupa toda la sección) con métricas que van rotando una a
   una: rendimiento medio por operación, tiempo medio de payback, capital
   medio invertido y tasa de impago. CTAs minimalistas: "Agendar reunión con
   los fundadores" y "Descargar dossier de inversión".
2. **Track record** (fondo blanco) — gráfico de área animado (ingreso bruto
   vs. coste de arrendamiento por año) que se dibuja al entrar en el
   viewport, con 3 métricas en paralelo debajo.

## Página de campaña (`/invierte`)

Landing a la que apuntan los anuncios; su objetivo único es que el visitante
descargue el dossier. Se abre en `/invierte` (sin router: `App.jsx` mira la
ruta; en Vercel la reescritura está en `vercel.json`).

- Todo el copy y las cifras viven en `src/data/campaign.js` (las cifras salen
  del dossier y de `content.js`: si cambian allí, cambiarlas también aquí).
- Secciones en `src/components/campaign/` (una por archivo) y la página en
  `src/pages/CampaignPage.jsx`.
- El formulario (`DossierForm.jsx`) guarda el lead en la tabla `leads` de
  Supabase (con los `utm_*` de la URL, así se sabe qué anuncio lo trajo), abre
  el PDF y lanza el evento `dossier_lead_submitted` de PostHog. Si el guardado
  falla, el dossier se abre igualmente.
- Enlaces para los anuncios: `https://TU-DOMINIO/invierte?utm_source=meta&utm_medium=paid&utm_campaign=invierte-sin-comprar`
- Pendiente: enlazar la política de privacidad en el texto de consentimiento
  del formulario (`dossierForm.consent`) y sustituir la portada dibujada en CSS
  (`DossierContents.jsx`) por una imagen real de la primera página del PDF.

## Rendimiento

Auditado con Lighthouse (móvil con red 4G lenta y CPU 4x más lenta, y escritorio).
Antes → después: home móvil 48 → 93, campaña móvil 61 → 94, ambas en escritorio → 100.

Cómo se ha conseguido (y qué mantener al añadir cosas):

- **JS por página.** `App.jsx` carga `HomePage` y `CampaignPage` con `lazy`; cada una es su
  propio bloque. El mapa (Leaflet) solo se descarga al acercarse (`LazyOnView`) y
  Supabase solo al enfocar/enviar un formulario (`lib/supabase.js`). No añadas librerías
  pesadas al bloque de entrada: cárgalas con `import()` bajo demanda.
- **Precarga por ruta.** El plugin `routePreload` de `vite.config.js` inyecta en el HTML un
  script que precarga, según la ruta, el bloque de JS de esa página y sus fuentes.
- **Fuentes propias.** Inter, Inter Tight y Fraunces (variables, subconjunto latino) están en
  `public/fonts/` con su `@font-face` en `src/index.css`. Sin Google Fonts.
- **Imágenes.** Todo en WebP y a su tamaño real de uso (2x): las fotos de `public/properties`
  a 1280 px, los fondos con versión móvil (`bg-mobile.webp`, `photo-2-640.webp`) y
  `loading="lazy"` en lo que queda bajo el primer pantallazo. Antes de añadir una foto,
  conviértela a WebP y redúcela (un hero ≤ 1600 px, una tarjeta ≤ 900 px).
- **Renderizado.** Las secciones muy por debajo llevan `defer-render` (`content-visibility`);
  no la uses en secciones que tengan modales `fixed` dentro. La tarjeta 3D se pausa fuera
  de pantalla y en móvil omite los filtros SVG.
- **Caché.** `vercel.json` marca `/assets` y `/fonts` como inmutables y `/properties` a 30 días.

## Build de producción

```bash
npm run build
npm run preview
```
