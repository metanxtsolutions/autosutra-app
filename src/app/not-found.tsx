import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-ink px-6 text-center text-ink-foreground">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="pointer-events-none absolute -top-32 left-1/2 size-96 -translate-x-1/2 rounded-full bg-brand/25 blur-[120px]" />
      <div className="relative mx-auto max-w-xl">
        <div className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-white/15 bg-white/5">
          <Compass className="size-6 text-brand-accent" />
        </div>
        <p className="mt-6 font-heading text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">
          404
        </p>
        <h1 className="mt-4 text-balance font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
          This page took a wrong turn.
        </h1>
        <p className="mt-6 text-lg text-white/60">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
          Let&apos;s get you back on the road.
        </p>
        <div className="mt-10 flex justify-center">
          <Link
            href="/"
            className={cn(
              buttonVariants({ size: "lg" }),
              "gap-2 rounded-full bg-brand px-8 hover:bg-brand/90",
            )}
          >
            Back to home
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
