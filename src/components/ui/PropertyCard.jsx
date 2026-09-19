import { ArrowRight } from "lucide-react";

export default function PropertyCard({ property, onSelect }) {
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
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
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
