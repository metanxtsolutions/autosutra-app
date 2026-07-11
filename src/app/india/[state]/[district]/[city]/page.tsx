import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/shared/json-ld";
import {
  LocationPageContent,
  type OtherLocationLink,
} from "@/components/location/location-page-content";
import {
  breadcrumbSchema,
  combinationServiceSchema,
  faqPageSchema,
  localBusinessSchema,
  webPageSchema,
} from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { states, getStateBySlug } from "@/data/states";

// Reserved for future use: /india/{state}/{district}/{city}. No district
// currently has a `cities` array, so this route intentionally produces zero
// static pages today. The moment a district's data gains a `cities` entry,
// this route renders it automatically, with breadcrumbs, schema, and
// internal linking already wired up, so no route code changes are required.
export const dynamicParams = false;

export function generateStaticParams() {
  return states.flatMap((state) =>
    state.districts.flatMap((district) =>
      (district.cities ?? []).map((city) => ({
        state: state.slug,
        district: district.slug,
        city: city.slug,
      })),
    ),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string; district: string; city: string }>;
}): Promise<Metadata> {
  const { state: stateSlug, district: districtSlug, city: citySlug } = await params;
  const state = getStateBySlug(stateSlug);
  const district = state?.districts.find((item) => item.slug === districtSlug);
  const city = district?.cities?.find((item) => item.slug === citySlug);
  if (!state || !district || !city) return {};

  return pageMetadata({
    title: `Car & Bike Dealership Marketing in ${city.name}`,
    description: `Verified buyer leads, performance marketing, and dealer growth services for ${city.name} car, bike, EV, and used-car dealerships. ${city.marketContext}`,
    path: `/india/${state.slug}/${district.slug}/${city.slug}`,
    keywords: city.keywords,
  });
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ state: string; district: string; city: string }>;
}) {
  const { state: stateSlug, district: districtSlug, city: citySlug } = await params;
  const state = getStateBySlug(stateSlug);
  const district = state?.districts.find((item) => item.slug === districtSlug);
  const city = district?.cities?.find((item) => item.slug === citySlug);
  if (!state || !district || !city) notFound();

  const path = `/india/${state.slug}/${district.slug}/${city.slug}`;

  const otherLocations: OtherLocationLink[] = (district.cities ?? [])
    .filter((item) => item.slug !== city.slug)
    .map((item) => ({
      slug: item.slug,
      name: item.name,
      href: `/india/${state.slug}/${district.slug}/${item.slug}`,
    }));

  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "India", path: "/india" },
    { name: state.name, path: `/india/${state.slug}` },
    { name: district.name, path: `/india/${state.slug}/${district.slug}` },
    { name: city.name, path },
  ];

  return (
    <>
      <JsonLd
        data={combinationServiceSchema({
          name: `Dealer Growth Marketing in ${city.name}`,
          description: city.marketContext,
          path,
          areaServedName: city.name,
        })}
      />
      <JsonLd
        data={localBusinessSchema({
          name: `AutoSutra Dealership Marketing in ${city.name}`,
          description: city.marketContext,
          path,
          areaServedName: `${city.name}, ${district.name}, ${state.name}`,
        })}
      />
      <JsonLd
        data={webPageSchema({
          name: `Car & Bike Dealership Marketing in ${city.name}`,
          description: city.marketContext,
          path,
        })}
      />
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <JsonLd data={faqPageSchema(city.faqs)} />

      <LocationPageContent
        eyebrowLabel={district.name}
        name={city.name}
        marketContext={city.marketContext}
        buyerBehavior={city.buyerBehavior}
        highlights={city.highlights}
        faqs={city.faqs}
        breadcrumbItems={breadcrumbItems}
        otherLocationsHeading={`AutoSutra in nearby ${district.name} cities`}
        otherLocations={otherLocations}
        extraExploreLinks={[
          { label: "India", href: "/india" },
          { label: state.name, href: `/india/${state.slug}` },
          { label: district.name, href: `/india/${state.slug}/${district.slug}` },
        ]}
        whatsappLocationHero="india_city_page_hero"
        whatsappLocationFooter="india_city_page_footer"
      />
    </>
  );
}
