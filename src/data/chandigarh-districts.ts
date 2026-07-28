import type { DistrictProfile } from "@/data/wb-districts";

// Chandigarh is officially a single-district union territory, so a separate
// "district" entry duplicating the state hub's own content would be
// redundant. Instead, this file uses Chandigarh's 3 official administrative
// sub-divisions (Central, East, South) as genuine, differentiated sub-units,
// each with its own real institutional, residential, or commercial
// character within the city. No fabricated statistics, dealer counts, or
// population figures. AutoSutra has no branch office in Chandigarh.
export const chandigarhDistrictProfiles: DistrictProfile[] = [
  {
    slug: "central",
    name: "Central Chandigarh",
    region: "Chandigarh",
    majorTowns: "Sector 17, Sector 9, Sector 22, Capitol Complex",
    marketContext:
      "Central Chandigarh covers the planned city's core sectors, including the Sector 17 commercial hub and the government and administrative offices clustered near the Capitol Complex, a UNESCO World Heritage Site designed by Le Corbusier. This is the institutional and civic heart of the city, combining government employment with established central market trade.",
    buyerBehavior:
      "Government employees, administrative staff, and traders around the central market sectors favor established dealership relationships and value proximity to civic offices, supporting steady demand for personal vehicles alongside a smaller institutional and official fleet segment.",
    highlights: [
      "Home to the Capitol Complex, a UNESCO World Heritage Site",
      "The city's core government and administrative office cluster",
      "Anchored by the Sector 17 central commercial hub",
    ],
    faqs: [
      {
        question: "Does the concentration of government offices affect Central Chandigarh's dealership market?",
        answer:
          "Yes, the cluster of administrative and civic offices near the Capitol Complex supports a steady base of government-employee vehicle buyers alongside a smaller institutional and official fleet segment tied to public sector activity.",
      },
      {
        question: "Does the Sector 17 commercial hub matter to vehicle demand in Central Chandigarh?",
        answer:
          "Yes, traders and shoppers connected to the Sector 17 market and other central sectors add an established, city-core layer of personal vehicle demand distinct from the newer growth areas elsewhere in Chandigarh.",
      },
      {
        question: "Does AutoSutra work with dealerships across all of Central Chandigarh's sectors?",
        answer:
          "Yes, we support dealerships across the sub-division, including Sector 17, Sector 9, and Sector 22, not just the immediate Capitol Complex area.",
      },
      {
        question: "How fast can a dealership here get started with AutoSutra?",
        answer:
          "Most services, including verified leads and local SEO campaigns, go live within 7 to 10 business days of onboarding.",
      },
    ],
    keywords: [
      "Automotive CRM in Central Chandigarh",
      "Car Dealer CRM in Central Chandigarh",
      "Dealership Management Software in Central Chandigarh",
      "Dealer Management System in Central Chandigarh",
      "Automotive Software in Central Chandigarh",
      "Automotive Marketing in Central Chandigarh",
      "Automotive Digital Marketing in Central Chandigarh",
      "WhatsApp Marketing for Car Dealers in Central Chandigarh",
      "Local SEO for Car Dealerships in Central Chandigarh",
      "Capitol Complex government sector dealer leads Central Chandigarh",
    ],
    nearbySlugs: ["east", "south"],
  },
  {
    slug: "east",
    name: "East Chandigarh",
    region: "Chandigarh",
    majorTowns: "Sector 15, Sector 21, Sector 33, Manimajra",
    marketContext:
      "East Chandigarh covers a mix of older and newer established residential sectors on the city's eastern side, including Manimajra, and sits closest to Panchkula across the border in neighboring Haryana. This gives the sub-division a settled, largely residential character shaped by households built up over successive phases of the city's planned development.",
    buyerBehavior:
      "Established households across East Chandigarh's residential sectors tend toward family and personal vehicle upgrades, with cross-border movement to and from Panchkula adding a secondary layer of commuter-linked demand around the sub-division's eastern edge.",
    highlights: [
      "A mix of older and newer established residential sectors",
      "Includes Manimajra on the city's eastern edge",
      "Closest sub-division to neighboring Panchkula, Haryana",
    ],
    faqs: [
      {
        question: "Does East Chandigarh's residential character shape its dealership market?",
        answer:
          "Yes, established households across the sub-division's older and newer residential sectors tend toward family and personal vehicle upgrades, giving East Chandigarh a settled buyer base distinct from the city's institutional or industrial areas.",
      },
      {
        question: "Does proximity to Panchkula matter for vehicle demand in East Chandigarh?",
        answer:
          "Yes, the sub-division's location closest to Panchkula in neighboring Haryana adds a secondary layer of cross-border, commuter-linked demand alongside its core residential buyer base.",
      },
      {
        question: "Does AutoSutra work with dealerships across all of East Chandigarh's sectors?",
        answer:
          "Yes, we support dealerships across the sub-division, including Manimajra, Sector 15, and Sector 33, not just one part of East Chandigarh.",
      },
      {
        question: "How fast can a dealership here get started with AutoSutra?",
        answer:
          "Most services, including verified leads and local SEO campaigns, go live within 7 to 10 business days of onboarding.",
      },
    ],
    keywords: [
      "Automotive CRM in East Chandigarh",
      "Car Dealer CRM in East Chandigarh",
      "Dealership Management Software in East Chandigarh",
      "Dealer Management System in East Chandigarh",
      "Automotive Software in East Chandigarh",
      "Automotive Marketing in East Chandigarh",
      "Automotive Digital Marketing in East Chandigarh",
      "WhatsApp Marketing for Car Dealers in East Chandigarh",
      "Local SEO for Car Dealerships in East Chandigarh",
      "Manimajra residential sector dealer leads East Chandigarh",
    ],
    nearbySlugs: ["central", "south"],
  },
  {
    slug: "south",
    name: "South Chandigarh",
    region: "Chandigarh",
    majorTowns: "Sector 34, Industrial Area Phase I, Sector 48, IT Park",
    marketContext:
      "South Chandigarh covers the city's newer development areas along with the IT Park and Industrial Area, home to growing technology and manufacturing activity, and borders Mohali in neighboring Punjab. This is the sub-division where Chandigarh's commercial and technology-sector growth is most visible, alongside newer residential sectors built to serve it.",
    buyerBehavior:
      "IT Park employees and industrial unit owners in South Chandigarh support salary-backed personal vehicle demand alongside commercial vehicle needs tied to manufacturing and logistics, with cross-border movement to and from Mohali adding further commuter traffic.",
    highlights: [
      "Home to the Chandigarh IT Park and its technology-sector workforce",
      "Anchored by the Industrial Area's manufacturing base",
      "Borders Mohali in neighboring Punjab",
    ],
    faqs: [
      {
        question: "Does the IT Park affect South Chandigarh's dealership market?",
        answer:
          "Yes, the technology-sector workforce based at the IT Park supports salary-backed demand for personal vehicles, adding a distinct layer to South Chandigarh's buyer base alongside its industrial and manufacturing activity.",
      },
      {
        question: "Does the Industrial Area matter to vehicle demand in South Chandigarh?",
        answer:
          "Yes, manufacturing units and logistics operators in the Industrial Area support commercial vehicle demand alongside the personal vehicle demand generated by IT Park employees and newer residential sectors.",
      },
      {
        question: "Does AutoSutra work with dealerships across all of South Chandigarh's sectors?",
        answer:
          "Yes, we support dealerships across the sub-division, including the IT Park, Industrial Area Phase I, and the newer residential sectors, not just one part of South Chandigarh.",
      },
      {
        question: "How fast can a dealership here get started with AutoSutra?",
        answer:
          "Most services, including verified leads and local SEO campaigns, go live within 7 to 10 business days of onboarding.",
      },
    ],
    keywords: [
      "Automotive CRM in South Chandigarh",
      "Car Dealer CRM in South Chandigarh",
      "Dealership Management Software in South Chandigarh",
      "Dealer Management System in South Chandigarh",
      "Automotive Software in South Chandigarh",
      "Automotive Marketing in South Chandigarh",
      "Automotive Digital Marketing in South Chandigarh",
      "WhatsApp Marketing for Car Dealers in South Chandigarh",
      "Local SEO for Car Dealerships in South Chandigarh",
      "IT Park and Industrial Area dealer leads South Chandigarh",
    ],
    nearbySlugs: ["central", "east"],
  },
];

export const chandigarhStateProfile: DistrictProfile = {
  slug: "chandigarh",
  name: "Chandigarh",
  region: "Chandigarh",
  majorTowns: "Sector 17, Sector 22, Manimajra, IT Park, Sukhna Lake",
  marketContext:
    "Chandigarh is India's first fully planned city, designed by the architect Le Corbusier, and serves as the joint capital of both Punjab and Haryana while itself standing as a separate union territory. Its modernist Capitol Complex is a UNESCO World Heritage Site, and the city is also known for Sukhna Lake and the Rock Garden. Chandigarh has grown into a significant regional education and IT hub, with a compact, orderly sector-based layout that sets it apart from most Indian cities.",
  buyerBehavior:
    "Government employees, IT and education-sector professionals, and traders across Chandigarh's planned sectors generally favor organized, well-established dealership relationships, with steady personal vehicle demand supported by the city's civic administration, technology-sector growth, and role as an education hub for the wider Punjab and Haryana region.",
  highlights: [
    "India's first fully planned city, designed by Le Corbusier",
    "Joint capital of Punjab and Haryana as a separate union territory",
    "Home to the UNESCO-listed Capitol Complex, Sukhna Lake, and a growing IT hub",
  ],
  faqs: [
    {
      question: "Does AutoSutra serve dealerships across all of Chandigarh?",
      answer:
        "Yes, we work with dealerships across Chandigarh's Central, East, and South sub-divisions, from the government and administrative core to the established residential sectors and the newer IT Park and Industrial Area.",
    },
    {
      question: "Why does this page use sub-divisions instead of separate districts for Chandigarh?",
      answer:
        "Chandigarh is officially a single-district union territory, so rather than duplicate the city-wide content in one redundant district entry, we use its 3 real administrative sub-divisions, Central, East, and South, to give genuinely differentiated, sub-division-specific content.",
    },
    {
      question: "Does AutoSutra have a branch office in Chandigarh?",
      answer:
        "No, AutoSutra does not have a physical branch office in Chandigarh. We work with dealerships across the union territory remotely, delivering verified leads, local SEO, and marketing services without requiring an in-UT office.",
    },
    {
      question: "How do I find the page for my specific part of Chandigarh?",
      answer:
        "Each Chandigarh sub-division listed on this page, Central, East, and South, links directly to its own dedicated page with sub-division-specific content, FAQs, and services.",
    },
  ],
  keywords: [
    "Automotive CRM in Chandigarh",
    "Car Dealer CRM in Chandigarh",
    "Dealership Management Software in Chandigarh",
    "Dealer Management System in Chandigarh",
    "Automotive Software in Chandigarh",
    "Automotive Marketing in Chandigarh",
    "Automotive Digital Marketing in Chandigarh",
    "WhatsApp Marketing for Car Dealers in Chandigarh",
    "Local SEO for Car Dealerships in Chandigarh",
    "car dealership marketing agency Chandigarh",
  ],
  nearbySlugs: ["central", "east", "south"],
};
