"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { stats } from "@/data/stats";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function Stats() {
  return (
    <section className="relative -mt-16 px-6 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={staggerContainer(0.1)}
        className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border shadow-xl lg:grid-cols-4"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={fadeUp}
            className="flex flex-col items-center gap-2 bg-card px-6 py-10 text-center"
          >
            <span className="font-heading text-4xl font-semibold text-ink sm:text-5xl">
              <CountUp
                end={stat.value}
                duration={2}
                enableScrollSpy
                scrollSpyOnce
                suffix={stat.suffix}
              />
            </span>
            <span className="text-sm text-muted-foreground">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
