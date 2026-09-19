import { useEffect, useState } from "react";
import { OPEN_COOKIE_SETTINGS, analyticsEnabled, denyConsent, getConsent, grantConsent, resetConsent } from "../lib/analytics";
import { cookieBanner } from "../data/content";

export default function CookieBanner() {
  const [visible, setVisible] = useState(() => analyticsEnabled && getConsent() === null);

  useEffect(() => {
    const open = () => {
      resetConsent();
      setVisible(true);
    };
    window.addEventListener(OPEN_COOKIE_SETTINGS, open);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS, open);
  }, []);

  if (!visible) return null;

  const choose = (accepted) => {
    if (accepted) grantConsent();
    else denyConsent();
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-label={cookieBanner.title}
      className="fixed inset-x-4 bottom-4 z-40 mx-auto max-w-2xl rounded-2xl border border-black/[0.08] bg-[var(--color-paper)] p-5 text-[var(--color-ink)] shadow-2xl md:bottom-6"
    >
      <p className="font-[var(--font-display)] text-base font-semibold">{cookieBanner.title}</p>
      <p className="mt-1 text-sm leading-relaxed text-muted-light">{cookieBanner.text}</p>
      <div className="mt-4 flex flex-wrap justify-end gap-2.5">
        <button
          type="button"
          onClick={() => choose(false)}
          className="rounded-full border border-black/15 px-5 py-2 text-sm font-medium transition-colors hover:bg-black/[0.04]"
        >
          {cookieBanner.reject}
        </button>
        <button
          type="button"
          onClick={() => choose(true)}
          className="rounded-full bg-[var(--color-ink)] px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--color-gold-deep)]"
        >
          {cookieBanner.accept}
        </button>
      </div>
    </div>
  );
}
