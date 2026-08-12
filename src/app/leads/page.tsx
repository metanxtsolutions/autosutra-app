import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { leadStatusValues } from "@/lib/validations/lead";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export const dynamic = "force-dynamic";

const statusLabel: Record<string, string> = {
  NEW: "New",
  CONTACTED: "Contacted",
  QUALIFIED: "Qualified",
  PROPOSAL_SENT: "Proposal sent",
  WON: "Won",
  LOST: "Lost",
};

const statusColor: Record<string, string> = {
  NEW: "bg-blue-100 text-blue-700",
  CONTACTED: "bg-amber-100 text-amber-700",
  QUALIFIED: "bg-purple-100 text-purple-700",
  PROPOSAL_SENT: "bg-indigo-100 text-indigo-700",
  WON: "bg-green-100 text-green-700",
  LOST: "bg-red-100 text-red-700",
};

const sourceLabel: Record<string, string> = {
  WEBSITE_CONTACT: "Website: Contact",
  WEBSITE_BOOK_DEMO: "Website: Book a Demo",
  OUTSIDE: "Outside",
};

export default async function LeadsPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  const { status } = await searchParams;
  const isValidStatus = status && leadStatusValues.includes(status as never);

  const leads = await prisma.lead.findMany({
    where: isValidStatus ? { status: status as never } : undefined,
    include: { assignedTo: { select: { name: true } } },
    orderBy: { createdAt: "desc" },
  });

  const counts = await prisma.lead.groupBy({
    by: ["status"],
    _count: true,
  });
  const countByStatus = Object.fromEntries(
    counts.map((c) => [c.status, c._count]),
  );
  const totalCount = counts.reduce((sum, c) => sum + c._count, 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-2xl font-semibold text-ink">Leads</h1>
          <p className="text-sm text-muted-foreground">
            Website enquiries and outside leads, all in one place.
          </p>
        </div>
        <Link href="/leads/new" className={cn(buttonVariants({ size: "lg" }), "rounded-full")}>
          Add outside lead
        </Link>
      </div>

      <div className="flex flex-wrap gap-2 text-sm">
        <Link
          href="/leads"
          className={cn(
            "rounded-full border px-3 py-1",
            !status
              ? "border-ink bg-ink text-ink-foreground"
              : "border-border text-muted-foreground hover:border-ink",
          )}
        >
          All ({totalCount})
        </Link>
        {leadStatusValues.map((s) => (
          <Link
            key={s}
            href={`/leads?status=${s}`}
            className={cn(
              "rounded-full border px-3 py-1",
              status === s
                ? "border-ink bg-ink text-ink-foreground"
                : "border-border text-muted-foreground hover:border-ink",
            )}
          >
            {statusLabel[s]} ({countByStatus[s] ?? 0})
          </Link>
        ))}
      </div>

      <div className="overflow-x-auto rounded-2xl border border-border bg-card">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-left text-xs uppercase tracking-wide text-muted-foreground">
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Dealership</th>
              <th className="px-4 py-3">Source</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Assigned to</th>
              <th className="px-4 py-3">Follow up</th>
              <th className="px-4 py-3">Received</th>
            </tr>
          </thead>
          <tbody>
            {leads.length === 0 && (
              <tr>
                <td colSpan={7} className="px-4 py-10 text-center text-muted-foreground">
                  No leads yet.
                </td>
              </tr>
            )}
            {leads.map((lead) => (
              <tr key={lead.id} className="border-b border-border last:border-0 hover:bg-muted/40">
                <td className="px-4 py-3">
                  <Link href={`/leads/${lead.id}`} className="font-medium text-ink hover:underline">
                    {lead.name}
                  </Link>
                </td>
                <td className="px-4 py-3 text-muted-foreground">{lead.dealership || "—"}</td>
                <td className="px-4 py-3 text-muted-foreground">
                  {sourceLabel[lead.source]}
                  {lead.sourceDetail ? ` · ${lead.sourceDetail}` : ""}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={cn(
                      "rounded-full px-2.5 py-1 text-xs font-medium",
                      statusColor[lead.status],
                    )}
                  >
                    {statusLabel[lead.status]}
                  </span>
                </td>
                <td className="px-4 py-3 text-muted-foreground">
                  {lead.assignedTo?.name || "Unassigned"}
                </td>
                <td className="px-4 py-3 text-muted-foreground">
                  {lead.followUpAt
                    ? new Date(lead.followUpAt).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                      })
                    : "—"}
                </td>
                <td className="px-4 py-3 text-muted-foreground">
                  {new Date(lead.createdAt).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
