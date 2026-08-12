import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { LeadDetail } from "@/components/leads/lead-detail";

export const dynamic = "force-dynamic";

export default async function LeadDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const [lead, users] = await Promise.all([
    prisma.lead.findUnique({
      where: { id },
      include: {
        assignedTo: { select: { id: true, name: true } },
        notes: {
          include: { author: { select: { name: true } } },
          orderBy: { createdAt: "desc" },
        },
      },
    }),
    prisma.user.findMany({ select: { id: true, name: true }, orderBy: { name: "asc" } }),
  ]);

  if (!lead) notFound();

  return <LeadDetail lead={lead} users={users} />;
}
