export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      leads: {
        Row: {
          id: string;
          user_id: string;
          name: string;
          email: string;
          last_message: string | null;
          status: "new" | "contacted" | "replied";
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          name: string;
          email: string;
          last_message?: string | null;
          status?: "new" | "contacted" | "replied";
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          name?: string;
          email?: string;
          last_message?: string | null;
          status?: "new" | "contacted" | "replied";
          created_at?: string;
          updated_at?: string;
        };
      };
      messages: {
        Row: {
          id: string;
          lead_id: string;
          user_id: string;
          content: string;
          direction: "inbound" | "outbound";
          created_at: string;
        };
        Insert: {
          id?: string;
          lead_id: string;
          user_id: string;
          content: string;
          direction: "inbound" | "outbound";
          created_at?: string;
        };
        Update: {
          id?: string;
          lead_id?: string;
          user_id?: string;
          content?: string;
          direction?: "inbound" | "outbound";
          created_at?: string;
        };
      };
    };
  };
}
