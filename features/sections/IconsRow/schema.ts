import { defineType } from "sanity";
import SECTIONS from "..";
import { PARTIALS } from "@/src/types/schemas";

export default defineType({
  name: SECTIONS.iconsRow.name,
  title: SECTIONS.iconsRow.title,
  type: "object",
  fields: [
    { name: "hippoImg", type: PARTIALS.IMG },
    { name: "separatorImg", type: PARTIALS.IMG },
    { name: "topText", type: "string" },
    { name: "title", type: "string" },
    {
      name: "iconList",
      type: "array",
      validation: (Rule) => Rule.max(6),
      of: [
        {
          type: "object",
          fields: [
            { name: "icon", type: PARTIALS.IMG },
            { name: "title", type: "string" },
            { name: "description", type: "text", rows: 3 },
          ],
          preview: {
            select: { title: "title", subtitle: "description" },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "topText",
    },
  },
});
