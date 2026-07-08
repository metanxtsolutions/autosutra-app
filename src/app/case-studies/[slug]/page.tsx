import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ComingSoon } from "@/components/shared/coming-soon";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
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
  return pageMetadata({
    title: study.headline,
    description: `${study.dealership}: ${study.category}. ${study.headline} — an AutoSutra case study for ${study.industry.toLowerCase()} in India.`,
    path: `/case-studies/${study.slug}`,
  });
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
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/case-studies" },
          { name: study.headline, path: `/case-studies/${study.slug}` },
        ])}
      />
      <ComingSoon
        eyebrow={study.dealership}
        title={study.headline}
        description="The full breakdown of the problem, solution, execution, and results is being finalized with client approval. Talk to our team for the details behind this result."
      />
    </>
  );
}
