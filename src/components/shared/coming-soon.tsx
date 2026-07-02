import Link from "next/link";
import { ArrowRight, Construction } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function ComingSoon({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink px-6 py-40 text-center text-ink-foreground lg:px-8">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="pointer-events-none absolute -top-32 left-1/2 size-96 -translate-x-1/2 rounded-full bg-brand/25 blur-[120px]" />
      <div className="relative mx-auto max-w-2xl">
        <div className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-white/15 bg-white/5">
          <Construction className="size-6 text-brand-accent" />
        </div>
        <span className="mt-6 block text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
          {eyebrow}
        </span>
        <h1 className="mt-4 text-balance font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 text-balance text-lg text-white/60">
          {description}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "gap-2 rounded-full bg-brand px-8 hover:bg-brand/90",
            )}
          >
            Talk to our team
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "rounded-full border-white/20 bg-white/5 px-8 text-white hover:bg-white/10 hover:text-white",
            )}
          >
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
