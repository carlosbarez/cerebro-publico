-- Registro de usuarios, cartera y guardados (plan 2026-08-30).
-- posiciones: una fila por (usuario, simbolo). simbolo en formato Stooq (aapl.us, san.mc...).
create table posiciones (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users on delete cascade,
  simbolo text not null check (simbolo ~ '^[a-z0-9.\\-^=]{1,15}$'),
  acciones numeric not null check (acciones > 0),
  precio_medio numeric not null check (precio_medio >= 0),
  creado timestamptz not null default now(),
  unique (user_id, simbolo)
);
alter table posiciones enable row level security;
create policy "posiciones_propias" on posiciones
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- favoritos: articulos guardados. slug = ruta sin barra inicial ("sintesis/evaluar-una-cartera").
create table favoritos (
  user_id uuid not null references auth.users on delete cascade,
  slug text not null,
  titulo text not null,
  creado timestamptz not null default now(),
  primary key (user_id, slug)
);
alter table favoritos enable row level security;
create policy "favoritos_propios" on favoritos
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- precios_cache: la escribe y la lee SOLO la edge function (service role). RLS sin politicas =
-- la anon key no llega a esta tabla.
create table precios_cache (
  simbolo text primary key,
  precio numeric not null,
  fecha date not null,
  actualizado timestamptz not null default now()
);
alter table precios_cache enable row level security;
