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
  url: "https://www.autosutra.in",
  contact: {
    email: "info@autosutra.in",
    phoneDisplay: "+91 6291 043 537",
    phoneHref: "+916291043537",
    whatsappHref: "https://wa.me/916291043537",
    addressLine: "AQ Block, Sector V, Bidhannagar, Kolkata, West Bengal",
    addressNote: "India",
  },
  socials: {
    linkedin: "https://www.linkedin.com/company/autosutra",
    instagram: "https://www.instagram.com/autosutra",
    facebook: "https://www.facebook.com/autosutra",
    youtube: "https://www.youtube.com/@autosutra",
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
    description: "Leads, marketing, data, and SaaS — see all 12 services",
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
