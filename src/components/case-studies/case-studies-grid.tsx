"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { caseStudyTeasers } from "@/data/case-studies";
import { fadeUp, staggerContainer } from "@/lib/motion";

const filters = [
  "All",
  "Car Dealerships",
  "Bike Dealerships",
  "EV Dealers",
  "Used Car Dealers",
  "OEMs",
] as const;

export function CaseStudiesGrid() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const filtered =
    active === "All"
      ? caseStudyTeasers
      : caseStudyTeasers.filter((study) => study.industry === active);

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
            {filter}
          </button>
        ))}
      </div>

      <motion.div
        key={active}
        initial="hidden"
        animate="show"
        variants={staggerContainer(0.06)}
        className="mt-12 grid gap-5 lg:grid-cols-3"
      >
        {filtered.map((study) => (
          <motion.div key={study.slug} variants={fadeUp}>
            <Link
              href={`/case-studies/${study.slug}`}
              className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-gradient-to-br from-card to-muted/60 p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div>
                <span className="text-xs font-medium uppercase tracking-wide text-brand">
                  {study.category}
                </span>
                <h3 className="mt-4 font-heading text-xl font-semibold text-ink">
                  {study.headline}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {study.dealership} · {study.industry}
                </p>
              </div>
              <div className="mt-8 flex items-end justify-between border-t border-border pt-6">
                <div>
                  <p className="font-heading text-3xl font-semibold text-ink">
                    {study.metric.value}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {study.metric.label}
                  </p>
                </div>
                <ArrowRight className="size-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-brand" />
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-sm text-muted-foreground">
          No case studies in this category yet — check back soon.
        </p>
      )}
    </div>
  );
}
