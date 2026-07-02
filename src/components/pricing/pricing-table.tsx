"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { formatInr, pricingTiers } from "@/data/pricing";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function PricingTable() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={staggerContainer(0.08)}
      className="grid gap-6 lg:grid-cols-3"
    >
      {pricingTiers.map((tier) => (
        <motion.div
          key={tier.name}
          variants={fadeUp}
          className={cn(
            "relative flex flex-col rounded-3xl border p-8 shadow-sm",
            tier.featured
              ? "border-brand bg-ink text-ink-foreground shadow-xl lg:-translate-y-4"
              : "border-border bg-card",
          )}
        >
          {tier.featured && (
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-4 py-1 text-xs font-semibold text-white">
              Most Popular
            </span>
          )}

          <h3 className="font-heading text-2xl font-semibold">
            {tier.name}
          </h3>
          <p
            className={cn(
              "mt-2 text-sm",
              tier.featured ? "text-white/60" : "text-muted-foreground",
            )}
          >
            {tier.description}
          </p>

          <div className="mt-6 flex items-baseline gap-1">
            <span className="font-heading text-4xl font-semibold">
              {formatInr(tier.price)}
            </span>
            <span
              className={cn(
                "text-sm",
                tier.featured ? "text-white/50" : "text-muted-foreground",
              )}
            >
              {tier.period}
            </span>
          </div>
          <p
            className={cn(
              "mt-1 text-xs",
              tier.featured ? "text-white/40" : "text-muted-foreground/70",
            )}
          >
            Annual billing available — contact us for a custom quote.
          </p>

          <Link
            href={tier.href}
            className={cn(
              buttonVariants({ size: "lg" }),
              "mt-8 w-full rounded-full",
              tier.featured
                ? "bg-brand text-white hover:bg-brand/90"
                : "bg-ink text-ink-foreground hover:bg-ink/90",
            )}
          >
            {tier.cta}
          </Link>

          <ul className="mt-8 space-y-3">
            {tier.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm">
                <Check
                  className={cn(
                    "mt-0.5 size-4 shrink-0",
                    tier.featured ? "text-brand-accent" : "text-brand",
                  )}
                />
                <span
                  className={
                    tier.featured ? "text-white/80" : "text-foreground/80"
                  }
                >
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  );
}
