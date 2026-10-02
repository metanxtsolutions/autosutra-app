import Link from "next/link";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

// The entrance animation runs in CSS (tw-animate-css) instead of
// framer-motion, so the hero text is painted as soon as the stylesheet
// loads rather than after React hydrates. The paragraph under the heading
// is the page's Largest Contentful Paint element, and framer-motion held it
// at opacity 0 until JavaScript ran, which on a throttled mobile connection
// was most of the gap between first paint and LCP. Timings mirror the old
// fadeUp and stagger variants: 600ms, a 28px rise, a 150ms stagger across
// the two heading lines, then 300ms and 400ms delays. Reduced-motion users
// get the final state with no animation. This also makes the hero a server
// component, so it ships no client JavaScript of its own.
const enter =
  "animate-in fade-in slide-in-from-bottom-7 fill-mode-both animation-duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:animate-none";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-ink-foreground">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-glow" />
      <div className="pointer-events-none absolute -top-40 right-[-10%] size-[36rem] rounded-full bg-brand/30 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-20%] left-[-10%] size-[30rem] rounded-full bg-brand-accent/20 blur-[120px]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-40 pb-28 text-center lg:px-8 lg:pt-48 lg:pb-36">
        <div
          className={cn(
            enter,
            "mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur",
          )}
        >
          <Sparkles className="size-3.5 text-brand-accent" />
          India&apos;s Fastest Growing Automobile Marketing &amp; Solutions
          Agency
        </div>

        <h1 className="max-w-4xl text-balance font-heading text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          <span className={cn(enter, "block")}>
            Fuel your dealership&apos;s
          </span>
          <span className={cn(enter, "block delay-150")}>
            <span className="bg-gradient-to-r from-brand-accent to-brand bg-clip-text text-transparent">
              next 1,000 buyers.
            </span>
          </span>
        </h1>

        <p
          className={cn(
            enter,
            "mt-8 max-w-2xl text-balance text-lg text-white/65 delay-300 sm:text-xl",
          )}
        >
          AutoSutra connects car, bike, EV, and used-car dealerships with
          verified buyer leads, performance marketing, and dealer data
          intelligence, engineered for measurable growth, not vanity
          metrics.
        </p>

        <div
          className={cn(
            enter,
            "mt-10 flex flex-col items-center gap-4 delay-400 sm:flex-row",
          )}
        >
          <Link
            href="/book-a-demo"
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
        </div>
      </div>
    </section>
  );
}
