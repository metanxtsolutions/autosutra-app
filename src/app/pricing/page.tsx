import type { Metadata } from "next";
import Link from "next/link";
import { Check, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { PricingTable } from "@/components/pricing/pricing-table";
import { Faq } from "@/components/home/faq";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent monthly pricing for AutoSutra's dealer growth plans — Starter, Growth, and Enterprise. Verified buyer leads, ad campaigns, CRM, and SaaS tools.",
};

const comparisonRows = [
  { label: "Verified buyer leads", starter: "Per month", growth: "Up to 250/month", enterprise: "Custom package" },
  { label: "Local SEO & Google Business Profile", starter: true, growth: true, enterprise: true },
  { label: "Ad campaigns", starter: "Facebook & Google", growth: "Facebook, Google, OTT", enterprise: "AI-driven, max reach" },
  { label: "WhatsApp lead notifications", starter: true, growth: true, enterprise: true },
  { label: "Dealer SaaS tools", starter: false, growth: true, enterprise: true },
  { label: "Dedicated account manager", starter: false, growth: true, enterprise: true },
  { label: "AI-powered behavior insights", starter: false, growth: true, enterprise: true },
  { label: "Nationwide network insights", starter: false, growth: false, enterprise: true },
  { label: "Priority onboarding & support", starter: false, growth: false, enterprise: true },
];

function Cell({ value }: { value: string | boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="mx-auto size-4 text-brand" />
    ) : (
      <span className="mx-auto block text-muted-foreground/40">—</span>
    );
  }
  return <span className="text-sm text-foreground/80">{value}</span>;
}

export default function PricingPage() {
  return (
    <>
      <section className="bg-ink px-6 pt-40 pb-24 text-center text-ink-foreground lg:px-8">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
          Pricing
        </span>
        <h1 className="mx-auto mt-4 max-w-3xl text-balance font-heading text-5xl font-semibold tracking-tight sm:text-6xl">
          Plans built to scale with your dealership
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
          Transparent monthly pricing across Starter, Growth, and Enterprise.
          No hidden fees, no long-term lock-in — upgrade as your pipeline
          grows.
        </p>
      </section>

      <section className="mx-auto -mt-12 max-w-7xl px-6 lg:px-8">
        <PricingTable />
      </section>

      <section className="mx-auto max-w-5xl px-6 py-24 lg:px-8">
        <h2 className="text-center font-heading text-3xl font-semibold text-ink sm:text-4xl">
          Compare plans in detail
        </h2>
        <div className="mt-12 overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-border bg-muted/40">
                <th className="p-5 text-sm font-semibold text-ink">
                  Feature
                </th>
                <th className="p-5 text-center text-sm font-semibold text-ink">
                  Starter
                </th>
                <th className="p-5 text-center text-sm font-semibold text-ink">
                  Growth
                </th>
                <th className="p-5 text-center text-sm font-semibold text-ink">
                  Enterprise
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.label} className="border-b border-border last:border-0">
                  <td className="p-5 text-sm text-foreground/80">
                    {row.label}
                  </td>
                  <td className="p-5 text-center">
                    <Cell value={row.starter} />
                  </td>
                  <td className="p-5 text-center">
                    <Cell value={row.growth} />
                  </td>
                  <td className="p-5 text-center">
                    <Cell value={row.enterprise} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Need a custom package for a multi-city dealer network or OEM
          program?{" "}
          <Link href="/contact" className="font-medium text-brand underline">
            Talk to our team
          </Link>
          .
        </p>
      </section>

      <Faq />

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-border bg-muted/40 px-8 py-12 text-center sm:flex-row sm:text-left">
          <div>
            <h2 className="font-heading text-2xl font-semibold text-ink">
              Not sure which plan fits?
            </h2>
            <p className="mt-2 text-muted-foreground">
              Book a free consultation and we&apos;ll recommend a plan based
              on your dealership&apos;s size and goals.
            </p>
          </div>
          <div className="flex shrink-0 gap-3">
            <Link
              href="/contact"
              className={cn(buttonVariants({ size: "lg" }), "rounded-full")}
            >
              Book Consultation
            </Link>
            <a
              href={siteConfig.contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "gap-2 rounded-full",
              )}
            >
              <MessageCircle className="size-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
