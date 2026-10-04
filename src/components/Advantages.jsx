import { motion } from "framer-motion";
import {
  CalendarCheck,
  Check,
  Hammer,
  Percent,
  Settings,
  ShieldCheck,
  Sofa,
  TrendingUp,
  Wrench,
  X,
} from "lucide-react";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import { advantages } from "../data/content";

const ICONS = {
  shield: ShieldCheck,
  settings: Settings,
  calendar: CalendarCheck,
  percent: Percent,
  hammer: Hammer,
  sofa: Sofa,
  trending: TrendingUp,
  wrench: Wrench,
};

const EASE = [0.16, 1, 0.3, 1];

// "Ventajas exclusivas": tabla comparativa frente al alquiler tradicional.
// Cada fila entra al hacer scroll y su check "salta" justo después.
export default function Advantages() {
  const { columns } = advantages;

  return (
    <section id="ventajas" className="defer-render [--defer-h:1300px] surface-light py-24 md:py-32">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-gold-deep)]">
            {advantages.kicker}
          </span>
          <h2 className="mt-4 font-[var(--font-display)] text-3xl font-semibold tracking-tight md:text-5xl">
            {advantages.title}
          </h2>
        </Reveal>

        <div className="mx-auto mt-14 max-w-5xl md:mt-16">
          <table className="w-full border-separate border-spacing-y-2.5 text-left">
            <thead>
              <tr className="text-xs font-semibold uppercase tracking-[0.14em]">
                <th scope="col" className="px-4 pb-2 font-semibold text-muted-light md:px-6">
                  {columns.feature}
                </th>
                <th scope="col" className="w-24 px-2 pb-2 text-center md:w-56">
                  <span className="inline-block rounded-full bg-[var(--color-gold-2)] px-3 py-1.5 text-[10px] text-black md:text-xs">
                    {columns.us}
                  </span>
                </th>
                <th scope="col" className="w-20 px-2 pb-2 text-center font-semibold text-muted-light md:w-56">
                  <span className="text-[10px] md:text-xs">{columns.traditional}</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {advantages.rows.map((row, i) => {
                const Icon = ICONS[row.icon];
                return (
                  <motion.tr
                    key={row.title}
                    className="group"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "0px 0px -12% 0px" }}
                    transition={{ duration: 0.6, delay: (i % 2) * 0.06, ease: EASE }}
                  >
                    <td className="rounded-l-[1.5rem] border-y border-l border-black/[0.08] bg-white p-4 transition-colors group-hover:bg-[var(--color-paper-soft)] md:px-6 md:py-5">
                      <div className="flex items-start gap-4">
                        <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-black text-white shadow-[0_4px_0_0_var(--color-gold-2)]">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div className="min-w-0">
                          <span className="block font-[var(--font-display)] text-base font-semibold tracking-tight md:text-lg">
                            {row.title}
                          </span>
                          <span className="mt-1 block text-xs leading-relaxed text-muted-light md:text-sm">{row.text}</span>
                        </div>
                      </div>
                    </td>

                    <td className="border-y border-black/[0.08] bg-[var(--color-gold-2)]/[0.18] px-2 text-center transition-colors group-hover:bg-[var(--color-gold-2)]/[0.28]">
                      <motion.span
                        className="inline-grid h-9 w-9 place-items-center rounded-full bg-[var(--color-gold-2)] text-black"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true, margin: "0px 0px -12% 0px" }}
                        transition={{ type: "spring", stiffness: 420, damping: 18, delay: 0.25 }}
                        aria-label="Sí"
                      >
                        <Check className="h-5 w-5" strokeWidth={3} />
                      </motion.span>
                    </td>

                    <td className="rounded-r-[1.5rem] border-y border-r border-black/[0.08] bg-[var(--color-paper-soft)] px-2 text-center">
                      <div className="flex flex-col items-center gap-1.5">
                        <span
                          className="grid h-7 w-7 place-items-center rounded-full bg-black/[0.06] text-black/35"
                          aria-label="No"
                        >
                          <X className="h-4 w-4" />
                        </span>
                        <span className="hidden text-xs text-muted-light md:block">{row.traditional}</span>
                      </div>
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}
