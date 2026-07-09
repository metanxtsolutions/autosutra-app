import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, MessageCircle, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { JsonLd } from "@/components/shared/json-ld";
import { WhatsAppLink } from "@/components/shared/whatsapp-link";
import { serviceIconMap } from "@/lib/icon-map";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { services } from "@/data/services";
import { caseStudyTeasers } from "@/data/case-studies";
import { resources } from "@/data/resources";
import { resourceArticles } from "@/data/resource-articles";
import { cityProfiles } from "@/data/city-content";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return pageMetadata({
    title: service.name,
    description: `${service.summary} Serving dealerships across India.`,
    path: `/services/${service.slug}`,
    keywords: [
      `${service.name} for car dealerships India`,
      `${service.name} agency India`,
      `${service.name} Mumbai`,
      `${service.name} Delhi`,
    ],
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  const Icon = serviceIconMap[service.icon];

  const relatedCaseStudy = caseStudyTeasers.find((study) =>
    study.category.includes(service.name),
  );

  const relatedResources = resources.filter((resource) =>
    resourceArticles[resource.slug]?.relatedServiceSlugs.includes(
      service.slug,
    ),
  );

  const currentIndex = services.findIndex((item) => item.slug === slug);
  const otherServices = Array.from({ length: 4 }, (_, i) => {
    const index = (currentIndex + i + 1) % services.length;
    return services[index];
  }).filter((item) => item.slug !== service.slug);

  return (
    <>
      <JsonLd data={serviceSchema(service)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.name, path: `/services/${service.slug}` },
        ])}
      />

      <section className="relative overflow-hidden bg-ink px-6 pt-40 pb-28 text-center text-ink-foreground lg:px-8 lg:pb-32">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="pointer-events-none absolute -top-32 left-1/2 size-96 -translate-x-1/2 rounded-full bg-brand/25 blur-[120px]" />
        <div className="relative mx-auto max-w-2xl">
          <div className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-white/15 bg-white/5">
            <Icon className="size-6 text-brand-accent" />
          </div>
          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
              Service
            </span>
            {service.popular && (
              <span className="inline-flex items-center gap-1 rounded-full bg-brand-accent/15 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-brand-accent uppercase">
                <Sparkles className="size-3" />
                Popular
              </span>
            )}
          </div>
          <h1 className="mt-4 text-balance font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
            {service.name}
          </h1>
          <p className="mt-6 text-balance text-lg text-white/60">
            {service.summary}
          </p>
          <p className="mt-4 text-sm font-medium text-brand-accent">
            Ideal for: {service.idealFor}
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
              location="service_detail_hero"
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
          What you get
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
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

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <h2 className="text-center font-heading text-2xl font-semibold text-ink">
          Available in your city
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {cityProfiles.map((city) => (
            <Link
              key={city.slug}
              href={`/services/${service.slug}/${city.slug}`}
              className="rounded-full border border-border bg-card px-5 py-2 text-sm font-medium text-foreground/80 transition-colors hover:border-brand/40 hover:text-brand"
            >
              {city.name}
            </Link>
          ))}
        </div>
      </section>

      {relatedCaseStudy && (
        <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
          <h2 className="text-center font-heading text-3xl font-semibold text-ink sm:text-4xl">
            See it in action
          </h2>
          <Link
            href={`/case-studies/${relatedCaseStudy.slug}`}
            className="group mt-10 flex flex-col justify-between gap-6 rounded-2xl border border-border bg-gradient-to-br from-card to-muted/60 p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg sm:flex-row sm:items-center"
          >
            <div>
              <span className="text-xs font-medium uppercase tracking-wide text-brand">
                {relatedCaseStudy.category}
              </span>
              <h3 className="mt-3 font-heading text-xl font-semibold text-ink">
                {relatedCaseStudy.headline}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {relatedCaseStudy.dealership}
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-4">
              <div className="text-right">
                <p className="font-heading text-2xl font-semibold text-brand">
                  {relatedCaseStudy.metric.value}
                </p>
                <p className="text-xs text-muted-foreground">
                  {relatedCaseStudy.metric.label}
                </p>
              </div>
              <ArrowRight className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-brand" />
            </div>
          </Link>
        </section>
      )}

      {relatedResources.length > 0 && (
        <section className="bg-muted/40 py-20">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <h2 className="text-center font-heading text-3xl font-semibold text-ink sm:text-4xl">
              Learn more
            </h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {relatedResources.slice(0, 3).map((resource) => (
                <Link
                  key={resource.slug}
                  href={`/resources/${resource.slug}`}
                  className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-colors hover:border-brand/40"
                >
                  <span className="text-xs font-medium uppercase tracking-wide text-brand">
                    {resource.category}
                  </span>
                  <p className="mt-3 font-heading font-semibold text-ink">
                    {resource.title}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
                    Read more
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <h2 className="text-center font-heading text-3xl font-semibold text-ink sm:text-4xl">
          Explore other services
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {otherServices.map((other) => {
            const OtherIcon = serviceIconMap[other.icon];
            return (
              <Link
                key={other.slug}
                href={`/services/${other.slug}`}
                className="group flex flex-col rounded-2xl border border-border bg-card p-5 shadow-sm transition-colors hover:border-brand/40"
              >
                <div className="flex size-9 items-center justify-center rounded-lg bg-accent text-brand">
                  <OtherIcon className="size-4" />
                </div>
                <p className="mt-4 font-heading text-sm font-semibold text-ink">
                  {other.name}
                </p>
                <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-brand">
                  Learn more
                  <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/services"
            className={cn(buttonVariants({ variant: "outline" }), "rounded-full")}
          >
            View all services
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-16 text-center text-ink-foreground sm:px-16">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
          <div className="pointer-events-none absolute -top-24 left-1/2 size-96 -translate-x-1/2 rounded-full bg-brand/30 blur-[110px]" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-balance font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
              Ready to add {service.name} to your growth stack?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/60">
              Tell us about your dealership and we&apos;ll map out how{" "}
              {service.name} fits into your plan.
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
                location="service_detail_footer"
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
