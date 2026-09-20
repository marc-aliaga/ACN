import { useEffect } from "react";
import CampaignHeader from "../components/campaign/CampaignHeader";
import CampaignHero from "../components/campaign/CampaignHero";
import DossierSection from "../components/campaign/DossierSection";
import LinesComparison from "../components/campaign/LinesComparison";
import ProcessSteps from "../components/campaign/ProcessSteps";
import RealCases from "../components/campaign/RealCases";
import Transparency from "../components/campaign/Transparency";
import Faq from "../components/campaign/Faq";
import FinalCta from "../components/campaign/FinalCta";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import { campaignMeta } from "../data/campaign";

// Landing de campaña (/invierte): una promesa, un objetivo (descargar el
// dossier) y los riesgos siempre visibles. Es el destino de los anuncios.
// Diseño claro en bento grid (teselas redondeadas de distinto tamaño), a
// diferencia de la home, que es oscura y a pantalla completa.
export default function CampaignPage() {
  useEffect(() => {
    const previousTitle = document.title;
    const meta = document.querySelector('meta[name="description"]');
    const previousDescription = meta?.getAttribute("content");

    document.title = campaignMeta.title;
    meta?.setAttribute("content", campaignMeta.description);

    return () => {
      document.title = previousTitle;
      if (meta && previousDescription != null) meta.setAttribute("content", previousDescription);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <CampaignHeader />
      <main>
        <CampaignHero />
        <DossierSection />
        <LinesComparison />
        <ProcessSteps />
        <RealCases />
        <Transparency />
        <Faq />
        <FinalCta />
      </main>
      <Footer homePath="/" />
      <CookieBanner />
    </div>
  );
}
