import type { Metadata } from "next";
import { ComingSoon } from "@/components/shared/coming-soon";

export const metadata: Metadata = {
  title: "Careers",
};

export default function CareersPage() {
  return (
    <ComingSoon
      eyebrow="Careers"
      title="Build India's dealer growth platform with us"
      description="We're not listing open roles yet, but we're always open to hearing from people who want to work on automotive growth technology. Reach out and introduce yourself."
    />
  );
}
