import { useId } from "react";
import { FileCheck2, MapPin, Wallet } from "lucide-react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import PillButton from "../ui/PillButton";
import { campaignHero, whatsapp } from "../../data/campaign";
import heroPhoto from "../../assets/photo-2.webp";
import heroPhotoSmall from "../../assets/photo-2-640.webp";

const FEATURE_ICONS = [Wallet, FileCheck2, MapPin];

// Franja superior de la tesela de texto: curvas de nivel y trama diagonal,
// como en el diseño de referencia, en grises de la paleta.
function WaveStrip() {
  const id = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  return (
    <svg viewBox="0 0 600 56" preserveAspectRatio="none" className="block h-14 w-full" aria-hidden="true">
      <defs>
        <pattern id={`${id}-hatch`} width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="7" stroke="#CFCCD8" strokeWidth="1.6" />
        </pattern>
      </defs>
      <rect width="600" height="56" fill="#E9E7EE" />
      <rect x="340" width="260" height="56" fill={`url(#${id}-hatch)`} />
      {[0, 1, 2, 3, 4].map((i) => (
        <path
          key={i}
          d={`M0 ${16 + i * 9} C 90 ${i * 9} 170 ${34 + i * 9} 270 ${16 + i * 9} S 440 ${i * 9} 600 ${22 + i * 9}`}
          fill="none"
          stroke="#CFCCD8"
          strokeWidth="1.3"
        />
      ))}
    </svg>
  );
}

// Icono negro sobre una "peana" dorada: el detalle de la franja de características.
function FeatureIcon({ Icon }) {
  return (
    <span className="grid h-12 w-12 flex-none place-items-center rounded-xl bg-black text-white shadow-[0_5px_0_0_var(--color-gold-2)]">
      <Icon className="h-5 w-5" />
    </span>
  );
}

export default function CampaignHero() {
  return (
    <section id="top" className="pb-6 pt-1 md:pb-10">
      <Container>
        <div className="grid gap-4 md:grid-cols-2 md:gap-5">
          <Reveal className="h-full">
            <div className="flex h-full flex-col overflow-hidden rounded-[2rem] bg-[var(--color-paper-soft)]">
              <WaveStrip />
              <div className="flex flex-1 flex-col justify-center px-7 pb-10 pt-9 md:px-10">
                <h1 className="font-[var(--font-display)] text-[2.4rem] font-bold leading-[1.08] tracking-tight text-balance text-[var(--color-ink)] md:text-5xl">
                  {campaignHero.title}
                  <span className="block text-[var(--color-gold)]">{campaignHero.titleAccent}</span>
                </h1>
                <p className="mt-5 max-w-md text-base leading-relaxed text-[var(--color-muted-light)] md:text-lg">
                  {campaignHero.subtitle}
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <PillButton href={campaignHero.actions.primary.href}>{campaignHero.actions.primary.label}</PillButton>
                  <PillButton href={whatsapp.href} target="_blank" variant="outline">
                    {campaignHero.actions.secondary.label}
                  </PillButton>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="h-full">
            <div className="relative h-full min-h-[340px] overflow-hidden rounded-[2rem] bg-[var(--color-navy)] md:min-h-[460px]">
              <img
                src={heroPhoto}
                srcSet={`${heroPhotoSmall} 640w, ${heroPhoto} 1073w`}
                sizes="(min-width: 768px) 528px, 100vw"
                decoding="async"
                alt={campaignHero.photoAlt}
                className="absolute inset-0 h-full w-full object-cover"
                fetchPriority="high"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(180deg, transparent 45%, rgba(0,20,56,0.72) 100%)" }}
                aria-hidden="true"
              />
              <div className="absolute inset-x-5 bottom-5 flex flex-wrap gap-2">
                {campaignHero.chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-white/25 bg-white/15 px-4 py-2 text-xs font-medium text-white backdrop-blur-md"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mt-4 md:mt-5">
          <div className="grid gap-7 rounded-[2rem] bg-[var(--color-paper-soft)] p-7 md:grid-cols-3 md:gap-8 md:p-9">
            {campaignHero.features.map((feature, i) => (
              <div key={feature.title} className="flex items-start gap-4">
                <FeatureIcon Icon={FEATURE_ICONS[i]} />
                <div>
                  <h3 className="font-[var(--font-display)] text-lg font-bold tracking-tight text-[var(--color-ink)]">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--color-muted-light)]">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
