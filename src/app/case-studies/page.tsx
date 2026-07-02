import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { CaseStudiesGrid } from "@/components/case-studies/case-studies-grid";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real dealership growth stories across car, bike, EV, used car, and OEM programs — see the results AutoSutra delivers.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink px-6 pt-40 pb-28 text-center text-ink-foreground lg:px-8">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="pointer-events-none absolute -top-32 left-1/2 size-96 -translate-x-1/2 rounded-full bg-brand/25 blur-[120px]" />
        <div className="relative">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
            Case Studies
          </span>
          <h1 className="mx-auto mt-4 max-w-3xl text-balance font-heading text-5xl font-semibold tracking-tight sm:text-6xl">
            Real dealerships, real growth
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
            Filter by industry to see how AutoSutra approaches lead quality,
            cost-per-lead, and conversion differently for every category of
            dealer.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <CaseStudiesGrid />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-16 text-center text-ink-foreground sm:px-16">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
          <div className="pointer-events-none absolute -top-24 left-1/2 size-96 -translate-x-1/2 rounded-full bg-brand/30 blur-[110px]" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-balance font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
              Want results like these for your dealership?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/60">
              Book a consultation and we&apos;ll show you what&apos;s
              realistic for your market in the first 90 days.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "gap-2 rounded-full bg-brand px-8 hover:bg-brand/90",
                )}
              >
                Book Consultation
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
