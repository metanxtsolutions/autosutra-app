import Link from "next/link";
import {
  ArrowRight,
  Check,
  Headset,
  Layers,
  MessageCircle,
  Palette,
  Radio,
  Wallet,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { JsonLd } from "@/components/shared/json-ld";
import { WhatsAppLink } from "@/components/shared/whatsapp-link";
import { ServicePricingTable } from "@/components/services/service-pricing-table";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { services } from "@/data/services";

export const metadata = pageMetadata({
  title: "Omni Communication Platform for Resellers",
  description:
    "White-label AutoSutra's Omni Communication Platform, SMS, RCS, WhatsApp, and voice, for your own clients. Reseller margins, one wallet, no infrastructure to build.",
  path: "/omni-communication-platform/resellers",
  keywords: [
    "Omni Communication Platform reseller",
    "white label SMS WhatsApp platform India",
    "CPaaS reseller program India",
    "omnichannel messaging partner program",
  ],
});

const platform = services.find(
  (item) => item.slug === "omni-communication-platform",
);

const partnerBenefits = [
  {
    icon: Wallet,
    title: "Margin on every channel",
    description:
      "Set your own client-facing rates across SMS, RCS, WhatsApp, and voice. You keep the difference on every message and every client.",
  },
  {
    icon: Palette,
    title: "White-label ready",
    description:
      "Your clients see your brand on invoices and reporting, not AutoSutra's. The platform runs behind the scenes.",
  },
  {
    icon: Layers,
    title: "One wallet, every client",
    description:
      "A single unified wallet and dashboard to manage usage, top-ups, and delivery reporting across your entire client base.",
  },
  {
    icon: Headset,
    title: "Dedicated partner support",
    description:
      "A direct line to AutoSutra's team for onboarding, API integration, and anything your clients need, not a generic support queue.",
  },
];

const onboardingSteps = [
  {
    step: "Partner onboarding",
    description:
      "Tell us about your client base and expected volume across SMS, RCS, WhatsApp, and voice.",
  },
  {
    step: "Wallet and access setup",
    description:
      "Get your reseller wallet, API/SMPP access, and white-label dashboard live.",
  },
  {
    step: "Onboard your clients",
    description:
      "Resell SMS, RCS, WhatsApp, and IVR under your own brand, at your own rates.",
  },
  {
    step: "Ongoing support",
    description:
      "Dedicated partner support and delivery reporting as your client base grows.",
  },
];

const resellerFaqs = [
  {
    question: "Can I white-label this for my own clients?",
    answer:
      "Yes. Client-facing invoicing and reporting can run under your brand, not AutoSutra's.",
  },
  {
    question: "How is billing handled for my downstream clients?",
    answer:
      "You manage one unified wallet and set your own retail pricing to clients. The rate card below is your base cost as a partner, not what you have to charge your clients.",
  },
  {
    question: "Is there a minimum commitment to become a reseller?",
    answer:
      "The Unified Wallet has a minimum top-up of ₹10,000. Beyond that, volume-based partner rates are available on request as your client base grows.",
  },
  {
    question: "What support do I get as a partner?",
    answer:
      "A dedicated partner contact for onboarding, API or SMPP integration, and ongoing support, separate from general customer support.",
  },
];

export default function OmniCommunicationPlatformResellersPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          {
            name: "Omni Communication Platform",
            path: "/services/omni-communication-platform",
          },
          {
            name: "Resellers",
            path: "/omni-communication-platform/resellers",
          },
        ])}
      />
      <JsonLd data={faqPageSchema(resellerFaqs)} />

      <section className="relative overflow-hidden bg-ink px-6 pt-40 pb-28 text-center text-ink-foreground lg:px-8 lg:pb-32">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="pointer-events-none absolute -top-32 left-1/2 size-96 -translate-x-1/2 rounded-full bg-brand/25 blur-[120px]" />
        <div className="relative mx-auto max-w-2xl">
          <div className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-white/15 bg-white/5">
            <Radio className="size-6 text-brand-accent" />
          </div>
          <span className="mt-6 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
            Reseller Program
          </span>
          <h1 className="mt-4 text-balance font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
            Resell the Omni Communication Platform, Powered by AutoSutra
          </h1>
          <p className="mt-6 text-balance text-lg text-white/60">
            White-label SMS, RCS, WhatsApp, and voice communication for your
            own clients, backed by AutoSutra&apos;s infrastructure and
            partner support.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/book-a-demo?services=omni-communication-platform"
              className={cn(
                buttonVariants({ size: "lg" }),
                "gap-2 rounded-full bg-brand px-8 hover:bg-brand/90",
              )}
            >
              Become a Partner
              <ArrowRight className="size-4" />
            </Link>
            <WhatsAppLink
              location="omni_resellers_hero"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "gap-2 rounded-full border-white/20 bg-white/5 px-8 text-white hover:bg-white/10 hover:text-white",
              )}
            >
              <MessageCircle className="size-4" />
              Chat on WhatsApp
            </WhatsAppLink>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <h2 className="text-center font-heading text-3xl font-semibold text-ink sm:text-4xl">
          Why partner with AutoSutra
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {partnerBenefits.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex size-9 items-center justify-center rounded-lg bg-accent text-brand">
                <Icon className="size-4" />
              </div>
              <p className="mt-4 font-heading font-semibold text-ink">
                {title}
              </p>
              <p className="mt-2 text-sm text-foreground/80">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-center font-heading text-3xl font-semibold text-ink sm:text-4xl">
            How the partnership works
          </h2>
          <div className="mt-12 space-y-8">
            {onboardingSteps.map((item, index) => (
              <div key={item.step} className="flex gap-5">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand font-heading font-semibold text-white">
                  {index + 1}
                </div>
                <div className="pt-1.5">
                  <p className="font-medium text-ink">{item.step}</p>
                  <p className="mt-1 text-sm text-foreground/80">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {platform?.pricingTable && (
        <>
          <div className="mx-auto max-w-4xl px-6 pt-16 text-center lg:px-8">
            <p className="text-sm text-muted-foreground">
              Your base cost as a partner. Set your own retail pricing for
              clients; volume-based partner rates are available on request.
            </p>
          </div>
          <ServicePricingTable table={platform.pricingTable} />
        </>
      )}

      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
        <h2 className="text-center font-heading text-3xl font-semibold text-ink sm:text-4xl">
          Frequently asked questions
        </h2>
        <div className="mt-10 space-y-8">
          {resellerFaqs.map((faq) => (
            <div key={faq.question}>
              <h3 className="flex items-start gap-2 font-heading font-semibold text-ink">
                <Check className="mt-1 size-4 shrink-0 text-brand" />
                {faq.question}
              </h3>
              <p className="mt-2 pl-6 text-sm text-foreground/80">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-16 text-center text-ink-foreground sm:px-16">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
          <div className="pointer-events-none absolute -top-24 left-1/2 size-96 -translate-x-1/2 rounded-full bg-brand/30 blur-[110px]" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-balance font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
              Ready to become a reseller?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/60">
              Tell us about your client base and we&apos;ll map out your
              wallet setup, rates, and onboarding timeline.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/book-a-demo?services=omni-communication-platform"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "gap-2 rounded-full bg-brand px-8 hover:bg-brand/90",
                )}
              >
                Become a Partner
                <ArrowRight className="size-4" />
              </Link>
              <WhatsAppLink
                location="omni_resellers_footer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "gap-2 rounded-full border-white/20 bg-white/5 px-8 text-white hover:bg-white/10 hover:text-white",
                )}
              >
                <MessageCircle className="size-4" />
                Chat on WhatsApp
              </WhatsAppLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
