"use server";

import { Resend } from "resend";
import {
  bookDemoStepOneSchema,
  bookDemoStepTwoSchema,
  type BookDemoStepOneValues,
  type BookDemoStepTwoValues,
} from "@/lib/validations/book-demo";
import { siteConfig } from "@/data/site-config";
import { prisma } from "@/lib/prisma";

export type BookDemoActionState = {
  success: boolean;
  message: string;
  leadId?: string;
};

function stepOneEmailHtml(data: BookDemoStepOneValues) {
  const rows: [string, string][] = [
    ["Name", data.name],
    ["Phone", data.phone],
    ["Interested in", data.service],
  ];
  const rowsHtml = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 12px 6px 0;color:#6b7280;font-size:14px;">${label}</td><td style="padding:6px 0;font-size:14px;font-weight:600;">${value}</td></tr>`,
    )
    .join("");
  return `
    <div style="font-family:sans-serif;max-width:480px;">
      <h2 style="font-size:18px;margin-bottom:16px;">New demo request from autosutra.in</h2>
      <table cellpadding="0" cellspacing="0">${rowsHtml}</table>
    </div>
  `;
}

function stepTwoEmailHtml(
  contact: BookDemoStepOneValues,
  data: BookDemoStepTwoValues,
) {
  const rows: [string, string][] = [
    ["Name", contact.name],
    ["Phone", contact.phone],
  ];
  if (data.dealership) rows.push(["Dealership", data.dealership]);
  if (data.email) rows.push(["Email", data.email]);
  const rowsHtml = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 12px 6px 0;color:#6b7280;font-size:14px;">${label}</td><td style="padding:6px 0;font-size:14px;font-weight:600;">${value}</td></tr>`,
    )
    .join("");
  const messageHtml = data.message
    ? `<p style="margin-top:16px;font-size:14px;color:#111827;white-space:pre-wrap;">${data.message}</p>`
    : "";
  return `
    <div style="font-family:sans-serif;max-width:480px;">
      <h2 style="font-size:18px;margin-bottom:16px;">Additional details for ${contact.name}'s demo request</h2>
      <table cellpadding="0" cellspacing="0">${rowsHtml}</table>
      ${messageHtml}
    </div>
  `;
}

export async function submitDemoStepOne(
  values: BookDemoStepOneValues,
): Promise<BookDemoActionState> {
  const parsed = bookDemoStepOneSchema.safeParse(values);

  if (!parsed.success) {
    return {
      success: false,
      message: "Please check the form for errors and try again.",
    };
  }

  // Save the lead first, independent of whether the notification email
  // below succeeds, same reasoning as the Contact form. The id is handed
  // back so step two, if the visitor continues, updates this same record
  // instead of creating a duplicate.
  let leadId: string | undefined;
  try {
    const lead = await prisma.lead.create({
      data: {
        name: parsed.data.name,
        phone: parsed.data.phone,
        service: parsed.data.service,
        source: "WEBSITE_BOOK_DEMO",
      },
    });
    leadId = lead.id;
  } catch (error) {
    console.error("Failed to save demo request lead to the tracker:", error);
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.log("New AutoSutra demo request (RESEND_API_KEY not set):", parsed.data);
    return {
      success: true,
      message: "Thanks. Our team will call you within 30 minutes.",
      leadId,
    };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? "AutoSutra Website <onboarding@resend.dev>",
      to: siteConfig.contact.email,
      subject: `New demo request: ${parsed.data.name} (${parsed.data.service})`,
      html: stepOneEmailHtml(parsed.data),
    });

    if (error) {
      console.error("Resend API returned an error sending demo request email:", error);
      console.log("New AutoSutra demo request (email send failed):", parsed.data);
    }
  } catch (error) {
    console.error("Failed to send demo request email:", error);
    console.log("New AutoSutra demo request (email send failed):", parsed.data);
  }

  return {
    success: true,
    message: "Thanks. Our team will call you within 30 minutes.",
    leadId,
  };
}

export async function submitDemoStepTwo(
  contact: BookDemoStepOneValues,
  values: BookDemoStepTwoValues,
  leadId?: string,
): Promise<BookDemoActionState> {
  const parsed = bookDemoStepTwoSchema.safeParse(values);

  if (!parsed.success) {
    return {
      success: false,
      message: "Please check the form for errors and try again.",
    };
  }

  // Enrich the same lead step one created, rather than creating a second
  // record. leadId is only missing if step one's own save failed, in
  // which case there is nothing to update.
  if (leadId) {
    try {
      await prisma.lead.update({
        where: { id: leadId },
        data: {
          dealership: parsed.data.dealership || null,
          email: parsed.data.email || null,
          message: parsed.data.message || null,
        },
      });
    } catch (error) {
      console.error("Failed to update demo request lead in the tracker:", error);
    }
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.log("AutoSutra demo request follow-up (RESEND_API_KEY not set):", contact, parsed.data);
    return {
      success: true,
      message: "Thanks for the extra details.",
    };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? "AutoSutra Website <onboarding@resend.dev>",
      to: siteConfig.contact.email,
      replyTo: parsed.data.email || undefined,
      subject: `Demo request follow-up: ${contact.name}`,
      html: stepTwoEmailHtml(contact, parsed.data),
    });

    if (error) {
      console.error("Resend API returned an error sending follow-up email:", error);
      console.log("AutoSutra demo request follow-up (email send failed):", contact, parsed.data);
    }
  } catch (error) {
    console.error("Failed to send follow-up email:", error);
    console.log("AutoSutra demo request follow-up (email send failed):", contact, parsed.data);
  }

  return {
    success: true,
    message: "Thanks for the extra details.",
  };
}
