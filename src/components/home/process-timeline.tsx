"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { processSteps } from "@/data/process";

gsap.registerPlugin(ScrollTrigger);

export function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!lineRef.current || !containerRef.current) return;

      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "bottom 70%",
            scrub: 0.6,
          },
        },
      );

      gsap.utils.toArray<HTMLElement>("[data-process-step]").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          },
        );
      });
    },
    { scope: containerRef },
  );

  return (
    <section className="bg-ink py-24 text-ink-foreground">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
            Our Process
          </span>
          <h2 className="mt-4 text-balance font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
            From audit to scale, in five deliberate steps
          </h2>
        </div>

        <div ref={containerRef} className="relative mt-20">
          <div className="absolute top-2 bottom-2 left-6 w-px bg-white/10" />
          <div
            ref={lineRef}
            className="absolute top-2 bottom-2 left-6 w-px scale-y-0 bg-gradient-to-b from-brand-accent to-brand"
          />

          <ol className="space-y-12">
            {processSteps.map((item) => (
              <li
                key={item.step}
                data-process-step
                className="relative flex gap-6 pl-16"
              >
                <span className="absolute top-0 left-6 flex size-4 -translate-x-1/2 items-center justify-center rounded-full bg-brand-accent ring-4 ring-ink" />
                <div>
                  <span className="font-heading text-sm font-semibold text-brand-accent">
                    {item.step}
                  </span>
                  <h3 className="mt-1 font-heading text-2xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-white/60">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
