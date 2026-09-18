import { env } from "@/lib/env";

export const OPENROUTER_API_URL = "https://openrouter.ai/api/v1/chat/completions";

export const OPENROUTER_MODEL = env.openrouter.model;

/**
 * Generate a follow-up email from the lead's last message.
 * Implementation deferred to a later MVP step.
 */
export async function generateFollowUp(lastMessage: string): Promise<string> {
  void lastMessage;
  throw new Error("AI follow-up generation not implemented yet.");
}
