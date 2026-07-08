export type LegalSection = {
  heading: string;
  body: string[];
  bullets?: string[];
};

// Standard, honest boilerplate drafted for a first pass. Review by qualified
// legal counsel is recommended before relying on this as fully compliant
// legal advice for India's DPDP Act, 2023 or any other jurisdiction.
export const LEGAL_LAST_UPDATED = "8 July 2026";

export const privacyPolicyIntro =
  "This Privacy Policy explains what personal information AutoSutra collects when you visit autosutra.in or use our services, how we use it, and the choices you have. By using this website, you agree to the practices described here.";

export const privacyPolicySections: LegalSection[] = [
  {
    heading: "Information we collect",
    body: [
      "We collect information you provide directly, such as when you submit our contact form or reach out over WhatsApp, email, or phone.",
    ],
    bullets: [
      "Contact details you provide: name, email address, phone number, and dealership or business name",
      "The content of any message or inquiry you send us",
      "Usage data collected automatically through Google Analytics: pages viewed, session duration, device and browser type, and approximate location",
      "Communication records if you contact us through WhatsApp, email, or phone",
    ],
  },
  {
    heading: "How we use your information",
    body: [],
    bullets: [
      "To respond to your inquiries and provide the services you request",
      "To understand how visitors use our website so we can improve it",
      "To send you information about our services, only if you have asked for it",
      "To maintain records required for business and legal purposes",
    ],
  },
  {
    heading: "Cookies and analytics",
    body: [
      "We use Google Analytics (GA4) to understand how visitors interact with our website. Google Analytics uses cookies to collect this information. You can opt out of Google Analytics tracking through your browser settings or by installing the Google Analytics opt-out browser add-on. We do not currently use advertising or retargeting cookies.",
    ],
  },
  {
    heading: "How we share your information",
    body: ["We do not sell your personal information. We may share it with:"],
    bullets: [
      "Service providers who help us operate this website and respond to inquiries, such as our hosting provider and Google Analytics",
      "WhatsApp, if you choose to contact us through WhatsApp. Your conversation is also subject to WhatsApp's own privacy policy",
      "Authorities or third parties, only if required by law or to protect our legal rights",
    ],
  },
  {
    heading: "How long we keep your information",
    body: [
      "We retain contact form submissions and inquiry records for as long as needed to respond to you and maintain reasonable business records, or until you ask us to delete them.",
    ],
  },
  {
    heading: "Your rights",
    body: [
      "Under India's Digital Personal Data Protection Act, 2023, you have the right to access, correct, or request deletion of your personal information. To exercise these rights, contact us at info@autosutra.in and we will respond within a reasonable time.",
    ],
  },
  {
    heading: "Data security",
    body: [
      "We take reasonable technical and organizational measures to protect your information. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    heading: "Children's privacy",
    body: [
      "This website is intended for business use by dealerships, OEMs, and automotive professionals. We do not knowingly collect information from individuals under 18 years of age.",
    ],
  },
  {
    heading: "Changes to this policy",
    body: [
      "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.",
    ],
  },
];

export const termsIntro =
  "These Terms of Service govern your use of the AutoSutra website and the services described on it. By using this website, you agree to these terms.";

export const termsSections: LegalSection[] = [
  {
    heading: "About AutoSutra",
    body: [
      "AutoSutra is a dealer growth agency based in Kolkata, India, providing verified buyer leads, performance marketing, dealer data services, and CRM/SaaS solutions to automotive dealerships, OEMs, and automotive brands across India.",
    ],
  },
  {
    heading: "Use of this website",
    body: [],
    bullets: [
      "You may use this website for lawful purposes only",
      "You may not copy, scrape, or reproduce our content, design, or logos without permission",
      "All content on this website, including text, graphics, and branding, is the property of AutoSutra unless otherwise stated",
    ],
  },
  {
    heading: "Service engagements",
    body: [
      "The services described on this website, including pricing shown on our Pricing page, are indicative and provided for informational purposes. The actual scope, deliverables, pricing, and terms for any specific engagement are governed by a separate service agreement or order form signed between AutoSutra and the client. In the event of any conflict, the signed service agreement takes precedence over this website.",
    ],
  },
  {
    heading: "No guarantee of results",
    body: [
      "Marketing and lead generation outcomes depend on factors outside our control, including market conditions, dealership responsiveness, and inventory. Figures referenced in our case studies and resources reflect specific, historical results for specific clients or illustrative examples, and are not a guarantee of similar results for your dealership.",
    ],
  },
  {
    heading: "Third-party links and services",
    body: [
      "This website may link to or integrate with third-party services such as WhatsApp and Google Maps. We are not responsible for the content, availability, or privacy practices of third-party services.",
    ],
  },
  {
    heading: "Limitation of liability",
    body: [
      "To the extent permitted by law, AutoSutra is not liable for any indirect, incidental, or consequential damages arising from your use of this website or our services. Our total liability for any claim relating to a service engagement is limited to the fees paid by you under the applicable service agreement in the three months preceding the claim.",
    ],
  },
  {
    heading: "Governing law",
    body: [
      "These Terms are governed by the laws of India. Any disputes arising from these Terms or your use of this website are subject to the exclusive jurisdiction of the courts in Kolkata, West Bengal.",
    ],
  },
  {
    heading: "Changes to these terms",
    body: [
      "We may update these Terms from time to time. Continued use of this website after changes are posted constitutes acceptance of the updated Terms.",
    ],
  },
];
