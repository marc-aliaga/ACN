import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Container from "./ui/Container";
import CountUp from "./ui/CountUp";
import { properties } from "../data/content";

export default function PortfolioMetrics() {
  return (
    <section id="metricas" className="surface-light pb-24 md:pb-32">
      <Container>
        {properties.cities && properties.cities.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <span className="text-xs font-semibold uppercase tracking-wide text-muted-light">Operamos en</span>
            {properties.cities.map((city) => (
              <span
                key={city}
                className="inline-flex items-center gap-1.5 rounded-full border border-black/[0.08] bg-[var(--color-paper-soft)] px-3.5 py-1.5 text-xs font-medium text-[var(--color-ink)] md:text-sm"
              >
                <MapPin className="h-3.5 w-3.5 text-[var(--color-gold)]" /> {city}
              </span>
            ))}
          </div>
        )}

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6 text-center">
          {properties.metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              className="border-t border-black/[0.08] pt-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="font-[var(--font-display)] text-4xl md:text-5xl font-semibold tracking-tight">
                <CountUp value={metric.value} prefix={metric.prefix} suffix={metric.suffix} />
              </div>
              <p className="mt-3 text-sm md:text-base text-muted-light">{metric.label}</p>
            </motion.div>
          ))}
        </div>

        {properties.metricsDisclaimer && (
          <p className="mt-6 text-center text-[11px] text-muted-light/70">{properties.metricsDisclaimer}</p>
        )}
      </Container>
    </section>
  );
}
