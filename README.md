# SimpleSales

AI-powered sales follow-up emails for freelancers and agencies.

## Tech stack

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS**
- **Supabase** (Auth + Postgres)
- **OpenRouter** (AI)
- **Vercel** (deployment)

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy environment variables:

   ```bash
   cp .env.local.example .env.local
   ```

3. Fill in Supabase and OpenRouter keys in `.env.local`.

4. Apply the database migration in your Supabase project (SQL Editor or CLI):

   `supabase/migrations/20240520000000_initial_schema.sql`

5. Run the dev server:

   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
├── app/
│   ├── (auth)/login/       # Auth pages
│   ├── (dashboard)/        # Protected app shell
│   └── api/                # API routes
├── components/
│   ├── auth/
│   ├── layout/
│   ├── leads/
│   └── ui/
├── lib/
│   ├── supabase/           # Browser, server, middleware clients
│   └── openrouter.ts       # AI client (stub)
└── types/
supabase/migrations/        # Database schema
```

## MVP roadmap

- [x] Project setup & skeleton UI
- [ ] Supabase email auth
- [ ] Leads CRUD
- [ ] OpenRouter follow-up generator
- [ ] Copy / manual send flow

## Deploy on Vercel

Push to GitHub and import the repo in Vercel. Add the same env vars from `.env.local.example`.
