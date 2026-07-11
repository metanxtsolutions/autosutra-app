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
import { cityProfiles } from "@/data/city-content";
import { states, getStateBySlug } from "@/data/states";
import type { DistrictProfile } from "@/data/wb-districts";

export const dynamicParams = false;

export function generateStaticParams() {
  return states.flatMap((state) =>
    state.districts.map((district) => ({
      state: state.slug,
      district: district.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string; district: string }>;
}): Promise<Metadata> {
  const { state: stateSlug, district: districtSlug } = await params;
  const state = getStateBySlug(stateSlug);
  const district = state?.districts.find((item) => item.slug === districtSlug);
  if (!state || !district) return {};

  return pageMetadata({
    title: `Car & Bike Dealership Marketing in ${district.name}`,
    description: `Verified buyer leads, performance marketing, and dealer growth services for ${district.name} car, bike, EV, and used-car dealerships. ${district.marketContext}`,
    path: `/india/${state.slug}/${district.slug}`,
    keywords: district.keywords,
  });
}

export default async function DistrictPage({
  params,
}: {
  params: Promise<{ state: string; district: string }>;
}) {
  const { state: stateSlug, district: districtSlug } = await params;
  const state = getStateBySlug(stateSlug);
  const district = state?.districts.find((item) => item.slug === districtSlug);
  if (!state || !district) notFound();

  const path = `/india/${state.slug}/${district.slug}`;

  const nearbyDistricts = (district.nearbySlugs ?? [])
    .map((slug) => state.districts.find((item) => item.slug === slug))
    .filter((item): item is DistrictProfile => Boolean(item));

  const relatedMetro = cityProfiles.find((city) => city.region === state.name);

  const otherLocations: OtherLocationLink[] = [
    ...nearbyDistricts.map((item) => ({
      slug: item.slug,
      name: item.name,
      href: `/india/${state.slug}/${item.slug}`,
    })),
    ...(relatedMetro
      ? [
          {
            slug: relatedMetro.slug,
            name: relatedMetro.name,
            href: `/city/${relatedMetro.slug}`,
          },
        ]
      : []),
  ];

  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "India", path: "/india" },
    { name: state.name, path: `/india/${state.slug}` },
    { name: district.name, path },
  ];

  return (
    <>
      <JsonLd
        data={combinationServiceSchema({
          name: `Dealer Growth Marketing in ${district.name}`,
          description: district.marketContext,
          path,
          areaServedName: district.name,
        })}
      />
      <JsonLd
        data={localBusinessSchema({
          name: `AutoSutra Dealership Marketing in ${district.name}`,
          description: district.marketContext,
          path,
          areaServedName: `${district.name}, ${state.name}`,
        })}
      />
      <JsonLd
        data={webPageSchema({
          name: `Car & Bike Dealership Marketing in ${district.name}`,
          description: district.marketContext,
          path,
        })}
      />
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <JsonLd data={faqPageSchema(district.faqs)} />

      <LocationPageContent
        eyebrowLabel={state.name}
        name={district.name}
        marketContext={district.marketContext}
        buyerBehavior={district.buyerBehavior}
        highlights={district.highlights}
        faqs={district.faqs}
        breadcrumbItems={breadcrumbItems}
        otherLocationsHeading={`AutoSutra in nearby ${state.name} districts`}
        otherLocations={otherLocations}
        extraExploreLinks={[
          { label: "India", href: "/india" },
          { label: state.name, href: `/india/${state.slug}` },
        ]}
        whatsappLocationHero="india_district_page_hero"
        whatsappLocationFooter="india_district_page_footer"
      />
    </>
  );
}
