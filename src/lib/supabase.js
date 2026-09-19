import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE;

const client = url && anonKey ? createClient(url, anonKey) : null;

export async function saveLead({ name, email, message, interests }) {
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
