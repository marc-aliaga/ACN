import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, X } from "lucide-react";
import Container from "./ui/Container";
import PropertyCard from "./ui/PropertyCard";
import PropertyModal from "./ui/PropertyModal";
import { properties } from "../data/content";
import { mapProperties } from "../data/mapProperties";

// Al entrar solo se ven los casos destacados; el resto se carga con "Ver más".
const ALL_PROPERTIES = [...properties.properties, ...mapProperties];
const INITIAL_VISIBLE = properties.properties.length;

export default function Properties() {
  const [selected, setSelected] = useState(null);
  const [query, setQuery] = useState("");
  const [activeCity, setActiveCity] = useState("Todas");
  const [expanded, setExpanded] = useState(false);

  const cities = useMemo(
    () => Array.from(new Set(ALL_PROPERTIES.map((p) => p.city))),
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ALL_PROPERTIES.filter((property) => {
      const matchesCity = activeCity === "Todas" || property.city === activeCity;
      const matchesQuery =
        !q ||
        property.address.toLowerCase().includes(q) ||
        property.location.toLowerCase().includes(q);
      return matchesCity && matchesQuery;
    });
  }, [query, activeCity]);

  // Con búsqueda o ciudad activa se ven todos los resultados (si no, los de Málaga o
  // Murcia quedarían ocultos tras el "Ver más"); sin filtros solo los casos destacados.
  const filtering = query.trim() !== "" || activeCity !== "Todas";
  const visible = filtering || expanded ? filtered : filtered.slice(0, INITIAL_VISIBLE);
  const hiddenCount = filtered.length - visible.length;

  // Una tarjeta suelta (no destacada) no se estira: mantiene su ancho normal.
  const isSingle = visible.length === 1 && !visible[0].featured;
  const extraDisclaimer = visible.find((p) => p.disclaimer)?.disclaimer;

  return (
    <section id="propiedades" className="surface-light pt-8 pb-24 md:pt-10 md:pb-32">
      <Container>
        {/* Buscador tipo inmobiliaria, justo debajo del hero */}
        <div className="flex flex-col gap-4 rounded-2xl border border-black/[0.08] bg-[var(--color-paper-soft)] p-4 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-light" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar por dirección o barrio…"
              aria-label="Buscar propiedad por dirección o barrio"
              className="w-full rounded-xl border border-black/[0.08] bg-[var(--color-paper)] py-3 pl-11 pr-10 text-sm text-[var(--color-ink)] placeholder:text-muted-light/70 transition focus:border-[var(--color-gold)] focus:outline-none"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Borrar búsqueda"
                className="absolute right-3 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full text-muted-light transition hover:text-[var(--color-ink)]"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {["Todas", ...cities].map((city) => {
              const active = activeCity === city;
              return (
                <button
                  key={city}
                  type="button"
                  onClick={() => setActiveCity(city)}
                  aria-pressed={active}
                  className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors md:text-sm ${
                    active
                      ? "border-[var(--color-gold)] bg-[var(--color-gold)]/20 text-[var(--color-ink)]"
                      : "border-black/[0.08] bg-[var(--color-paper)] text-muted-light hover:border-black/20"
                  }`}
                >
                  {city}
                </button>
              );
            })}
          </div>
        </div>

        {visible.length > 0 ? (
          <div
            className={
              isSingle
                ? "mt-10 flex justify-center sm:justify-start"
                : "mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
            }
          >
            {visible.map((property, i) => (
              <motion.div
                key={property.id}
                className={
                  property.featured ? "sm:col-span-2 lg:col-span-3" : isSingle ? "w-full max-w-sm" : undefined
                }
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <PropertyCard property={property} onSelect={setSelected} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-2xl border border-dashed border-black/[0.12] p-10 text-center">
            <p className="text-base text-muted-light">
              No encontramos propiedades con ese criterio en {activeCity === "Todas" ? "nuestra cartera actual" : activeCity}.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setActiveCity("Todas");
              }}
              className="mt-4 text-sm font-semibold text-[var(--color-ink)] underline underline-offset-4"
            >
              Ver todas las propiedades
            </button>
          </div>
        )}

        {hiddenCount > 0 && !filtering && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setExpanded(true)}
              className="rounded-full border border-black/[0.08] bg-[var(--color-paper-soft)] px-7 py-3 text-sm font-semibold text-[var(--color-ink)] transition-colors hover:border-black/25"
            >
              Ver más propiedades ({hiddenCount})
            </button>
          </div>
        )}

        {properties.disclaimer && (
          <p className="mt-8 text-center text-[11px] text-muted-light/70">{properties.disclaimer}</p>
        )}
        {extraDisclaimer && (
          <p className="mt-3 text-center text-[11px] text-muted-light/70">{extraDisclaimer}</p>
        )}
      </Container>

      <PropertyModal property={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
