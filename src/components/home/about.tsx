"use client";

import { motion } from "framer-motion";
import { Compass, Eye, Target } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const pillars = [
  {
    icon: Target,
    title: "Mission",
    body: "Empower dealerships with technology, verified data, and performance marketing to generate measurable business growth.",
  },
  {
    icon: Eye,
    title: "Vision",
    body: "Become India's most trusted automobile growth platform.",
  },
  {
    icon: Compass,
    title: "Approach",
    body: "Every campaign is built around your inventory, your city, and your sales targets — not a one-size-fits-all playbook.",
  },
];

export function About() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            About AutoSutra
          </span>
          <h2 className="mt-4 text-balance font-heading text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Built by people who understand the automotive sales floor.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            AutoSutra was built for one reason: dealerships were spending on
            marketing without a reliable way to measure what actually turned
            into sales. We combine verified lead generation, performance
            marketing, and dealer-grade data intelligence into one growth
            partner — so every rupee of ad spend is accountable to a real
            buyer, not a click.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            Today, we work across car, bike, EV, and used-car dealerships,
            plus OEM partners, helping them turn digital demand into
            showroom footfall.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.12)}
          className="grid gap-4"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={fadeUp}
              className="flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-brand">
                <pillar.icon className="size-5" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-ink">
                  {pillar.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {pillar.body}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
