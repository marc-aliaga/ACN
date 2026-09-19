-- Ejecutar en Supabase: SQL Editor > New query > pegar y "Run".
-- Tabla donde cae cada envío del formulario de contacto.

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null check (char_length(name) between 1 and 200),
  email text not null check (char_length(email) between 3 and 320),
  message text not null check (char_length(message) between 1 and 2000),
  interests text[] not null default '{}',
  page_url text,
  referrer text,
  utm_source text,
  utm_medium text,
  utm_campaign text
);

-- La web usa la clave pública (anon): solo puede INSERTAR, nunca leer leads.
-- Tú los ves en Table Editor (o con la service role) desde el panel de Supabase.
alter table public.leads enable row level security;

create policy "anon puede insertar leads"
  on public.leads for insert
  to anon
  with check (true);
