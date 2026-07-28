// Relative imports (not the "@/" alias) are used deliberately: states.ts,
// which imports this file, is also loaded directly by next.config.ts to
// build redirects, and that transpile step does not resolve tsconfig path
// aliases the way the app's own build does.
import type { DistrictProfile } from "./wb-districts";
import { uttarPradeshDistrictProfilesBatch1 } from "./uttar-pradesh-districts-batch-1";
import { uttarPradeshDistrictProfilesBatch2 } from "./uttar-pradesh-districts-batch-2";

// Combines both geographic batches (Western/Central UP and Eastern UP/Awadh)
// into the single 75-district array this state's registry entry consumes,
// plus the state hub profile. Ayodhya (in Batch 2) keeps the strict
// neutrality treatment described in that file's own header comment.
export const uttarPradeshDistrictProfiles: DistrictProfile[] = [
  ...uttarPradeshDistrictProfilesBatch1,
  ...uttarPradeshDistrictProfilesBatch2,
];

export const uttarPradeshStateProfile: DistrictProfile = {
  slug: "uttar-pradesh",
  name: "Uttar Pradesh",
  region: "Uttar Pradesh",
  majorTowns: "Lucknow, Kanpur, Agra, Varanasi, Meerut, Prayagraj, Ghaziabad",
  marketContext:
    "Uttar Pradesh is India's most populous state, with a dealership landscape spanning the industrial and NCR-adjacent belt around Ghaziabad, Noida, and Meerut, the Braj and Bundelkhand regions around Agra and Jhansi, the Awadh heartland around Lucknow, and the eastern districts around Varanasi and Gorakhpur. Agriculture remains the base economy across most districts, layered with distinct pockets of leather and footwear manufacturing around Kanpur and Agra, sugarcane and paper industries in the west, and major pilgrimage tourism at Varanasi, Prayagraj, Ayodhya, Mathura, and elsewhere.",
  buyerBehavior:
    "Buyer behavior varies sharply across the state's 75 districts: Lucknow and Kanpur buyers research extensively online before visiting a showroom, western districts near Delhi NCR see commuter and industrial demand, pilgrimage-adjacent districts see a steady layer of tourist-transport demand alongside their farming economies, and buyers in smaller eastern and Bundelkhand districts respond best to consistent, genuine local presence over broad advertising. AutoSutra builds district-specific campaigns rather than a single statewide message, because a Lucknow strategy rarely works unchanged in Chitrakoot or Shravasti.",
  highlights: [
    "Coverage across all 75 Uttar Pradesh districts, from the NCR-adjacent west to the Awadh heartland and the eastern districts",
    "District-specific strategy rather than one generic statewide campaign",
    "Deep familiarity with the state's distinct industrial, agricultural, and pilgrimage-driven district economies",
  ],
  faqs: [
    {
      question: "Does AutoSutra serve dealerships across all of Uttar Pradesh, or only Lucknow and Kanpur?",
      answer:
        "We work with dealerships across all 75 Uttar Pradesh districts, from Lucknow, Kanpur, and Agra to smaller districts like Shravasti, Chitrakoot, and Hamirpur.",
    },
    {
      question: "How is a statewide Uttar Pradesh strategy different from a single-district campaign?",
      answer:
        "It isn't a single campaign at all. Each Uttar Pradesh district gets its own local SEO, keywords, and content built around that district's actual economy and buyer behavior, then this page ties them together as a single entry point.",
    },
    {
      question: "Does AutoSutra have an office in Uttar Pradesh?",
      answer:
        "AutoSutra serves Uttar Pradesh as part of our pan-India dealer growth marketing, without a physical branch office in the state.",
    },
    {
      question: "How do I find the page for my specific Uttar Pradesh district?",
      answer:
        "Every Uttar Pradesh district listed on this page links directly to its own dedicated page with district-specific content, FAQs, and services.",
    },
  ],
  keywords: [
    "Automotive CRM in Uttar Pradesh",
    "Car Dealer CRM in Uttar Pradesh",
    "Dealership Management Software in Uttar Pradesh",
    "Dealer Management System in Uttar Pradesh",
    "Automotive Software in Uttar Pradesh",
    "Automotive Marketing in Uttar Pradesh",
    "Automotive Digital Marketing in Uttar Pradesh",
    "WhatsApp Marketing for Car Dealers in Uttar Pradesh",
    "Local SEO for Car Dealerships in Uttar Pradesh",
    "car dealership marketing agency Uttar Pradesh",
  ],
  nearbySlugs: uttarPradeshDistrictProfiles.map((district) => district.slug),
};
