import Link from "next/link";
import { LayoutDashboard, Users, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/dashboard", label: "Leads", icon: Users },
];

export function Sidebar({ pathname }: { pathname: string }) {
  return (
    <aside className="hidden w-56 shrink-0 border-r border-zinc-200 bg-zinc-50/50 md:block">
      <div className="flex h-14 items-center gap-2 border-b border-zinc-200 px-4">
        <span className="flex h-7 w-7 items-center justify-center rounded-md bg-zinc-900 text-white">
          <Sparkles className="h-3.5 w-3.5" />
        </span>
        <span className="text-sm font-semibold text-zinc-900">SimpleSales</span>
      </div>
      <nav className="space-y-1 p-3">
        {navItems.map(({ href, label, icon: Icon }) => {
          const active = pathname === href || pathname.startsWith(`${href}/`);
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                active
                  ? "bg-white text-zinc-900 shadow-sm ring-1 ring-zinc-200"
                  : "text-zinc-600 hover:bg-white/80 hover:text-zinc-900",
              )}
            >
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          );
        })}
        <div className="mt-4 rounded-lg border border-dashed border-zinc-200 bg-white px-3 py-3">
          <div className="flex items-center gap-2 text-xs font-medium text-zinc-500">
            <LayoutDashboard className="h-3.5 w-3.5" />
            More soon
          </div>
          <p className="mt-1 text-xs text-zinc-400">
            Analytics & templates coming in v2.
          </p>
        </div>
      </nav>
    </aside>
  );
}
