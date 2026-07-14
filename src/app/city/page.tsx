import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { cityProfiles } from "@/data/city-content";
import { states } from "@/data/states";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Cities We Serve",
  description:
    "AutoSutra provides dealer growth marketing for car, bike, EV, and used-car dealerships across Delhi NCR, Mumbai, Bangalore, Pune, Chennai, Hyderabad, Kolkata, Ahmedabad, and every district of West Bengal, Andhra Pradesh, Arunachal Pradesh, Assam, Bihar, and Chhattisgarh, browsable by state at /india.",
  path: "/city",
  keywords: [
    "car dealership marketing agency India cities",
    "dealer growth marketing India",
    "dealership marketing by state India",
  ],
});

export default function CityIndexPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink px-6 pt-40 pb-28 text-center text-ink-foreground lg:px-8">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="pointer-events-none absolute -top-32 left-1/2 size-96 -translate-x-1/2 rounded-full bg-brand/25 blur-[120px]" />
        <div className="relative">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
            Cities We Serve
          </span>
          <h1 className="mx-auto mt-4 max-w-2xl text-balance font-heading text-5xl font-semibold tracking-tight sm:text-6xl">
            Dealer growth marketing across India
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
            From our Kolkata headquarters to dealer networks across the
            country, here is where AutoSutra works today.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <h2 className="font-heading text-2xl font-semibold text-ink">
          Major cities
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cityProfiles.map((city) => (
            <Link
              key={city.slug}
              href={`/city/${city.slug}`}
              className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition-colors hover:border-brand/40"
            >
              <div>
                <div className="flex size-10 items-center justify-center rounded-xl bg-accent text-brand">
                  <MapPin className="size-4" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-ink">
                  {city.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {city.region}
                </p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
                View {city.name}
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-muted/40 py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-semibold text-ink">
            Browse by state
          </h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Beyond our major cities, AutoSutra serves dealerships across
            every district of these states. Each state links to its full
            district directory.
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
          <Link
            href="/india"
            className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-brand"
          >
            View the full India directory
            <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </section>
    </>
  );
}
