import { Logo } from "@/components/layout/logo";

export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-4 py-12">
      <Logo className="mb-8" />
      {children}
    </div>
  );
}
