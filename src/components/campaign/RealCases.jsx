import { ArrowRight, BedDouble, MapPin, Ruler } from "lucide-react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { properties } from "../../data/content";
import { casesSection } from "../../data/campaign";

// Solo se muestran datos de la operación; no la "rentabilidad neta estimada" de
// las fichas de la home (es el margen de la operación, no lo que recibe el inversor).
function capitalOf(property) {
  return property.financials.find((f) => f.label.startsWith("Capital invertido"))?.value;
}

function Stats({ property, large = false }) {
  return (
    <>
      <div className="flex items-center gap-5 text-xs text-white/75">
        <span className="flex items-center gap-1.5">
          <Ruler className="h-3.5 w-3.5" /> {property.sqm} m²
        </span>
        <span className="flex items-center gap-1.5">
          <BedDouble className="h-3.5 w-3.5" /> {property.beds} habitaciones
        </span>
      </div>
      <dl className={`grid grid-cols-2 gap-4 ${large ? "mt-5" : "mt-4"}`}>
        <div>
          <dt className="text-[10px] font-semibold uppercase tracking-wide text-[var(--color-gold-2)]">Capital aportado</dt>
          <dd className={`mt-1 font-[var(--font-display)] font-bold ${large ? "text-3xl" : "text-xl"}`}>{capitalOf(property)}</dd>
        </div>
        <div>
          <dt className="text-[10px] font-semibold uppercase tracking-wide text-[var(--color-gold-2)]">Rendimiento pactado</dt>
          <dd className={`mt-1 font-[var(--font-display)] font-bold ${large ? "text-3xl" : "text-xl"}`}>
            {property.yieldValue.replace("%", " %")} anual
          </dd>
        </div>
      </dl>
    </>
  );
}

function Location({ property }) {
  return (
    <span className="flex items-center gap-1.5 text-sm font-medium text-white">
      <MapPin className="h-4 w-4 text-[var(--color-gold-2)]" />
      {property.location}
    </span>
  );
}

export default function RealCases() {
  const [main, ...others] = properties.properties;

  return (
    <section className="defer-render [--defer-h:900px] py-14 md:py-20">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-[var(--font-display)] text-3xl font-bold tracking-tight text-[var(--color-ink)] md:text-5xl">
            {casesSection.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--color-muted-light)] md:text-lg">{casesSection.intro}</p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:mt-14 md:grid-cols-3 md:gap-5">
          {/* caso principal: la única con fotos reales */}
          <Reveal className="md:col-span-2 md:row-span-2">
            <article className="relative flex h-full min-h-[420px] flex-col justify-between overflow-hidden rounded-[2rem] bg-[var(--color-navy)] p-7 text-white md:p-9">
              <img src={main.image} alt={main.location} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(180deg, rgba(0,20,56,0.25) 0%, rgba(0,20,56,0.35) 40%, rgba(0,20,56,0.92) 100%)" }}
                aria-hidden="true"
              />
              <span className="relative w-fit rounded-full border border-white/25 bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide backdrop-blur">
                {main.tag}
              </span>
              <div className="relative">
                <div className="mb-3">
                  <Location property={main} />
                </div>
                <Stats property={main} large />
                <p className="mt-5 max-w-md text-sm text-white/80">{main.descriptionBullets[1]}</p>
              </div>
            </article>
          </Reveal>

          {others.map((property, i) => (
            <Reveal key={property.id} delay={0.1 + i * 0.08}>
              <article
                className="flex h-full min-h-[200px] flex-col justify-between rounded-[2rem] p-7 text-white"
                style={{ background: `linear-gradient(145deg, hsl(${property.themeColor}) 0%, #0A101D 100%)` }}
              >
                <div className="flex items-center justify-between gap-3">
                  <Location property={property} />
                  <span className="rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide">
                    {property.tag}
                  </span>
                </div>
                <div className="mt-6">
                  <Stats property={property} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <p className="max-w-2xl text-xs leading-relaxed text-[var(--color-muted-light)]">{casesSection.disclaimer}</p>
          <a
            href={casesSection.link.href}
            className="inline-flex flex-none items-center gap-2 text-sm font-semibold text-[var(--color-ink)] underline-offset-4 hover:underline"
          >
            {casesSection.link.label}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </Container>
    </section>
  );
}
