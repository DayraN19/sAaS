import Link from "next/link";
import { Sparkles } from "lucide-react";
import { APP_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface LogoProps {
  href?: string;
  className?: string;
  iconClassName?: string;
}

export function Logo({ href = "/", className, iconClassName }: LogoProps) {
  return (
    <Link
      href={href}
      className={cn("flex items-center gap-2 font-semibold text-zinc-900", className)}
    >
      <span
        className={cn(
          "flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 text-white",
          iconClassName,
        )}
      >
        <Sparkles className="h-4 w-4" />
      </span>
      {APP_NAME}
    </Link>
  );
}
