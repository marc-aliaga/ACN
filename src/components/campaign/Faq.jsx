import { Plus } from "lucide-react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { faq } from "../../data/campaign";

export default function Faq() {
  return (
    <section className="defer-render [--defer-h:800px] pb-14 md:pb-20">
      <Container>
        <Reveal>
          <div className="grid gap-10 rounded-[2rem] bg-[var(--color-paper-soft)] p-7 md:grid-cols-[0.75fr_1.25fr] md:gap-14 md:p-12">
            <h2 className="font-[var(--font-display)] text-3xl font-bold leading-tight tracking-tight text-[var(--color-ink)] md:text-4xl">
              {faq.title}
            </h2>

            <div className="divide-y divide-black/10 border-y border-black/10">
              {faq.items.map((item) => (
                <details key={item.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left font-[var(--font-display)] text-base font-bold text-[var(--color-ink)] md:text-lg [&::-webkit-details-marker]:hidden">
                    {item.q}
                    <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-black text-white transition-transform duration-300 group-open:rotate-45">
                      <Plus className="h-4 w-4" />
                    </span>
                  </summary>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--color-muted-light)] md:text-base">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
