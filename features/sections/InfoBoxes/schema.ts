import { defineType } from "sanity";
import SECTIONS from "..";
import { MODELS, PARTIALS } from "@/src/types/schemas";

export default defineType({
  name: SECTIONS.infoBoxes.name,
  title: SECTIONS.infoBoxes.title,
  type: "object",
  fields: [
    { name: "leftImg", type: PARTIALS.IMG },
    { name: "rightImg", type: PARTIALS.IMG },
    {
      name: "firstBox",
      type: "object",
      fields: [
        { name: "title", type: "string" },
        { name: "starsImg", type: PARTIALS.IMG },
        { name: "heartImg", type: PARTIALS.IMG },
        { name: "quote", type: "text", rows: 4 },
        { name: "author", type: "string" },
      ],
    },
    {
      name: "secondBox",
      type: "object",
      fields: [
        { name: "title", type: "string" },
        { name: "subtitle", type: "text", rows: 3 },
        {
          name: "btn",
          type: "object",
          fields: [
            { name: "label", type: "string" },
            { name: "link", type: "reference", to: [{ type: MODELS.PAGE }] },
            { name: "icon", type: PARTIALS.IMG },
          ],
        },
        { name: "rightImg", type: PARTIALS.IMG },
      ],
    },
    {
      name: "thirdBox",
      type: "object",
      fields: [
        { name: "title", type: "string" },
        {
          name: "questionList",
          type: "array",
          of: [
            {
              name: "questionItem",
              type: "object",
              fields: [
                { name: "question", type: "string" },
                { name: "answer", type: "text", rows: 3 },
              ],
              preview: { select: { title: "question", subtitle: "answer" } },
            },
          ],
        },
        { name: "plusIcon", type: PARTIALS.IMG },
      ],
    },
  ],
  preview: {
    select: {
      title: "secondBox.title",
      subtitle: "secondBox.subtitle",
    },
  },
});
