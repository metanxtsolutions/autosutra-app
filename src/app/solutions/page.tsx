import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { solutionIconMap } from "@/lib/icon-map";
import { solutions } from "@/data/solutions";
import { services } from "@/data/services";
import { StatBand } from "@/components/shared/stat-band";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Solutions",
  description:
    "AutoSutra's growth solutions for India: Verified Lead Generation, Performance Marketing, Customer Engagement, Content & Creative, and Growth Technology, built for dealer outcomes.",
  path: "/solutions",
  keywords: [
    "dealer growth solutions India",
    "automotive lead generation solutions",
    "car dealership performance marketing",
  ],
});

const approach = [
  {
    step: "Audit",
    description:
      "We map your current funnel, ad spend, and CRM to find where leads are being lost or wasted.",
  },
  {
    step: "Deploy",
    description:
      "The right mix of solutions goes live, spanning leads, campaigns, content, and technology, matched to your goals.",
  },
  {
    step: "Optimize",
    description:
      "Weekly reporting and iteration keep cost-per-lead falling and conversion rising, quarter over quarter.",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink px-6 pt-40 pb-28 text-center text-ink-foreground lg:px-8">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="pointer-events-none absolute -top-32 left-1/2 size-96 -translate-x-1/2 rounded-full bg-brand/25 blur-[120px]" />
        <div className="relative">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
            Solutions
          </span>
          <h1 className="mx-auto mt-4 max-w-3xl text-balance font-heading text-5xl font-semibold tracking-tight sm:text-6xl">
            Growth solutions built around dealer outcomes
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
            Instead of buying individual services, AutoSutra dealers plug
            into five outcome-driven solutions, each combining the exact
            services needed to move a specific number.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <div className="space-y-6">
          {solutions.map((solution, index) => {
            const Icon = solutionIconMap[solution.icon];
            const relatedServices = services.filter((service) =>
              solution.serviceSlugs.includes(service.slug),
            );
            return (
              <div
                key={solution.slug}
                className="grid gap-8 rounded-3xl border border-border bg-card p-8 shadow-sm lg:grid-cols-5 lg:p-10"
              >
                <div className="lg:col-span-3">
                  <div className="flex items-center gap-3">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-accent text-brand">
                      <Icon className="size-5" />
                    </div>
                    <span className="font-heading text-xs font-semibold text-muted-foreground">
                      0{index + 1}
                    </span>
                  </div>
                  <h2 className="mt-5 font-heading text-2xl font-semibold text-ink sm:text-3xl">
                    <Link
                      href={`/solutions/${solution.slug}`}
                      className="transition-colors hover:text-brand"
                    >
                      {solution.name}
                    </Link>
                  </h2>
                  <p className="mt-2 text-sm font-medium text-brand">
                    {solution.outcome}
                  </p>
                  <p className="mt-4 text-muted-foreground">
                    {solution.description}
                  </p>
                  <Link
                    href={`/solutions/${solution.slug}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand"
                  >
                    View details
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
                <div className="flex flex-col justify-center gap-3 lg:col-span-2">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Includes
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {relatedServices.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-1 rounded-full border border-border bg-background px-3 py-1.5 text-sm text-foreground/80 transition-colors hover:border-brand/40 hover:text-brand"
                      >
                        {service.name}
                        <ArrowUpRight className="size-3" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-muted/40 py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              How it comes together
            </span>
            <h2 className="mt-4 text-balance font-heading text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              Three steps from audit to accountable growth
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {approach.map((item, index) => (
              <div
                key={item.step}
                className="rounded-2xl border border-border bg-card p-7"
              >
                <span className="font-heading text-3xl font-semibold text-brand/30">
                  0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg font-semibold text-ink">
                  {item.step}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <StatBand />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-16 text-center text-ink-foreground sm:px-16">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
          <div className="pointer-events-none absolute -top-24 left-1/2 size-96 -translate-x-1/2 rounded-full bg-brand/30 blur-[110px]" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-balance font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
              Not sure which solution fits your dealership?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/60">
              Tell us your goals and we&apos;ll recommend the right mix in
              your first consultation.
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
