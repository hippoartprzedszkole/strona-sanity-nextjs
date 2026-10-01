import { defineType } from "sanity";
import SECTIONS from "..";
import { PARTIALS } from "@/src/types/schemas";

export default defineType({
  name: SECTIONS.infoColumnsBar.name,
  title: SECTIONS.infoColumnsBar.title,
  type: "object",
  fields: [
    { name: "leftStainImg", type: PARTIALS.IMG },
    { name: "rightBubblesImg", type: PARTIALS.IMG },
    { name: "separatorImg", type: PARTIALS.IMG },
    {
      name: "items",
      type: "array",
      validation: (Rule) => Rule.max(5),
      of: [
        {
          type: "object",
          fields: [
            { name: "icon", type: PARTIALS.IMG },
            { name: "title", type: "string" },
            { name: "subtitle", type: "string" },
          ],
          preview: {
            select: { title: "title", subtitle: "subtitle" },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "items.0.title",
      subtitle: "items.0.subtitle",
    },
  },
});
