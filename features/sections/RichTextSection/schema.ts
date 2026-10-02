import { defineType } from "sanity";
import SECTIONS from "..";
import { PARTIALS } from "@/src/types/schemas";

export default defineType({
  name: SECTIONS.richTextSection.name,
  title: SECTIONS.richTextSection.title,
  type: "object",
  fields: [{ name: "content", type: PARTIALS.RICH_TEXT }],
  preview: {
    select: { blocks: "content" },
    prepare: ({ blocks = [] }) => ({
      title: "Rich text",
      subtitle:
        blocks
          .find((b: { _type: string }) => b._type === "block")
          ?.children?.map((c: { text: string }) => c.text)
          .join("") ?? "",
    }),
  },
});
