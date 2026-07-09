import Image from "next/image";
import type { Resource } from "@/data/resources";

export function ResourceCoverImage({
  resource,
  className,
  priority,
  sizes = "(min-width: 1024px) 400px, 100vw",
}: {
  resource: Resource;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  const topic = resource.tags[0]?.replace(/-/g, " ") ?? "dealer marketing";

  return (
    <Image
      src={`/resources/cover/${resource.slug}`}
      alt={`AutoSutra ${resource.category.toLowerCase()} cover image for ${topic}: ${resource.title}`}
      width={1200}
      height={675}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      sizes={sizes}
      className={className}
    />
  );
}
