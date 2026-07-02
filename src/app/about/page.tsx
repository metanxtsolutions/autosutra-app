import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Compass,
  Cpu,
  Eye,
  Handshake,
  Lightbulb,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { StatBand } from "@/components/shared/stat-band";
import { timeline } from "@/data/timeline";

export const metadata: Metadata = {
  title: "About",
  description:
    "AutoSutra's story, mission, vision, values, and journey — India's dealer growth platform built by people who understand the automotive sales floor.",
};

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    body: "AI-driven targeting and dealer tooling that evolves with the market.",
  },
  {
    icon: ShieldCheck,
    title: "Transparency",
    body: "Every lead, every rupee, every result — visible in your dashboard.",
  },
  {
    icon: TrendingUp,
    title: "Performance",
    body: "We optimize for conversions and closed sales, not impressions.",
  },
  {
    icon: Handshake,
    title: "Trust",
    body: "Verified leads and honest reporting, even when it's not the number you wanted.",
  },
  {
    icon: Cpu,
    title: "Technology",
    body: "A dealer-built CRM and SaaS platform connecting every channel to one pipeline.",
  },
  {
    icon: Users,
    title: "Customer Success",
    body: "A dedicated growth partner, not a ticket queue — from onboarding to scale.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink px-6 pt-40 pb-28 text-center text-ink-foreground lg:px-8">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="pointer-events-none absolute -top-32 left-1/2 size-96 -translate-x-1/2 rounded-full bg-brand/25 blur-[120px]" />
        <div className="relative">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
            About AutoSutra
          </span>
          <h1 className="mx-auto mt-4 max-w-3xl text-balance font-heading text-5xl font-semibold tracking-tight sm:text-6xl">
            Built by people who understand the automotive sales floor
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
            India&apos;s fastest growing automobile marketing and solutions
            agency — built to make every rupee of dealer ad spend
            accountable to a real buyer.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              Our Story
            </span>
            <h2 className="mt-4 text-balance font-heading text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Marketing spend without proof of sales isn&apos;t growth
            </h2>
          </div>
          <div className="space-y-4 text-muted-foreground">
            <p>
              AutoSutra started with a simple observation: dealerships were
              spending heavily on marketing with no reliable way to measure
              what actually turned into a sale. Leads came in unverified,
              follow-up was manual, and reporting stopped at &ldquo;clicks&rdquo;
              and &ldquo;impressions.&rdquo;
            </p>
            <p>
              We built AutoSutra to close that gap — combining phone-verified
              lead generation, performance marketing built for automotive
              buying cycles, and dealer-grade data intelligence into a single
              growth partner. Today we work across car, bike, EV, and
              used-car dealerships, plus OEM partners, helping them turn
              digital demand into showroom footfall they can measure.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="flex size-11 items-center justify-center rounded-xl bg-accent text-brand">
                <Target className="size-5" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-semibold text-ink">
                Mission
              </h3>
              <p className="mt-2 text-muted-foreground">
                Empower dealerships with technology, verified data, and
                performance marketing to generate measurable business growth.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="flex size-11 items-center justify-center rounded-xl bg-accent text-brand">
                <Eye className="size-5" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-semibold text-ink">
                Vision
              </h3>
              <p className="mt-2 text-muted-foreground">
                Become India&apos;s most trusted automobile growth platform.
              </p>
            </div>
          </div>

          <div className="mt-14 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              Core Values
            </span>
            <h2 className="mt-4 text-balance font-heading text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              What guides every decision
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-ink text-ink-foreground">
                  <value.icon className="size-4" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-ink">
                    {value.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {value.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Our Journey
          </span>
          <h2 className="mt-4 text-balance font-heading text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            From one observation to a nationwide platform
          </h2>
        </div>

        <div className="relative mt-16">
          <div className="absolute top-2 bottom-2 left-6 w-px bg-border" />
          <ol className="space-y-10">
            {timeline.map((milestone) => (
              <li key={milestone.title} className="relative flex gap-6 pl-16">
                <span className="absolute top-0 left-6 flex size-4 -translate-x-1/2 items-center justify-center rounded-full bg-brand ring-4 ring-background" />
                <div>
                  <span className="font-heading text-sm font-semibold text-brand">
                    {milestone.label}
                  </span>
                  <h3 className="mt-1 font-heading text-xl font-semibold text-ink">
                    {milestone.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    {milestone.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-ink py-24 text-ink-foreground">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <div className="mx-auto flex size-12 items-center justify-center rounded-2xl border border-white/15 bg-white/5">
            <Compass className="size-5 text-brand-accent" />
          </div>
          <h2 className="mx-auto mt-6 max-w-2xl text-balance font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Leadership built from operators, not just marketers
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            AutoSutra is run by a team of performance marketers, data
            engineers, and former dealership operators who&apos;ve sat on
            both sides of the sales floor. Full leadership profiles are
            coming to this page soon.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            By the numbers
          </span>
          <h2 className="mt-4 text-balance font-heading text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Achievements so far
          </h2>
        </div>
        <div className="mt-14">
          <StatBand />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-16 text-center text-ink-foreground sm:px-16">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
          <div className="pointer-events-none absolute -top-24 left-1/2 size-96 -translate-x-1/2 rounded-full bg-brand/30 blur-[110px]" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-balance font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
              Want to grow with us?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/60">
              Whether you&apos;re a single showroom or a nationwide network,
              let&apos;s talk about your goals.
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
