"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { caseStudyTeasers } from "@/data/case-studies";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function CaseStudyTeaser() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Case Studies
          </span>
          <h2 className="mt-4 text-balance font-heading text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Real dealerships, real growth
          </h2>
        </div>
        <Link
          href="/case-studies"
          className={cn(buttonVariants({ variant: "outline" }), "rounded-full")}
        >
          View all case studies
          <ArrowRight className="size-4" />
        </Link>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={staggerContainer(0.08)}
        className="mt-14 grid gap-5 lg:grid-cols-3"
      >
        {caseStudyTeasers.map((study) => (
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
                  {study.dealership}
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
    </section>
  );
}
