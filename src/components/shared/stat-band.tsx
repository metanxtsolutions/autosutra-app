"use client";

import CountUp from "react-countup";
import { stats } from "@/data/stats";

export function StatBand() {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border shadow-xl lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
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
          <span className="text-sm text-muted-foreground">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
