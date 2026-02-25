-- ModernPortfolio: profiles, projects, payments + RLS
-- Run this in Supabase SQL Editor. Server uses SUPABASE_SERVICE_ROLE_KEY and enforces auth in app code; RLS blocks anon.

create extension if not exists "uuid-ossp";

-- Profiles: linked to Auth0 by auth0_id (sub claim). Role controls admin vs client.
create table if not exists public.profiles (
  id uuid primary key default uuid_generate_v4(),
  auth0_id text not null unique,
  email text,
  name text,
  role text not null default 'client' check (role in ('admin', 'client')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_profiles_auth0_id on public.profiles(auth0_id);
create index if not exists idx_profiles_role on public.profiles(role);

-- Projects: one per client. Admin creates/edits; clients view their own (enforced in API).
create table if not exists public.projects (
  id uuid primary key default uuid_generate_v4(),
  client_id uuid not null references public.profiles(id) on delete restrict,
  title text not null,
  description text,
  status text not null default 'processing' check (status in ('draft', 'pending_payment', 'processing', 'in_progress', 'complete')),
  total_amount_cents bigint not null default 0,
  currency text not null default 'usd',
  stripe_price_id text,
  stripe_payment_link_url text,
  target_completion_date date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_projects_client_id on public.projects(client_id);
create index if not exists idx_projects_status on public.projects(status);

-- Payments: one row per payment. Sum gives "payments_made" per project.
create table if not exists public.payments (
  id uuid primary key default uuid_generate_v4(),
  project_id uuid not null references public.projects(id) on delete restrict,
  amount_cents bigint not null,
  currency text not null default 'usd',
  stripe_payment_intent_id text unique,
  stripe_session_id text,
  status text not null default 'succeeded' check (status in ('pending', 'succeeded', 'failed', 'refunded')),
  created_at timestamptz not null default now()
);

create index if not exists idx_payments_project_id on public.payments(project_id);
create index if not exists idx_payments_stripe_pi on public.payments(stripe_payment_intent_id);

-- RLS: enable. Server uses service_role key (bypasses RLS); anon has no policies so no access.
alter table public.profiles enable row level security;
alter table public.projects enable row level security;
alter table public.payments enable row level security;

-- Optional: updated_at trigger
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists set_profiles_updated_at on public.profiles;
create trigger set_profiles_updated_at
  before update on public.profiles
  for each row execute function public.set_updated_at();

drop trigger if exists set_projects_updated_at on public.projects;
create trigger set_projects_updated_at
  before update on public.projects
  for each row execute function public.set_updated_at();
