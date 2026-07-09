import { renderResourceCover, resourceCoverSize, resourceCoverContentType } from "@/lib/resource-cover";
import { resources } from "@/data/resources";

export const size = resourceCoverSize;
export const contentType = resourceCoverContentType;

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
  return renderResourceCover({
    title: resource?.title ?? "AutoSutra",
    category: resource?.category ?? "Resource",
    cluster: resource?.coverCluster ?? "leads",
  });
}
