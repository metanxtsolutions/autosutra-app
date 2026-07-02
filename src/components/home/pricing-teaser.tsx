import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { PricingTable } from "@/components/pricing/pricing-table";

export function PricingTeaser() {
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
          Pricing
        </span>
        <h2 className="mt-4 text-balance font-heading text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Plans built to scale with your dealership
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Transparent monthly pricing. No hidden fees, no long-term lock-in.
        </p>
      </div>

      <div className="mt-16">
        <PricingTable />
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/pricing"
          className={cn(buttonVariants({ variant: "outline" }), "rounded-full")}
        >
          View full pricing details
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
