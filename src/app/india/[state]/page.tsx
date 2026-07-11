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

export const dynamicParams = false;

export function generateStaticParams() {
  return states.map((state) => ({ state: state.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string }>;
}): Promise<Metadata> {
  const { state: stateSlug } = await params;
  const state = getStateBySlug(stateSlug);
  if (!state) return {};
  const hub = state.hubProfile;

  return pageMetadata({
    title: `Car & Bike Dealership Marketing in ${hub.name}`,
    description: `Verified buyer leads, performance marketing, and dealer growth services for ${hub.name} car, bike, EV, and used-car dealerships. ${hub.marketContext}`,
    path: `/india/${state.slug}`,
    keywords: hub.keywords,
  });
}

export default async function StatePage({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state: stateSlug } = await params;
  const state = getStateBySlug(stateSlug);
  if (!state) notFound();

  const hub = state.hubProfile;
  const path = `/india/${state.slug}`;

  const relatedMetro = cityProfiles.find((city) => city.region === state.name);

  const otherLocations: OtherLocationLink[] = [
    ...state.districts.map((district) => ({
      slug: district.slug,
      name: district.name,
      href: `/india/${state.slug}/${district.slug}`,
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
    { name: state.name, path },
  ];

  return (
    <>
      <JsonLd
        data={combinationServiceSchema({
          name: `Dealer Growth Marketing in ${hub.name}`,
          description: hub.marketContext,
          path,
          areaServedName: hub.name,
        })}
      />
      <JsonLd
        data={localBusinessSchema({
          name: `AutoSutra Dealership Marketing in ${hub.name}`,
          description: hub.marketContext,
          path,
          areaServedName: hub.name,
        })}
      />
      <JsonLd
        data={webPageSchema({
          name: `Car & Bike Dealership Marketing in ${hub.name}`,
          description: hub.marketContext,
          path,
        })}
      />
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <JsonLd data={faqPageSchema(hub.faqs)} />

      <LocationPageContent
        eyebrowLabel="India"
        name={hub.name}
        marketContext={hub.marketContext}
        buyerBehavior={hub.buyerBehavior}
        highlights={hub.highlights}
        faqs={hub.faqs}
        breadcrumbItems={breadcrumbItems}
        otherLocationsHeading={`${state.name} districts we serve`}
        otherLocations={otherLocations}
        extraExploreLinks={[{ label: "India", href: "/india" }]}
        whatsappLocationHero="india_state_page_hero"
        whatsappLocationFooter="india_state_page_footer"
      />
    </>
  );
}
