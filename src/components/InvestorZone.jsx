import { useState } from "react";
import { ArrowUpRight, Play, Search, TrendingUp, Users, Zap } from "lucide-react";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import PillButton from "./ui/PillButton";
import CountUp from "./ui/CountUp";
import VideoModal from "./ui/VideoModal";
import AuroraCard3D from "./ui/AuroraCard3D";
import { investorZone, contactSection, nav } from "../data/content";
import videoThumbnail from "../assets/bg5.webp";
import logoFull from "../assets/logo-full.webp";

const BENEFIT_ICONS = [TrendingUp, Users, Search, Zap];

// Más dorado y más oscuro que el degradado por defecto: se lee como invitación.
const VIP_COLORS = ["#001638", "#0A2A6B", "#06528A", "#B18730", "#CCB178", "#0A2A6B"];

const tile = "rounded-[2rem] border border-white/10 bg-white/[0.04]";

// La cara de la invitación: marco fino, el logo grande en el centro y el
// título de la zona debajo. Todo en cqw para escalar con la tarjeta.
function VipFace() {
  const { vip } = investorZone;
  return (
    <>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute rounded-[3cqw] border border-white/35"
        style={{ inset: "4.5cqw" }}
      />
      <span
        className="pointer-events-none absolute text-center font-semibold uppercase text-white/90"
        style={{ top: "11cqw", left: 0, right: 0, fontSize: "3.4cqw", letterSpacing: "0.32em" }}
      >
        {vip.badge}
      </span>
      <img
        src={logoFull}
        alt={nav.brand}
        className="pointer-events-none absolute"
        style={{
          left: "50%",
          top: "31cqw",
          width: "74cqw",
          transform: "translateX(-50%)",
          filter: "brightness(0) invert(1) drop-shadow(0 0.6cqw 1.4cqw rgba(9,6,22,0.45))",
        }}
      />
      <span
        className="pointer-events-none absolute text-center font-[var(--font-hero-title)] font-semibold leading-[1.05] drop-shadow-[0_2px_8px_rgba(9,6,22,0.45)]"
        style={{ left: "8cqw", right: "8cqw", bottom: "21cqw", fontSize: "9.5cqw" }}
      >
        {vip.title}
      </span>
      <span
        className="pointer-events-none absolute text-center text-white/85"
        style={{ left: "8cqw", right: "8cqw", bottom: "11cqw", fontSize: "3.6cqw", letterSpacing: "0.04em" }}
      >
        {vip.note}
      </span>
    </>
  );
}

export default function InvestorZone() {
  const [videoOpen, setVideoOpen] = useState(false);
  const { card, vip, videoTile } = investorZone;
  const whatsappUrl = `https://wa.me/${contactSection.whatsappNumber}?text=${encodeURIComponent(
    investorZone.cta.whatsappMessage
  )}`;

  return (
    <section id="zona-inversores" className="surface-dark py-24 md:py-32">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-[var(--font-display)] text-3xl font-semibold tracking-tight md:text-5xl">
            {investorZone.title}
          </h2>
          <p className="mt-5 text-base text-muted-dark md:text-lg">{investorZone.subtitle}</p>
        </Reveal>

        <div className="mt-14 grid gap-4 md:mt-16 md:gap-5 lg:grid-cols-12">
          {/* la invitación VIP: tarjeta 3D */}
          <Reveal className="h-full lg:col-span-5">
            <AuroraCard3D
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              tileTitle={vip.tileTitle}
              ariaLabel={`${vip.tileTitle}: solicitar acceso por WhatsApp`}
              action={<ArrowUpRight className="size-5" />}
              colors={VIP_COLORS}
            >
              <VipFace />
            </AuroraCard3D>
          </Reveal>

          {/* columna derecha: vídeo, beneficios, cifras y llamada a la acción */}
          <div className="flex flex-col gap-4 md:gap-5 lg:col-span-7">
          {/* el vídeo */}
          <Reveal delay={0.08}>
            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              aria-label="Reproducir vídeo de la zona de inversores"
              className={`group relative block aspect-video w-full cursor-pointer overflow-hidden text-left ${tile}`}
            >
              <img
                src={videoThumbnail}
                alt="Miniatura del vídeo de la zona de inversores"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span
                className="absolute inset-0"
                style={{ background: "linear-gradient(180deg, rgba(10,10,12,0.15) 30%, rgba(10,10,12,0.8) 100%)" }}
                aria-hidden="true"
              />
              <span className="absolute inset-0 grid place-items-center">
                <span className="grid h-20 w-20 place-items-center rounded-full bg-white/15 ring-1 ring-white/30 backdrop-blur-md transition duration-300 group-hover:scale-110 group-hover:bg-[var(--color-gold)] group-hover:ring-[var(--color-gold)]">
                  <Play className="h-8 w-8 translate-x-0.5 fill-white text-white" />
                </span>
              </span>
              <span className="absolute inset-x-6 bottom-5 flex items-end justify-between gap-4">
                <span className="font-[var(--font-display)] text-lg font-semibold tracking-tight md:text-xl">
                  {videoTile.title}
                </span>
                <span className="rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold backdrop-blur">
                  {videoTile.label}
                </span>
              </span>
            </button>
          </Reveal>

          {/* los beneficios */}
          <div className="grid gap-4 sm:grid-cols-2 md:gap-5">
            {card.checklist.map((item, i) => {
              const Icon = BENEFIT_ICONS[i];
              return (
                <Reveal key={item.id} delay={0.05 * i} className="h-full">
                  <div className={`flex h-full items-start gap-4 p-6 ${tile}`}>
                    <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-[var(--color-gold-2)] text-black shadow-[0_4px_0_0_rgba(255,255,255,0.18)]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="pt-0.5 text-sm font-medium leading-snug text-white">{item.text}</span>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* las cifras */}
          <div className="grid gap-4 sm:grid-cols-2 md:gap-5">
            {investorZone.stats.map((stat, i) => (
              <Reveal key={stat.label} delay={0.05 * i} className="h-full">
                <div className={`h-full p-7 ${tile}`}>
                  <div className="font-[var(--font-display)] text-4xl font-semibold tracking-tight md:text-5xl">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="mt-2 text-sm text-muted-dark">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* la llamada a la acción */}
          <Reveal delay={0.1} className="flex-1">
            <div className="flex h-full flex-col justify-between gap-6 rounded-[2rem] bg-[var(--color-gold-2)] p-7 text-[var(--color-ink)] md:flex-row md:items-center md:p-9">
              <div className="max-w-md">
                <p className="text-base font-semibold leading-snug md:text-lg">{card.intro}</p>
                <p className="mt-2 text-xs text-black/60">{investorZone.cta.disclaimer}</p>
              </div>
              <div className="flex flex-col items-start gap-2 md:items-end">
                <PillButton href={whatsappUrl} target="_blank">
                  {investorZone.cta.label}
                </PillButton>
                <span className="text-xs text-black/60">{investorZone.cta.caption}</span>
              </div>
            </div>
          </Reveal>
          </div>
        </div>
      </Container>

      <VideoModal open={videoOpen} videoUrl={card.video.url} onClose={() => setVideoOpen(false)} />
    </section>
  );
}
