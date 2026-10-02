import { defineType } from "sanity";
import SECTIONS from "..";
import { MODELS, PARTIALS } from "@/src/types/schemas";

const btn = {
  name: "btn",
  type: "object",
  fields: [
    { name: "label", type: "string" },
    { name: "link", type: "reference", to: [{ type: MODELS.PAGE }] },
  ],
};

const linkBox = (name: string) => ({
  name,
  type: "object",
  fields: [
    { name: "leftImg", type: PARTIALS.IMG },
    { name: "rightImg", type: PARTIALS.IMG },
    { name: "titleFirstLine", type: "string" },
    { name: "titleSecondLine", type: "string" },
    btn,
  ],
});

export default defineType({
  name: SECTIONS.forParentsSection.name,
  title: SECTIONS.forParentsSection.title,
  type: "object",
  fields: [
    {
      name: "firstBox",
      type: "object",
      fields: [
        { name: "title", type: "string" },
        { name: "description", type: "text", rows: 3 },
        { name: "bottomImg", type: PARTIALS.IMG },
        { name: "leftImg", type: PARTIALS.IMG },
      ],
    },
    linkBox("secondBox"),
    linkBox("thirdBox"),
    linkBox("fourthBox"),
  ],
  preview: {
    select: {
      title: "firstBox.title",
      subtitle: "firstBox.description",
    },
  },
});
