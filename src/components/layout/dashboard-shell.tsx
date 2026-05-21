"use client";

import { usePathname } from "next/navigation";
import { Sidebar } from "@/components/layout/sidebar";

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-zinc-50">
      <Sidebar pathname={pathname} />
      <div className="flex flex-1 flex-col">{children}</div>
    </div>
  );
}
