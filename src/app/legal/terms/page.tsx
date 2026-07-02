import type { Metadata } from "next";
import { ComingSoon } from "@/components/shared/coming-soon";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <ComingSoon
      eyebrow="Legal"
      title="Terms of Service"
      description="Our full terms of service are being finalized. For any questions, contact us directly."
    />
  );
}
