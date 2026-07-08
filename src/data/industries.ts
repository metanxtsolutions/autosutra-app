export type Industry = {
  slug: string;
  name: string;
  description: string;
  points: string[];
  icon: "car" | "bike" | "zap" | "recycle" | "factory" | "badgeCheck";
};

export const industries: Industry[] = [
  {
    slug: "car-dealerships",
    name: "Car Dealerships",
    description:
      "Single-showroom and multi-outlet car dealers looking to fill their funnel with serious, financing-ready buyers.",
    points: [
      "Model-level lead targeting by budget and city",
      "Showroom photography and walkaround videos",
      "CRM tracking from enquiry to delivery",
    ],
    icon: "car",
  },
  {
    slug: "bike-dealerships",
    name: "Bike Dealerships",
    description:
      "Two-wheeler dealers competing on speed of response. We help you reach buyers first and follow up faster.",
    points: [
      "WhatsApp-first lead journeys for quick decisions",
      "Local SEO for 'near me' two-wheeler searches",
      "Seasonal and festive campaign planning",
    ],
    icon: "bike",
  },
  {
    slug: "ev-dealers",
    name: "EV Dealers",
    description:
      "Electric vehicle dealerships educating a newer buyer segment while building trust in a fast-moving category.",
    points: [
      "Educational content that addresses range and charging concerns",
      "Performance campaigns tuned to early-adopter audiences",
      "Launch playbooks for new EV showrooms",
    ],
    icon: "zap",
  },
  {
    slug: "used-car-dealers",
    name: "Used Car Dealers",
    description:
      "Used and certified pre-owned dealers who need verified, high-intent leads to protect margins on every sale.",
    points: [
      "Verified buyer leads to cut time-wasting enquiries",
      "Dynamic inventory-based ad campaigns",
      "Trust-building content and customer reviews",
    ],
    icon: "recycle",
  },
  {
    slug: "oems",
    name: "OEMs",
    description:
      "Original equipment manufacturers running pan-India or regional dealer network programs that need consistent execution.",
    points: [
      "Standardized campaigns rolled out across dealer networks",
      "Nationwide performance benchmarking and reporting",
      "Complete SaaS suite for network-wide visibility",
    ],
    icon: "factory",
  },
  {
    slug: "automotive-brands",
    name: "Automotive Brands",
    description:
      "Accessory, service, and automotive-adjacent brands that sell through or alongside the dealer network.",
    points: [
      "Co-branded campaigns with dealer partners",
      "Content and creative for brand-specific launches",
      "Data insights on dealer and buyer behavior",
    ],
    icon: "badgeCheck",
  },
];
