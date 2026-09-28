import { PARTIALS } from "@/src/types/schemas";
import { defineType } from "sanity";

export default defineType({
  name: PARTIALS.RICH_TEXT,
  type: "array",
  of: [{ type: "block" }],
});
