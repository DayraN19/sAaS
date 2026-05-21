import { cn } from "@/lib/utils";
import type { LeadStatus } from "@/types/lead";

const statusStyles: Record<LeadStatus, string> = {
  new: "bg-blue-50 text-blue-700 ring-blue-600/20",
  contacted: "bg-amber-50 text-amber-700 ring-amber-600/20",
  replied: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
};

const statusLabels: Record<LeadStatus, string> = {
  new: "New",
  contacted: "Contacted",
  replied: "Replied",
};

export function StatusBadge({ status }: { status: LeadStatus }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ring-1 ring-inset",
        statusStyles[status],
      )}
    >
      {statusLabels[status]}
    </span>
  );
}
