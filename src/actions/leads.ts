"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import {
  outsideLeadSchema,
  noteSchema,
  leadStatusValues,
} from "@/lib/validations/lead";

export type LeadActionState = {
  success: boolean;
  message: string;
};

// Every mutation here checks the session directly rather than relying on
// middleware alone: middleware protects page navigation, but a server
// action is its own endpoint and this data is worth defending in depth.
async function requireUserId(): Promise<string> {
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) {
    throw new Error("Not signed in.");
  }
  return userId;
}

export async function createOutsideLead(
  _prevState: LeadActionState,
  formData: FormData,
): Promise<LeadActionState> {
  await requireUserId();

  const parsed = outsideLeadSchema.safeParse({
    name: formData.get("name"),
    dealership: formData.get("dealership") || undefined,
    email: formData.get("email") || undefined,
    phone: formData.get("phone") || undefined,
    service: formData.get("service") || undefined,
    message: formData.get("message") || undefined,
    sourceDetail: formData.get("sourceDetail"),
  });

  if (!parsed.success) {
    return {
      success: false,
      message: parsed.error.issues[0]?.message ?? "Please check the form.",
    };
  }

  const lead = await prisma.lead.create({
    data: {
      name: parsed.data.name,
      dealership: parsed.data.dealership || null,
      email: parsed.data.email || null,
      phone: parsed.data.phone || null,
      service: parsed.data.service || null,
      message: parsed.data.message || null,
      sourceDetail: parsed.data.sourceDetail,
      source: "OUTSIDE",
    },
  });

  revalidatePath("/leads");
  return { success: true, message: `Lead added: ${lead.name}` };
}

export async function updateLeadStatus(
  leadId: string,
  status: (typeof leadStatusValues)[number],
  lostReason?: string,
) {
  await requireUserId();

  await prisma.lead.update({
    where: { id: leadId },
    data: {
      status,
      lostReason: status === "LOST" ? lostReason || null : null,
    },
  });

  revalidatePath("/leads");
  revalidatePath(`/leads/${leadId}`);
}

export async function assignLead(leadId: string, assignedToId: string | null) {
  await requireUserId();

  await prisma.lead.update({
    where: { id: leadId },
    data: { assignedToId },
  });

  revalidatePath("/leads");
  revalidatePath(`/leads/${leadId}`);
}

export async function setFollowUp(leadId: string, followUpAt: string | null) {
  await requireUserId();

  await prisma.lead.update({
    where: { id: leadId },
    data: { followUpAt: followUpAt ? new Date(followUpAt) : null },
  });

  revalidatePath("/leads");
  revalidatePath(`/leads/${leadId}`);
}

export async function addNote(
  leadId: string,
  _prevState: LeadActionState,
  formData: FormData,
): Promise<LeadActionState> {
  const userId = await requireUserId();

  const parsed = noteSchema.safeParse({ body: formData.get("body") });
  if (!parsed.success) {
    return {
      success: false,
      message: parsed.error.issues[0]?.message ?? "Note can't be empty.",
    };
  }

  await prisma.note.create({
    data: { leadId, authorId: userId, body: parsed.data.body },
  });

  revalidatePath(`/leads/${leadId}`);
  return { success: true, message: "Note added." };
}
