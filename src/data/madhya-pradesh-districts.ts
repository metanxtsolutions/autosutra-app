// Relative imports (not the "@/" alias) are used deliberately: states.ts,
// which imports this file, is also loaded directly by next.config.ts to
// build redirects, and that transpile step does not resolve tsconfig path
// aliases the way the app's own build does.
import type { DistrictProfile } from "./wb-districts";
import { madhyaPradeshDistrictProfilesBatch1 } from "./madhya-pradesh-districts-batch-1";
import { madhyaPradeshDistrictProfilesBatch2 } from "./madhya-pradesh-districts-batch-2";

// Combines both geographic batches (Bhopal/Chambal/Gwalior/Indore/Ujjain
// divisions and Jabalpur/Narmadapuram/Rewa/Sagar/Shahdol divisions) into
// the single 55-district array this state's registry entry consumes, plus
// the state hub profile. Ujjain (in Batch 1) keeps the strict neutrality
// treatment described in that file's own header comment.
export const madhyaPradeshDistrictProfiles: DistrictProfile[] = [
  ...madhyaPradeshDistrictProfilesBatch1,
  ...madhyaPradeshDistrictProfilesBatch2,
];

export const madhyaPradeshStateProfile: DistrictProfile = {
  slug: "madhya-pradesh",
  name: "Madhya Pradesh",
  region: "Madhya Pradesh",
  majorTowns: "Indore, Bhopal, Jabalpur, Gwalior, Ujjain, Sagar, Rewa",
  marketContext:
    "Madhya Pradesh is India's second-largest state by area, with a dealership landscape spanning Indore's commercial and industrial base, Bhopal's administrative economy, the Narmada-valley and Bundelkhand agricultural belts, and the Malwa region's soybean and opium-mandi farming districts. Agriculture remains the base economy across most of the state's 55 districts, layered with distinct pockets of industry around Indore, Pithampur, Jabalpur, and Ujjain's chemical belt, cement and mineral industries around Satna and Katni, and pilgrimage tourism at Ujjain and elsewhere.",
  buyerBehavior:
    "Buyer behavior varies sharply across Madhya Pradesh's 55 districts: Indore and Bhopal buyers research extensively online before visiting a showroom, industrial districts around Pithampur and Jabalpur see steady salary-backed demand, pilgrimage-adjacent districts see a layer of tourist-transport demand alongside their farming economies, and buyers in smaller tribal-belt and Bundelkhand districts respond best to consistent, genuine local presence over broad advertising. AutoSutra builds district-specific campaigns rather than a single statewide message, because an Indore strategy rarely works unchanged in Alirajpur or Umaria.",
  highlights: [
    "Coverage across all 55 Madhya Pradesh districts, from Indore's competitive urban market to the state's tribal-belt and Bundelkhand districts",
    "District-specific strategy rather than one generic statewide campaign",
    "Deep familiarity with the state's distinct industrial, agricultural, and pilgrimage-driven district economies",
  ],
  faqs: [
    {
      question: "Does AutoSutra serve dealerships across all of Madhya Pradesh, or only Indore and Bhopal?",
      answer:
        "We work with dealerships across all 55 Madhya Pradesh districts, from Indore, Bhopal, and Jabalpur to smaller districts like Alirajpur, Niwari, and Umaria.",
    },
    {
      question: "How is a statewide Madhya Pradesh strategy different from a single-district campaign?",
      answer:
        "It isn't a single campaign at all. Each Madhya Pradesh district gets its own local SEO, keywords, and content built around that district's actual economy and buyer behavior, then this page ties them together as a single entry point.",
    },
    {
      question: "Does AutoSutra have an office in Madhya Pradesh?",
      answer:
        "AutoSutra serves Madhya Pradesh as part of our pan-India dealer growth marketing, without a physical branch office in the state.",
    },
    {
      question: "How do I find the page for my specific Madhya Pradesh district?",
      answer:
        "Every Madhya Pradesh district listed on this page links directly to its own dedicated page with district-specific content, FAQs, and services.",
    },
  ],
  keywords: [
    "Automotive CRM in Madhya Pradesh",
    "Car Dealer CRM in Madhya Pradesh",
    "Dealership Management Software in Madhya Pradesh",
    "Dealer Management System in Madhya Pradesh",
    "Automotive Software in Madhya Pradesh",
    "Automotive Marketing in Madhya Pradesh",
    "Automotive Digital Marketing in Madhya Pradesh",
    "WhatsApp Marketing for Car Dealers in Madhya Pradesh",
    "Local SEO for Car Dealerships in Madhya Pradesh",
    "car dealership marketing agency Madhya Pradesh",
  ],
  nearbySlugs: madhyaPradeshDistrictProfiles.map((district) => district.slug),
};
