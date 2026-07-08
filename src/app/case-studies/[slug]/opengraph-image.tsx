import { renderOgImage, ogImageSize, ogImageContentType } from "@/lib/og-image";
import { caseStudyTeasers } from "@/data/case-studies";

export const size = ogImageSize;
export const contentType = ogImageContentType;

export function generateStaticParams() {
  return caseStudyTeasers.map((study) => ({ slug: study.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudyTeasers.find((item) => item.slug === slug);
  return renderOgImage({
    eyebrow: study ? `Case Study: ${study.dealership}` : "Case Study",
    title: study?.headline ?? "AutoSutra",
  });
}
