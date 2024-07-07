import { z } from "zod";

export const RequestDto = z
  .object({
    from: z.string().min(1).min(1),
    to: z.string().min(1),
    code: z.string().min(1),
    weight: z.string().min(1),
    type: z.string().min(1),
    options: z.string().min(1),
    domains: z.string().min(1),
    contact: z.string().min(1),
  })
  .strict();

export type FormValues = z.infer<typeof RequestDto>;
