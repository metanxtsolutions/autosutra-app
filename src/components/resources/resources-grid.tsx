"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Download, Newspaper } from "lucide-react";
import { cn } from "@/lib/utils";
import { resources, type Resource } from "@/data/resources";
import { fadeUp, staggerContainer } from "@/lib/motion";

const filters = ["All", "Guide", "Blog", "Download"] as const;

const categoryIcon: Record<Resource["category"], typeof BookOpen> = {
  Guide: BookOpen,
  Blog: Newspaper,
  Download: Download,
};

const categoryCta: Record<Resource["category"], string> = {
  Guide: "Read guide",
  Blog: "Read article",
  Download: "View worksheet",
};

export function ResourcesGrid() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const filtered =
    active === "All"
      ? resources
      : resources.filter((resource) => resource.category === active);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
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

      <motion.div
        key={active}
        initial="hidden"
        animate="show"
        variants={staggerContainer(0.06)}
        className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {filtered.map((resource) => {
          const Icon = categoryIcon[resource.category];
          return (
            <motion.div key={resource.slug} variants={fadeUp}>
              <Link
                href={`/resources/${resource.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-accent text-brand">
                    <Icon className="size-5" />
                  </div>
                  <ArrowRight className="size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-semibold text-ink">
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
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
