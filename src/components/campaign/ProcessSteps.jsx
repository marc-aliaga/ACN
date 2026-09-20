import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { processSection } from "../../data/campaign";

// Bento de 4 columnas: los seis pasos con tamaños y colores alternos.
const TILES = [
  { span: "md:col-span-2", style: "bg-[var(--color-paper-soft)] text-[var(--color-ink)]", muted: "text-[var(--color-muted-light)]", num: "rgba(177,135,48,0.8)" },
  { span: "", style: "bg-white border border-black/[0.08] text-[var(--color-ink)]", muted: "text-[var(--color-muted-light)]", num: "rgba(177,135,48,0.8)" },
  { span: "", style: "bg-[var(--color-navy)] text-white", muted: "text-white/65", num: "rgba(204,177,120,0.9)" },
  { span: "", style: "bg-[var(--color-gold-2)]/45 text-[var(--color-ink)]", muted: "text-black/65", num: "rgba(124,95,34,0.85)" },
  { span: "", style: "bg-[var(--color-paper-soft)] text-[var(--color-ink)]", muted: "text-[var(--color-muted-light)]", num: "rgba(177,135,48,0.8)" },
  { span: "md:col-span-2", style: "bg-[var(--color-teal)] text-white", muted: "text-white/80", num: "rgba(255,255,255,0.75)" },
];

export default function ProcessSteps() {
  return (
    <section className="defer-render [--defer-h:760px] py-14 md:py-20">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-[var(--font-display)] text-3xl font-bold tracking-tight text-[var(--color-ink)] md:text-5xl">
            {processSection.title}
          </h2>
        </Reveal>

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 md:mt-14 md:grid-cols-4 md:gap-5">
          {processSection.steps.map((step, i) => {
            const t = TILES[i];
            return (
              <li key={step.number} className={`${t.span} sm:col-span-1`}>
                <Reveal delay={(i % 4) * 0.06} className="h-full">
                  <div className={`flex h-full min-h-[210px] flex-col justify-between rounded-[2rem] p-7 ${t.style}`}>
                    <span
                      aria-hidden="true"
                      className="font-[var(--font-display)] text-6xl font-bold leading-none text-transparent"
                      style={{ WebkitTextStroke: `1.5px ${t.num}` }}
                    >
                      {step.number}
                    </span>
                    <div className="mt-8">
                      <h3 className="font-[var(--font-display)] text-xl font-bold tracking-tight">{step.title}</h3>
                      <p className={`mt-2 max-w-xs text-sm leading-relaxed ${t.muted}`}>{step.text}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
