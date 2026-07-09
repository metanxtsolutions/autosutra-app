import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { JsonLd } from "@/components/shared/json-ld";
import { WhatsAppLink } from "@/components/shared/whatsapp-link";
import { serviceIconMap } from "@/lib/icon-map";
import {
  breadcrumbSchema,
  combinationServiceSchema,
  faqPageSchema,
} from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { services } from "@/data/services";
import { cityProfiles } from "@/data/city-content";

export function generateStaticParams() {
  return services.flatMap((service) =>
    cityProfiles.map((city) => ({ slug: service.slug, city: city.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; city: string }>;
}): Promise<Metadata> {
  const { slug, city: citySlug } = await params;
  const service = services.find((item) => item.slug === slug);
  const city = cityProfiles.find((item) => item.slug === citySlug);
  if (!service || !city) return {};
  return pageMetadata({
    title: `${service.name} in ${city.name}`,
    description: `${service.summary} Serving ${city.name} dealerships across ${city.region}.`,
    path: `/services/${service.slug}/${city.slug}`,
    keywords: [
      `${service.name} ${city.name}`,
      `${service.name} agency ${city.name}`,
      `car dealership marketing ${city.name}`,
    ],
  });
}

export default async function ServiceCityPage({
  params,
}: {
  params: Promise<{ slug: string; city: string }>;
}) {
  const { slug, city: citySlug } = await params;
  const service = services.find((item) => item.slug === slug);
  const city = cityProfiles.find((item) => item.slug === citySlug);
  if (!service || !city) notFound();

  const Icon = serviceIconMap[service.icon];

  const comboFaqs = [
    {
      question: `Does AutoSutra offer ${service.name} for dealerships in ${city.name}?`,
      answer: `Yes. ${service.name} is available for ${city.name} dealerships, delivered by the same team and process we use nationwide. ${city.buyerBehavior}`,
    },
    {
      question: `Who is ${service.name} best suited for in ${city.name}?`,
      answer: `${service.idealFor}. This is especially relevant in ${city.name}: ${city.highlights[0]}.`,
    },
    {
      question: `How fast can ${city.name} dealerships get started with ${service.name}?`,
      answer: `Most services, including ${service.name}, go live within 7 to 10 business days of onboarding for ${city.name} dealerships.`,
    },
  ];

  const otherCitiesForService = cityProfiles.filter(
    (item) => item.slug !== city.slug,
  );
  const otherServicesInCity = services.filter(
    (item) => item.slug !== service.slug,
  );

  return (
    <>
      <JsonLd
        data={combinationServiceSchema({
          name: `${service.name} in ${city.name}`,
          description: `${service.summary} Serving ${city.name} dealerships.`,
          path: `/services/${service.slug}/${city.slug}`,
          areaServedName: city.name,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.name, path: `/services/${service.slug}` },
          { name: city.name, path: `/services/${service.slug}/${city.slug}` },
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
            {service.name} &middot; {city.name}
          </span>
          <h1 className="mx-auto mt-4 max-w-2xl text-balance font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
            {service.name} in {city.name}
          </h1>
          <p className="mt-6 text-balance text-lg text-white/60">
            {service.summary}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/book-a-demo"
              className={cn(
                buttonVariants({ size: "lg" }),
                "gap-2 rounded-full bg-brand px-8 hover:bg-brand/90",
              )}
            >
              Book Consultation
              <ArrowRight className="size-4" />
            </Link>
            <WhatsAppLink
              location="service_city_hero"
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
          { name: "Services", path: "/services" },
          { name: service.name, path: `/services/${service.slug}` },
          { name: city.name, path: `/services/${service.slug}/${city.slug}` },
        ]}
      />

      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        <h2 className="font-heading text-2xl font-semibold text-ink">
          Why {city.name} dealerships choose {service.name}
        </h2>
        <p className="mt-3 text-foreground/80">
          {service.idealFor}. {city.buyerBehavior}
        </p>
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

      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
        <h2 className="text-center font-heading text-3xl font-semibold text-ink sm:text-4xl">
          {city.name} at a glance
        </h2>
        <ul className="mt-10 grid gap-4 sm:grid-cols-3">
          {city.highlights.map((highlight) => (
            <li
              key={highlight}
              className="rounded-2xl border border-border bg-card p-5 shadow-sm"
            >
              <Check className="size-4 text-brand" />
              <p className="mt-3 text-sm text-foreground/80">{highlight}</p>
            </li>
          ))}
        </ul>
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
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <h2 className="font-heading text-xl font-semibold text-ink">
              {service.name} in other cities
            </h2>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {otherCitiesForService.map((other) => (
                <Link
                  key={other.slug}
                  href={`/services/${service.slug}/${other.slug}`}
                  className="rounded-full border border-border bg-card px-4 py-1.5 text-sm text-foreground/80 transition-colors hover:border-brand/40 hover:text-brand"
                >
                  {other.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-heading text-xl font-semibold text-ink">
              Other services in {city.name}
            </h2>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {otherServicesInCity.slice(0, 6).map((other) => (
                <Link
                  key={other.slug}
                  href={`/services/${other.slug}/${city.slug}`}
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
              Ready for {service.name} in {city.name}?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/60">
              Tell us about your dealership and we&apos;ll map out a plan
              built for {city.name}.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/book-a-demo"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "gap-2 rounded-full bg-brand px-8 hover:bg-brand/90",
                )}
              >
                Book Consultation
                <ArrowRight className="size-4" />
              </Link>
              <WhatsAppLink
                location="service_city_footer"
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
