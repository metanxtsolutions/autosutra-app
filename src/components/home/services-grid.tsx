"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { serviceIconMap } from "@/lib/icon-map";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function ServicesGrid() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
          Services
        </span>
        <h2 className="mt-4 text-balance font-heading text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Everything a growing dealership needs, in one place
        </h2>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={staggerContainer(0.06)}
        className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {services.map((service) => {
          const Icon = serviceIconMap[service.icon];
          return (
            <motion.div key={service.slug} variants={fadeUp}>
              <Link
                href={`/services/${service.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-accent text-brand">
                    <Icon className="size-5" />
                  </div>
                  <ArrowUpRight className="size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-semibold text-ink">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {service.summary}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand">
                  Read more
                  <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
