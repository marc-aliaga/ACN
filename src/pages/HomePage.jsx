import { lazy } from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Properties from "../components/Properties";
import HowItWorks from "../components/HowItWorks";
import Team from "../components/Team";
import WhatWeDo from "../components/WhatWeDo";
import Careers from "../components/Careers";
import InvestorZone from "../components/InvestorZone";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import LazyOnView from "../components/ui/LazyOnView";

// El mapa arrastra Leaflet y sus estilos (mucho JS): solo se descarga al acercarse.
const PropertiesMap = lazy(() => import("../components/PropertiesMap"));

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <Properties />
      <LazyOnView minHeight={760}>
        <PropertiesMap />
      </LazyOnView>
      <HowItWorks />
      <InvestorZone />
      <ContactCTA />
      <WhatWeDo />
      <Team />
      <Careers />
      <Footer />
      <CookieBanner />
    </div>
  );
}
