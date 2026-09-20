import { useMemo, useState } from "react";
import { Circle, MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "react-leaflet-cluster/dist/assets/MarkerCluster.css";
import "react-leaflet-cluster/dist/assets/MarkerCluster.Default.css";
import Container from "./ui/Container";
import PropertyModal from "./ui/PropertyModal";
import { properties } from "../data/content";
import { mapProperties } from "../data/mapProperties";
import logoMark from "../assets/logo-mark.webp";

const propertyIcon = new L.Icon({
  iconUrl: logoMark,
  iconSize: [38, 38],
  iconAnchor: [19, 34],
  popupAnchor: [0, -30],
});

// Vista inicial enfocada en Barcelona (donde están los casos destacados) con el
// zoom justo para ver los logos por separado; el usuario puede alejarse para ver más.
const INITIAL_CENTER = [41.3867, 2.1658];
const INITIAL_ZOOM = 13;

// Estilo de las zonas en estudio: círculo dorado discontinuo, sin relleno fuerte
// (a propósito distinto de un pin: no son propiedades).
const ZONE_STYLE = {
  color: "#B18730",
  weight: 2,
  dashArray: "6 6",
  fillColor: "#B18730",
  fillOpacity: 0.12,
};

export default function PropertiesMap() {
  const [selected, setSelected] = useState(null);
  const [map, setMap] = useState(null);
  const { map: mapCopy } = properties;

  const located = useMemo(
    () =>
      [...properties.properties, ...mapProperties].filter(
        (p) => typeof p.lat === "number" && typeof p.lng === "number"
      ),
    []
  );

  const flyHome = () => map?.flyTo(INITIAL_CENTER, INITIAL_ZOOM, { duration: 1.2 });
  const flyToCity = (city) => map?.flyTo([city.lat, city.lng], 13, { duration: 1.4 });
  const flyToZone = (zone) => map?.flyTo([zone.lat, zone.lng], 11, { duration: 1.4 });
  const flyToAll = () =>
    map?.flyToBounds(
      [...located.map((p) => [p.lat, p.lng]), ...mapCopy.zones.map((z) => [z.lat, z.lng])],
      { padding: [40, 40], duration: 1.4 }
    );

  const chip =
    "rounded-full border border-black/[0.08] bg-[var(--color-paper-soft)] px-4 py-2 text-xs font-medium text-[var(--color-ink)] transition-colors hover:border-black/25 md:text-sm";

  return (
    <section id="mapa" className="surface-light py-24 md:py-32">
      <Container>
        <div className="max-w-2xl">
          <h2 className="font-[var(--font-display)] text-3xl md:text-5xl font-semibold tracking-tight">
            {mapCopy.title}
          </h2>
          <p className="mt-5 text-base md:text-lg text-muted-light">{mapCopy.intro}</p>
        </div>

        {/* Atajos: saltar a Barcelona o a cada zona en estudio */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          <button type="button" onClick={flyHome} className={chip}>
            {mapCopy.homeLabel}
          </button>
          {mapCopy.cities.map((city) => (
            <button key={city.id} type="button" onClick={() => flyToCity(city)} className={chip}>
              {city.name}
            </button>
          ))}
          {mapCopy.zones.map((zone) => (
            <button key={zone.id} type="button" onClick={() => flyToZone(zone)} className={chip}>
              {zone.name}
              <span className="ml-2 rounded-full bg-[var(--color-gold)]/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[var(--color-gold-deep)]">
                {mapCopy.zoneBadge}
              </span>
            </button>
          ))}
          <button type="button" onClick={flyToAll} className={`${chip} text-muted-light`}>
            {mapCopy.allLabel}
          </button>
        </div>

        <div className="acn-map mt-6 overflow-hidden rounded-2xl border border-black/[0.08] shadow-lg">
          <MapContainer
            ref={setMap}
            center={INITIAL_CENTER}
            zoom={INITIAL_ZOOM}
            minZoom={5}
            scrollWheelZoom={false}
            style={{ height: "480px", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Zonas en estudio: sin pin, sin ficha, sin rentabilidad */}
            {mapCopy.zones.map((zone) => (
              <Circle key={zone.id} center={[zone.lat, zone.lng]} radius={zone.radiusKm * 1000} pathOptions={ZONE_STYLE}>
                <Tooltip permanent direction="center" className="acn-zone-label">
                  {zone.name} · {mapCopy.zoneBadge}
                </Tooltip>
                <Popup>
                  <div className="min-w-[180px]">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-[var(--color-gold-deep)]">
                      {mapCopy.zoneBadge}
                    </p>
                    <p className="mt-1 font-semibold text-[var(--color-ink)]">{zone.name}</p>
                    <p className="text-sm text-muted-light">{mapCopy.zoneNote}</p>
                  </div>
                </Popup>
              </Circle>
            ))}

            {/* Operaciones reales */}
            <MarkerClusterGroup>
              {located.map((property) => (
                <Marker key={property.id} position={[property.lat, property.lng]} icon={propertyIcon}>
                  <Popup>
                    <div className="min-w-[180px]">
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-[var(--color-gold-deep)]">
                        {property.tag ?? "Propiedad"}
                      </p>
                      <p className="mt-1 font-semibold text-[var(--color-ink)]">{property.address}</p>
                      <p className="text-sm text-muted-light">{property.location}</p>
                      <button
                        type="button"
                        onClick={() => setSelected(property)}
                        className="mt-2 flex items-center gap-1.5 text-sm font-medium text-[var(--color-ink)] transition hover:opacity-80"
                        aria-label={`Ver ficha de ${property.address}`}
                      >
                        {property.yieldLabel}:
                        <span className="font-semibold text-emerald-600 underline underline-offset-4">
                          {property.yieldValue}
                        </span>
                      </button>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MarkerClusterGroup>
          </MapContainer>
        </div>

        {/* Leyenda */}
        <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-light">
          <span className="inline-flex items-center gap-2">
            <img src={logoMark} alt="" className="h-4 w-auto" />
            {mapCopy.realLegend}
          </span>
          {mapCopy.zones.length > 0 && (
            <span className="inline-flex items-center gap-2">
              <span
                aria-hidden="true"
                className="inline-block h-3.5 w-3.5 rounded-full border border-dashed border-[var(--color-gold)] bg-[var(--color-gold)]/15"
              />
              {mapCopy.zoneLegend}
            </span>
          )}
        </div>

        <p className="mt-4 text-[11px] text-muted-light/70">{mapCopy.footnote}</p>
      </Container>

      <PropertyModal property={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
