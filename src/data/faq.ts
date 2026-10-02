export type Faq = {
  question: string;
  answer: string;
};

// Pricing page. Every figure and inclusion comes from src/data/pricing.ts,
// the plan comparison table on /pricing, and the services-hub FAQs.
export const pricingFaqs: Faq[] = [
  {
    question: "What is the difference between the Starter, Growth, and Enterprise plans?",
    answer:
      "Starter (₹14,999 per month) covers a monthly verified-lead allocation, Local SEO and Google Business Profile optimisation, basic Facebook and Google campaign setup, WhatsApp lead notifications, and monthly reports. Growth (₹35,499 per month) adds up to 250 verified leads a month, geo-level campaigns across Facebook, Google, and OTT, dealer SaaS tools, a dedicated account manager, and AI-powered behaviour insights. Enterprise (₹95,499 per month) is built for OEMs and multi-city networks: a custom lead package, nationwide network insights, the complete SaaS suite, and priority onboarding and support.",
  },
  {
    question: "Are the plans billed monthly, and is there a lock-in?",
    answer:
      "Yes. Starter, Growth, and Enterprise are billed monthly, and there is no long-term lock-in on the standard plans, so you can upgrade as your pipeline grows. Enterprise and custom pan-India programmes can include annual commitments, which are agreed with you up front.",
  },
  {
    question: "How many verified buyer leads does each plan include?",
    answer:
      "Growth includes up to 250 phone-verified leads a month. Starter includes a monthly allocation, and Enterprise is a custom package sized to the network. Every lead is phone-verified for intent, budget, and location before it reaches your team.",
  },
  {
    question: "Which plan includes the CRM and a dedicated account manager?",
    answer:
      "Dealer SaaS tools for lead tracking and a dedicated account manager are part of Growth and Enterprise. Enterprise adds the complete SaaS suite integration and a dedicated enterprise success team. Starter includes WhatsApp lead notifications and monthly reports without the SaaS tools.",
  },
  {
    question: "Can we start on one plan and change later?",
    answer:
      "Yes. Plans are monthly, so you can move between Starter, Growth, and Enterprise as your lead volume and goals change. Most dealers start on Starter or Growth and upgrade once a channel has proved its return.",
  },
  {
    question: "Do you offer custom pricing for multi-city dealer networks or OEMs?",
    answer:
      "Yes. For OEM programmes and multi-city networks we build custom bundles and pricing outside the standard plans, starting from Enterprise. Book a consultation and we will scope it with you.",
  },
  {
    question: "How quickly does a plan go live after we sign up?",
    answer:
      "Most dealerships are onboarded and generating leads within 7 to 10 business days of signing up. Content and CRM setup can take slightly longer depending on scope.",
  },
];

export const faqs: Faq[] = [
  {
    question: "What makes a lead 'verified' at AutoSutra?",
    answer:
      "Every lead is phone-verified for intent, budget, and location before it reaches your CRM, so your sales team spends time on buyers, not browsers.",
  },
  {
    question: "Which dealerships does AutoSutra work with?",
    answer:
      "Car, bike, and EV dealerships, used-car dealers, and OEMs, from single-showroom businesses to multi-city dealer networks.",
  },
  {
    question: "How fast can we go live?",
    answer:
      "Most dealerships are onboarded and generating leads within 7 to 10 business days of signing up, starting with a Discover audit of your market and funnel.",
  },
  {
    question: "Do you offer month-to-month plans, or is there a lock-in?",
    answer:
      "Our Starter, Growth, and Enterprise plans are billed monthly. Enterprise and custom pan-India programs can include annual commitments, so talk to us for details.",
  },
  {
    question: "Can AutoSutra integrate with our existing CRM?",
    answer:
      "Yes. Our CRM Solutions and SaaS Platform are built to integrate with most dealer management systems, or you can run entirely on AutoSutra's platform.",
  },
  {
    question: "What industries and vehicle categories do you cover?",
    answer:
      "Passenger cars, two-wheelers, electric vehicles, and used vehicles across dealership, multi-brand, and OEM programs.",
  },
  {
    question: "How can I check AutoSutra's reviews before signing up?",
    answer:
      "Check our LinkedIn, Instagram, and Facebook pages linked in the footer for direct engagement with our team and partners. We're headquartered in Kolkata at the address listed in our footer and About page, not a virtual-only operation. Ask us directly for references from current dealer partners in your category. If you're already a partner with a concern, email info@autosutra.in directly. We would rather resolve it than have it sit unanswered.",
  },
];
