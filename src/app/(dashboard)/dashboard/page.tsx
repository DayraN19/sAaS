import type { Metadata } from "next";
import { Plus } from "lucide-react";
import { LeadsList } from "@/components/leads/leads-list";
import { Button } from "@/components/ui/button";
import { MOCK_LEADS } from "@/lib/mock-leads";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardPage() {
  return (
    <>
      <header className="flex h-14 items-center justify-between border-b border-zinc-200 bg-white px-4 sm:px-6">
        <div>
          <h1 className="text-lg font-semibold text-zinc-900">Leads</h1>
          <p className="text-sm text-zinc-500">
            Manage contacts and generate follow-ups
          </p>
        </div>
        <Button variant="outline" size="sm" disabled>
          <Plus className="h-4 w-4" />
          Add lead
        </Button>
      </header>

      <div className="flex-1 p-4 sm:p-6">
        <LeadsList leads={MOCK_LEADS} />
      </div>
    </>
  );
}
