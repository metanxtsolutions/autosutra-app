import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { JsonLd } from "@/components/shared/json-ld";
import { WhatsAppLink } from "@/components/shared/whatsapp-link";
import { serviceIconMap, solutionIconMap } from "@/lib/icon-map";
import {
  breadcrumbSchema,
  combinationServiceSchema,
  faqPageSchema,
} from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { solutions } from "@/data/solutions";
import { services } from "@/data/services";
import { cityProfiles } from "@/data/city-content";

export function generateStaticParams() {
  return solutions.flatMap((solution) =>
    cityProfiles.map((city) => ({ slug: solution.slug, city: city.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; city: string }>;
}): Promise<Metadata> {
  const { slug, city: citySlug } = await params;
  const solution = solutions.find((item) => item.slug === slug);
  const city = cityProfiles.find((item) => item.slug === citySlug);
  if (!solution || !city) return {};
  return pageMetadata({
    title: `${solution.name} in ${city.name}`,
    description: `${solution.description} Serving ${city.name} dealerships across ${city.region}.`,
    path: `/solutions/${solution.slug}/${city.slug}`,
    keywords: [
      `${solution.name} ${city.name}`,
      `dealer growth solutions ${city.name}`,
    ],
  });
}

export default async function SolutionCityPage({
  params,
}: {
  params: Promise<{ slug: string; city: string }>;
}) {
  const { slug, city: citySlug } = await params;
  const solution = solutions.find((item) => item.slug === slug);
  const city = cityProfiles.find((item) => item.slug === citySlug);
  if (!solution || !city) notFound();

  const Icon = solutionIconMap[solution.icon];
  const includedServices = services.filter((service) =>
    solution.serviceSlugs.includes(service.slug),
  );

  const comboFaqs = [
    {
      question: `Is ${solution.name} available for ${city.name} dealerships?`,
      answer: `Yes. ${solution.name} is available for ${city.name} dealerships, combining ${includedServices.map((s) => s.name).join(", ")}. ${city.buyerBehavior}`,
    },
    {
      question: `How fast can a ${city.name} dealership get started?`,
      answer: `Most services within ${solution.name} go live within 7 to 10 business days of onboarding for ${city.name} dealerships.`,
    },
  ];

  const otherCitiesForSolution = cityProfiles.filter(
    (item) => item.slug !== city.slug,
  );

  return (
    <>
      <JsonLd
        data={combinationServiceSchema({
          name: `${solution.name} in ${city.name}`,
          description: `${solution.description} Serving ${city.name} dealerships.`,
          path: `/solutions/${solution.slug}/${city.slug}`,
          areaServedName: city.name,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Solutions", path: "/solutions" },
          { name: solution.name, path: `/solutions/${solution.slug}` },
          {
            name: city.name,
            path: `/solutions/${solution.slug}/${city.slug}`,
          },
        ])}
      />
      <JsonLd data={faqPageSchema(comboFaqs)} />

      <section className="relative overflow-hidden bg-ink px-6 pt-40 pb-28 text-center text-ink-foreground lg:px-8 lg:pb-32">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="pointer-events-none absolute -top-32 left-1/2 size-96 -translate-x-1/2 rounded-full bg-brand/25 blur-[120px]" />
        <div className="relative mx-auto max-w-2xl">
          <div className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-white/15 bg-white/5">
            <Icon className="size-6 text-brand-accent" />
          </div>
          <span className="mt-6 block text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
            {solution.name} &middot; {city.name}
          </span>
          <h1 className="mt-4 text-balance font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
            {solution.name} in {city.name}
          </h1>
          <p className="mt-4 text-balance text-lg text-white/60">
            {solution.description}
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
              location="solution_city_hero"
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
          { name: "Solutions", path: "/solutions" },
          { name: solution.name, path: `/solutions/${solution.slug}` },
          { name: city.name, path: `/solutions/${solution.slug}/${city.slug}` },
        ]}
      />

      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        <h2 className="font-heading text-2xl font-semibold text-ink">
          Built for {city.name} dealerships
        </h2>
        <p className="mt-3 text-foreground/80">{city.marketContext}</p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-4 lg:px-8">
        <h2 className="text-center font-heading text-3xl font-semibold text-ink sm:text-4xl">
          What&apos;s included
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {includedServices.map((service) => {
            const ServiceIcon = serviceIconMap[service.icon];
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}/${city.slug}`}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-colors hover:border-brand/40"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-brand">
                  <ServiceIcon className="size-5" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-ink">
                    {service.name} in {city.name}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {service.summary}
                  </p>
                </div>
                <ArrowRight className="ml-auto size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-brand" />
              </Link>
            );
          })}
        </div>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
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
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <h2 className="text-center font-heading text-xl font-semibold text-ink">
          {solution.name} in other cities
        </h2>
        <div className="mt-6 flex flex-wrap justify-center gap-2.5">
          {otherCitiesForSolution.map((other) => (
            <Link
              key={other.slug}
              href={`/solutions/${solution.slug}/${other.slug}`}
              className="rounded-full border border-border bg-card px-4 py-1.5 text-sm text-foreground/80 transition-colors hover:border-brand/40 hover:text-brand"
            >
              {other.name}
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-16 text-center text-ink-foreground sm:px-16">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
          <div className="pointer-events-none absolute -top-24 left-1/2 size-96 -translate-x-1/2 rounded-full bg-brand/30 blur-[110px]" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-balance font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
              Ready to {solution.outcome.toLowerCase()} in {city.name}?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/60">
              Tell us about your dealership and we&apos;ll map {solution.name}{" "}
              to {city.name}&apos;s market.
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
                location="solution_city_footer"
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
