import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ResourceCoverImage } from "@/components/resources/resource-cover-image";
import type { Resource } from "@/data/resources";

export function RelatedArticles({
  resources,
  heading = "Related reading",
}: {
  resources: Resource[];
  heading?: string;
}) {
  if (resources.length === 0) return null;

  return (
    <section className="mx-auto max-w-3xl">
      <h2 className="font-heading text-2xl font-semibold text-ink">{heading}</h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-3">
        {resources.map((resource) => (
          <Link
            key={resource.slug}
            href={`/resources/${resource.slug}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-brand/40"
          >
            <ResourceCoverImage
              resource={resource}
              className="aspect-[16/9] w-full object-cover"
            />
            <div className="flex flex-1 flex-col p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-accent">
                {resource.category}
              </p>
              <p className="mt-2 flex-1 font-heading text-sm font-semibold text-ink">
                {resource.title}
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-brand">
                Read
                <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
