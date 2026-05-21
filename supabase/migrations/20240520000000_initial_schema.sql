-- SimpleSales initial schema
-- Users are managed by Supabase Auth (auth.users)

create type lead_status as enum ('new', 'contacted', 'replied');
create type message_direction as enum ('inbound', 'outbound');

create table public.leads (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  name text not null,
  email text not null,
  last_message text,
  status lead_status not null default 'new',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.messages (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid not null references public.leads (id) on delete cascade,
  user_id uuid not null references auth.users (id) on delete cascade,
  content text not null,
  direction message_direction not null default 'inbound',
  created_at timestamptz not null default now()
);

create index leads_user_id_idx on public.leads (user_id);
create index messages_lead_id_idx on public.messages (lead_id);
create index messages_user_id_idx on public.messages (user_id);

alter table public.leads enable row level security;
alter table public.messages enable row level security;

create policy "Users can view own leads"
  on public.leads for select
  using (auth.uid() = user_id);

create policy "Users can insert own leads"
  on public.leads for insert
  with check (auth.uid() = user_id);

create policy "Users can update own leads"
  on public.leads for update
  using (auth.uid() = user_id);

create policy "Users can delete own leads"
  on public.leads for delete
  using (auth.uid() = user_id);

create policy "Users can view own messages"
  on public.messages for select
  using (auth.uid() = user_id);

create policy "Users can insert own messages"
  on public.messages for insert
  with check (auth.uid() = user_id);

create policy "Users can update own messages"
  on public.messages for update
  using (auth.uid() = user_id);

create policy "Users can delete own messages"
  on public.messages for delete
  using (auth.uid() = user_id);
