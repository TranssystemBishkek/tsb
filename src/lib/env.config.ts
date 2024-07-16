import { z } from "zod";

const envSchema = z.object({
  TOKEN: z.string().min(1),
  CHAT_ID: z.string().min(1),
});

type Env = z.infer<typeof envSchema>;

export const validateEnvVariables = (): Env => envSchema.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envSchema> {}
  }
}
