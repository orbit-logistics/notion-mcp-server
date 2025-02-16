import { notionClient, NotionClient } from "../../notion/client";
import { defineTool } from "../../utils/defineTool";

type CreatePageInput = Parameters<NotionClient["pages"]["create"]>[0];

export const NOTION_CREATE_PAGE_TOOL = defineTool((z) => ({
  name: "notion_create_page",
  description: "Create a new page in Notion.",
  inputSchema: {
    createOptions: z.custom<CreatePageInput>(),
  },
  handler: async (input) => {
    return await notionClient.pages.create(input.createOptions);
  },
}));
