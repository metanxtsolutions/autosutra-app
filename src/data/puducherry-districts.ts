import type { DistrictProfile } from "@/data/wb-districts";

// Genuine, distinct characterizations of each Puducherry district's economic
// base, key towns, and geography. No fabricated statistics, dealer counts,
// or population figures. AutoSutra has no branch office in Puducherry. This
// union territory consists of 4 geographically separate, non-contiguous
// districts, a legacy of former French colonial India: Puducherry and
// Karaikal are surrounded by Tamil Nadu, Mahe is surrounded by Kerala on the
// Malabar coast, and Yanam is surrounded by Andhra Pradesh on the Godavari
// delta coast. Because the districts do not border one another, each
// district's nearbySlugs points to the other Puducherry districts generally,
// reflecting their shared administrative grouping as one union territory
// rather than geographic adjacency. Puducherry has no existing AutoSutra
// metro city page, so all 4 districts get normal, full treatment with no
// "already covered elsewhere" framing.
export const puducherryDistrictProfiles: DistrictProfile[] = [
  {
    slug: "puducherry",
    name: "Puducherry",
    region: "Puducherry",
    majorTowns: "Puducherry, Ariyankuppam, Villianur",
    marketContext:
      "Puducherry district is the union territory's capital and largest district, an enclave surrounded on all sides by Tamil Nadu. The town's French Quarter is known for its colonial-era heritage architecture and streets, drawing steady beach tourism, while the nearby experimental township of Auroville adds an international dimension. A growing education and services sector rounds out the local economy.",
    buyerBehavior:
      "Dealership buyers here range from urban professionals in the education and services sector to established families in and around the French Quarter, with steady footfall from beach tourism and Auroville visitors adding a distinctive, more cosmopolitan buyer segment to the district.",
    highlights: [
      "The union territory's capital and largest district, an enclave surrounded by Tamil Nadu",
      "Home to the French Quarter's colonial-era heritage architecture and beach tourism",
      "Proximity to Auroville, an internationally known experimental township, and a growing education and services sector",
    ],
    faqs: [
      {
        question: "Does the French Quarter's heritage tourism shape the dealership market in Puducherry district?",
        answer:
          "Yes, steady visitor traffic to the French Quarter and the district's beaches supports demand for tourist-transport and personal vehicles alongside the town's core resident market.",
      },
      {
        question: "Does Auroville's presence affect vehicle demand nearby?",
        answer:
          "Yes, the international community and steady visitor flow around Auroville add a distinctive segment of buyers to the district's wider personal vehicle market.",
      },
      {
        question: "Does AutoSutra work with dealerships outside Puducherry town?",
        answer:
          "Yes, we support dealerships across the district, including areas around Ariyankuppam and Villianur, not just Puducherry town.",
      },
      {
        question: "How fast can a dealership here get started with AutoSutra?",
        answer:
          "Most services, including verified leads and local SEO campaigns, go live within 7 to 10 business days of onboarding.",
      },
    ],
    keywords: [
      "Automotive CRM in Puducherry",
      "Car Dealer CRM in Puducherry",
      "Dealership Management Software in Puducherry",
      "Dealer Management System in Puducherry",
      "Automotive Software in Puducherry",
      "Automotive Marketing in Puducherry",
      "Automotive Digital Marketing in Puducherry",
      "WhatsApp Marketing for Car Dealers in Puducherry",
      "Local SEO for Car Dealerships in Puducherry",
      "French Quarter heritage tourism dealer leads Puducherry town",
    ],
    nearbySlugs: ["karaikal", "mahe", "yanam"],
  },
  {
    slug: "karaikal",
    name: "Karaikal",
    region: "Puducherry",
    majorTowns: "Karaikal, Neravy, Thirunallar",
    marketContext:
      "Karaikal is an enclave surrounded by Tamil Nadu, sited within the fertile Cauvery delta, where agriculture centered on rice and sugarcane cultivation forms the backbone of the local economy. The town carries French colonial-era heritage architecture alongside its identity as a temple town, anchored by the Thirunallar Saneeswaran temple, with some textile industry supplementing the district's rural base.",
    buyerBehavior:
      "Farming households across the Cauvery delta follow seasonal, practical buying patterns tied to the agricultural calendar, while temple town visitor traffic around Thirunallar and a modest textile industry support a steadier stream of personal and commercial vehicle buyers in and around Karaikal town.",
    highlights: [
      "An enclave surrounded by Tamil Nadu, sited within the fertile Cauvery delta",
      "Agriculture centered on rice and sugarcane cultivation alongside some textile industry",
      "French colonial heritage architecture and a temple town identity anchored by Thirunallar",
    ],
    faqs: [
      {
        question: "Does the Cauvery delta's agricultural economy shape vehicle demand in Karaikal?",
        answer:
          "Yes, farming households across the delta follow seasonal, practical buying patterns for utility vehicles tied to the rice and sugarcane growing calendar.",
      },
      {
        question: "Does Thirunallar's temple town status affect the dealership market?",
        answer:
          "Yes, steady visitor traffic to the Thirunallar Saneeswaran temple supports demand for tourist-transport vehicles alongside Karaikal town's resident market.",
      },
      {
        question: "Does AutoSutra work with dealerships outside Karaikal town?",
        answer:
          "Yes, we support dealerships across the district, including areas around Neravy and Thirunallar, not just Karaikal town.",
      },
      {
        question: "How fast can a dealership here get started with AutoSutra?",
        answer:
          "Most services, including verified leads and local SEO campaigns, go live within 7 to 10 business days of onboarding.",
      },
    ],
    keywords: [
      "Automotive CRM in Karaikal",
      "Car Dealer CRM in Karaikal",
      "Dealership Management Software in Karaikal",
      "Dealer Management System in Karaikal",
      "Automotive Software in Karaikal",
      "Automotive Marketing in Karaikal",
      "Automotive Digital Marketing in Karaikal",
      "WhatsApp Marketing for Car Dealers in Karaikal",
      "Local SEO for Car Dealerships in Karaikal",
      "Cauvery delta agriculture and Thirunallar temple town dealer leads Karaikal",
    ],
    nearbySlugs: ["puducherry", "mahe", "yanam"],
  },
  {
    slug: "mahe",
    name: "Mahe",
    region: "Puducherry",
    majorTowns: "Mahe, Pallur, Palloor",
    marketContext:
      "Mahe is the smallest of Puducherry's four districts, a compact enclave surrounded by Kerala on the Malabar coast. The town grew as a small river port along the Mahe river and retains French colonial-era heritage in its streets and buildings. Agriculture and fishing along the river and coastline continue to anchor the local economy.",
    buyerBehavior:
      "Given Mahe's compact geography, dealership activity is modest, with river port trade and fishing households following practical, workday buying patterns, while the district's Kerala-facing location shapes a buyer base familiar with Malabar coast market norms and shopping habits.",
    highlights: [
      "The smallest of Puducherry's four districts, a compact enclave surrounded by Kerala on the Malabar coast",
      "A small river port town along the Mahe river with French colonial heritage",
      "Agriculture and fishing along the river and coastline anchor the local economy",
    ],
    faqs: [
      {
        question: "Does Mahe's small size limit the dealership market?",
        answer:
          "Dealership activity in Mahe is modest given its compact geography, but river port trade and fishing households provide steady, practical demand for utility and personal vehicles.",
      },
      {
        question: "Does Mahe's location surrounded by Kerala affect buyer behavior?",
        answer:
          "Yes, being surrounded by Kerala on the Malabar coast, Mahe's buyers are familiar with regional market norms and shopping habits shared with neighboring Kerala towns.",
      },
      {
        question: "Does AutoSutra work with dealerships outside Mahe town?",
        answer:
          "Yes, we support dealerships across the district, including areas around Pallur and Palloor, not just Mahe town.",
      },
      {
        question: "How fast can a dealership here get started with AutoSutra?",
        answer:
          "Most services, including verified leads and local SEO campaigns, go live within 7 to 10 business days of onboarding.",
      },
    ],
    keywords: [
      "Automotive CRM in Mahe",
      "Car Dealer CRM in Mahe",
      "Dealership Management Software in Mahe",
      "Dealer Management System in Mahe",
      "Automotive Software in Mahe",
      "Automotive Marketing in Mahe",
      "Automotive Digital Marketing in Mahe",
      "WhatsApp Marketing for Car Dealers in Mahe",
      "Local SEO for Car Dealerships in Mahe",
      "Mahe river port heritage and Malabar coast fishing dealer leads Mahe",
    ],
    nearbySlugs: ["puducherry", "karaikal", "yanam"],
  },
  {
    slug: "yanam",
    name: "Yanam",
    region: "Puducherry",
    majorTowns: "Yanam, Kanakalapeta, Farampeta",
    marketContext:
      "Yanam is an enclave surrounded by Andhra Pradesh, sited along the Godavari delta coast, where paddy cultivation in the fertile delta soil forms the traditional base of the local economy. The town carries French colonial-era heritage alongside a growing aquaculture and fishing industry drawing on the delta's coastal waterways and estuarine geography.",
    buyerBehavior:
      "Paddy farming households across the Godavari delta follow seasonal buying patterns tied to the agricultural calendar, while aquaculture operators and fishing households along Yanam's coastal waterways add a steadier, trade-driven segment to the district's commercial vehicle demand.",
    highlights: [
      "An enclave surrounded by Andhra Pradesh, sited along the Godavari delta coast",
      "Agriculture centered on paddy cultivation in the fertile delta soil",
      "A growing aquaculture and fishing industry alongside French colonial heritage",
    ],
    faqs: [
      {
        question: "Does the Godavari delta's paddy farming shape vehicle demand in Yanam?",
        answer:
          "Yes, farming households across the delta follow seasonal, practical buying patterns for utility vehicles tied to the paddy growing calendar.",
      },
      {
        question: "Does aquaculture and fishing affect the dealership market in Yanam?",
        answer:
          "Yes, aquaculture operators and fishing households along the coastal waterways add a steadier, trade-driven segment of commercial vehicle buyers to the district.",
      },
      {
        question: "Does AutoSutra work with dealerships outside Yanam town?",
        answer:
          "Yes, we support dealerships across the district, including areas around Kanakalapeta and Farampeta, not just Yanam town.",
      },
      {
        question: "How fast can a dealership here get started with AutoSutra?",
        answer:
          "Most services, including verified leads and local SEO campaigns, go live within 7 to 10 business days of onboarding.",
      },
    ],
    keywords: [
      "Automotive CRM in Yanam",
      "Car Dealer CRM in Yanam",
      "Dealership Management Software in Yanam",
      "Dealer Management System in Yanam",
      "Automotive Software in Yanam",
      "Automotive Marketing in Yanam",
      "Automotive Digital Marketing in Yanam",
      "WhatsApp Marketing for Car Dealers in Yanam",
      "Local SEO for Car Dealerships in Yanam",
      "Godavari delta paddy farming and aquaculture dealer leads Yanam",
    ],
    nearbySlugs: ["puducherry", "karaikal", "mahe"],
  },
];

// Puducherry state hub profile, rendered as the parent of all 4 districts
// under the /india/puducherry hierarchy. The territory has no existing
// AutoSutra metro city page, so no district overlaps with prior coverage
// and all districts get normal, full treatment.
export const puducherryStateProfile: DistrictProfile = {
  slug: "puducherry",
  name: "Puducherry",
  region: "Puducherry",
  majorTowns: "Puducherry, Karaikal, Mahe, Yanam",
  marketContext:
    "Puducherry is a union territory made up of 4 geographically separate, non-contiguous districts, a legacy of former French colonial India. Puducherry and Karaikal are surrounded by Tamil Nadu, Mahe by Kerala on the Malabar coast, and Yanam by Andhra Pradesh on the Godavari delta coast. Each district carries its own distinct French colonial-era heritage architecture alongside a different economic base, from Puducherry's beach tourism and education sector to Karaikal's Cauvery delta agriculture, Mahe's river port trade and fishing, and Yanam's paddy cultivation and aquaculture.",
  buyerBehavior:
    "Buyer behavior varies widely by district and geography. Puducherry town's education and services sector and beach tourism support a cosmopolitan buyer base, Karaikal's Cauvery delta farming households follow seasonal patterns, Mahe's compact river port and fishing economy generates modest but steady demand, and Yanam's paddy farming and aquaculture households add a trade-driven segment to the territory's overall commercial vehicle demand.",
  highlights: [
    "Covers all 4 districts of Puducherry: Puducherry, Karaikal, Mahe, and Yanam",
    "4 geographically separate, non-contiguous districts, a legacy of former French colonial India, spread across Tamil Nadu, Kerala, and Andhra Pradesh",
    "District-specific strategy built around each region's distinct heritage tourism, agriculture, fishing, or aquaculture economy",
  ],
  faqs: [
    {
      question: "Does AutoSutra serve dealerships across all of Puducherry?",
      answer:
        "Yes, we work with dealerships across all 4 districts, from Puducherry town's beach tourism and education sector to Karaikal's agriculture, Mahe's river port trade, and Yanam's aquaculture economy.",
    },
    {
      question: "Why are Puducherry, Karaikal, Mahe, and Yanam geographically separate districts within one union territory?",
      answer:
        "This is a legacy of former French colonial India. Puducherry and Karaikal are surrounded by Tamil Nadu, Mahe is surrounded by Kerala on the Malabar coast, and Yanam is surrounded by Andhra Pradesh on the Godavari delta coast, yet all 4 remain administratively grouped as one union territory.",
    },
    {
      question: "Does AutoSutra have a branch office in Puducherry?",
      answer:
        "No, AutoSutra does not have a physical branch office in Puducherry. We work with dealerships across the union territory remotely, delivering verified leads, local SEO, and marketing services without requiring an in-territory office.",
    },
    {
      question: "How do I find the page for my specific district?",
      answer:
        "Every district listed on this page links directly to its own dedicated page with district-specific content, FAQs, and services.",
    },
  ],
  keywords: [
    "Automotive CRM in Puducherry",
    "Car Dealer CRM in Puducherry",
    "Dealership Management Software in Puducherry",
    "Dealer Management System in Puducherry",
    "Automotive Software in Puducherry",
    "Automotive Marketing in Puducherry",
    "Automotive Digital Marketing in Puducherry",
    "WhatsApp Marketing for Car Dealers in Puducherry",
    "Local SEO for Car Dealerships in Puducherry",
    "car dealership marketing agency Puducherry",
  ],
  nearbySlugs: ["puducherry", "karaikal", "mahe", "yanam"],
};
