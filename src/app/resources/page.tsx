import type { Metadata } from "next";
import { ResourcesGrid } from "@/components/resources/resources-grid";
import { NewsletterForm } from "@/components/layout/newsletter-form";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Dealer growth guides, blog posts, and downloads from AutoSutra — practical playbooks for verified leads, ad campaigns, SEO, and CRM.",
};

export default function ResourcesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink px-6 pt-40 pb-28 text-center text-ink-foreground lg:px-8">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="pointer-events-none absolute -top-32 left-1/2 size-96 -translate-x-1/2 rounded-full bg-brand/25 blur-[120px]" />
        <div className="relative">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
            Resources
          </span>
          <h1 className="mx-auto mt-4 max-w-3xl text-balance font-heading text-5xl font-semibold tracking-tight sm:text-6xl">
            Guides and insights for dealer growth
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
            Practical, dealer-tested playbooks on leads, marketing, SEO, and
            CRM. Our library is being published in the coming weeks —
            subscribe below to get each one first.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <ResourcesGrid />
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-14 text-center text-ink-foreground sm:px-16">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
          <div className="pointer-events-none absolute -top-20 left-1/2 size-80 -translate-x-1/2 rounded-full bg-brand/30 blur-[100px]" />
          <div className="relative">
            <h2 className="text-balance font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              Get every guide as it publishes
            </h2>
            <p className="mx-auto mt-3 max-w-md text-white/60">
              Dealer growth insights, delivered monthly. No spam.
            </p>
            <div className="mx-auto mt-6 max-w-sm">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
