import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { JsonLd } from "@/components/shared/json-ld";
import { WhatsAppLink } from "@/components/shared/whatsapp-link";
import { serviceIconMap } from "@/lib/icon-map";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { caseStudyTeasers } from "@/data/case-studies";
import { caseStudyContent } from "@/data/case-study-content";
import { services } from "@/data/services";

export function generateStaticParams() {
  return caseStudyTeasers.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudyTeasers.find((item) => item.slug === slug);
  if (!study) return {};
  return pageMetadata({
    title: study.headline,
    description: `${study.dealership}: ${study.category}. ${study.headline}, an AutoSutra case study for ${study.industry.toLowerCase()} in India.`,
    path: `/case-studies/${study.slug}`,
  });
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudyTeasers.find((item) => item.slug === slug);
  const content = caseStudyContent[slug];
  if (!study || !content) notFound();

  const relatedServices = services.filter((service) =>
    content.serviceSlugs.includes(service.slug),
  );

  const currentIndex = caseStudyTeasers.findIndex((item) => item.slug === slug);
  const otherCaseStudies = Array.from({ length: 3 }, (_, i) => {
    const index = (currentIndex + i + 1) % caseStudyTeasers.length;
    return caseStudyTeasers[index];
  }).filter((item) => item.slug !== study.slug);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/case-studies" },
          { name: study.headline, path: `/case-studies/${study.slug}` },
        ])}
      />

      <section className="relative overflow-hidden bg-ink px-6 pt-40 pb-28 text-center text-ink-foreground lg:px-8 lg:pb-32">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="pointer-events-none absolute -top-32 left-1/2 size-96 -translate-x-1/2 rounded-full bg-brand/25 blur-[120px]" />
        <div className="relative mx-auto max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
            {study.industry} &middot; {study.category}
          </span>
          <h1 className="mx-auto mt-4 max-w-2xl text-balance font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
            {study.headline}
          </h1>
          <p className="mt-6 text-lg text-white/60">{study.dealership}</p>

          <div className="mx-auto mt-10 inline-flex flex-col items-center rounded-2xl border border-white/15 bg-white/5 px-10 py-6">
            <span className="font-heading text-5xl font-semibold text-brand-accent">
              {study.metric.value}
            </span>
            <span className="mt-2 text-sm text-white/60">
              {study.metric.label}
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
        <h2 className="font-heading text-2xl font-semibold text-ink">
          The situation
        </h2>
        <p className="mt-3 text-foreground/80">{content.challenge}</p>

        <h2 className="mt-12 font-heading text-2xl font-semibold text-ink">
          What we did
        </h2>
        <ul className="mt-4 space-y-3">
          {content.approach.map((step, index) => (
            <li key={step} className="flex items-start gap-3">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-semibold text-white">
                {index + 1}
              </span>
              <span className="pt-0.5 text-foreground/80">{step}</span>
            </li>
          ))}
        </ul>

        <h2 className="mt-12 font-heading text-2xl font-semibold text-ink">
          The result
        </h2>
        <p className="mt-3 text-foreground/80">{content.results}</p>
      </section>

      {relatedServices.length > 0 && (
        <section className="bg-muted/40 py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="text-center font-heading text-2xl font-semibold text-ink">
              Services used in this engagement
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {relatedServices.map((service) => {
                const Icon = serviceIconMap[service.icon];
                return (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-colors hover:border-brand/40"
                  >
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-brand">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-ink">
                        {service.name}
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
          </div>
        </section>
      )}

      {otherCaseStudies.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <h2 className="text-center font-heading text-3xl font-semibold text-ink sm:text-4xl">
            More dealer growth stories
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {otherCaseStudies.map((other) => (
              <Link
                key={other.slug}
                href={`/case-studies/${other.slug}`}
                className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-gradient-to-br from-card to-muted/60 p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div>
                  <span className="text-xs font-medium uppercase tracking-wide text-brand">
                    {other.category}
                  </span>
                  <h3 className="mt-3 font-heading text-lg font-semibold text-ink">
                    {other.headline}
                  </h3>
                </div>
                <div className="mt-6 flex items-end justify-between">
                  <div>
                    <p className="font-heading text-xl font-semibold text-brand">
                      {other.metric.value}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {other.metric.label}
                    </p>
                  </div>
                  <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-brand" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-16 text-center text-ink-foreground sm:px-16">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
          <div className="pointer-events-none absolute -top-24 left-1/2 size-96 -translate-x-1/2 rounded-full bg-brand/30 blur-[110px]" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-balance font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
              Want results like these for your dealership?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/60">
              Book a consultation and we&apos;ll show you what&apos;s
              realistic for your market in the first 90 days.
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
                location="case_study_detail"
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
