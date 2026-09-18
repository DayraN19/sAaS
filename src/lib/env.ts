/**
 * Centralized environment access.
 * Client-safe vars must use NEXT_PUBLIC_ prefix.
 */
export const env = {
  supabase: {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL,
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
  app: {
    url: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  },
  openrouter: {
    apiKey: process.env.OPENROUTER_API_KEY,
    model: process.env.OPENROUTER_MODEL ?? "google/gemini-2.0-flash-001",
  },
} as const;

export function hasSupabaseEnv(): boolean {
  return Boolean(env.supabase.url && env.supabase.anonKey);
}

export function getSupabaseConfig() {
  const { url, anonKey } = env.supabase;

  if (!url || !anonKey) {
    throw new Error(
      "Supabase is not configured. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to .env.local",
    );
  }

  return { url, anonKey };
}
