import { LegalDocument } from "@/components/legal/legal-document";
import {
  LEGAL_LAST_UPDATED,
  privacyPolicyIntro,
  privacyPolicySections,
} from "@/data/legal-content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How AutoSutra collects, uses, and protects your personal information when you visit our website or use our dealer growth services.",
  path: "/legal/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalDocument
      title="Privacy Policy"
      lastUpdated={LEGAL_LAST_UPDATED}
      intro={privacyPolicyIntro}
      sections={privacyPolicySections}
    />
  );
}
