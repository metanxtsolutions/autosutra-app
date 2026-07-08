import { cityProfiles } from "@/data/city-content";

// Target metros for local SEO signals (schema.org areaServed, on-page
// mentions) and for the /city/[slug] landing pages in city-content.ts.
export const targetCities = cityProfiles.map((city) => city.name);
