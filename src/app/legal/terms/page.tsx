import { ComingSoon } from "@/components/shared/coming-soon";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms of Service",
  description:
    "The terms governing use of AutoSutra's services. Our full terms of service are being finalized.",
  path: "/legal/terms",
});

export default function TermsPage() {
  return (
    <ComingSoon
      eyebrow="Legal"
      title="Terms of Service"
      description="Our full terms of service are being finalized. For any questions, contact us directly."
    />
  );
}
