import { renderOgImage, ogImageSize, ogImageContentType } from "@/lib/og-image";
import { resources } from "@/data/resources";

export const size = ogImageSize;
export const contentType = ogImageContentType;

export function generateStaticParams() {
  return resources.map((resource) => ({ slug: resource.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resource = resources.find((item) => item.slug === slug);
  return renderOgImage({
    eyebrow: resource?.category ?? "Resource",
    title: resource?.title ?? "AutoSutra",
  });
}
