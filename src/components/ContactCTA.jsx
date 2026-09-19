import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Container from "./ui/Container";
import { contactSection } from "../data/content";
import { saveLead } from "../lib/supabase";
import { track } from "../lib/analytics";

const BUBBLES = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  size: Math.round(6 + Math.random() * 16),
  left: Math.round(Math.random() * 100),
  duration: (10 + Math.random() * 12).toFixed(1),
  delay: (Math.random() * 12).toFixed(1),
}));

const INITIAL_FORM = { name: "", email: "", message: "", interests: [] };

export default function ContactCTA() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const bubbles = useMemo(() => BUBBLES, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const toggleInterest = (option) => {
    setForm((prev) => ({
      ...prev,
      interests: prev.interests.includes(option)
        ? prev.interests.filter((o) => o !== option)
        : [...prev.interests, option],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const lines = [
      `Hola, soy ${form.name}.`,
      form.interests.length > 0 ? `Me interesa: ${form.interests.join(", ")}.` : null,
      `Mensaje: ${form.message}`,
      `Email de contacto: ${form.email}`,
    ].filter(Boolean);

    const whatsappUrl = `https://wa.me/${contactSection.whatsappNumber}?text=${encodeURIComponent(
      lines.join("\n")
    )}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    saveLead(form).catch((err) => console.error("No se pudo guardar el lead:", err));
    track("lead_submitted", { interests: form.interests });

    setSubmitted(true);
  };

  return (
    <section id="contacto" className="surface-dark relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {bubbles.map((b) => (
          <span
            key={b.id}
            className="bubble"
            style={{
              width: b.size,
              height: b.size,
              left: `${b.left}%`,
              bottom: "-40px",
              "--bubble-duration": `${b.duration}s`,
              "--bubble-delay": `${b.delay}s`,
            }}
          />
        ))}
      </div>

      <Container className="relative">
        <div className="grid gap-16 md:grid-cols-2 md:items-center md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-[var(--font-display)] text-3xl font-semibold tracking-tight md:text-5xl">
              {contactSection.title}
            </h2>
            <p className="mt-5 max-w-md text-base text-muted-dark md:text-lg">{contactSection.subtitle}</p>

            <div className="mt-8 text-sm text-muted-dark">
              <p>{contactSection.emailIntro}</p>
              <a
                href={`mailto:${contactSection.email}`}
                className="font-[var(--font-display)] text-lg font-medium text-white transition-colors hover:text-[var(--color-gold-2)]"
              >
                {contactSection.email}
              </a>
            </div>
          </motion.div>

          <motion.div
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md md:p-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            {submitted ? (
              <div className="flex min-h-[22rem] flex-col items-center justify-center text-center">
                <CheckCircle2 className="h-10 w-10 text-[var(--color-gold-2)]" />
                <p className="mt-4 max-w-xs text-base text-white">{contactSection.successMessage}</p>
              </div>
            ) : (
              <>
                <h3 className="font-[var(--font-display)] text-xl font-semibold text-white">
                  {contactSection.formTitle}
                </h3>

                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-xs font-medium uppercase tracking-wide text-muted-dark">
                        Nombre
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                        className="w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/40 transition focus:border-[var(--color-gold)] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-xs font-medium uppercase tracking-wide text-muted-dark">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                        className="w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/40 transition focus:border-[var(--color-gold)] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <p className="mb-3 text-xs font-medium uppercase tracking-wide text-muted-dark">¿Qué te interesa?</p>
                    <div className="flex flex-wrap gap-2">
                      {contactSection.interests.map((option) => {
                        const active = form.interests.includes(option);
                        return (
                          <button
                            key={option}
                            type="button"
                            onClick={() => toggleInterest(option)}
                            aria-pressed={active}
                            className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
                              active
                                ? "border-[var(--color-gold)] bg-[var(--color-gold)]/25 text-white"
                                : "border-white/15 bg-white/[0.02] text-muted-dark hover:border-white/30"
                            }`}
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-xs font-medium uppercase tracking-wide text-muted-dark">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Cuéntanos brevemente qué buscas..."
                      className="w-full resize-none rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/40 transition focus:border-[var(--color-gold)] focus:outline-none"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full">
                    {contactSection.submitLabel}
                  </button>
                  <p className="text-center text-[11px] leading-relaxed text-muted-dark">{contactSection.privacyNote}</p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
