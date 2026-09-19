import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bath, BedDouble, Ruler, X } from "lucide-react";
import HoverButton from "./HoverButton";
import LocationMap from "./LocationMap";
import { APPLY_URL, properties } from "../../data/content";
import { track } from "../../lib/analytics";

const TABS = [
  { id: "resumen", label: "Resumen" },
  { id: "rendimiento", label: "Rendimiento" },
];

export default function PropertyModal({ property, onClose }) {
  const [tab, setTab] = useState("resumen");
  const [activeImage, setActiveImage] = useState(property?.image);

  useEffect(() => {
    if (!property) return;
    setTab("resumen");
    setActiveImage(property.image);
    track("property_view", { property_id: property.id, city: property.city });
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [property, onClose]);

  return (
    <AnimatePresence>
      {property && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`Ficha de ${property.address}`}
            className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-[var(--color-paper)] text-[var(--color-ink)] shadow-2xl"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar ficha"
              className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition hover:bg-black/60"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Cabecera: foto con la info principal superpuesta */}
            <div
              className="relative h-72 bg-cover bg-center md:h-96"
              style={{ backgroundImage: `url(${activeImage})` }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to top, hsl(${property.themeColor} / 0.92), hsl(${property.themeColor} / 0.35) 45%, transparent 75%)`,
                }}
              />

              <div className="relative z-10 flex h-full flex-col justify-end p-6 text-white md:p-10">
                <span className="kicker text-white/85">{property.tag ?? "Caso de éxito"}</span>
                <h3 className="mt-3 font-[var(--font-display)] text-3xl font-semibold tracking-tight md:text-5xl">
                  {property.address}
                </h3>
                <p className="mt-1 text-white/85 md:text-lg">{property.location}</p>

                <div className="mt-5 flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-[var(--color-ink)] md:text-sm">
                    {property.yieldLabel}: {property.yieldValue}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium backdrop-blur-md md:text-sm">
                    <BedDouble className="h-3.5 w-3.5" /> {property.beds} hab.
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium backdrop-blur-md md:text-sm">
                    <Bath className="h-3.5 w-3.5" /> {property.baths} baños
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium backdrop-blur-md md:text-sm">
                    <Ruler className="h-3.5 w-3.5" /> {property.sqm} m²
                  </span>
                </div>
              </div>
            </div>

            {property.images && property.images.length > 1 && (
              <div className="flex gap-2.5 overflow-x-auto p-6 pb-0 md:px-10 md:pt-8">
                {property.images.map((src) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setActiveImage(src)}
                    aria-label="Ver esta foto en la cabecera"
                    className={`h-16 w-20 flex-none overflow-hidden rounded-lg bg-cover bg-center transition-opacity md:h-20 md:w-28 ${
                      activeImage === src ? "opacity-100 ring-2 ring-[var(--color-gold)]" : "opacity-70 hover:opacity-100"
                    }`}
                    style={{ backgroundImage: `url(${src})` }}
                  />
                ))}
              </div>
            )}

            <div className="p-6 md:p-10">
              <div className="md:grid md:grid-cols-[1fr_260px] md:items-start md:gap-12">
                {/* Columna principal: tabs + contenido */}
                <div>
                  <div className="flex gap-6 border-b border-black/[0.08]">
                    {TABS.map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setTab(t.id)}
                        className={`relative pb-3 text-sm font-semibold transition-colors ${
                          tab === t.id ? "text-[var(--color-ink)]" : "text-muted-light"
                        }`}
                      >
                        {t.label}
                        {tab === t.id && (
                          <motion.span
                            layoutId="property-tab-underline"
                            className="absolute inset-x-0 -bottom-px h-[2px] bg-[var(--color-gold)]"
                          />
                        )}
                      </button>
                    ))}
                  </div>

                  <div className="mt-8">
                    {tab === "resumen" ? (
                      <div className="space-y-8">
                        <div>
                          <h4 className="font-[var(--font-display)] text-lg font-semibold">Sobre la propiedad</h4>
                          <ul className="mt-3 space-y-2">
                            {property.descriptionBullets.map((item) => (
                              <li key={item} className="flex items-start gap-2.5 leading-relaxed text-muted-light">
                                <span
                                  aria-hidden="true"
                                  className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[var(--color-gold)]"
                                />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-[var(--font-display)] text-lg font-semibold">{property.market.title}</h4>
                          <ul className="mt-3 space-y-2">
                            {property.market.bullets.map((item) => (
                              <li key={item} className="flex items-start gap-2.5 leading-relaxed text-muted-light">
                                <span
                                  aria-hidden="true"
                                  className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[var(--color-gold)]"
                                />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-[var(--font-display)] text-lg font-semibold">Gestión de la propiedad</h4>
                          <ul className="mt-3 space-y-2">
                            {property.managementBullets.map((item) => (
                              <li key={item} className="flex items-start gap-2.5 leading-relaxed text-muted-light">
                                <span
                                  aria-hidden="true"
                                  className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[var(--color-gold)]"
                                />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ) : (
                      <div className="overflow-hidden rounded-2xl border border-black/[0.08]">
                        {property.financials.map((row, i) => (
                          <div
                            key={row.label}
                            className={`flex items-center justify-between px-5 py-4 ${
                              i % 2 === 0 ? "bg-[var(--color-paper-soft)]" : "bg-transparent"
                            }`}
                          >
                            <span className="text-sm text-muted-light">{row.label}</span>
                            <span className="font-[var(--font-display)] font-semibold">{row.value}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="mt-10">
                    <HoverButton
                      label="Quiero invertir en operaciones así"
                      href={APPLY_URL}
                      variant="light"
                      size="md"
                    />
                  </div>

                  {properties.disclaimer && (
                    <p className="mt-6 text-[11px] text-muted-light/70">{properties.disclaimer}</p>
                  )}
                </div>

                {/* Columna lateral: ubicación */}
                <div className="mt-10 md:mt-0">
                  <h4 className="font-[var(--font-display)] text-sm font-semibold uppercase tracking-wide text-muted-light">
                    Ubicación
                  </h4>
                  <div className="mt-4 flex justify-center md:justify-start">
                    <LocationMap
                      address={property.address}
                      location={property.location}
                      coordinates={property.coordinates}
                      accent={property.themeColor}
                      defaultExpanded
                    />
                  </div>
                  <p className="mt-8 text-[11px] leading-relaxed text-muted-light/70">
                    Ubicación aproximada a nivel de barrio, no la dirección exacta del inmueble.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
