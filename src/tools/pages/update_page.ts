import { NotionClient, notionClient } from "../../notion/client";
import { defineTool } from "../../utils/defineTool";

type UpdatePageInput = Parameters<NotionClient["pages"]["update"]>[0];

export const NOTION_UPDATE_PAGE_TOOL = defineTool((z) => ({
  name: "notion_update_page",
  description: "Update a page in Notion.",
  inputSchema: {
    updateOptions: z.custom<UpdatePageInput>(),
  },
  handler: async (input) => {
    return await notionClient.pages.update(input.updateOptions);
  },
}));
