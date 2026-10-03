const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE;

// supabase-js pesa bastante y solo hace falta al enviar un formulario, así que se
// descarga bajo demanda (y se puede precargar al enfocar el formulario).
let clientPromise = null;

function getClient() {
  if (!url || !anonKey) return Promise.resolve(null);
  if (!clientPromise) {
    clientPromise = import("@supabase/supabase-js").then(({ createClient }) => createClient(url, anonKey));
  }
  return clientPromise;
}

/** Empieza a descargar el cliente sin esperar al envío (p. ej. al enfocar un campo). */
export function prefetchLeads() {
  getClient();
}

export async function saveLead({ name, email, message, interests }) {
  const client = await getClient();
  if (!client) return;

  const params = new URLSearchParams(window.location.search);
  const { error } = await client.from("leads").insert({
    name,
    email,
    message,
    interests,
    page_url: window.location.href,
    referrer: document.referrer || null,
    utm_source: params.get("utm_source"),
    utm_medium: params.get("utm_medium"),
    utm_campaign: params.get("utm_campaign"),
  });

  if (error) throw error;
}

/** Candidatura del formulario "Forma parte del equipo" (tabla applications). */
export async function saveApplication(application) {
  const client = await getClient();
  if (!client) throw new Error("Supabase no está configurado");

  const params = new URLSearchParams(window.location.search);
  const { error } = await client.from("applications").insert({
    ...application,
    page_url: window.location.href,
    utm_source: params.get("utm_source"),
    utm_medium: params.get("utm_medium"),
    utm_campaign: params.get("utm_campaign"),
  });

  if (error) throw error;
}
