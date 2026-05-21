import { LeadCard } from "@/components/leads/lead-card";
import type { Lead } from "@/types/lead";

interface LeadsListProps {
  leads: Lead[];
}

export function LeadsList({ leads }: LeadsListProps) {
  if (leads.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-zinc-200 bg-white py-16 text-center">
        <p className="text-sm font-medium text-zinc-900">No leads yet</p>
        <p className="mt-1 max-w-sm text-sm text-zinc-500">
          Add your first contact to start generating AI follow-up emails.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {leads.map((lead) => (
        <LeadCard key={lead.id} lead={lead} />
      ))}
    </div>
  );
}
