import type { Lead } from "@/types/lead";

/** Placeholder data until Supabase CRUD is implemented. */
const MOCK_LEADS: Lead[] = [
  {
    id: "1",
    user_id: "demo",
    name: "Sarah Chen",
    email: "sarah@acmestudio.io",
    last_message:
      "Thanks for the proposal — we're reviewing it with the team and should have feedback by Friday.",
    status: "contacted",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "2",
    user_id: "demo",
    name: "Marcus Webb",
    email: "marcus@brightpath.co",
    last_message:
      "Can you send over case studies from similar SaaS clients? Budget is around $8k/month.",
    status: "new",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "3",
    user_id: "demo",
    name: "Elena Rossi",
    email: "elena@novafreelance.com",
    last_message:
      "Love the direction. Let's schedule a call next week to finalize scope.",
    status: "replied",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

export async function getLeads(): Promise<Lead[]> {
  // TODO: fetch from Supabase when auth + DB are wired
  return MOCK_LEADS;
}
