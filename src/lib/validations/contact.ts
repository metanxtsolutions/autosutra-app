import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name"),
  dealership: z.string().trim().min(2, "Enter your dealership name"),
  email: z.string().trim().email("Enter a valid email"),
  phone: z
    .string()
    .trim()
    .min(10, "Enter a valid phone number")
    .max(15, "Enter a valid phone number"),
  service: z.string().trim().min(1, "Select a service"),
  message: z.string().trim().max(2000).optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
