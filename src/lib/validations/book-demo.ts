import { z } from "zod";

export const bookDemoStepOneSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name"),
  phone: z
    .string()
    .trim()
    .min(10, "Enter a valid phone number")
    .max(15, "Enter a valid phone number"),
  service: z.string().trim().min(1, "Select a service"),
});

export type BookDemoStepOneValues = z.infer<typeof bookDemoStepOneSchema>;

export const bookDemoStepTwoSchema = z.object({
  dealership: z.string().trim().max(120).optional(),
  email: z
    .string()
    .trim()
    .email("Enter a valid email")
    .optional()
    .or(z.literal("")),
  message: z.string().trim().max(2000).optional(),
});

export type BookDemoStepTwoValues = z.infer<typeof bookDemoStepTwoSchema>;
