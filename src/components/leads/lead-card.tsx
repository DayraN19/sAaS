import { Mail, MessageSquare } from "lucide-react";
import { StatusBadge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Lead } from "@/types/lead";

interface LeadCardProps {
  lead: Lead;
}

export function LeadCard({ lead }: LeadCardProps) {
  return (
    <Card className="transition-shadow hover:shadow-md">
      <CardContent className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-semibold text-zinc-900">{lead.name}</h3>
            <p className="mt-0.5 flex items-center gap-1.5 text-sm text-zinc-500">
              <Mail className="h-3.5 w-3.5" />
              {lead.email}
            </p>
          </div>
          <StatusBadge status={lead.status} />
        </div>

        {lead.last_message && (
          <div className="rounded-lg bg-zinc-50 p-3">
            <p className="mb-1 flex items-center gap-1.5 text-xs font-medium text-zinc-500">
              <MessageSquare className="h-3.5 w-3.5" />
              Last message
            </p>
            <p className="line-clamp-2 text-sm text-zinc-700">{lead.last_message}</p>
          </div>
        )}

        <Button variant="outline" size="sm" className="w-full" disabled>
          Generate follow-up
        </Button>
      </CardContent>
    </Card>
  );
}
