import { useState } from "react";
import { Hammer, Search, ShieldCheck, Users } from "lucide-react";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import { whatWeDo } from "../data/content";

const PILLAR_ICONS = [Search, Hammer, Users, ShieldCheck];

// "Qué hacemos": lo que hace el equipo en cada operación, junto a la foto del CEO.
export default function WhatWeDo() {
  const { ceo } = whatWeDo;
  // Si la foto aún no está subida (ver content.js), se muestran las iniciales.
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <section id="que-hacemos" className="defer-render [--defer-h:900px] surface-light py-24 md:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          <Reveal>
            <figure className="relative mx-auto max-w-sm lg:max-w-none">
              <div
                className="absolute -inset-6 -z-10 rounded-[3rem] opacity-60 blur-3xl"
                style={{ background: "radial-gradient(circle at 30% 30%, rgba(177,135,48,0.35), rgba(0,117,134,0.18) 55%, transparent 75%)" }}
                aria-hidden="true"
              />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-[var(--color-navy)] shadow-[0_40px_80px_-40px_rgba(0,34,85,0.55)]">
                {photoFailed ? (
                  <div
                    className="grid h-full w-full place-items-center"
                    style={{ background: "linear-gradient(150deg, var(--color-navy), #00122e 70%)" }}
                  >
                    <span className="font-[var(--font-hero-title)] text-8xl font-semibold text-[var(--color-gold-2)]">
                      {ceo.initials}
                    </span>
                  </div>
                ) : (
                  <img
                    src={ceo.image}
                    alt={`${ceo.name}, ${ceo.role}`}
                    loading="lazy"
                    onError={() => setPhotoFailed(true)}
                    className="h-full w-full object-cover"
                  />
                )}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/75 to-transparent" aria-hidden="true" />
                <figcaption className="absolute inset-x-6 bottom-6 text-white">
                  <span className="block font-[var(--font-display)] text-2xl font-semibold tracking-tight">{ceo.name}</span>
                  <span className="mt-1 block text-sm font-medium uppercase tracking-[0.18em] text-[var(--color-gold-2)]">
                    {ceo.role}
                  </span>
                </figcaption>
              </div>
              <p className="mt-5 text-center text-sm text-muted-light lg:text-left">{ceo.note}</p>
            </figure>
          </Reveal>

          <div>
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-gold-deep)]">
                {whatWeDo.kicker}
              </span>
              <h2 className="mt-4 font-[var(--font-display)] text-3xl font-semibold tracking-tight md:text-5xl">
                {whatWeDo.title}
              </h2>
              <p className="mt-5 text-base text-muted-light md:text-lg">{whatWeDo.intro}</p>
            </Reveal>

            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {whatWeDo.pillars.map((pillar, i) => {
                const Icon = PILLAR_ICONS[i];
                return (
                  <li key={pillar.title}>
                    <Reveal delay={i * 0.06} className="h-full">
                      <div className="h-full rounded-[1.75rem] border border-black/[0.08] bg-white p-6 shadow-[0_24px_60px_-44px_rgba(0,34,85,0.4)]">
                        <span className="grid h-11 w-11 place-items-center rounded-xl bg-black text-white shadow-[0_4px_0_0_var(--color-gold-2)]">
                          <Icon className="h-[18px] w-[18px]" />
                        </span>
                        <h3 className="mt-5 font-[var(--font-display)] text-lg font-semibold tracking-tight">{pillar.title}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted-light">{pillar.text}</p>
                      </div>
                    </Reveal>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
