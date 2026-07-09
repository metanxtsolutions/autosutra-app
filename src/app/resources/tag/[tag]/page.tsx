import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { JsonLd } from "@/components/shared/json-ld";
import { ResourcesGrid } from "@/components/resources/resources-grid";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { resources } from "@/data/resources";

function allTags() {
  return Array.from(new Set(resources.flatMap((resource) => resource.tags)));
}

export function generateStaticParams() {
  return allTags().map((tag) => ({ tag }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tag: string }>;
}): Promise<Metadata> {
  const { tag } = await params;
  if (!allTags().includes(tag)) return {};
  const label = tag.replace(/-/g, " ");
  return pageMetadata({
    title: `${label} resources`,
    description: `Guides, articles, and downloads tagged ${label} for Indian automotive dealerships.`,
    path: `/resources/tag/${tag}`,
  });
}

export default async function ResourceTagPage({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag } = await params;
  if (!allTags().includes(tag)) notFound();

  const label = tag.replace(/-/g, " ");
  const items = resources.filter((resource) => resource.tags.includes(tag));

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: label, path: `/resources/tag/${tag}` },
        ])}
      />

      <section className="relative overflow-hidden bg-ink px-6 pt-40 pb-24 text-center text-ink-foreground lg:px-8">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="pointer-events-none absolute -top-32 left-1/2 size-96 -translate-x-1/2 rounded-full bg-brand/25 blur-[120px]" />
        <div className="relative">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
            Topic
          </span>
          <h1 className="mx-auto mt-4 max-w-3xl text-balance font-heading text-5xl font-semibold tracking-tight capitalize sm:text-6xl">
            {label}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
            Every AutoSutra guide, article, and download tagged {label}.
          </p>
        </div>
      </section>

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: label, path: `/resources/tag/${tag}` },
        ]}
      />

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <ResourcesGrid items={items} hideFilters />
      </section>
    </>
  );
}
