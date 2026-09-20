import Container from "../ui/Container";
import PillButton from "../ui/PillButton";
import { nav } from "../../data/content";
import { campaignNav, topBar } from "../../data/campaign";
import logo from "../../assets/logo-full.webp";

// Cabecera mínima: la landing tiene un único objetivo, así que sin menú.
// El aviso de riesgo va en una barra fina encima, siempre visible.
export default function CampaignHeader() {
  return (
    <header>
      <div className="border-b border-black/[0.06] bg-[#F1F0F4]">
        <p className="mx-auto max-w-6xl px-6 py-2.5 text-center text-[11px] leading-snug text-[var(--color-muted-light)] md:px-10 md:text-xs">
          {topBar.text}{" "}
          <a href={topBar.href} className="whitespace-nowrap font-semibold text-[var(--color-ink)] underline underline-offset-2">
            {topBar.link}
          </a>
        </p>
      </div>
      <Container className="flex items-center justify-between py-5 md:py-6">
        <a href="/" className="flex items-center" aria-label={`${nav.brand} — web principal`}>
          <img src={logo} alt={nav.brand} className="h-11 w-auto md:h-14" />
        </a>
        <PillButton href={campaignNav.cta.href} size="sm">
          {campaignNav.cta.label}
        </PillButton>
      </Container>
    </header>
  );
}
