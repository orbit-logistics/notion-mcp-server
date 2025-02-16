import { NOTION_APPEND_BLOCK_CHILDREN_TOOL } from "./append_block_children";
import { NOTION_DELETE_BLOCK_TOOL } from "./delete_block";
import { NOTION_LIST_BLOCK_CHILDREN_TOOL } from "./list_block_children";
import { NOTION_RETRIEVE_BLOCK_TOOL } from "./retrieve_block";
import { NOTION_UPDATE_BLOCK_TOOL } from "./update_block";

export const NOTION_BLOCKS_TOOLS = [
  NOTION_RETRIEVE_BLOCK_TOOL,
  NOTION_UPDATE_BLOCK_TOOL,
  NOTION_DELETE_BLOCK_TOOL,
  NOTION_APPEND_BLOCK_CHILDREN_TOOL,
  NOTION_LIST_BLOCK_CHILDREN_TOOL,
];
