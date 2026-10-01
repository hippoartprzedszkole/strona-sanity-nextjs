import { defineType } from "sanity";
import SECTIONS from "..";
import { MODELS, PARTIALS } from "@/src/types/schemas";

export default defineType({
  name: SECTIONS.heroSection.name,
  title: SECTIONS.heroSection.title,
  type: "object",
  fields: [
    { name: "logo", type: PARTIALS.IMG },
    { name: "titleFirstLine", type: "string" },
    { name: "titleSecondLine", type: "string" },
    { name: "yellowBoxText", type: "text", rows: 3 },
    { name: "blueBoxImg", type: PARTIALS.IMG },
    { name: "hippoImg", type: PARTIALS.IMG },
    { name: "mainImg", type: PARTIALS.IMG },
    { name: "heartIcon", type: PARTIALS.IMG },
    { name: "starIcon", type: PARTIALS.IMG },
    { name: "arrowIcon", type: PARTIALS.IMG },
    {
      name: "pinkBtn",
      type: "object",
      fields: [
        { name: "label", type: "string" },
        { name: "tel", type: "string" },
        { name: "icon", type: PARTIALS.IMG },
      ],
    },
    {
      name: "whiteBtn",
      type: "object",
      fields: [
        { name: "label", type: "string" },
        { name: "link", type: "reference", to: [{ type: MODELS.PAGE }] },
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
