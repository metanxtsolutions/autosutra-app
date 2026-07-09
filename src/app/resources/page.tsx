import type { Metadata } from "next";
import Link from "next/link";
import { FeaturedResource } from "@/components/resources/featured-resource";
import { LatestResources } from "@/components/resources/latest-resources";
import { ResourcesGrid } from "@/components/resources/resources-grid";
import { NewsletterForm } from "@/components/layout/newsletter-form";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { resources } from "@/data/resources";

const baseMetadata = pageMetadata({
  title: "Resources",
  description:
    "Dealer growth guides, blog posts, and downloads from AutoSutra. Practical playbooks for verified leads, ad campaigns, SEO, and CRM for the Indian automotive market.",
  path: "/resources",
});

export const metadata: Metadata = {
  ...baseMetadata,
  alternates: {
    ...baseMetadata.alternates,
    types: {
      "application/rss+xml": "/resources/rss.xml",
    },
  },
};

const categories = ["Guide", "Blog", "Download"] as const;

export default function ResourcesPage() {
  const sortedByDate = [...resources].sort(
    (a, b) =>
      new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime(),
  );
  const featured =
    sortedByDate.find((resource) => resource.featured) ?? sortedByDate[0];
  const latest = sortedByDate
    .filter((resource) => resource.slug !== featured.slug)
    .slice(0, 4);

  const allTags = Array.from(
    new Set(resources.flatMap((resource) => resource.tags)),
  ).sort();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
        ])}
      />

      <section className="relative overflow-hidden bg-ink px-6 pt-40 pb-28 text-center text-ink-foreground lg:px-8">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="pointer-events-none absolute -top-32 left-1/2 size-96 -translate-x-1/2 rounded-full bg-brand/25 blur-[120px]" />
        <div className="relative">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
            Resources
          </span>
          <h1 className="mx-auto mt-4 max-w-3xl text-balance font-heading text-5xl font-semibold tracking-tight sm:text-6xl">
            Guides and insights for dealer growth
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
            Practical playbooks on leads, marketing, local SEO, and CRM for
            dealerships in India. New guides are added regularly, so
            subscribe below to get each one first.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pt-20 lg:px-8">
        <FeaturedResource resource={featured} />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <LatestResources resources={latest} />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-6 lg:px-8">
        <h2 className="text-center font-heading text-2xl font-semibold text-ink">
          Browse all resources
        </h2>
        <div className="mt-8">
          <ResourcesGrid />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-3xl border border-border bg-card p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="font-heading text-lg font-semibold text-ink">
              Browse by category
            </h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Link
                  key={category}
                  href={`/resources/category/${category.toLowerCase()}`}
                  className="rounded-full border border-border px-4 py-1.5 text-sm text-foreground/70 transition-colors hover:border-brand/40 hover:text-brand"
                >
                  {category}s
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
            <h2 className="font-heading text-lg font-semibold text-ink">
              Browse by topic
            </h2>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <Link
                  key={tag}
                  href={`/resources/tag/${tag}`}
                  className="rounded-full border border-border px-4 py-1.5 text-sm text-foreground/70 transition-colors hover:border-brand/40 hover:text-brand"
                >
                  {tag.replace(/-/g, " ")}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-border pt-6 text-sm">
            <Link
              href="/resources/sitemap"
              className="text-foreground/70 underline-offset-4 hover:text-brand hover:underline"
            >
              View full sitemap
            </Link>
            <Link
              href="/resources/rss.xml"
              className="text-foreground/70 underline-offset-4 hover:text-brand hover:underline"
            >
              RSS feed
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-14 text-center text-ink-foreground sm:px-16">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
          <div className="pointer-events-none absolute -top-20 left-1/2 size-80 -translate-x-1/2 rounded-full bg-brand/30 blur-[100px]" />
          <div className="relative">
            <h2 className="text-balance font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              Get every guide as it publishes
            </h2>
            <p className="mx-auto mt-3 max-w-md text-white/60">
              Dealer growth insights, delivered monthly. No spam.
            </p>
            <div className="mx-auto mt-6 max-w-sm">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
