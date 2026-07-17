"use server";

import { Resend } from "resend";
import {
  bookDemoStepOneSchema,
  bookDemoStepTwoSchema,
  type BookDemoStepOneValues,
  type BookDemoStepTwoValues,
} from "@/lib/validations/book-demo";
import { siteConfig } from "@/data/site-config";

export type BookDemoActionState = {
  success: boolean;
  message: string;
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

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.log("New AutoSutra demo request (RESEND_API_KEY not set):", parsed.data);
    return {
      success: true,
      message: "Thanks. Our team will call you within 30 minutes.",
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
  };
}

export async function submitDemoStepTwo(
  contact: BookDemoStepOneValues,
  values: BookDemoStepTwoValues,
): Promise<BookDemoActionState> {
  const parsed = bookDemoStepTwoSchema.safeParse(values);

  if (!parsed.success) {
    return {
      success: false,
      message: "Please check the form for errors and try again.",
    };
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
