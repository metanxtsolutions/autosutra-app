import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ComingSoon } from "@/components/shared/coming-soon";
import { caseStudyTeasers } from "@/data/case-studies";

export function generateStaticParams() {
  return caseStudyTeasers.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudyTeasers.find((item) => item.slug === slug);
  if (!study) return {};
  return {
    title: study.headline,
    description: study.headline,
  };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudyTeasers.find((item) => item.slug === slug);
  if (!study) notFound();

  return (
    <ComingSoon
      eyebrow={study.dealership}
      title={study.headline}
      description="The full breakdown — problem, solution, execution, and results — is being finalized with client approval. Talk to our team for the details behind this result."
    />
  );
}
