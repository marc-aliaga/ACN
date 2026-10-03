-- Ejecutar en Supabase: SQL Editor > New query > pegar y "Run".
-- Tabla donde cae cada candidatura del formulario "Forma parte del equipo".

create table if not exists public.applications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null check (char_length(name) between 1 and 200),
  email text not null check (char_length(email) between 3 and 320),
  phone text check (char_length(phone) <= 40),
  city text check (char_length(city) <= 120),
  role text check (char_length(role) <= 120),
  experience_years text check (char_length(experience_years) <= 60),
  savings text check (char_length(savings) <= 60),
  experience text not null check (char_length(experience) between 1 and 3000),
  linkedin text check (char_length(linkedin) <= 300),
  page_url text,
  utm_source text,
  utm_medium text,
  utm_campaign text
);

-- La web usa la clave pública (anon): solo puede INSERTAR, nunca leer candidaturas.
alter table public.applications enable row level security;

create policy "anon puede insertar candidaturas"
  on public.applications for insert
  to anon
  with check (true);
