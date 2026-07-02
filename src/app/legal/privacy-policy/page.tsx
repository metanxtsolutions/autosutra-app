import type { Metadata } from "next";
import { ComingSoon } from "@/components/shared/coming-soon";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <ComingSoon
      eyebrow="Legal"
      title="Privacy Policy"
      description="Our full privacy policy is being finalized. For any questions about how AutoSutra handles your data, contact us directly."
    />
  );
}
