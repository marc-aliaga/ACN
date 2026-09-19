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

## Build de producción

```bash
npm run build
npm run preview
```
