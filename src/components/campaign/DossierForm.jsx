import { useState } from "react";
import { CheckCircle2, Download, MessageCircle } from "lucide-react";
import { DOSSIER_URL } from "../../data/content";
import { dossierForm, whatsapp } from "../../data/campaign";
import { prefetchLeads, saveLead } from "../../lib/supabase";
import { track } from "../../lib/analytics";

const INITIAL_FORM = { name: "", email: "", interests: [], consent: false };

const inputClass =
  "w-full rounded-2xl border border-black/10 bg-white px-4 py-3.5 text-sm text-[var(--color-ink)] placeholder:text-black/35 transition focus:border-[var(--color-gold)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/20";
const labelClass = "mb-2 block text-xs font-semibold uppercase tracking-wide text-[var(--color-muted-light)]";
const primaryButton =
  "inline-flex w-full items-center justify-center gap-2 rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-gold-deep)]";

// Formulario de captación: guarda el lead (Supabase) y abre el dossier al
// momento. El PDF sigue siendo público en DOSSIER_URL, así que no se bloquea
// si el guardado falla: nunca hay que perder a alguien interesado por un error.
export default function DossierForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

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

    // Debe ir dentro del gesto del usuario (antes de cualquier await) para que
    // el navegador no bloquee la pestaña nueva.
    window.open(DOSSIER_URL, "_blank", "noopener,noreferrer");

    const interests = [dossierForm.leadInterest, ...form.interests];
    saveLead({ name: form.name, email: form.email, message: dossierForm.leadMessage, interests }).catch((err) =>
      console.error("No se pudo guardar el lead:", err)
    );
    track("dossier_lead_submitted", { interests: form.interests });

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex min-h-[22rem] flex-col items-center justify-center text-center">
        <CheckCircle2 className="h-10 w-10 text-[var(--color-gold)]" />
        <h3 className="mt-4 font-[var(--font-display)] text-2xl font-semibold text-[var(--color-ink)]">
          {dossierForm.success.title}
        </h3>
        <p className="mt-3 max-w-xs text-sm text-[var(--color-muted-light)]">{dossierForm.success.text}</p>
        <a
          href={DOSSIER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`${primaryButton} mt-6 max-w-xs`}
        >
          <Download className="h-4 w-4" />
          {dossierForm.success.button}
        </a>
        <a
          href={whatsapp.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-muted-light)] underline-offset-4 hover:text-[var(--color-ink)] hover:underline"
        >
          <MessageCircle className="h-4 w-4" />
          {dossierForm.success.contact}
        </a>
      </div>
    );
  }

  return (
    <>
      <h2 className="font-[var(--font-display)] text-2xl font-bold tracking-tight text-[var(--color-ink)] md:text-3xl">
        {dossierForm.title}
      </h2>
      <p className="mt-1.5 text-sm text-[var(--color-muted-light)]">{dossierForm.subtitle}</p>

      <form onSubmit={handleSubmit} onFocus={prefetchLeads} className="mt-6 space-y-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="dossier-name" className={labelClass}>
              {dossierForm.fields.name}
            </label>
            <input
              id="dossier-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Tu nombre"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="dossier-email" className={labelClass}>
              {dossierForm.fields.email}
            </label>
            <input
              id="dossier-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              placeholder="tu@email.com"
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <p className={labelClass}>{dossierForm.interestsLabel}</p>
          <div className="flex flex-wrap gap-2">
            {dossierForm.interestOptions.map((option) => {
              const active = form.interests.includes(option);
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => toggleInterest(option)}
                  aria-pressed={active}
                  className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
                    active
                      ? "border-black bg-black text-white"
                      : "border-black/15 bg-white text-[var(--color-muted-light)] hover:border-black/40"
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>

        <label className="flex cursor-pointer items-start gap-3 text-xs leading-relaxed text-[var(--color-muted-light)]">
          <input
            type="checkbox"
            required
            checked={form.consent}
            onChange={(e) => setForm((prev) => ({ ...prev, consent: e.target.checked }))}
            className="mt-0.5 h-4 w-4 flex-none accent-black"
          />
          <span>{dossierForm.consent}</span>
        </label>

        <button type="submit" className={primaryButton}>
          <Download className="h-4 w-4" />
          {dossierForm.submit}
        </button>
        <p className="text-center text-[11px] leading-relaxed text-[var(--color-muted-light)]">{dossierForm.risk}</p>
      </form>
    </>
  );
}
