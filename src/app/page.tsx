import Link from "next/link";
import { ArrowRight, Mail, Sparkles, Zap } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <Header />

      <main>
        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-600 shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-zinc-900" />
              AI follow-ups for freelancers & agencies
            </div>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
              Never let a warm lead go cold again
            </h1>
            <p className="mt-4 text-balance text-lg text-zinc-600">
              SimpleSales turns your last client message into a polished
              follow-up email in seconds — so you close more deals with less
              writing.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/dashboard">
                  Open dashboard
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link href="/login">Sign in</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="border-t border-zinc-200 bg-white py-16">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-3 sm:px-6">
            {[
              {
                icon: Mail,
                title: "Track every lead",
                description:
                  "Name, email, last message, and status — all in one clean dashboard.",
              },
              {
                icon: Zap,
                title: "One-click follow-ups",
                description:
                  "Paste context once. AI drafts a professional reply you can copy or send.",
              },
              {
                icon: Sparkles,
                title: "Built for speed",
                description:
                  "Minimal UI inspired by Stripe and Notion. No clutter, just selling.",
              },
            ].map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-xl border border-zinc-100 p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100">
                  <Icon className="h-5 w-5 text-zinc-700" />
                </div>
                <h3 className="font-semibold text-zinc-900">{title}</h3>
                <p className="mt-2 text-sm text-zinc-600">{description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 py-8 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} SimpleSales
      </footer>
    </div>
  );
}
