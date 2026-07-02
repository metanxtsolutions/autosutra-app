import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ServiceExplorer } from "@/components/services/service-explorer";
import { StatBand } from "@/components/shared/stat-band";
import { services } from "@/data/services";
import { solutions } from "@/data/solutions";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore all 12 AutoSutra services — verified buyer leads, performance marketing, content, CRM, and SaaS tools. Search, filter, and build your own growth stack.",
};

const serviceFaqs = [
  {
    question: "Can I combine services from different categories?",
    answer:
      "Yes — most dealer partners run a mix, like Verified Buyer Leads with Google Ads and WhatsApp Marketing. Use the stack builder above to put together a combination and we'll quote it as one plan.",
  },
  {
    question: "How is service quality measured?",
    answer:
      "Every service reports against a concrete metric — verified leads delivered, cost-per-lead, footfall, response time, or leads tracked in CRM — visible in your dashboard, not just a monthly summary deck.",
  },
  {
    question: "Can I add or remove services later?",
    answer:
      "Yes. Most dealers start with 2-3 services and expand once a channel proves ROI. There's no long-term lock-in on individual services within a plan.",
  },
  {
    question: "Do you offer custom service bundles for large dealer networks?",
    answer:
      "For OEM and multi-city dealer networks, we build custom bundles and pricing outside the standard plans — talk to our team about your network's scale.",
  },
  {
    question: "How fast can a new service go live?",
    answer:
      "Most services — leads, ad campaigns, WhatsApp automation — go live within 7-10 business days of onboarding. Content and CRM setup may take slightly longer depending on scope.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink px-6 pt-40 pb-28 text-center text-ink-foreground lg:px-8 lg:pb-32">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="pointer-events-none absolute -top-32 left-1/2 size-96 -translate-x-1/2 rounded-full bg-brand/25 blur-[120px]" />
        <div className="relative">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
            Services
          </span>
          <h1 className="mx-auto mt-4 max-w-2xl text-balance font-heading text-5xl font-semibold tracking-tight sm:text-6xl">
            All {services.length} services. One accountable partner.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
            Search or filter by outcome, open any service for the full
            breakdown, and build your own stack — we&apos;ll turn it into a
            quote.
          </p>
        </div>
      </section>

      <section className="relative -mt-16 px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <StatBand />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <ServiceExplorer />
      </section>

      <section className="bg-muted/40 py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              Organized by outcome
            </span>
            <h2 className="mt-4 text-balance font-heading text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              Every service maps to a solution
            </h2>
            <p className="mt-4 text-muted-foreground">
              Not sure where to start? See how these {services.length}{" "}
              services group into five outcome-driven solutions.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {solutions.map((solution) => (
              <Link
                key={solution.slug}
                href="/solutions"
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:border-brand/40 hover:text-brand"
              >
                {solution.name}
                <span className="ml-2 text-xs text-muted-foreground">
                  {solution.serviceSlugs.length}
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/solutions"
              className={cn(buttonVariants({ variant: "outline" }), "rounded-full")}
            >
              Explore Solutions
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            FAQ
          </span>
          <h2 className="mt-4 text-balance font-heading text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Questions about our services
          </h2>
        </div>
        <div className="mt-10 rounded-2xl border border-border bg-card px-6">
          <Accordion>
            {serviceFaqs.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger className="py-5 text-base font-heading font-medium text-ink">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-16 text-center text-ink-foreground sm:px-16">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
          <div className="pointer-events-none absolute -top-24 left-1/2 size-96 -translate-x-1/2 rounded-full bg-brand/30 blur-[110px]" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-balance font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
              Still not sure what you need?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/60">
              Book a free consultation and we&apos;ll recommend the right mix
              of services for your dealership.
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
