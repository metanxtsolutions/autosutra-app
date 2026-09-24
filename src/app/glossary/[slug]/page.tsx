import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { JsonLd } from "@/components/shared/json-ld";
import { WhatsAppLink } from "@/components/shared/whatsapp-link";
import { serviceIconMap } from "@/lib/icon-map";
import {
  breadcrumbSchema,
  definedTermSchema,
  webPageSchema,
} from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import {
  getGlossaryTerm,
  glossaryTerms,
  type GlossaryTerm,
} from "@/data/glossary";
import { services } from "@/data/services";
import { resources } from "@/data/resources";

export function generateStaticParams() {
  return glossaryTerms.map((term) => ({ slug: term.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const term = getGlossaryTerm(slug);
  if (!term) return {};
  return pageMetadata({
    title: `${term.term} Explained`,
    description: term.definition,
    path: `/glossary/${term.slug}`,
    keywords: [
      `what is ${term.term.toLowerCase()}`,
      `${term.term.toLowerCase()} meaning dealership`,
      ...(term.alsoKnownAs ?? []).map((name) => `${name} meaning`),
    ],
  });
}

export default async function GlossaryTermPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const term = getGlossaryTerm(slug);
  if (!term) notFound();

  const path = `/glossary/${term.slug}`;
  const relatedTerms = term.relatedTermSlugs
    .map(getGlossaryTerm)
    .filter((item): item is GlossaryTerm => Boolean(item));
  const relatedServices = services.filter((service) =>
    term.relatedServiceSlugs.includes(service.slug),
  );
  const relatedResources = (term.relatedResourceSlugs ?? [])
    .map((resourceSlug) => resources.find((item) => item.slug === resourceSlug))
    .filter((item): item is (typeof resources)[number] => Boolean(item));

  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Glossary", path: "/glossary" },
    { name: term.term, path },
  ];

  return (
    <>
      <JsonLd data={definedTermSchema(term)} />
      <JsonLd
        data={webPageSchema({
          name: `${term.term} Explained`,
          description: term.definition,
          path,
        })}
      />
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />

      <section className="relative overflow-hidden bg-ink px-6 pt-40 pb-24 text-center text-ink-foreground lg:px-8">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="pointer-events-none absolute -top-32 left-1/2 size-96 -translate-x-1/2 rounded-full bg-brand/25 blur-[120px]" />
        <div className="relative mx-auto max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
            Glossary &middot; {term.category}
          </span>
          <h1 className="mx-auto mt-4 max-w-2xl text-balance font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
            {term.term}
          </h1>
          {term.alsoKnownAs && (
            <p className="mt-3 text-sm text-white/50">
              Also called: {term.alsoKnownAs.join(", ")}
            </p>
          )}
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/75">
            {term.definition}
          </p>
        </div>
      </section>

      <Breadcrumbs items={breadcrumbItems} />

      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        <h2 className="font-heading text-2xl font-semibold text-ink">
          {term.term} in dealership marketing
        </h2>
        <div className="mt-4 space-y-4">
          {term.body.map((paragraph) => (
            <p key={paragraph} className="text-foreground/80">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {relatedTerms.length > 0 && (
        <section className="mx-auto max-w-5xl px-6 pb-16 lg:px-8">
          <h2 className="font-heading text-2xl font-semibold text-ink">
            Related terms
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {relatedTerms.map((related) => (
              <li key={related.slug}>
                <Link
                  href={`/glossary/${related.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-5 shadow-sm transition-colors hover:border-brand/40"
                >
                  <span className="text-xs font-medium uppercase tracking-wide text-brand">
                    {related.category}
                  </span>
                  <p className="mt-2 font-heading font-semibold text-ink">
                    {related.term}
                  </p>
                  <p className="mt-2 line-clamp-3 flex-1 text-sm text-foreground/70">
                    {related.definition}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-brand">
                    Read definition
                    <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {relatedServices.length > 0 && (
        <section className="bg-muted/40 py-16">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <h2 className="font-heading text-2xl font-semibold text-ink">
              Where it applies
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              AutoSutra services where {term.term.toLowerCase()} comes into play.
            </p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-3">
              {relatedServices.map((service) => {
                const Icon = serviceIconMap[service.icon];
                return (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="group flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-colors hover:border-brand/40"
                    >
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent text-brand">
                        <Icon className="size-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-heading font-semibold text-ink">
                          {service.name}
                        </p>
                        <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                          {service.summary}
                        </p>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      )}

      {relatedResources.length > 0 && (
        <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
          <h2 className="font-heading text-2xl font-semibold text-ink">
            Further reading
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {relatedResources.map((resource) => (
              <li key={resource.slug}>
                <Link
                  href={`/resources/${resource.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-5 shadow-sm transition-colors hover:border-brand/40"
                >
                  <span className="text-xs font-medium uppercase tracking-wide text-brand">
                    {resource.category}
                  </span>
                  <p className="mt-2 flex-1 font-heading text-sm font-semibold text-ink">
                    {resource.title}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-brand">
                    Read more
                    <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mx-auto max-w-5xl px-6 pb-8 lg:px-8">
        <Link
          href="/glossary"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-brand"
        >
          <ArrowRight className="size-3.5 rotate-180" />
          Back to the full glossary
        </Link>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-16 text-center text-ink-foreground sm:px-16">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
          <div className="pointer-events-none absolute -top-24 left-1/2 size-96 -translate-x-1/2 rounded-full bg-brand/30 blur-[110px]" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-balance font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
              Want this applied to your dealership?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/60">
              Book a free consultation and we&apos;ll map it to your city,
              brands, and current lead volume.
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
                location="glossary_term"
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
