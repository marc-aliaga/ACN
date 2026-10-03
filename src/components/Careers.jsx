import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import { careers, contactSection } from "../data/content";
import { prefetchLeads, saveApplication } from "../lib/supabase";
import { track } from "../lib/analytics";

const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  city: "",
  role: "",
  experience_years: "",
  savings: "",
  experience: "",
  linkedin: "",
  consent: false,
};

const inputClass =
  "w-full rounded-2xl border border-black/10 bg-white px-4 py-3.5 text-sm text-[var(--color-ink)] placeholder:text-black/35 transition focus:border-[var(--color-gold)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/20";
const labelClass = "mb-2 block text-xs font-semibold uppercase tracking-wide text-[var(--color-muted-light)]";

function Field({ id, label, children, className = "" }) {
  return (
    <div className={className}>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      {children}
    </div>
  );
}

function Select({ id, name, value, onChange, options, required }) {
  return (
    <select id={id} name={name} value={value} onChange={onChange} required={required} className={`${inputClass} appearance-none`}>
      <option value="" disabled>
        Selecciona…
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

// "Forma parte del equipo": candidaturas que se guardan en Supabase (tabla applications).
// A diferencia del formulario del dossier, aquí sí esperamos al guardado: si falla,
// la persona tiene que saberlo para no perder su candidatura.
export default function Careers() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const { fields } = careers;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    const { consent: _consent, ...application } = form;
    try {
      await saveApplication(application);
      track("application_submitted", { role: form.role, experience_years: form.experience_years });
      setStatus("sent");
    } catch (err) {
      console.error("No se pudo guardar la candidatura:", err);
      setStatus("error");
    }
  };

  const whatsappHref = `https://wa.me/${contactSection.whatsappNumber}?text=${encodeURIComponent(
    `Hola, soy ${form.name || "…"} y me gustaría formar parte del equipo de Alquila con nosotros.`
  )}`;

  return (
    <section id="trabaja-con-nosotros" className="defer-render [--defer-h:1100px] surface-light border-t border-black/[0.06] py-24 md:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal className="lg:sticky lg:top-10 lg:self-start">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-gold-deep)]">
              {careers.kicker}
            </span>
            <h2 className="mt-4 font-[var(--font-display)] text-3xl font-semibold tracking-tight md:text-5xl">
              {careers.title}
            </h2>
            <p className="mt-5 text-base text-muted-light md:text-lg">{careers.intro}</p>
            <ul className="mt-8 space-y-3">
              {careers.perks.map((perk) => (
                <li key={perk} className="flex items-start gap-3 text-sm text-[var(--color-ink)] md:text-base">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-[var(--color-gold)]" />
                  {perk}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-[2rem] bg-[var(--color-paper-soft)] p-7 md:p-9">
              {status === "sent" ? (
                <div className="flex min-h-[26rem] flex-col items-center justify-center text-center">
                  <CheckCircle2 className="h-10 w-10 text-[var(--color-gold)]" />
                  <h3 className="mt-4 font-[var(--font-display)] text-2xl font-semibold">{careers.success.title}</h3>
                  <p className="mt-3 max-w-sm text-sm text-muted-light">{careers.success.text}</p>
                </div>
              ) : (
                <>
                  <h3 className="font-[var(--font-display)] text-2xl font-bold tracking-tight">{careers.formTitle}</h3>
                  <form onSubmit={handleSubmit} onFocus={prefetchLeads} className="mt-6 space-y-5">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field id="job-name" label={fields.name}>
                        <input id="job-name" name="name" required maxLength={200} autoComplete="name" value={form.name} onChange={handleChange} placeholder="Tu nombre" className={inputClass} />
                      </Field>
                      <Field id="job-email" label={fields.email}>
                        <input id="job-email" name="email" type="email" required autoComplete="email" value={form.email} onChange={handleChange} placeholder="tu@email.com" className={inputClass} />
                      </Field>
                      <Field id="job-phone" label={fields.phone}>
                        <input id="job-phone" name="phone" type="tel" required maxLength={40} autoComplete="tel" value={form.phone} onChange={handleChange} placeholder="+34 600 000 000" className={inputClass} />
                      </Field>
                      <Field id="job-city" label={fields.city}>
                        <input id="job-city" name="city" required maxLength={120} autoComplete="address-level2" value={form.city} onChange={handleChange} placeholder="Barcelona" className={inputClass} />
                      </Field>
                      <Field id="job-role" label={fields.role}>
                        <Select id="job-role" name="role" required value={form.role} onChange={handleChange} options={careers.roles} />
                      </Field>
                      <Field id="job-years" label={fields.experienceYears}>
                        <Select id="job-years" name="experience_years" required value={form.experience_years} onChange={handleChange} options={careers.experienceOptions} />
                      </Field>
                    </div>

                    <Field id="job-savings" label={fields.savings}>
                      <Select id="job-savings" name="savings" required value={form.savings} onChange={handleChange} options={careers.savingsOptions} />
                      <p className="mt-2 text-xs text-muted-light">{careers.savingsHint}</p>
                    </Field>

                    <Field id="job-experience" label={fields.experience}>
                      <textarea id="job-experience" name="experience" required rows={4} maxLength={3000} value={form.experience} onChange={handleChange} placeholder={careers.experiencePlaceholder} className={`${inputClass} resize-y`} />
                    </Field>

                    <Field id="job-linkedin" label={fields.linkedin}>
                      <input id="job-linkedin" name="linkedin" type="url" maxLength={300} value={form.linkedin} onChange={handleChange} placeholder="https://linkedin.com/in/…" className={inputClass} />
                    </Field>

                    <label className="flex cursor-pointer items-start gap-3 text-xs leading-relaxed text-muted-light">
                      <input
                        type="checkbox"
                        required
                        checked={form.consent}
                        onChange={(e) => setForm((prev) => ({ ...prev, consent: e.target.checked }))}
                        className="mt-0.5 h-4 w-4 flex-none accent-black"
                      />
                      <span>{careers.consent}</span>
                    </label>

                    {status === "error" && (
                      <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">
                        {careers.error}{" "}
                        <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="font-semibold underline">
                          WhatsApp
                        </a>
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-gold-deep)] disabled:opacity-60"
                    >
                      <Send className="h-4 w-4" />
                      {status === "sending" ? "Enviando…" : careers.submit}
                    </button>
                  </form>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
