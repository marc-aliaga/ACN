import Container from "./ui/Container";
import HoverButton from "./ui/HoverButton";
import { hero, heroMetrics, heroActions } from "../data/content";
import heroBg from "../assets/bg.webp";

export default function Hero() {
  const [titleLine1, titleLine2] = hero.title.split("\n");
  const [subtitleLine1, subtitleLine2] = hero.subtitle.split("\n");

  return (
    <section id="top" className="surface-dark relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-28">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,10,12,0.55) 0%, rgba(10,10,12,0.7) 45%, rgba(10,10,12,0.88) 100%)",
          }}
        />
      </div>

      {/* Bleed suave de la foto hacia el blanco de la siguiente sección, como en estructura.jpg */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-32 md:h-48"
        style={{ background: "linear-gradient(180deg, transparent 0%, var(--color-paper) 100%)" }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="reveal mx-auto max-w-3xl text-center" style={{ "--reveal-delay": "0.05s" }}>
          <h1 className="font-[var(--font-hero-title)] text-5xl sm:text-6xl md:text-7xl font-semibold leading-[1.05] tracking-tight">
            {titleLine1}
            <br />
            {titleLine2}
          </h1>

          <p className="mt-3 font-[var(--font-hero-title)] text-2xl font-medium text-[var(--color-gold-2)] sm:text-3xl md:text-4xl">
            {hero.titleAccent}
          </p>

          <p className="mt-7 mx-auto max-w-md font-[var(--font-sans)] text-base font-light tracking-wide text-muted-dark md:text-lg">
            {subtitleLine1}
            <br />
            {subtitleLine2}
          </p>

          <div className="mt-10 flex justify-center">
            <HoverButton label={heroActions.primary.label} href={heroActions.primary.href} />
          </div>
        </div>

        <div className="mt-12 md:mt-16">
          <div className="flex flex-wrap items-start justify-center gap-x-12 gap-y-10 sm:gap-x-16 md:gap-x-24">
            {heroMetrics.map((m, i) => (
              <div
                key={m.label}
                className="reveal max-w-[12rem] text-center"
                style={{ "--reveal-delay": `${0.3 + i * 0.1}s` }}
              >
                <div className="flex items-baseline justify-center gap-1.5 font-[var(--font-display)] font-semibold tracking-tight text-4xl sm:text-5xl md:text-6xl">
                  <span>{m.value}</span>
                  <span className="text-base md:text-xl font-medium text-muted-dark">{m.unit}</span>
                </div>
                <p className="mt-2 text-xs md:text-sm text-muted-dark">{m.label}</p>
              </div>
            ))}
          </div>
          <p className="reveal mt-8 text-center text-[11px] text-muted-dark/70" style={{ "--reveal-delay": "0.7s" }}>
            Rangos orientativos de nuestro dossier — no garantizan resultados futuros
          </p>
        </div>
      </Container>
    </section>
  );
}
