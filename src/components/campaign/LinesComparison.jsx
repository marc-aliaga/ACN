import { BadgeCheck, Download, Hammer, KeyRound } from "lucide-react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { lines } from "../../data/campaign";

// Dos tarjetas de "plan", en el estilo del ejemplo de packs: una en color de
// marca, otra oscura, con el precio (aquí, la entrada) en grande, filas con
// icono y un botón con sombra dura.
const THEMES = {
  "rent-to-rent": {
    Icon: KeyRound,
    card: "bg-[var(--color-gold-2)] text-[var(--color-ink)] border border-black/5 shadow-sm",
    muted: "text-black/70",
    divider: "border-black/15",
    icon: "text-black",
    value: "text-black/80",
    button:
      "border-black bg-[#f3f1f6] text-black shadow-[5px_5px_0_0_#000] hover:bg-white",
  },
  flip: {
    Icon: Hammer,
    card: "bg-[var(--color-navy)] text-white shadow-2xl ring-1 ring-white/10",
    muted: "text-white/60",
    divider: "border-white/15",
    icon: "text-[var(--color-gold-2)]",
    value: "text-white/75",
    button:
      "border-[var(--color-gold-2)] bg-white text-black shadow-[5px_5px_0_0_var(--color-gold-2)] hover:bg-[#f3f1f6]",
  },
};

export default function LinesComparison() {
  return (
    <section className="defer-render [--defer-h:900px] py-14 md:py-20">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-[var(--font-display)] text-3xl font-bold tracking-tight text-[var(--color-ink)] md:text-5xl">
            {lines.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--color-muted-light)] md:text-lg">{lines.intro}</p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:mt-14 md:grid-cols-2 md:gap-6">
          {lines.cards.map((card, i) => {
            const t = THEMES[card.id];
            const Icon = t.Icon;
            return (
              <Reveal key={card.id} delay={i * 0.1} className="h-full">
                <article className={`flex h-full flex-col rounded-[2rem] p-7 md:p-10 ${t.card}`}>
                  <div>
                    <h3 className="flex items-center gap-2.5 font-[var(--font-display)] text-2xl font-bold tracking-tight">
                      <Icon className="h-7 w-7" strokeWidth={1.6} />
                      {card.name}
                    </h3>
                    <p className={`mt-2 text-sm ${t.muted}`}>{card.summary}</p>
                  </div>

                  <div className="mt-7">
                    <span className="block font-[var(--font-display)] text-4xl font-bold tracking-tight md:text-5xl">
                      {card.price}
                    </span>
                    <span className={`mt-1 block text-base font-medium ${t.muted}`}>{card.priceNote}</span>
                  </div>

                  <ul className={`mt-8 space-y-4 border-t pt-7 ${t.divider}`}>
                    {card.rows.map((row) => (
                      <li key={row.label} className="flex items-start justify-between gap-6">
                        <span className="flex items-center gap-3 text-sm font-medium">
                          <BadgeCheck className={`h-5 w-5 flex-none ${t.icon}`} strokeWidth={1.8} />
                          {row.label}
                        </span>
                        <span className={`max-w-[52%] text-right text-sm font-semibold ${t.value}`}>{row.value}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#dossier"
                    className={`mt-9 inline-flex h-12 w-full items-center justify-center gap-2 self-start rounded-md border-2 px-6 text-sm font-semibold transition-all duration-100 active:translate-x-[3px] active:translate-y-[3px] active:shadow-none sm:w-auto ${t.button}`}
                  >
                    <Download className="h-5 w-5" />
                    {lines.cta}
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>

        <p className="mt-6 text-center text-xs text-[var(--color-muted-light)]">{lines.note}</p>
      </Container>
    </section>
  );
}
