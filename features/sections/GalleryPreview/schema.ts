import { defineType } from "sanity";
import SECTIONS from "..";
import { MODELS, PARTIALS } from "@/src/types/schemas";

export default defineType({
  name: SECTIONS.galleryPreview.name,
  title: SECTIONS.galleryPreview.title,
  type: "object",
  fields: [
    { name: "title", type: "string" },
    {
      name: "photos",
      type: "array",
      of: [{ type: PARTIALS.IMG }],
      validation: (Rule) => Rule.max(5),
    },
    {
      name: "btn",
      type: "object",
      fields: [
        { name: "label", type: "string" },
        { name: "link", type: "reference", to: [{ type: MODELS.PAGE }] },
      ],
    },
    { name: "rightSideImg", type: PARTIALS.IMG },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
