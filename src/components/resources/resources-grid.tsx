"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { ResourceCoverImage } from "@/components/resources/resource-cover-image";
import { resources, type Resource } from "@/data/resources";
import { fadeUp, staggerContainer } from "@/lib/motion";

const filters = ["All", "Guide", "Blog", "Download"] as const;

const categoryCta: Record<Resource["category"], string> = {
  Guide: "Read guide",
  Blog: "Read article",
  Download: "View worksheet",
};

export function ResourcesGrid({
  items = resources,
  hideFilters = false,
}: {
  items?: Resource[];
  hideFilters?: boolean;
}) {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const byCategory =
      hideFilters || active === "All"
        ? items
        : items.filter((r) => r.category === active);

    const q = query.trim().toLowerCase();
    if (!q) return byCategory;

    return byCategory.filter((resource) =>
      [
        resource.title,
        resource.excerpt,
        resource.primaryKeyword,
        ...resource.tags,
        ...resource.secondaryKeywords,
      ]
        .join(" ")
        .toLowerCase()
        .includes(q),
    );
  }, [items, active, query, hideFilters]);

  return (
    <div>
      <div className="relative mx-auto max-w-md">
        <Search className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search guides, articles, downloads..."
          aria-label="Search resources"
          className="h-12 rounded-full pl-11"
        />
      </div>

      {!hideFilters && (
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              active === filter
                ? "border-brand bg-brand text-white"
                : "border-border bg-card text-foreground/70 hover:border-brand/40 hover:text-brand",
            )}
          >
            {filter === "All" ? "All" : `${filter}s`}
          </button>
        ))}
      </div>
      )}

      {filtered.length === 0 ? (
        <p className="mt-16 text-center text-sm text-muted-foreground">
          No resources match &ldquo;{query}&rdquo;. Try a different search
          term.
        </p>
      ) : (
        <motion.div
          key={`${active}-${query}`}
          initial="hidden"
          animate="show"
          variants={staggerContainer(0.06)}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((resource) => (
            <motion.div key={resource.slug} variants={fadeUp}>
              <Link
                href={`/resources/${resource.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg"
              >
                <ResourceCoverImage
                  resource={resource}
                  className="aspect-[16/9] w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-lg font-semibold text-ink">
                    {resource.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">
                    {resource.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand">
                    {categoryCta[resource.category]}
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                  <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                    <span>{resource.category}</span>
                    <span>{resource.readTime}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
