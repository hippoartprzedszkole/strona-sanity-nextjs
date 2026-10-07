import { defineType } from "sanity";
import SECTIONS from "..";
import { MODELS, PARTIALS } from "@/src/types/schemas";

export default defineType({
  name: SECTIONS.moreThanKindergarten.name,
  title: SECTIONS.moreThanKindergarten.title,
  type: "object",
  fields: [
    { name: "hippoImg", type: PARTIALS.IMG },
    { name: "rightStainImg", type: PARTIALS.IMG },
    { name: "topText", type: "string" },
    { name: "titleFirstLine", type: "string" },
    { name: "titleSecondLine", type: "string" },
    { name: "description", type: "text", rows: 4 },
    {
      name: "btn",
      type: "object",
      fields: [
        { name: "label", type: "string" },
        { name: "link", type: "reference", to: [{ type: MODELS.PAGE }] },
      ],
    },
    {
      name: "tileList",
      type: "array",
      validation: (Rule) => Rule.max(6),
      of: [
        {
          name: "kindergartenTile",
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
      title: "titleFirstLine",
      subtitle: "titleSecondLine",
    },
  },
});
