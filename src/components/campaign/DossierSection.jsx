import { ArrowLeftRight, ClipboardCheck, FileText, Handshake, KeyRound, ListChecks } from "lucide-react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import DossierCard3D from "./DossierCard3D";
import DossierForm from "./DossierForm";
import { dossierContents } from "../../data/campaign";

const ITEM_ICONS = [Handshake, KeyRound, ArrowLeftRight, ListChecks, FileText, ClipboardCheck];

// Sección principal de la landing (bento): la tarjeta 3D del dossier, el
// formulario de descarga y lo que hay dentro del documento.
export default function DossierSection() {
  return (
    <section id="dossier" className="scroll-mt-4 py-14 md:py-20">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-[var(--font-display)] text-3xl font-bold tracking-tight text-[var(--color-ink)] md:text-5xl">
            {dossierContents.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--color-muted-light)] md:text-lg">
            {dossierContents.intro}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:mt-14 md:gap-5 lg:grid-cols-12">
          <Reveal className="lg:col-span-5 lg:row-span-2">
            <DossierCard3D />
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-7">
            <div id="dossier-form" className="h-full scroll-mt-6 rounded-[2rem] bg-[var(--color-paper-soft)] p-7 md:p-9">
              <DossierForm />
            </div>
          </Reveal>

          <Reveal delay={0.16} className="lg:col-span-7">
            <div className="h-full rounded-[2rem] border border-black/[0.08] bg-white p-7 shadow-[0_24px_60px_-40px_rgba(0,34,85,0.35)] md:p-9">
              <h3 className="font-[var(--font-display)] text-xl font-bold tracking-tight text-[var(--color-ink)]">
                {dossierContents.contentsTitle}
              </h3>
              <ul className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2">
                {dossierContents.items.map((item, i) => {
                  const Icon = ITEM_ICONS[i];
                  return (
                    <li key={item.title} className="flex items-start gap-4">
                      <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-black text-white shadow-[0_4px_0_0_var(--color-gold-2)]">
                        <Icon className="h-[18px] w-[18px]" />
                      </span>
                      <span>
                        <span className="block text-sm font-bold text-[var(--color-ink)]">{item.title}</span>
                        <span className="mt-1 block text-sm leading-relaxed text-[var(--color-muted-light)]">
                          {item.text}
                        </span>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
