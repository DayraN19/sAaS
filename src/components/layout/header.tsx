import Link from "next/link";
import { Sparkles } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold text-zinc-900">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 text-white">
            <Sparkles className="h-4 w-4" />
          </span>
          SimpleSales
        </Link>
        <nav className="flex items-center gap-3 text-sm">
          <Link
            href="/login"
            className="text-zinc-600 transition-colors hover:text-zinc-900"
          >
            Log in
          </Link>
          <Link
            href="/dashboard"
            className="rounded-lg bg-zinc-900 px-3 py-1.5 font-medium text-white transition-colors hover:bg-zinc-800"
          >
            Dashboard
          </Link>
        </nav>
      </div>
    </header>
  );
}
