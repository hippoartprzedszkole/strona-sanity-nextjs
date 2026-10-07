import { defineType } from "sanity";
import SECTIONS from "..";
import { PARTIALS } from "@/src/types/schemas";

export default defineType({
  name: SECTIONS.dayInHippoArt.name,
  title: SECTIONS.dayInHippoArt.title,
  type: "object",
  fields: [
    { name: "title", type: "string" },
    { name: "rightImg", type: PARTIALS.IMG },
    { name: "separatorImg", type: PARTIALS.IMG },
    {
      name: "tileList",
      type: "array",
      validation: (Rule) => Rule.max(6),
      of: [
        {
          name: "dayTile",
          type: "object",
          fields: [
            { name: "hourText", type: "string" },
            { name: "icon", type: PARTIALS.IMG },
            { name: "title", type: "string" },
            { name: "description", type: "text", rows: 3 },
          ],
          preview: {
            select: { title: "title", subtitle: "hourText" },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
