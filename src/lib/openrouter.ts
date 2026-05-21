/**
 * OpenRouter client — implementation in a later step.
 * Default model: google/gemini-2.0-flash-001 (cheap, reliable).
 */
export const OPENROUTER_MODEL =
  process.env.OPENROUTER_MODEL ?? "google/gemini-2.0-flash-001";

export const OPENROUTER_API_URL = "https://openrouter.ai/api/v1/chat/completions";

export async function generateFollowUp(lastMessage: string): Promise<string> {
  void lastMessage;
  throw new Error("OpenRouter integration not implemented yet.");
}
