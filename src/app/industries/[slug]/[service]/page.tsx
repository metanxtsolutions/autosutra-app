import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { JsonLd } from "@/components/shared/json-ld";
import { WhatsAppLink } from "@/components/shared/whatsapp-link";
import { industryIconMap } from "@/lib/icon-map";
import {
  breadcrumbSchema,
  combinationServiceSchema,
  faqPageSchema,
} from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { industries } from "@/data/industries";
import { services } from "@/data/services";

export function generateStaticParams() {
  return industries.flatMap((industry) =>
    services.map((service) => ({
      slug: industry.slug,
      service: service.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; service: string }>;
}): Promise<Metadata> {
  const { slug, service: serviceSlug } = await params;
  const industry = industries.find((item) => item.slug === slug);
  const service = services.find((item) => item.slug === serviceSlug);
  if (!industry || !service) return {};
  return pageMetadata({
    title: `${service.name} for ${industry.name}`,
    description: `${service.summary} Built for ${industry.name} across India.`,
    path: `/industries/${industry.slug}/${service.slug}`,
    keywords: [
      `${service.name} for ${industry.name} India`,
      `${industry.name} ${service.name} agency`,
    ],
  });
}

export default async function IndustryServicePage({
  params,
}: {
  params: Promise<{ slug: string; service: string }>;
}) {
  const { slug, service: serviceSlug } = await params;
  const industry = industries.find((item) => item.slug === slug);
  const service = services.find((item) => item.slug === serviceSlug);
  if (!industry || !service) notFound();

  const IndustryIcon = industryIconMap[industry.icon];

  const comboFaqs = [
    {
      question: `Does AutoSutra offer ${service.name} for ${industry.name}?`,
      answer: `Yes. ${service.name} is tailored to ${industry.name}: ${industry.points[0]}.`,
    },
    {
      question: `Who is this best suited for?`,
      answer: `${service.idealFor}. ${industry.description}`,
    },
    {
      question: `How fast can a ${industry.name} business get started?`,
      answer: `Most services, including ${service.name}, go live within 7 to 10 business days of onboarding.`,
    },
  ];

  const otherServicesForIndustry = services.filter(
    (item) => item.slug !== service.slug,
  );
  const otherIndustriesForService = industries.filter(
    (item) => item.slug !== industry.slug,
  );

  return (
    <>
      <JsonLd
        data={combinationServiceSchema({
          name: `${service.name} for ${industry.name}`,
          description: `${service.summary} Built for ${industry.name}.`,
          path: `/industries/${industry.slug}/${service.slug}`,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
          { name: industry.name, path: `/industries/${industry.slug}` },
          {
            name: service.name,
            path: `/industries/${industry.slug}/${service.slug}`,
          },
        ])}
      />
      <JsonLd data={faqPageSchema(comboFaqs)} />

      <section className="relative overflow-hidden bg-ink px-6 pt-40 pb-28 text-center text-ink-foreground lg:px-8 lg:pb-32">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="pointer-events-none absolute -top-32 left-1/2 size-96 -translate-x-1/2 rounded-full bg-brand/25 blur-[120px]" />
        <div className="relative mx-auto max-w-2xl">
          <div className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-white/15 bg-white/5">
            <IndustryIcon className="size-6 text-brand-accent" />
          </div>
          <span className="mt-6 block text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
            {industry.name}
          </span>
          <h1 className="mt-4 text-balance font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
            {service.name} for {industry.name}
          </h1>
          <p className="mt-6 text-balance text-lg text-white/60">
            {service.summary}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
            <WhatsAppLink
              location="industry_service_hero"
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

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
          { name: industry.name, path: `/industries/${industry.slug}` },
          {
            name: service.name,
            path: `/industries/${industry.slug}/${service.slug}`,
          },
        ]}
      />

      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        <h2 className="font-heading text-2xl font-semibold text-ink">
          Built for {industry.name}
        </h2>
        <p className="mt-3 text-foreground/80">
          {industry.description} {service.idealFor}.
        </p>
        <ul className="mt-6 space-y-2.5">
          {industry.points.map((point) => (
            <li key={point} className="flex items-start gap-2.5">
              <Check className="mt-1 size-4 shrink-0 text-brand" />
              <span className="text-foreground/80">{point}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-4 lg:px-8">
        <h2 className="text-center font-heading text-3xl font-semibold text-ink sm:text-4xl">
          What you get
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {service.benefits.map((benefit) => (
            <div
              key={benefit}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex size-9 items-center justify-center rounded-lg bg-accent text-brand">
                <Check className="size-4" />
              </div>
              <p className="mt-4 text-sm text-foreground/80">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-center font-heading text-3xl font-semibold text-ink sm:text-4xl">
            How it works
          </h2>
          <div className="mt-12 space-y-8">
            {service.howItWorks.map((step, index) => (
              <div key={step} className="flex gap-5">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand font-heading font-semibold text-white">
                  {index + 1}
                </div>
                <p className="pt-1.5 text-foreground/80">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
        <h2 className="text-center font-heading text-3xl font-semibold text-ink sm:text-4xl">
          Frequently asked questions
        </h2>
        <div className="mt-10 space-y-8">
          {comboFaqs.map((faq) => (
            <div key={faq.question}>
              <h3 className="font-heading font-semibold text-ink">
                {faq.question}
              </h3>
              <p className="mt-2 text-sm text-foreground/80">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <h2 className="font-heading text-xl font-semibold text-ink">
              {service.name} for other industries
            </h2>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {otherIndustriesForService.map((other) => (
                <Link
                  key={other.slug}
                  href={`/industries/${other.slug}/${service.slug}`}
                  className="rounded-full border border-border bg-card px-4 py-1.5 text-sm text-foreground/80 transition-colors hover:border-brand/40 hover:text-brand"
                >
                  {other.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-heading text-xl font-semibold text-ink">
              Other services for {industry.name}
            </h2>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {otherServicesForIndustry.slice(0, 6).map((other) => (
                <Link
                  key={other.slug}
                  href={`/industries/${industry.slug}/${other.slug}`}
                  className="rounded-full border border-border bg-card px-4 py-1.5 text-sm text-foreground/80 transition-colors hover:border-brand/40 hover:text-brand"
                >
                  {other.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-16 text-center text-ink-foreground sm:px-16">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
          <div className="pointer-events-none absolute -top-24 left-1/2 size-96 -translate-x-1/2 rounded-full bg-brand/30 blur-[110px]" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-balance font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
              Ready for {service.name}?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/60">
              Tell us about your {industry.name} business and we&apos;ll map
              out a plan.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
              <WhatsAppLink
                location="industry_service_footer"
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
