import { PARTIALS } from "@/src/types/schemas";
import { defineType } from "sanity";

export default defineType({
  name: PARTIALS.IMG,
  type: "image",
  fields: [
    {
      title: "Alternative text",
      name: "alt",
      type: "string",
    },
  ],
  preview: {
    select: {
      subtitle: "alt",
      media: "asset",
    },
    prepare: ({ subtitle = "", media }) => ({
      title: "Image",
      subtitle,
      media,
    }),
  },
});
