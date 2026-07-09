import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, MapPin, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
import { cityProfiles } from "@/data/city-content";
import { services } from "@/data/services";

export function generateStaticParams() {
  return cityProfiles.map((city) => ({ slug: city.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const city = cityProfiles.find((item) => item.slug === slug);
  if (!city) return {};
  return pageMetadata({
    title: `Car & Bike Dealership Marketing in ${city.name}`,
    description: `Verified buyer leads, performance marketing, and dealer growth services for ${city.name} car, bike, EV, and used-car dealerships. ${city.marketContext}`,
    path: `/city/${city.slug}`,
    keywords: [
      `car dealership marketing ${city.name}`,
      `dealer leads ${city.name}`,
      `automotive marketing agency ${city.name}`,
      `dealership digital marketing ${city.name}`,
    ],
  });
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const city = cityProfiles.find((item) => item.slug === slug);
  if (!city) notFound();

  const otherCities = cityProfiles.filter((item) => item.slug !== city.slug);

  return (
    <>
      <JsonLd
        data={combinationServiceSchema({
          name: `Dealer Growth Marketing in ${city.name}`,
          description: city.marketContext,
          path: `/city/${city.slug}`,
          areaServedName: city.name,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: city.name, path: `/city/${city.slug}` },
        ])}
      />
      <JsonLd data={faqPageSchema(city.faqs)} />

      <section className="relative overflow-hidden bg-ink px-6 pt-40 pb-28 text-center text-ink-foreground lg:px-8 lg:pb-32">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="pointer-events-none absolute -top-32 left-1/2 size-96 -translate-x-1/2 rounded-full bg-brand/25 blur-[120px]" />
        <div className="relative mx-auto max-w-3xl">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
            <MapPin className="size-3.5" />
            {city.region}
            {city.isHQ && " · Headquarters"}
          </span>
          <h1 className="mx-auto mt-4 max-w-2xl text-balance font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
            Grow Your Dealership in {city.name}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
            {city.marketContext}
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
              location="city_page_hero"
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
          { name: city.name, path: `/city/${city.slug}` },
        ]}
      />

      <section className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <h2 className="font-heading text-3xl font-semibold text-ink sm:text-4xl">
          Why {city.name} dealerships choose AutoSutra
        </h2>
        <p className="mt-4 text-foreground/80">{city.buyerBehavior}</p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-3">
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
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-center font-heading text-3xl font-semibold text-ink sm:text-4xl">
            Our services in {city.name}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
            All 12 services, delivered locally for {city.name} dealerships.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = serviceIconMap[service.icon];
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}/${city.slug}`}
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-colors hover:border-brand/40"
                >
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-brand">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-semibold text-ink">
                      {service.name} in {city.name}
                    </h3>
                    <span className="mt-1 inline-flex items-center gap-1.5 text-xs font-medium text-brand">
                      Learn more
                      <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
        <h2 className="text-center font-heading text-3xl font-semibold text-ink sm:text-4xl">
          Frequently asked questions
        </h2>
        <Accordion className="mt-10">
          {city.faqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger className="text-left font-heading text-base font-semibold text-ink">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <h2 className="text-center font-heading text-2xl font-semibold text-ink">
          AutoSutra in other cities
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {otherCities.map((other) => (
            <Link
              key={other.slug}
              href={`/city/${other.slug}`}
              className="rounded-full border border-border bg-card px-5 py-2 text-sm font-medium text-foreground/80 transition-colors hover:border-brand/40 hover:text-brand"
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
              Ready to grow your {city.name} dealership?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/60">
              Tell us about your dealership and we&apos;ll map out a growth
              plan built around {city.name}&apos;s market.
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
                location="city_page_footer"
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
