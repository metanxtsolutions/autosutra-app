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
  localBusinessSchema,
} from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { cityProfiles, type CityFaq } from "@/data/city-content";
import { districtProfiles } from "@/data/wb-districts";
import { apDistrictProfiles } from "@/data/ap-districts";
import { arDistrictProfiles } from "@/data/ar-districts";
import { assamDistrictProfiles, assamStateProfile } from "@/data/assam-districts";
import { biharDistrictProfiles, biharStateProfile } from "@/data/bihar-districts";
import { services } from "@/data/services";

type LocationKind = "metro" | "district";

type LocationView = {
  slug: string;
  name: string;
  region: string;
  kind: LocationKind;
  isHQ?: boolean;
  marketContext: string;
  buyerBehavior: string;
  highlights: string[];
  faqs: CityFaq[];
  keywords?: string[];
  nearbySlugs?: string[];
};

function allLocations(): LocationView[] {
  return [
    ...cityProfiles.map((city) => ({ ...city, kind: "metro" as const })),
    ...districtProfiles.map((district) => ({
      ...district,
      kind: "district" as const,
    })),
    ...apDistrictProfiles.map((district) => ({
      ...district,
      kind: "district" as const,
    })),
    ...arDistrictProfiles.map((district) => ({
      ...district,
      kind: "district" as const,
    })),
    ...assamDistrictProfiles.map((district) => ({
      ...district,
      kind: "district" as const,
    })),
    { ...assamStateProfile, kind: "district" as const },
    ...biharDistrictProfiles.map((district) => ({
      ...district,
      kind: "district" as const,
    })),
    { ...biharStateProfile, kind: "district" as const },
  ];
}

export function generateStaticParams() {
  return allLocations().map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const location = allLocations().find((item) => item.slug === slug);
  if (!location) return {};
  return pageMetadata({
    title: `Car & Bike Dealership Marketing in ${location.name}`,
    description: `Verified buyer leads, performance marketing, and dealer growth services for ${location.name} car, bike, EV, and used-car dealerships. ${location.marketContext}`,
    path: `/city/${location.slug}`,
    keywords:
      location.keywords ?? [
        `car dealership marketing ${location.name}`,
        `dealer leads ${location.name}`,
        `automotive marketing agency ${location.name}`,
        `dealership digital marketing ${location.name}`,
      ],
  });
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const locations = allLocations();
  const location = locations.find((item) => item.slug === slug);
  if (!location) notFound();

  const isDistrict = location.kind === "district";

  const otherLocations = isDistrict
    ? [
        ...(location.nearbySlugs ?? [])
          .map((nearbySlug) =>
            locations.find(
              (item) => item.slug === nearbySlug && item.kind === "district",
            ),
          )
          .filter((item): item is LocationView => Boolean(item)),
        ...cityProfiles
          .filter((city) => city.region === location.region)
          .map((city) => ({ ...city, kind: "metro" as const })),
      ]
    : cityProfiles
        .filter((city) => city.slug !== location.slug)
        .map((city) => ({ ...city, kind: "metro" as const }));

  const otherLocationsHeading = isDistrict
    ? `AutoSutra in nearby ${location.region} districts`
    : "AutoSutra in other cities";

  return (
    <>
      <JsonLd
        data={combinationServiceSchema({
          name: `Dealer Growth Marketing in ${location.name}`,
          description: location.marketContext,
          path: `/city/${location.slug}`,
          areaServedName: location.name,
        })}
      />
      <JsonLd
        data={localBusinessSchema({
          name: `AutoSutra Dealership Marketing in ${location.name}`,
          description: location.marketContext,
          path: `/city/${location.slug}`,
          areaServedName: `${location.name}, ${location.region}`,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: location.name, path: `/city/${location.slug}` },
        ])}
      />
      <JsonLd data={faqPageSchema(location.faqs)} />

      <section className="relative overflow-hidden bg-ink px-6 pt-40 pb-28 text-center text-ink-foreground lg:px-8 lg:pb-32">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="pointer-events-none absolute -top-32 left-1/2 size-96 -translate-x-1/2 rounded-full bg-brand/25 blur-[120px]" />
        <div className="relative mx-auto max-w-3xl">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
            <MapPin className="size-3.5" />
            {location.region}
            {location.isHQ && " · Headquarters"}
          </span>
          <h1 className="mx-auto mt-4 max-w-2xl text-balance font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
            Grow Your Dealership in {location.name}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
            {location.marketContext}
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
          { name: location.name, path: `/city/${location.slug}` },
        ]}
      />

      <section className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <h2 className="font-heading text-3xl font-semibold text-ink sm:text-4xl">
          Why {location.name} dealerships choose AutoSutra
        </h2>
        <p className="mt-4 text-foreground/80">{location.buyerBehavior}</p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-3">
          {location.highlights.map((highlight) => (
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
            Our services in {location.name}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
            All 12 services, delivered for {location.name} dealerships.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = serviceIconMap[service.icon];
              const href = isDistrict
                ? `/services/${service.slug}`
                : `/services/${service.slug}/${location.slug}`;
              return (
                <Link
                  key={service.slug}
                  href={href}
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-colors hover:border-brand/40"
                >
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-brand">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-semibold text-ink">
                      {service.name} in {location.name}
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
          {location.faqs.map((faq) => (
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

      <section className="mx-auto max-w-4xl px-6 pb-4 lg:px-8">
        <div className="rounded-3xl border border-border bg-card p-8">
          <h2 className="text-center font-heading text-lg font-semibold text-ink">
            Explore more
          </h2>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {[
              { label: "Services", href: "/services" },
              { label: "Solutions", href: "/solutions" },
              { label: "Pricing", href: "/pricing" },
              { label: "Resources", href: "/resources" },
              { label: "Contact Us", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-border px-4 py-1.5 text-sm text-foreground/70 transition-colors hover:border-brand/40 hover:text-brand"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <h2 className="text-center font-heading text-2xl font-semibold text-ink">
          {otherLocationsHeading}
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {otherLocations.map((other) => (
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
              Ready to grow your {location.name} dealership?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/60">
              Tell us about your dealership and we&apos;ll map out a growth
              plan built around {location.name}&apos;s market.
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
