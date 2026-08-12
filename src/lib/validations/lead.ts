import { z } from "zod";

export const outsideLeadSchema = z.object({
  name: z.string().trim().min(2, "Enter a name"),
  dealership: z.string().trim().max(120).optional(),
  email: z.string().trim().email("Enter a valid email").optional().or(z.literal("")),
  phone: z.string().trim().max(20).optional(),
  service: z.string().trim().max(120).optional(),
  message: z.string().trim().max(2000).optional(),
  sourceDetail: z
    .string()
    .trim()
    .min(2, "Say where this lead came from, e.g. Referral, LinkedIn, Event")
    .max(120),
});

export type OutsideLeadValues = z.infer<typeof outsideLeadSchema>;

export const leadStatusValues = [
  "NEW",
  "CONTACTED",
  "QUALIFIED",
  "PROPOSAL_SENT",
  "WON",
  "LOST",
] as const;

export const noteSchema = z.object({
  body: z.string().trim().min(1, "Note can't be empty").max(4000),
});
