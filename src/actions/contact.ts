"use server";

import { Resend } from "resend";
import {
  contactSchema,
  type ContactFormValues,
} from "@/lib/validations/contact";
import { siteConfig } from "@/data/site-config";

export type ContactActionState = {
  success: boolean;
  message: string;
};

function leadEmailHtml(data: ContactFormValues) {
  const rows: [string, string][] = [
    ["Name", data.name],
    ["Dealership", data.dealership],
    ["Email", data.email],
    ["Phone", data.phone],
    ["Interested in", data.service],
  ];
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
      <h2 style="font-size:18px;margin-bottom:16px;">New lead from autosutra.in</h2>
      <table cellpadding="0" cellspacing="0">${rowsHtml}</table>
      ${messageHtml}
    </div>
  `;
}

export async function submitContactForm(
  values: ContactFormValues,
): Promise<ContactActionState> {
  const parsed = contactSchema.safeParse(values);

  if (!parsed.success) {
    return {
      success: false,
      message: "Please check the form for errors and try again.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    // No API key configured yet. Log server-side so nothing is silently
    // lost, but this means the lead does not reach anyone's inbox.
    console.log("New AutoSutra lead (RESEND_API_KEY not set):", parsed.data);
    return {
      success: true,
      message: "Thanks. Our team will reach out within 24 hours.",
    };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? "AutoSutra Website <onboarding@resend.dev>",
      to: siteConfig.contact.email,
      replyTo: parsed.data.email,
      subject: `New lead: ${parsed.data.dealership} (${parsed.data.service})`,
      html: leadEmailHtml(parsed.data),
    });

    // The Resend SDK returns API-level failures (unverified recipient,
    // invalid domain, etc.) as this `error` field rather than throwing,
    // so they must be checked explicitly or they fail silently.
    if (error) {
      console.error("Resend API returned an error sending lead email:", error);
      console.log("New AutoSutra lead (email send failed):", parsed.data);
    }
  } catch (error) {
    console.error("Failed to send lead email:", error);
    console.log("New AutoSutra lead (email send failed):", parsed.data);
    return {
      success: true,
      message: "Thanks. Our team will reach out within 24 hours.",
    };
  }

  return {
    success: true,
    message: "Thanks. Our team will reach out within 24 hours.",
  };
}
