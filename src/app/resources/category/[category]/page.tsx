import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { JsonLd } from "@/components/shared/json-ld";
import { ResourcesGrid } from "@/components/resources/resources-grid";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { resources, type Resource } from "@/data/resources";

const categories: Resource["category"][] = ["Guide", "Blog", "Download"];

const categoryDescription: Record<Resource["category"], string> = {
  Guide:
    "Step-by-step guides on lead generation, local SEO, CRM, and marketing for Indian car and bike dealerships.",
  Blog: "Practical articles and analysis on dealership marketing, leads, and growth in India.",
  Download: "Editable worksheets and templates for dealership marketing and CRM planning.",
};

function findCategory(slug: string): Resource["category"] | null {
  const match = categories.find(
    (category) => category.toLowerCase() === slug.toLowerCase(),
  );
  return match ?? null;
}

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.toLowerCase() }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = findCategory(categorySlug);
  if (!category) return {};
  return pageMetadata({
    title: `${category}s`,
    description: categoryDescription[category],
    path: `/resources/category/${categorySlug.toLowerCase()}`,
  });
}

export default async function ResourceCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categorySlug } = await params;
  const category = findCategory(categorySlug);
  if (!category) notFound();

  const items = resources.filter((resource) => resource.category === category);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: `${category}s`, path: `/resources/category/${categorySlug}` },
        ])}
      />

      <section className="relative overflow-hidden bg-ink px-6 pt-40 pb-24 text-center text-ink-foreground lg:px-8">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="pointer-events-none absolute -top-32 left-1/2 size-96 -translate-x-1/2 rounded-full bg-brand/25 blur-[120px]" />
        <div className="relative">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
            Resources
          </span>
          <h1 className="mx-auto mt-4 max-w-3xl text-balance font-heading text-5xl font-semibold tracking-tight sm:text-6xl">
            {category}s for dealer growth
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
            {categoryDescription[category]}
          </p>
        </div>
      </section>

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: `${category}s`, path: `/resources/category/${categorySlug}` },
        ]}
      />

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <ResourcesGrid items={items} hideFilters />
      </section>
    </>
  );
}
