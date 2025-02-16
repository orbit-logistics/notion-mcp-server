import { Client } from "@notionhq/client";
import { z } from "zod";

const envSchema = z.object({
  NOTION_TOKEN: z.string().min(1, "NOTION_TOKEN is required"),
});

// Private instance
export let notionClient: Client;

export const initNotionClient = (env: z.infer<typeof envSchema>) => {
  const parsedEnv = envSchema.parse(env);
  notionClient = new Client({
    auth: parsedEnv.NOTION_TOKEN,
  });
};

export type NotionClient = Client;
