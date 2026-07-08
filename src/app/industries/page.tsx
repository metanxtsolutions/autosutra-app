import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { industryIconMap } from "@/lib/icon-map";
import { industries } from "@/data/industries";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Industries",
  description:
    "AutoSutra works across car dealerships, bike dealerships, EV dealers, used car dealers, OEMs, and automotive brands across India, with tailored growth playbooks for each.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink px-6 pt-40 pb-28 text-center text-ink-foreground lg:px-8">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="pointer-events-none absolute -top-32 left-1/2 size-96 -translate-x-1/2 rounded-full bg-brand/25 blur-[120px]" />
        <div className="relative">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
            Industries
          </span>
          <h1 className="mx-auto mt-4 max-w-3xl text-balance font-heading text-5xl font-semibold tracking-tight sm:text-6xl">
            Built for every corner of the automotive market
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
            Every category buys and sells differently. AutoSutra tailors
            leads, campaigns, and technology to how your specific market
            actually behaves.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => {
            const Icon = industryIconMap[industry.icon];
            return (
              <div
                key={industry.slug}
                className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="flex size-11 items-center justify-center rounded-xl bg-accent text-brand">
                  <Icon className="size-5" />
                </div>
                <h2 className="mt-5 font-heading text-lg font-semibold text-ink">
                  {industry.name}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {industry.description}
                </p>
                <ul className="mt-5 space-y-2.5 border-t border-border pt-5">
                  {industry.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm text-foreground/80"
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-muted/40 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Why it matters
          </span>
          <h2 className="mt-4 text-balance font-heading text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            A used car buyer and an OEM network don&apos;t convert the same
            way
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Generic marketing agencies run the same playbook for every
            client. AutoSutra builds campaigns, lead criteria, and reporting
            around how your specific industry actually buys, so every
            recommendation is grounded in your category, not a template.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-16 text-center text-ink-foreground sm:px-16">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
          <div className="pointer-events-none absolute -top-24 left-1/2 size-96 -translate-x-1/2 rounded-full bg-brand/30 blur-[110px]" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-balance font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
              Don&apos;t see your exact category?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/60">
              We work with automotive businesses beyond this list. Tell us
              about yours.
            </p>
            <div className="mt-8 flex justify-center">
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
