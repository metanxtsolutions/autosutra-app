"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { fadeUp, staggerContainer } from "@/lib/motion";


export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-ink-foreground">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-glow" />
      <div className="pointer-events-none absolute -top-40 right-[-10%] size-[36rem] rounded-full bg-brand/30 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-20%] left-[-10%] size-[30rem] rounded-full bg-brand-accent/20 blur-[120px]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-40 pb-28 text-center lg:px-8 lg:pt-48 lg:pb-36">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur"
        >
          <Sparkles className="size-3.5 text-brand-accent" />
          India&apos;s Fastest Growing Automobile Marketing &amp; Solutions
          Agency
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="show"
          variants={staggerContainer(0.15)}
          className="max-w-4xl text-balance font-heading text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
        >
          <motion.span variants={fadeUp} className="block">
            Fuel your dealership&apos;s
          </motion.span>
          <motion.span variants={fadeUp} className="block">
            <span className="bg-gradient-to-r from-brand-accent to-brand bg-clip-text text-transparent">
              next 1,000 buyers.
            </span>
          </motion.span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ delay: 0.3 }}
          className="mt-8 max-w-2xl text-balance text-lg text-white/65 sm:text-xl"
        >
          AutoSutra connects car, bike, EV, and used-car dealerships with
          verified buyer leads, performance marketing, and dealer data
          intelligence — engineered for measurable growth, not vanity
          metrics.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ delay: 0.4 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "group h-13 gap-2 rounded-full bg-brand px-8 text-base hover:bg-brand/90",
            )}
          >
            Book a Demo
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/pricing"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-13 gap-2 rounded-full border-white/20 bg-white/5 px-8 text-base text-white hover:bg-white/10 hover:text-white",
            )}
          >
            <PlayCircle className="size-4" />
            See Pricing
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
