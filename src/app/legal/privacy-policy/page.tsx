import { ComingSoon } from "@/components/shared/coming-soon";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How AutoSutra collects, uses, and protects your data. Our full privacy policy is being finalized.",
  path: "/legal/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <ComingSoon
      eyebrow="Legal"
      title="Privacy Policy"
      description="Our full privacy policy is being finalized. For any questions about how AutoSutra handles your data, contact us directly."
    />
  );
}
