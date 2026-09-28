import { defineArrayMember, defineField, defineType } from "sanity";
import { COMMON_COMPONENTS, MODELS } from "@/src/types/schemas";

export default defineType({
  name: COMMON_COMPONENTS.FOOTER,
  type: "document",
  fields: [
    defineField({
      name: "copyrightText",
      title: "Copyright text",
      type: "string",
    }),
    defineField({
      name: "instagramUrl",
      title: "Instagram URL",
      type: "url",
    }),
    defineField({
      name: "facebookUrl",
      title: "Facebook URL",
      type: "url",
    }),
    defineField({
      name: "links",
      type: "array",
      of: [
        defineArrayMember({
          name: "link",
          type: "reference",
          to: [{ type: MODELS.PAGE }],
        }),
      ],
    }),
  ],
});
