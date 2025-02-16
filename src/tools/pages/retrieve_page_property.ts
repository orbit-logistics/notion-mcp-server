import { notionClient, NotionClient } from "../../notion/client";
import { defineTool } from "../../utils/defineTool";

type RetrievePagePropertyInput = Parameters<
  NotionClient["pages"]["properties"]["retrieve"]
>[0];

export const NOTION_RETRIEVE_PAGE_PROPERTY_TOOL = defineTool((z) => ({
  name: "notion_retrieve_page_property",
  description: "Retrieve a property of a page in Notion.",
  inputSchema: {
    retrieveOptions: z.custom<RetrievePagePropertyInput>(),
  },
  handler: async (input) => {
    return await notionClient.pages.properties.retrieve(input.retrieveOptions);
  },
}));
