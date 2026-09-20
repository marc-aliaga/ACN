import { APPLY_URL, DOSSIER_URL } from "../data/content";

const KEY = import.meta.env.VITE_POSTHOG_PROJECT;
const HOST = import.meta.env.VITE_POSTHOG_HOST || "https://eu.i.posthog.com";
const CONSENT_KEY = "acn-cookie-consent";

export const analyticsEnabled = Boolean(KEY);
export const OPEN_COOKIE_SETTINGS = "acn:open-cookie-settings";

export function getConsent() {
  try {
    return localStorage.getItem(CONSENT_KEY);
  } catch {
    return null;
  }
}

function storeConsent(value) {
  try {
    if (value) localStorage.setItem(CONSENT_KEY, value);
    else localStorage.removeItem(CONSENT_KEY);
  } catch {
    // localStorage bloqueado: el banner reaparecerá en la siguiente visita
  }
}

let loading = null;

// posthog-js pesa bastante: solo se descarga si el usuario acepta las cookies.
function load() {
  if (!loading) {
    loading = import("posthog-js").then(({ default: posthog }) => {
      posthog.init(KEY, { api_host: HOST, person_profiles: "identified_only", capture_pageview: false });
      return posthog;
    });
  }
  return loading;
}

export function track(event, props) {
  if (!analyticsEnabled || getConsent() !== "granted") return;
  load().then((posthog) => {
    posthog.opt_in_capturing();
    posthog.capture(event, props);
  });
}

export function grantConsent() {
  storeConsent("granted");
  track("$pageview");
}

export function denyConsent() {
  storeConsent("denied");
  if (loading) loading.then((posthog) => posthog.opt_out_capturing());
}

export function resetConsent() {
  storeConsent(null);
  if (loading) loading.then((posthog) => posthog.opt_out_capturing());
}

function trackLinkClicks(e) {
  const link = e.target.closest?.("a[href]");
  if (!link) return;
  const href = link.getAttribute("href");
  if (href === APPLY_URL) track("cta_agendar_click");
  else if (href === DOSSIER_URL) track("dossier_download");
  else if (href.startsWith("mailto:")) track("email_click");
  else if (href.startsWith("https://wa.me/")) track("whatsapp_click");
}

export function initAnalytics() {
  if (!analyticsEnabled) return;
  document.addEventListener("click", trackLinkClicks);
  if (getConsent() === "granted") track("$pageview");
}
