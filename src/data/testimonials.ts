// Illustrative example copy written in AutoSutra's voice. No real client
// quotes were supplied yet. Replace with verified client testimonials before
// launch (name, dealership, city, and a real quote/rating per entry).
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Within three months our showroom footfall from digital leads nearly doubled. The leads AutoSutra sends are actually ready to buy, not just browsing.",
    name: "Dealer Principal",
    role: "Multi-brand dealership, Growth Plan",
    rating: 5,
  },
  {
    quote:
      "Their team treats our ad spend like it's their own money. Cost per lead has dropped every quarter since we switched to AutoSutra.",
    name: "Marketing Head",
    role: "Used car dealer network, Enterprise Plan",
    rating: 5,
  },
  {
    quote:
      "The WhatsApp automation alone saved our sales team hours every day, and the CRM finally gives us one clean view of every lead.",
    name: "General Manager",
    role: "EV dealership, Growth Plan",
    rating: 5,
  },
];
