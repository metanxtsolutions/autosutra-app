import { renderOgImage, ogImageSize, ogImageContentType } from "@/lib/og-image";
import { services } from "@/data/services";

export const size = ogImageSize;
export const contentType = ogImageContentType;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  return renderOgImage({
    eyebrow: "Service",
    title: service?.name ?? "AutoSutra",
  });
}
