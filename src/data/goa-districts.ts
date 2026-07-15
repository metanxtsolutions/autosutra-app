import type { DistrictProfile } from "@/data/wb-districts";

// Genuine, general characterizations of Goa's two districts' economic base,
// key towns, and connectivity, written to be distinct per district. No
// fabricated statistics, dealer counts, or population figures. AutoSutra has
// no branch office in Goa, so language here describes service area reach
// rather than a local presence claim.
export const goaDistrictProfiles: DistrictProfile[] = [
  {
    slug: "north-goa",
    name: "North Goa",
    region: "Goa",
    majorTowns: "Panaji, Mapusa, Porvorim, Calangute, Candolim",
    marketContext:
      "North Goa is anchored by Panaji, the state capital on the Mandovi river, and covers Goa's busiest tourism coastline from Candolim and Calangute through Baga and Anjuna, alongside Mopa's newer international airport in Pernem. Heavy tourist footfall, a large NRI and second-home-owner population, and premium real estate development give the district an unusually high-value vehicle market for its size.",
    buyerBehavior:
      "North Goa's mix of resident buyers, NRI second-home owners, and tourism-linked businesses supports strong demand for premium and SUV segments alongside two-wheeler rentals for the tourist trade, and dealerships here compete more on brand experience and financing flexibility than on price alone.",
    highlights: [
      "Goa's state capital and busiest tourism coastline, from Candolim to Anjuna",
      "A large NRI and second-home-owner buyer base supporting premium segment demand",
      "Mopa international airport adding a newer growth corridor around Pernem",
    ],
    faqs: [
      {
        question: "Does AutoSutra work with dealerships across all of North Goa, not just Panaji?",
        answer:
          "Yes. We support dealerships across North Goa, including Mapusa, Porvorim, Calangute, and the Pernem corridor near Mopa airport, alongside Panaji.",
      },
      {
        question: "Is North Goa a strong market for premium vehicles?",
        answer:
          "Yes, relatively so. The district's NRI, second-home-owner, and tourism-business buyer base supports stronger premium and SUV segment demand than most Indian districts of comparable size.",
      },
      {
        question: "Does AutoSutra work with two-wheeler rental and dealership businesses in North Goa?",
        answer:
          "Yes. Given how central two-wheeler rentals are to Goa's tourism economy, we support two-wheeler dealerships alongside standard car and premium vehicle dealers.",
      },
      {
        question: "How fast can a North Goa dealership get started with AutoSutra?",
        answer:
          "Most services, including verified leads and ad campaigns, go live within 7 to 10 business days of onboarding.",
      },
    ],
    keywords: [
      "Automotive CRM in North Goa",
      "Car Dealer CRM in North Goa",
      "Dealership Management Software in North Goa",
      "Dealer Management System in North Goa",
      "Automotive Software in North Goa",
      "Automotive Marketing in North Goa",
      "Automotive Digital Marketing in North Goa",
      "WhatsApp Marketing for Car Dealers in North Goa",
      "Local SEO for Car Dealerships in North Goa",
      "car dealership marketing Panaji",
    ],
    nearbySlugs: ["south-goa"],
  },
  {
    slug: "south-goa",
    name: "South Goa",
    region: "Goa",
    majorTowns: "Margao, Vasco da Gama, Ponda-adjacent Quepem, Colva",
    marketContext:
      "South Goa is anchored by Margao, the district's commercial hub and a genuinely resident-driven market rather than a purely tourist-transient one, alongside the port town of Vasco da Gama, home to Mormugao Port and Dabolim airport. The district's interior, toward Sanguem, Quepem, and Canacona, blends Western Ghats forest belt with a quieter, more traditional Goan tourism scene around Colva, Benaulim, and Palolem.",
    buyerBehavior:
      "With a larger settled resident population relative to tourist turnover compared to North Goa, South Goa dealerships see steadier, more relationship-driven buying patterns, and the Vasco da Gama port and naval presence support demand for both personal and commercial vehicles.",
    highlights: [
      "Margao as a genuinely resident-driven commercial hub, not just a tourism economy",
      "A port and naval economy around Vasco da Gama supporting commercial vehicle demand",
      "A quieter, more traditional tourism belt around Colva, Benaulim, and Palolem",
    ],
    faqs: [
      {
        question: "Is South Goa's dealership market different from North Goa's?",
        answer:
          "Yes, meaningfully. South Goa's buyer base is more resident-driven around Margao and Vasco da Gama, with steadier, relationship-based buying, compared to North Goa's more tourism- and NRI-influenced market.",
      },
      {
        question: "Does AutoSutra work with commercial vehicle dealers near Vasco da Gama?",
        answer:
          "Yes. Given the Mormugao Port and naval presence, we support commercial and utility vehicle dealers alongside standard car and bike dealerships in that area.",
      },
      {
        question: "Does AutoSutra work with dealerships outside Margao?",
        answer:
          "Yes, we support dealerships across South Goa, including Vasco da Gama, Quepem, and the Colva and Benaulim coastal belt, not just Margao.",
      },
      {
        question: "How fast can a South Goa dealership get started with AutoSutra?",
        answer:
          "Most services, including verified leads and local SEO, go live within 7 to 10 business days of onboarding.",
      },
    ],
    keywords: [
      "Automotive CRM in South Goa",
      "Car Dealer CRM in South Goa",
      "Dealership Management Software in South Goa",
      "Dealer Management System in South Goa",
      "Automotive Software in South Goa",
      "Automotive Marketing in South Goa",
      "Automotive Digital Marketing in South Goa",
      "WhatsApp Marketing for Car Dealers in South Goa",
      "Local SEO for Car Dealerships in South Goa",
      "car dealership marketing Margao",
    ],
    nearbySlugs: ["north-goa"],
  },
];

// Goa state hub profile, rendered as the parent of both districts under the
// /india/goa hierarchy.
export const goaStateProfile: DistrictProfile = {
  slug: "goa",
  name: "Goa",
  region: "Goa",
  majorTowns: "Panaji, Margao, Vasco da Gama, Mapusa",
  marketContext:
    "Goa is India's smallest state by area but one of its highest per-capita income markets, built on a tourism and hospitality economy that draws both domestic and international visitors alongside a genuine resident population across its two districts. North Goa's Panaji-anchored coastline carries the bulk of the tourism and NRI second-home economy, while South Goa's Margao and Vasco da Gama carry a steadier, more resident- and port-driven commercial base.",
  buyerBehavior:
    "Goa's buyer base skews toward higher disposable income and stronger premium and SUV interest than most Indian states of comparable size, driven by tourism-linked business income, NRI ownership, and port and naval employment, and AutoSutra builds district-specific campaigns that reflect North Goa's tourism-driven demand separately from South Goa's steadier resident economy.",
  highlights: [
    "Coverage across both Goa districts, from Panaji's tourism coastline to Margao and Vasco da Gama",
    "One of India's highest per-capita income markets, supporting stronger premium-segment demand",
    "District-specific strategy separating North Goa's tourism economy from South Goa's resident and port economy",
  ],
  faqs: [
    {
      question: "Does AutoSutra serve dealerships across all of Goa?",
      answer:
        "We work with dealerships across both North Goa and South Goa, from Panaji and the tourism coastline to Margao and Vasco da Gama.",
    },
    {
      question: "How is a statewide Goa strategy different from a single-district campaign?",
      answer:
        "It isn't a single campaign at all. North Goa and South Goa each get their own local SEO, keywords, and content built around that district's actual economy and buyer behavior, then this page ties them together as a single entry point.",
    },
    {
      question: "Is Goa a strong market for premium and SUV segments?",
      answer:
        "Yes, relatively so. Goa's tourism-linked income, NRI ownership, and overall higher per-capita income support stronger premium and SUV segment demand than most Indian states of comparable size.",
    },
    {
      question: "How do I find the page for my specific Goa district?",
      answer:
        "Both North Goa and South Goa are listed on this page, each linking directly to its own dedicated page with district-specific content, FAQs, and services.",
    },
  ],
  keywords: [
    "Automotive CRM in Goa",
    "Car Dealer CRM in Goa",
    "Dealership Management Software in Goa",
    "Dealer Management System in Goa",
    "Automotive Software in Goa",
    "Automotive Marketing in Goa",
    "Automotive Digital Marketing in Goa",
    "WhatsApp Marketing for Car Dealers in Goa",
    "Local SEO for Car Dealerships in Goa",
    "car dealership marketing agency Goa",
  ],
  nearbySlugs: ["north-goa", "south-goa"],
};
