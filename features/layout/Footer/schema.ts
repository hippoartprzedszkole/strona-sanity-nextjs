import { defineArrayMember, defineField, defineType } from "sanity";
import { COMMON_COMPONENTS, MODELS } from "@/src/types/schemas";

export default defineType({
  name: COMMON_COMPONENTS.FOOTER,
  type: "document",
  fields: [
    defineField({
      name: "links",
      type: "array",
      of: [
        defineArrayMember({
          name: "link",
          type: "reference",
          to: [{ type: MODELS.PAGE }],
          options: {
            filter: ({ document }) => {
              return {
                filter: "language == $lang",
                params: { lang: document.language },
              };
            },
          },
        }),
      ],
    }),
  ],
});
