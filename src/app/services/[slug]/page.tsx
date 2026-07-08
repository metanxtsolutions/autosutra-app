import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ComingSoon } from "@/components/shared/coming-soon";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { services } from "@/data/services";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return pageMetadata({
    title: service.name,
    description: `${service.summary} Serving dealerships across India.`,
    path: `/services/${service.slug}`,
    keywords: [
      `${service.name} for car dealerships India`,
      `${service.name} agency India`,
      `${service.name} Mumbai`,
      `${service.name} Delhi`,
    ],
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <>
      <JsonLd data={serviceSchema(service)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.name, path: `/services/${service.slug}` },
        ])}
      />
      <ComingSoon
        eyebrow="Service"
        title={service.name}
        description={`${service.summary} A full page with pricing, process, and results for this service is on the way. Talk to our team for details today.`}
      />
    </>
  );
}
