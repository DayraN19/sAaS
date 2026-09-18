import { Navbar } from "@/components/layout/navbar";
import { APP_NAME } from "@/lib/constants";

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50">
      <Navbar />
      <main className="flex-1">{children}</main>
      <footer className="border-t border-zinc-200 py-8 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} {APP_NAME}
      </footer>
    </div>
  );
}
