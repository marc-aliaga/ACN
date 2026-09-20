import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import PillButton from "../ui/PillButton";
import { finalCta, whatsapp } from "../../data/campaign";

export default function FinalCta() {
  return (
    <section className="defer-render [--defer-h:520px] pb-14 md:pb-20">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-[var(--color-navy)] px-7 pb-32 pt-16 text-center text-white md:px-12 md:pb-36 md:pt-20">
            <h2 className="mx-auto max-w-2xl font-[var(--font-display)] text-3xl font-bold tracking-tight md:text-5xl">
              {finalCta.title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">{finalCta.subtitle}</p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <PillButton href={finalCta.primary.href} variant="light">
                {finalCta.primary.label}
              </PillButton>
              <PillButton href={whatsapp.href} target="_blank" variant="outlineLight">
                {finalCta.secondary.label}
              </PillButton>
            </div>

            {/* la ola del logo, al pie de la tesela */}
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="absolute inset-x-0 bottom-0 h-24 w-full md:h-28"
              aria-hidden="true"
            >
              <path d="M0 60 C200 20 400 100 600 60 S1000 20 1200 60 V120 H0Z" fill="#7C5F22" opacity="0.9" />
              <path d="M0 78 C200 40 400 116 600 78 S1000 40 1200 78 V120 H0Z" fill="#B18730" />
              <path d="M0 96 C200 68 400 120 600 96 S1000 68 1200 96 V120 H0Z" fill="#CCB178" />
            </svg>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
