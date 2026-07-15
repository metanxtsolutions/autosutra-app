import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { JsonLd } from "@/components/shared/json-ld";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { states } from "@/data/states";

export const metadata = pageMetadata({
  title: "Dealer Growth Marketing Across India",
  description:
    "AutoSutra provides dealer growth marketing for car, bike, EV, and used-car dealerships across India, organized by state and district: West Bengal, Andhra Pradesh, Arunachal Pradesh, Assam, Bihar, Chhattisgarh, Goa, and our major metro cities.",
  path: "/india",
  keywords: [
    "car dealership marketing agency India",
    "dealer growth marketing India states",
    "automotive marketing by state India",
    "district level dealership marketing India",
  ],
});

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "India", path: "/india" },
];

export default function IndiaIndexPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          name: "Dealer Growth Marketing Across India",
          description:
            "AutoSutra's state-by-state and district-by-district dealer growth marketing coverage across India.",
          path: "/india",
        })}
      />
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />

      <section className="relative overflow-hidden bg-ink px-6 pt-40 pb-28 text-center text-ink-foreground lg:px-8">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="pointer-events-none absolute -top-32 left-1/2 size-96 -translate-x-1/2 rounded-full bg-brand/25 blur-[120px]" />
        <div className="relative">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
            India
          </span>
          <h1 className="mx-auto mt-4 max-w-2xl text-balance font-heading text-5xl font-semibold tracking-tight sm:text-6xl">
            Dealer growth marketing, state by state
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
            Browse AutoSutra&apos;s coverage by state and district, all the
            way down to the district closest to your dealership.
          </p>
        </div>
      </section>

      <Breadcrumbs items={breadcrumbItems} />

      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <h2 className="font-heading text-2xl font-semibold text-ink">
          States we serve
        </h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Every state links to its own district directory, and every
          district has a dedicated page built around its own local market.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {states.map((state) => (
            <Link
              key={state.slug}
              href={`/india/${state.slug}`}
              className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition-colors hover:border-brand/40"
            >
              <div>
                <div className="flex size-10 items-center justify-center rounded-xl bg-accent text-brand">
                  <MapPin className="size-4" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-ink">
                  {state.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {state.districts.length} districts
                </p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
                View {state.name}
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-muted/40 py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-semibold text-ink">
            Major metro cities
          </h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            AutoSutra also works directly with dealerships in Delhi NCR,
            Mumbai, Bangalore, Pune, Chennai, Hyderabad, our Kolkata
            headquarters, and Ahmedabad.
          </p>
          <Link
            href="/city"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand"
          >
            View all cities we serve
            <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </section>
    </>
  );
}
