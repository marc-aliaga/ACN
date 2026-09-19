import { useMemo, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "react-leaflet-cluster/dist/assets/MarkerCluster.css";
import "react-leaflet-cluster/dist/assets/MarkerCluster.Default.css";
import Container from "./ui/Container";
import PropertyModal from "./ui/PropertyModal";
import { properties } from "../data/content";
import logoMark from "../assets/logo-mark.png";

const propertyIcon = new L.Icon({
  iconUrl: logoMark,
  iconSize: [38, 38],
  iconAnchor: [19, 34],
  popupAnchor: [0, -30],
});

// Vista centrada en España: hoy toda la cartera está en Barcelona, pero el
// zoom deja sitio a que aparezcan marcadores en otras ciudades más adelante.
const SPAIN_CENTER = [40.1, -3.7];
const SPAIN_ZOOM = 6;

export default function PropertiesMap() {
  const [selected, setSelected] = useState(null);

  const located = useMemo(
    () => properties.properties.filter((p) => typeof p.lat === "number" && typeof p.lng === "number"),
    []
  );

  return (
    <section id="mapa" className="surface-light py-24 md:py-32">
      <Container>
        <div className="max-w-2xl">
          <h2 className="font-[var(--font-display)] text-3xl md:text-5xl font-semibold tracking-tight">
            Dónde están nuestras propiedades
          </h2>
          <p className="mt-5 text-base md:text-lg text-muted-light">
            Hoy toda la cartera está en Barcelona. El mapa crecerá a medida que sumemos operaciones en más ciudades de
            España.
          </p>
        </div>

        <div className="acn-map mt-10 overflow-hidden rounded-2xl border border-black/[0.08] shadow-lg">
          <MapContainer
            center={SPAIN_CENTER}
            zoom={SPAIN_ZOOM}
            minZoom={5}
            scrollWheelZoom={false}
            style={{ height: "480px", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
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

        <p className="mt-6 text-center text-[11px] text-muted-light/70">
          Ubicaciones aproximadas a nivel de barrio, no la dirección exacta del inmueble.
        </p>
      </Container>

      <PropertyModal property={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
