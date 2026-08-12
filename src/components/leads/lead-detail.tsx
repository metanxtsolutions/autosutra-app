"use client";

import { useActionState, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  addNote,
  assignLead,
  setFollowUp,
  updateLeadStatus,
  type LeadActionState,
} from "@/actions/leads";
import { leadStatusValues } from "@/lib/validations/lead";
import type { Prisma } from "@/generated/prisma/client";

type LeadWithRelations = Prisma.LeadGetPayload<{
  include: {
    assignedTo: { select: { id: true; name: true } };
    notes: { include: { author: { select: { name: true } } } };
  };
}>;

const statusLabel: Record<string, string> = {
  NEW: "New",
  CONTACTED: "Contacted",
  QUALIFIED: "Qualified",
  PROPOSAL_SENT: "Proposal sent",
  WON: "Won",
  LOST: "Lost",
};

const sourceLabel: Record<string, string> = {
  WEBSITE_CONTACT: "Website: Contact form",
  WEBSITE_BOOK_DEMO: "Website: Book a Demo",
  OUTSIDE: "Outside lead",
};

const initialNoteState: LeadActionState = { success: false, message: "" };

export function LeadDetail({
  lead,
  users,
}: {
  lead: LeadWithRelations;
  users: { id: string; name: string }[];
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [lostReason, setLostReason] = useState(lead.lostReason ?? "");
  const [showLostReason, setShowLostReason] = useState(lead.status === "LOST");

  const boundAddNote = addNote.bind(null, lead.id);
  const [noteState, noteFormAction, isNotePending] = useActionState(
    boundAddNote,
    initialNoteState,
  );

  const handleStatusChange = (status: string) => {
    if (status === "LOST") {
      setShowLostReason(true);
      return;
    }
    setShowLostReason(false);
    startTransition(async () => {
      await updateLeadStatus(lead.id, status as never);
      router.refresh();
    });
  };

  const confirmLostReason = () => {
    startTransition(async () => {
      await updateLeadStatus(lead.id, "LOST", lostReason);
      router.refresh();
    });
  };

  const handleAssign = (userId: string) => {
    startTransition(async () => {
      await assignLead(lead.id, userId || null);
      router.refresh();
    });
  };

  const handleFollowUp = (value: string) => {
    startTransition(async () => {
      await setFollowUp(lead.id, value || null);
      router.refresh();
    });
  };

  const followUpValue = lead.followUpAt
    ? new Date(lead.followUpAt).toISOString().slice(0, 10)
    : "";

  return (
    <div className="max-w-3xl space-y-6">
      <Link
        href="/leads"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-ink"
      >
        <ArrowLeft className="size-4" /> Back to leads
      </Link>

      <div className="rounded-2xl border border-border bg-card p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="font-heading text-2xl font-semibold text-ink">{lead.name}</h1>
            <p className="text-sm text-muted-foreground">
              {sourceLabel[lead.source]}
              {lead.sourceDetail ? ` · ${lead.sourceDetail}` : ""} · Received{" "}
              {new Date(lead.createdAt).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </p>
          </div>
          {isPending && <Loader2 className="size-4 shrink-0 animate-spin text-muted-foreground" />}
        </div>

        <dl className="mt-5 grid gap-4 sm:grid-cols-2">
          {lead.dealership && (
            <div>
              <dt className="text-xs uppercase tracking-wide text-muted-foreground">Dealership</dt>
              <dd className="text-sm text-ink">{lead.dealership}</dd>
            </div>
          )}
          {lead.email && (
            <div>
              <dt className="text-xs uppercase tracking-wide text-muted-foreground">Email</dt>
              <dd className="text-sm text-ink">
                <a href={`mailto:${lead.email}`} className="hover:underline">
                  {lead.email}
                </a>
              </dd>
            </div>
          )}
          {lead.phone && (
            <div>
              <dt className="text-xs uppercase tracking-wide text-muted-foreground">Phone</dt>
              <dd className="text-sm text-ink">
                <a href={`tel:${lead.phone}`} className="hover:underline">
                  {lead.phone}
                </a>
              </dd>
            </div>
          )}
          {lead.service && (
            <div>
              <dt className="text-xs uppercase tracking-wide text-muted-foreground">Service interest</dt>
              <dd className="text-sm text-ink">{lead.service}</dd>
            </div>
          )}
        </dl>

        {lead.message && (
          <div className="mt-5">
            <dt className="text-xs uppercase tracking-wide text-muted-foreground">Message</dt>
            <dd className="mt-1 whitespace-pre-wrap text-sm text-ink">{lead.message}</dd>
          </div>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-border bg-card p-4">
          <label className="text-xs uppercase tracking-wide text-muted-foreground">Status</label>
          <select
            defaultValue={lead.status}
            onChange={(e) => handleStatusChange(e.target.value)}
            className="mt-2 w-full rounded-lg border border-input bg-background px-2.5 py-1.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            {leadStatusValues.map((s) => (
              <option key={s} value={s}>
                {statusLabel[s]}
              </option>
            ))}
          </select>
          {showLostReason && (
            <div className="mt-3 space-y-2">
              <input
                type="text"
                value={lostReason}
                onChange={(e) => setLostReason(e.target.value)}
                placeholder="Reason lost"
                className="w-full rounded-lg border border-input bg-background px-2.5 py-1.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
              />
              <button
                type="button"
                onClick={confirmLostReason}
                className={cn(buttonVariants({ size: "sm" }), "w-full rounded-full")}
              >
                Confirm lost
              </button>
            </div>
          )}
        </div>

        <div className="rounded-2xl border border-border bg-card p-4">
          <label className="text-xs uppercase tracking-wide text-muted-foreground">Assigned to</label>
          <select
            defaultValue={lead.assignedTo?.id ?? ""}
            onChange={(e) => handleAssign(e.target.value)}
            className="mt-2 w-full rounded-lg border border-input bg-background px-2.5 py-1.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            <option value="">Unassigned</option>
            {users.map((u) => (
              <option key={u.id} value={u.id}>
                {u.name}
              </option>
            ))}
          </select>
        </div>

        <div className="rounded-2xl border border-border bg-card p-4">
          <label className="text-xs uppercase tracking-wide text-muted-foreground">Follow up</label>
          <input
            type="date"
            defaultValue={followUpValue}
            onChange={(e) => handleFollowUp(e.target.value)}
            className="mt-2 w-full rounded-lg border border-input bg-background px-2.5 py-1.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
          />
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6">
        <h2 className="font-heading text-lg font-semibold text-ink">Notes</h2>

        <form action={noteFormAction} className="mt-4 space-y-2">
          <Textarea name="body" rows={3} placeholder="Add a note..." required />
          {noteState.message && !noteState.success && (
            <p className="text-sm text-destructive">{noteState.message}</p>
          )}
          <button
            type="submit"
            disabled={isNotePending}
            className={cn(buttonVariants({ size: "sm" }), "gap-2 rounded-full")}
          >
            {isNotePending ? <Loader2 className="size-3.5 animate-spin" /> : null}
            Add note
          </button>
        </form>

        <ul className="mt-6 space-y-4">
          {lead.notes.length === 0 && (
            <li className="text-sm text-muted-foreground">No notes yet.</li>
          )}
          {lead.notes.map((note) => (
            <li key={note.id} className="border-t border-border pt-4 first:border-0 first:pt-0">
              <p className="whitespace-pre-wrap text-sm text-ink">{note.body}</p>
              <p className="mt-1 text-xs text-muted-foreground">
                {note.author.name} ·{" "}
                {new Date(note.createdAt).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "short",
                  hour: "numeric",
                  minute: "2-digit",
                })}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
