import { LegalDocument } from "@/components/legal/legal-document";
import {
  LEGAL_LAST_UPDATED,
  termsIntro,
  termsSections,
} from "@/data/legal-content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms of Service",
  description:
    "The terms governing use of AutoSutra's website and the dealer growth services we provide to dealerships, OEMs, and automotive brands across India.",
  path: "/legal/terms",
});

export default function TermsPage() {
  return (
    <LegalDocument
      title="Terms of Service"
      lastUpdated={LEGAL_LAST_UPDATED}
      intro={termsIntro}
      sections={termsSections}
    />
  );
}
