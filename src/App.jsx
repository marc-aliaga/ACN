import { Suspense, lazy } from "react";
import { CAMPAIGN_PATH } from "./data/routes";

// Cada página es su propio bloque de JS: /invierte no descarga el código de la
// home (mapa, etc.) ni la home el de la campaña.
const HomePage = lazy(() => import("./pages/HomePage"));
const CampaignPage = lazy(() => import("./pages/CampaignPage"));

// Sin router: solo hay dos páginas, así que basta con mirar la ruta.
// (En producción /invierte se reescribe a index.html: ver vercel.json.)
const currentPath = () => window.location.pathname.replace(/\/+$/, "") || "/";

export default function App() {
  const isCampaign = currentPath() === CAMPAIGN_PATH;
  const Page = isCampaign ? CampaignPage : HomePage;

  // Mientras llega el bloque de la página: el mismo color de fondo que tendrá,
  // para que no haya parpadeo.
  return (
    <Suspense fallback={<div className={`min-h-screen ${isCampaign ? "bg-white" : "bg-[var(--color-ink)]"}`} />}>
      <Page />
    </Suspense>
  );
}
