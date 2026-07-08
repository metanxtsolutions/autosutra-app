import { ComingSoon } from "@/components/shared/coming-soon";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Careers",
  description:
    "Join AutoSutra and help build India's dealer growth platform. We're always open to hearing from people who want to work on automotive growth technology.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <ComingSoon
      eyebrow="Careers"
      title="Build India's dealer growth platform with us"
      description="We're not listing open roles yet, but we're always open to hearing from people who want to work on automotive growth technology. Reach out and introduce yourself."
    />
  );
}
