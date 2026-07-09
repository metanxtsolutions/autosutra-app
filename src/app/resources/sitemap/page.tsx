import Link from "next/link";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { pageMetadata } from "@/lib/seo";
import { resources, type Resource } from "@/data/resources";

export const metadata = pageMetadata({
  title: "Resources sitemap",
  description:
    "A full index of every AutoSutra Resources guide, article, download, category, and topic page.",
  path: "/resources/sitemap",
});

const categories: Resource["category"][] = ["Guide", "Blog", "Download"];

export default function ResourcesSitemapPage() {
  const allTags = Array.from(
    new Set(resources.flatMap((resource) => resource.tags)),
  ).sort();

  return (
    <>
      <section className="relative overflow-hidden bg-ink px-6 pt-40 pb-24 text-center text-ink-foreground lg:px-8">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="pointer-events-none absolute -top-32 left-1/2 size-96 -translate-x-1/2 rounded-full bg-brand/25 blur-[120px]" />
        <div className="relative">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
            Resources
          </span>
          <h1 className="mx-auto mt-4 max-w-3xl text-balance font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
            Resources sitemap
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-white/60">
            Every guide, article, download, category, and topic page in one
            place.
          </p>
        </div>
      </section>

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: "Sitemap", path: "/resources/sitemap" },
        ]}
      />

      <section className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <div>
          <h2 className="font-heading text-xl font-semibold text-ink">
            Categories
          </h2>
          <ul className="mt-4 flex flex-wrap gap-3">
            {categories.map((category) => (
              <li key={category}>
                <Link
                  href={`/resources/category/${category.toLowerCase()}`}
                  className="rounded-full border border-border px-4 py-1.5 text-sm text-foreground/70 transition-colors hover:border-brand/40 hover:text-brand"
                >
                  {category}s
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="font-heading text-xl font-semibold text-ink">
            Topics
          </h2>
          <ul className="mt-4 flex flex-wrap gap-3">
            {allTags.map((tag) => (
              <li key={tag}>
                <Link
                  href={`/resources/tag/${tag}`}
                  className="rounded-full border border-border px-4 py-1.5 text-sm text-foreground/70 transition-colors hover:border-brand/40 hover:text-brand"
                >
                  {tag.replace(/-/g, " ")}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="font-heading text-xl font-semibold text-ink">
            All articles
          </h2>
          <ul className="mt-4 divide-y divide-border rounded-2xl border border-border">
            {resources.map((resource) => (
              <li key={resource.slug}>
                <Link
                  href={`/resources/${resource.slug}`}
                  className="flex items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-muted/40"
                >
                  <span className="text-sm font-medium text-foreground">
                    {resource.title}
                  </span>
                  <span className="shrink-0 text-xs text-muted-foreground">
                    {resource.category}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
