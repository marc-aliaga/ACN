import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Properties from "./components/Properties";
import PropertiesMap from "./components/PropertiesMap";
import PortfolioMetrics from "./components/PortfolioMetrics";
import HowItWorks from "./components/HowItWorks";
import InvestorZone from "./components/InvestorZone";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <Properties />
      <PropertiesMap />
      <PortfolioMetrics />
      <HowItWorks />
      <InvestorZone />
      <ContactCTA />
      <Footer />
      <CookieBanner />
    </div>
  );
}
