import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { ResourceCoverImage } from "@/components/resources/resource-cover-image";
import type { Resource } from "@/data/resources";

export function FeaturedResource({ resource }: { resource: Resource }) {
  return (
    <Link
      href={`/resources/${resource.slug}`}
      className="group grid overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-shadow hover:shadow-xl lg:grid-cols-2"
    >
      <ResourceCoverImage
        resource={resource}
        priority
        sizes="(min-width: 1024px) 600px, 100vw"
        className="aspect-[16/9] w-full object-cover lg:aspect-auto lg:h-full"
      />
      <div className="flex flex-col justify-center p-8 sm:p-10">
        <span className="inline-flex w-fit items-center rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-brand">
          Featured {resource.category}
        </span>
        <h2 className="mt-4 text-balance font-heading text-2xl font-semibold text-ink sm:text-3xl">
          {resource.title}
        </h2>
        <p className="mt-3 text-muted-foreground">{resource.excerpt}</p>
        <div className="mt-6 flex items-center gap-4">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand">
            Read now
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </span>
          <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Clock className="size-3.5" />
            {resource.readTime}
          </span>
        </div>
      </div>
    </Link>
  );
}
