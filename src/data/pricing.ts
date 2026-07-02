export type PricingTier = {
  name: string;
  price: number;
  period: string;
  description: string;
  cta: string;
  href: string;
  featured?: boolean;
  features: string[];
};

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: 14999,
    period: "/month",
    description:
      "Kickstart your dealership's digital presence and connect with verified buyers ready to purchase. Perfect for businesses starting their growth journey.",
    cta: "Get Started",
    href: "/contact",
    features: [
      "Verified buyer leads per month",
      "Local SEO & Google My Business optimization",
      "Basic ad campaign setup (Facebook & Google)",
      "WhatsApp lead notifications",
      "Monthly performance reports",
    ],
  },
  {
    name: "Growth",
    price: 35499,
    period: "/month",
    description:
      "Accelerate your growth with high-converting leads, targeted campaigns, and dealer-focused SaaS tools for better sales performance.",
    cta: "Get Started",
    href: "/contact",
    featured: true,
    features: [
      "Up to 250 verified buyer leads per month",
      "Geo-level digital ad campaigns (Facebook, Google, OTT)",
      "Dealer SaaS tools for lead tracking & conversion",
      "Dedicated account manager for personalized support",
      "AI-powered customer behavior insights for smarter targeting",
      "Exclusive access to AutoSutra's dealer network for faster conversions",
    ],
  },
  {
    name: "Enterprise",
    price: 95499,
    period: "/month",
    description:
      "Designed for enterprises and OEMs aiming for pan-India growth, automation, and maximum ROI.",
    cta: "Get Started",
    href: "/contact",
    features: [
      "Verified buyer leads (custom package)",
      "AI-driven marketing campaigns for maximum reach",
      "Nationwide dealer network performance insights",
      "Complete SaaS suite integration",
      "Priority onboarding & premium support",
      "Dedicated enterprise success team",
    ],
  },
];

export function formatInr(amount: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}
