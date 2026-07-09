import { NextResponse } from "next/server";
import { renderResourceCover } from "@/lib/resource-cover";
import { resources } from "@/data/resources";

export function generateStaticParams() {
  return resources.map((resource) => ({ slug: resource.slug }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const resource = resources.find((item) => item.slug === slug);

  if (!resource) {
    return new NextResponse("Not found", { status: 404 });
  }

  const image = renderResourceCover({
    title: resource.title,
    category: resource.category,
    cluster: resource.coverCluster,
  });

  image.headers.set("Cache-Control", "public, immutable, no-transform, max-age=31536000");
  return image;
}
