export type CityFaq = {
  question: string;
  answer: string;
};

export type CityProfile = {
  slug: string;
  name: string;
  region: string;
  isHQ?: boolean;
  marketContext: string;
  buyerBehavior: string;
  highlights: string[];
  faqs: CityFaq[];
};

// Real, general, well-established characteristics of each city's automotive
// market. No fabricated statistics, survey data, or specific numbers, since
// none were supplied. Written to be genuinely differentiated per city rather
// than a template with the name swapped.
export const cityProfiles: CityProfile[] = [
  {
    slug: "delhi-ncr",
    name: "Delhi NCR",
    region: "Delhi, Gurugram, Noida, Faridabad",
    marketContext:
      "Delhi NCR is India's largest automobile market by volume, spanning Delhi, Gurugram, Noida, and Faridabad. The dealer landscape is dense and competitive, with buyers routinely cross-shopping between several showrooms of the same brand before committing.",
    buyerBehavior:
      "Buyers in the region tend to research extensively online before visiting a showroom, and respond well to fast, direct follow-up given how many dealers are competing for the same enquiry.",
    highlights: [
      "One of India's highest-volume metro markets across every vehicle segment",
      "A dense, multi-brand dealer landscape where response speed decides who gets the sale",
      "Strong demand in both the premium and mass-market segments",
    ],
    faqs: [
      {
        question: "Does AutoSutra work with dealerships across all of Delhi NCR, not just Delhi?",
        answer:
          "Yes. We work with dealerships across Delhi, Gurugram, Noida, and Faridabad, and target leads to the specific outlet and city within the NCR region that a buyer is closest to.",
      },
      {
        question: "Why does response speed matter more in Delhi NCR than in other cities?",
        answer:
          "With this many dealers competing for the same buyer, a lead that isn't followed up within minutes is often already talking to a competitor. Our WhatsApp automation and phone-verified leads are built around that reality.",
      },
      {
        question: "How fast can a Delhi NCR dealership get started with AutoSutra?",
        answer:
          "Most services, including verified leads, ad campaigns, and WhatsApp automation, go live within 7 to 10 business days of onboarding.",
      },
    ],
  },
  {
    slug: "mumbai",
    name: "Mumbai",
    region: "Maharashtra",
    marketContext:
      "Mumbai has one of the highest rates of vehicle ownership among Indian metros and a large, active used-car resale market alongside new-vehicle sales. Showroom space is often limited, which makes qualifying a buyer's intent before they visit especially valuable.",
    buyerBehavior:
      "Given the city's traffic and space constraints, Mumbai buyers frequently prefer to confirm availability, pricing, and financing over WhatsApp or phone before making the trip to a showroom.",
    highlights: [
      "A large, active used-car resale market alongside new-vehicle demand",
      "Space-constrained showrooms that benefit from pre-qualified, ready-to-buy leads",
      "High smartphone-first behavior, well suited to WhatsApp-led follow-up",
    ],
    faqs: [
      {
        question: "Does AutoSutra cover Mumbai's extended metro area, including Thane and Navi Mumbai?",
        answer:
          "Yes. We target leads across greater Mumbai, including Thane and Navi Mumbai, matched to the specific outlet closest to each buyer.",
      },
      {
        question: "Is Verified Buyer Leads useful for Mumbai's used-car dealers specifically?",
        answer:
          "Yes. Given how active Mumbai's resale market is, phone-verified leads matched to budget and model help used-car dealers spend less time on browsers and more time on buyers who are ready to transact.",
      },
      {
        question: "How fast can a Mumbai dealership get started with AutoSutra?",
        answer:
          "Most services, including verified leads, ad campaigns, and WhatsApp automation, go live within 7 to 10 business days of onboarding.",
      },
    ],
  },
  {
    slug: "bangalore",
    name: "Bangalore",
    region: "Karnataka",
    marketContext:
      "Bangalore's large technology workforce gives it an above-average concentration of research-first buyers who compare specifications, reviews, and pricing extensively online before ever contacting a dealer. The city also shows strong early interest in EVs and EV two-wheelers.",
    buyerBehavior:
      "Buyers in Bangalore tend to arrive at a dealership already well informed, so campaigns that lead with clear, specific information tend to outperform generic messaging.",
    highlights: [
      "A research-first buyer base that compares options extensively before contacting a dealer",
      "Above-average early interest in EVs and EV two-wheelers",
      "A large daily-commuting workforce driving steady two-wheeler demand",
    ],
    faqs: [
      {
        question: "Is AutoSutra a good fit for EV dealerships in Bangalore specifically?",
        answer:
          "Yes. Bangalore shows some of the strongest early EV interest among Indian metros, and our content and campaign strategy for EV dealers is built around educating this research-first buyer segment.",
      },
      {
        question: "Does AutoSutra cover the wider Bangalore metro area?",
        answer:
          "Yes, including outlets across greater Bangalore, matched to the specific location closest to each verified buyer.",
      },
      {
        question: "How fast can a Bangalore dealership get started with AutoSutra?",
        answer:
          "Most services, including verified leads, ad campaigns, and WhatsApp automation, go live within 7 to 10 business days of onboarding.",
      },
    ],
  },
  {
    slug: "pune",
    name: "Pune",
    region: "Maharashtra",
    marketContext:
      "Pune is home to a significant concentration of automobile manufacturing and its supplier ecosystem, giving the city an unusually vehicle-literate buyer base. A large student and young-professional population also makes it a strong market for first-time buyers.",
    buyerBehavior:
      "Pune buyers often know the technical details of what they want before visiting a dealership, so campaigns that speak to specifications and value tend to convert well alongside first-time-buyer financing messaging.",
    highlights: [
      "A vehicle-literate buyer base shaped by the city's automotive manufacturing presence",
      "A large first-time-buyer segment among students and young professionals",
      "Strong demand across both two-wheeler and entry-level car segments",
    ],
    faqs: [
      {
        question: "Does AutoSutra work with first-time buyer segments in Pune?",
        answer:
          "Yes. Given Pune's large student and young-professional population, we tailor lead targeting and WhatsApp nurture sequences to first-time buyers alongside repeat and upgrade buyers.",
      },
      {
        question: "Does AutoSutra cover Pune's wider metro area, including Pimpri-Chinchwad?",
        answer:
          "Yes, including outlets across Pimpri-Chinchwad and the wider Pune metro area.",
      },
      {
        question: "How fast can a Pune dealership get started with AutoSutra?",
        answer:
          "Most services, including verified leads, ad campaigns, and WhatsApp automation, go live within 7 to 10 business days of onboarding.",
      },
    ],
  },
  {
    slug: "chennai",
    name: "Chennai",
    region: "Tamil Nadu",
    marketContext:
      "Chennai is often called the Detroit of India for its concentration of automobile and auto-component manufacturing. That industrial base gives the city a buyer population that is typically well informed about vehicle specifications, with steady demand across both two-wheeler and passenger vehicle segments.",
    buyerBehavior:
      "Chennai buyers tend to respond well to clear, factual campaign messaging over broad brand messaging, reflecting the city's generally specification-aware buyer base.",
    highlights: [
      "A concentration of automobile manufacturing that shapes a specification-aware buyer base",
      "Steady demand across both two-wheeler and passenger vehicle segments",
      "A dealer landscape that rewards clear, factual campaign messaging",
    ],
    faqs: [
      {
        question: "Does AutoSutra cover Chennai's wider metro area?",
        answer:
          "Yes, including outlets across greater Chennai, matched to the specific location closest to each verified buyer.",
      },
      {
        question: "Is Local SEO useful for Chennai dealerships specifically?",
        answer:
          "Yes. Chennai's dealer density makes map pack visibility and Google Business Profile optimization a meaningful differentiator for 'near me' searches.",
      },
      {
        question: "How fast can a Chennai dealership get started with AutoSutra?",
        answer:
          "Most services, including verified leads, ad campaigns, and WhatsApp automation, go live within 7 to 10 business days of onboarding.",
      },
    ],
  },
  {
    slug: "hyderabad",
    name: "Hyderabad",
    region: "Telangana",
    marketContext:
      "Hyderabad is one of India's fastest-growing metro auto markets, driven by its expanding IT and pharmaceutical workforce. Rising incomes are translating into growing interest in the premium and EV segments alongside steady mass-market demand.",
    buyerBehavior:
      "With a high smartphone-first population, Hyderabad buyers respond strongly to WhatsApp-based follow-up and tend to make faster purchase decisions once a lead is qualified.",
    highlights: [
      "One of India's fastest-growing metro auto markets",
      "Rising premium and EV segment interest tracking the city's income growth",
      "A smartphone-first buyer base well suited to WhatsApp-led follow-up",
    ],
    faqs: [
      {
        question: "Does AutoSutra cover Hyderabad's wider metro area, including Secunderabad?",
        answer:
          "Yes, including outlets across Secunderabad and the wider Hyderabad metro area.",
      },
      {
        question: "Is AutoSutra a good fit for premium and EV dealerships in Hyderabad?",
        answer:
          "Yes. Hyderabad's growing income levels are translating into rising premium and EV segment interest, and we tailor campaign targeting to reach that segment specifically.",
      },
      {
        question: "How fast can a Hyderabad dealership get started with AutoSutra?",
        answer:
          "Most services, including verified leads, ad campaigns, and WhatsApp automation, go live within 7 to 10 business days of onboarding.",
      },
    ],
  },
  {
    slug: "kolkata",
    name: "Kolkata",
    region: "West Bengal",
    isHQ: true,
    marketContext:
      "Kolkata is AutoSutra's home city and headquarters. We have deep, on-the-ground familiarity with the eastern India dealer network, spanning established multi-brand dealerships and emerging EV and two-wheeler outlets across the city and wider West Bengal.",
    buyerBehavior:
      "As our home market, Kolkata dealerships get the same phone-verified lead process and dedicated account support as every other city, backed by a team that works out of the city itself.",
    highlights: [
      "AutoSutra's headquarters, with direct, on-the-ground dealer relationships",
      "Deep familiarity with the eastern India dealer network",
      "A growing base of emerging EV and two-wheeler outlets alongside established dealerships",
    ],
    faqs: [
      {
        question: "Is AutoSutra actually based in Kolkata?",
        answer:
          "Yes. Our office is at SDF Building, GP Block, Sector V, Bidhannagar, Kolkata, and it's where our team works day to day.",
      },
      {
        question: "Does AutoSutra work with dealerships across all of West Bengal, not just Kolkata?",
        answer:
          "Yes. We work with dealerships across Kolkata and the wider West Bengal region, alongside our core focus on the city itself.",
      },
      {
        question: "How fast can a Kolkata dealership get started with AutoSutra?",
        answer:
          "Since we're local, onboarding can move quickly, and most services go live within 7 to 10 business days.",
      },
    ],
  },
  {
    slug: "ahmedabad",
    name: "Ahmedabad",
    region: "Gujarat",
    marketContext:
      "Ahmedabad has a commercially driven market with a strong network of small and mid-size dealers. Gujarat's broader trading culture translates into price-sensitive, value-conscious buyer behavior that tends to reward clear, transparent offers over broad brand messaging.",
    buyerBehavior:
      "Ahmedabad buyers typically compare pricing and value closely before committing, so campaigns that lead with transparent offers tend to perform better than image-led messaging alone.",
    highlights: [
      "A strong network of small and mid-size dealers across the city",
      "Price-sensitive, value-conscious buyer behavior shaped by Gujarat's trading culture",
      "Demand that rewards clear, transparent campaign offers",
    ],
    faqs: [
      {
        question: "Does AutoSutra work with smaller, independent dealers in Ahmedabad?",
        answer:
          "Yes. Ahmedabad's dealer network includes many small and mid-size outlets, and our Starter plan is built for exactly this kind of dealership.",
      },
      {
        question: "Does AutoSutra cover Ahmedabad's wider metro and Gujarat more broadly?",
        answer:
          "Yes, including outlets across greater Ahmedabad and the wider Gujarat region.",
      },
      {
        question: "How fast can an Ahmedabad dealership get started with AutoSutra?",
        answer:
          "Most services, including verified leads, ad campaigns, and WhatsApp automation, go live within 7 to 10 business days of onboarding.",
      },
    ],
  },
];
