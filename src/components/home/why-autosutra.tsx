"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  Handshake,
  Lightbulb,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    body: "AI-driven targeting and dealer tooling that evolves with the market, not legacy playbooks.",
  },
  {
    icon: ShieldCheck,
    title: "Transparency",
    body: "Every lead, every rupee, every result, visible in your dashboard, no black boxes.",
  },
  {
    icon: TrendingUp,
    title: "Performance",
    body: "We optimize for conversions and closed sales, not impressions or vanity reach.",
  },
  {
    icon: Handshake,
    title: "Trust",
    body: "Verified leads and honest reporting, even when the number isn't the one you wanted.",
  },
  {
    icon: Cpu,
    title: "Technology",
    body: "A dealer-built CRM and SaaS platform that connects every channel to one pipeline.",
  },
  {
    icon: Users,
    title: "Customer Success",
    body: "A dedicated growth partner, not a ticket queue, from onboarding to scale.",
  },
];

export function WhyAutoSutra() {
  return (
    <section className="bg-muted/40 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Why AutoSutra
          </span>
          <h2 className="mt-4 text-balance font-heading text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Six commitments behind every campaign
          </h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.08)}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {values.map((value) => (
            <motion.div
              key={value.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-border bg-card p-7 shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-ink text-ink-foreground transition-colors group-hover:bg-brand">
                <value.icon className="size-5" />
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold text-ink">
                {value.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {value.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
