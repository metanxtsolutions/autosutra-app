"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { services } from "@/data/services";
import { solutions } from "@/data/solutions";
import { serviceIconMap } from "@/lib/icon-map";
import { fadeUp, staggerContainer } from "@/lib/motion";

const categories = [
  { slug: "all", name: "All Services" },
  ...solutions.map((s) => ({ slug: s.slug, name: s.name })),
];

function categoryForService(slug: string) {
  return solutions.find((s) => s.serviceSlugs.includes(slug))?.slug ?? "all";
}

export function ServiceExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [stack, setStack] = useState<string[]>([]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return services.filter((service) => {
      const matchesCategory =
        category === "all" || categoryForService(service.slug) === category;
      const matchesQuery =
        !q ||
        service.name.toLowerCase().includes(q) ||
        service.summary.toLowerCase().includes(q) ||
        service.idealFor.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  const toggleStack = (slug: string) => {
    setStack((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug],
    );
  };

  const stackHref =
    stack.length > 0
      ? `/contact?services=${encodeURIComponent(stack.join(","))}`
      : "/contact";

  return (
    <div>
      {/* Search */}
      <div className="relative mx-auto max-w-xl">
        <Search className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search services, e.g. WhatsApp or leads"
          className="h-12 rounded-full pl-11"
        />
      </div>

      {/* Category filter */}
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat.slug}
            type="button"
            onClick={() => setCategory(cat.slug)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              category === cat.slug
                ? "border-brand bg-brand text-white"
                : "border-border bg-card text-foreground/70 hover:border-brand/40 hover:text-brand",
            )}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Results count */}
      <p className="mt-6 text-center text-sm text-muted-foreground">
        Showing {filtered.length} of {services.length} services
        {stack.length > 0 && (
          <>
            {" "}
            ·{" "}
            <span className="font-medium text-brand">
              {stack.length} in your stack
            </span>
          </>
        )}
      </p>

      {/* Grid */}
      <motion.div
        key={category + query}
        initial="hidden"
        animate="show"
        variants={staggerContainer(0.05)}
        className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
      >
        {filtered.map((service) => {
          const Icon = serviceIconMap[service.icon];
          const isExpanded = expanded === service.slug;
          const isSelected = stack.includes(service.slug);
          return (
            <motion.div
              key={service.slug}
              variants={fadeUp}
              layout
              className={cn(
                "flex flex-col rounded-2xl border bg-card p-6 shadow-sm transition-colors",
                isSelected ? "border-brand/50 ring-1 ring-brand/20" : "border-border",
              )}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex size-11 items-center justify-center rounded-xl bg-accent text-brand">
                  <Icon className="size-5" />
                </div>
                <div className="flex items-center gap-2">
                  {service.popular && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-brand-accent/15 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-brand uppercase">
                      <Sparkles className="size-3" />
                      Popular
                    </span>
                  )}
                </div>
              </div>

              <h3 className="mt-4 font-heading text-lg font-semibold text-ink">
                {service.name}
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                {service.summary}
              </p>
              <p className="mt-3 text-xs font-medium text-brand">
                {service.idealFor}
              </p>

              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 space-y-4 border-t border-border pt-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          Benefits
                        </p>
                        <ul className="mt-2 space-y-1.5">
                          {service.benefits.map((benefit) => (
                            <li
                              key={benefit}
                              className="flex items-start gap-2 text-sm text-foreground/80"
                            >
                              <Check className="mt-0.5 size-3.5 shrink-0 text-brand" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          How it works
                        </p>
                        <ol className="mt-2 space-y-1.5">
                          {service.howItWorks.map((step, index) => (
                            <li
                              key={step}
                              className="flex items-start gap-2 text-sm text-foreground/80"
                            >
                              <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-muted text-[10px] font-semibold text-muted-foreground">
                                {index + 1}
                              </span>
                              {step}
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-5 flex items-center justify-between gap-3 border-t border-border pt-4">
                <button
                  type="button"
                  onClick={() =>
                    setExpanded(isExpanded ? null : service.slug)
                  }
                  className="inline-flex items-center gap-1 text-sm font-medium text-foreground/70 hover:text-foreground"
                >
                  {isExpanded ? "Show less" : "Show details"}
                  <ChevronDown
                    className={cn(
                      "size-4 transition-transform",
                      isExpanded && "rotate-180",
                    )}
                  />
                </button>

                <button
                  type="button"
                  onClick={() => toggleStack(service.slug)}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                    isSelected
                      ? "border-brand bg-brand text-white"
                      : "border-border text-foreground/70 hover:border-brand/40 hover:text-brand",
                  )}
                >
                  {isSelected ? (
                    <>
                      <Check className="size-3.5" /> Added
                    </>
                  ) : (
                    "+ Add to stack"
                  )}
                </button>
              </div>

              <Link
                href={`/services/${service.slug}`}
                className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-brand"
              >
                View full service page
                <ArrowRight className="size-3" />
              </Link>
            </motion.div>
          );
        })}
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-16 text-center text-sm text-muted-foreground">
          No services match &ldquo;{query}&rdquo;. Try a different search, or{" "}
          <Link href="/contact" className="text-brand underline">
            ask us directly
          </Link>
          .
        </p>
      )}

      {/* Floating stack summary */}
      <AnimatePresence>
        {stack.length > 0 && (
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-24 left-1/2 z-40 w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 lg:bottom-6"
          >
            <div className="flex items-center gap-4 rounded-2xl border border-border bg-card/95 p-4 shadow-2xl backdrop-blur-lg">
              <div className="flex -space-x-2">
                {stack.slice(0, 4).map((slug) => {
                  const service = services.find((s) => s.slug === slug);
                  if (!service) return null;
                  const Icon = serviceIconMap[service.icon];
                  return (
                    <span
                      key={slug}
                      className="flex size-9 items-center justify-center rounded-full border-2 border-card bg-accent text-brand"
                    >
                      <Icon className="size-4" />
                    </span>
                  );
                })}
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-ink">
                  {stack.length} service{stack.length > 1 ? "s" : ""} in your
                  stack
                </p>
                <button
                  type="button"
                  onClick={() => setStack([])}
                  className="text-xs text-muted-foreground hover:text-foreground"
                >
                  Clear all
                </button>
              </div>
              <Link
                href={stackHref}
                className={cn(
                  buttonVariants({ size: "sm" }),
                  "shrink-0 gap-1 rounded-full",
                )}
              >
                Get a quote
                <ArrowRight className="size-3.5" />
              </Link>
              <button
                type="button"
                onClick={() => setStack([])}
                aria-label="Dismiss stack"
                className="hidden shrink-0 text-muted-foreground hover:text-foreground sm:block"
              >
                <X className="size-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
