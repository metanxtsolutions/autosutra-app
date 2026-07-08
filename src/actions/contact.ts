"use server";

import {
  contactSchema,
  type ContactFormValues,
} from "@/lib/validations/contact";

export type ContactActionState = {
  success: boolean;
  message: string;
};

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

  // No email/CRM delivery is wired up yet. Needs an API key (e.g. Resend)
  // or CRM webhook from AutoSutra before launch. Logged server-side for now.
  console.log("New AutoSutra lead:", parsed.data);

  return {
    success: true,
    message: "Thanks. Our team will reach out within 24 hours.",
  };
}
