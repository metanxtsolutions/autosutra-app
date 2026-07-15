export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

export const siteConfig = {
  name: "AutoSutra",
  tagline: "India's Fastest Growing Automobile Marketing & Solutions Agency",
  description:
    "AutoSutra helps car, bike, EV and used-car dealerships, OEMs, and automotive brands grow with verified buyer leads, performance marketing, dealer data intelligence, and CRM/SaaS solutions built for the automotive industry.",
  // Kept under 160 characters for meta description / SERP snippet display.
  // The longer `description` above is used for structured data, where
  // length isn't penalized.
  metaDescription:
    "Get verified buyer leads, performance marketing, and dealer CRM software built for car, bike, EV, and used-car dealerships across India. Book a free demo.",
  url: "https://www.autosutra.in",
  contact: {
    email: "info@autosutra.in",
    phoneDisplay: "+91 6291 043 537",
    phoneHref: "+916291043537",
    whatsappHref: "https://wa.me/916291043537",
    addressLine:
      "SDF Building, GP Block, Sector V, Bidhannagar, Kolkata, West Bengal 700091",
    addressNote: "India",
  },
  socials: {
    linkedin: "https://www.linkedin.com/company/autosutra",
    instagram: "https://www.instagram.com/autosutra.in",
    facebook: "https://www.facebook.com/AutoSutra.in",
    twitter: "https://x.com/AutoSutraIndia",
  },
  // Resources articles are written and reviewed in-house rather than by a
  // single named individual, so bylines credit the team rather than
  // inventing an author persona. Update this if named leadership profiles
  // are published on the About page later.
  editorialTeam: {
    name: "AutoSutra Growth Team",
    role: "Dealer marketing practitioners and performance analysts",
  },
} as const;

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Solutions",
    href: "/solutions",
    description: "Growth solutions built for dealer performance",
  },
  {
    label: "Industries",
    href: "/industries",
    description: "Car, bike, EV, used-car and OEM programs",
  },
  {
    label: "Services",
    href: "/services",
    description: "Leads, marketing, data, and SaaS, all 12 services",
  },
  {
    label: "Case Studies",
    href: "/case-studies",
    description: "Real dealer growth, before vs after",
  },
  {
    label: "Resources",
    href: "/resources",
    description: "Blog, guides, and downloads for dealers",
  },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  quickLinks: mainNav.filter((item) => item.href !== "/"),
  legal: [
    { label: "Privacy Policy", href: "/legal/privacy-policy" },
    { label: "Terms of Service", href: "/legal/terms" },
    { label: "Careers", href: "/careers" },
  ],
};
