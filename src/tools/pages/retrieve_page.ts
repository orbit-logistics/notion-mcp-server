import { notionClient } from "../../notion/client";
import { defineTool } from "../../utils/defineTool";

export const NOTION_RETRIEVE_PAGE_TOOL = defineTool((z) => ({
  name: "notion_retrieve_page",
  description: "Retrieve a page from Notion",
  inputSchema: {
    page_id: z.string(),
  },
  handler: async (input) => {
    const page = await notionClient.pages.retrieve({ page_id: input.page_id });
    return page;
  },
}));
