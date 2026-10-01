import { defineType } from "sanity";
import SECTIONS from "..";
import { MODELS, PARTIALS } from "@/src/types/schemas";

const counterBox = (name: string) => ({
  name,
  type: "object",
  fields: [
    { name: "numberField", type: "string" },
    { name: "text", type: "text", rows: 2 },
  ],
});

export default defineType({
  name: SECTIONS.languagesSection.name,
  title: SECTIONS.languagesSection.title,
  type: "object",
  fields: [
    { name: "sectionBg", type: PARTIALS.IMG },
    { name: "leftImg", type: PARTIALS.IMG },
    { name: "rightImg", type: PARTIALS.IMG },
    { name: "topText", type: "string" },
    { name: "titleFirstLine", type: "string" },
    { name: "titleSecondLine", type: "string" },
    { name: "description", type: "text", rows: 4 },
    counterBox("firstCounterBox"),
    counterBox("secondCounterBox"),
    {
      name: "btn",
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
