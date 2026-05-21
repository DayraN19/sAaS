export type LeadStatus = "new" | "contacted" | "replied";

export interface Lead {
  id: string;
  user_id: string;
  name: string;
  email: string;
  last_message: string | null;
  status: LeadStatus;
  created_at: string;
  updated_at: string;
}
