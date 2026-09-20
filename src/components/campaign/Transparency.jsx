import { FileCheck2, Scale, ShieldCheck } from "lucide-react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { transparency } from "../../data/campaign";

const ICONS = [FileCheck2, Scale, ShieldCheck];

// El aviso de riesgo es la tesela oscura del centro: no queda enterrado.
const STYLES = [
  { tile: "bg-[var(--color-paper-soft)] text-[var(--color-ink)]", muted: "text-[var(--color-muted-light)]", icon: "bg-black text-white shadow-[0_5px_0_0_var(--color-gold-2)]" },
  { tile: "bg-[var(--color-navy)] text-white", muted: "text-white/70", icon: "bg-[var(--color-gold-2)] text-black shadow-[0_5px_0_0_rgba(255,255,255,0.25)]" },
  { tile: "bg-[var(--color-paper-soft)] text-[var(--color-ink)]", muted: "text-[var(--color-muted-light)]", icon: "bg-black text-white shadow-[0_5px_0_0_var(--color-gold-2)]" },
];

export default function Transparency() {
  return (
    <section id="transparencia" className="defer-render [--defer-h:520px] scroll-mt-4 py-14 md:py-20">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-[var(--font-display)] text-3xl font-bold tracking-tight text-[var(--color-ink)] md:text-5xl">
            {transparency.title}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 md:mt-14 md:grid-cols-3 md:gap-5">
          {transparency.items.map((item, i) => {
            const Icon = ICONS[i];
            const s = STYLES[i];
            return (
              <Reveal key={item.title} delay={i * 0.08} className="h-full">
                <div className={`h-full rounded-[2rem] p-7 md:p-8 ${s.tile}`}>
                  <span className={`grid h-12 w-12 place-items-center rounded-xl ${s.icon}`}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-7 font-[var(--font-display)] text-xl font-bold tracking-tight">{item.title}</h3>
                  <p className={`mt-3 text-sm leading-relaxed ${s.muted}`}>{item.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
