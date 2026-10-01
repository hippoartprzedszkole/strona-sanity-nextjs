import { defineArrayMember, defineField, defineType } from "sanity";
import { COMMON_COMPONENTS, MODELS, PARTIALS } from "@/src/types/schemas";

export default defineType({
  name: COMMON_COMPONENTS.HEADER,
  type: "document",
  fields: [
    defineField({
      name: "menu",
      type: "array",
      of: [
        defineArrayMember({
          name: "link",
          type: "reference",
          to: [{ type: MODELS.PAGE }],
        }),
      ],
    }),
    defineField({
      name: "menuItemHoverImg",
      title: "Menu item hover image (underline)",
      type: PARTIALS.IMG,
    }),
    defineField({
      name: "btnLabel",
      title: "Button label",
      type: "string",
      initialValue: "UMÓW WIZYTĘ",
    }),
    defineField({
      name: "btnPhone",
      title: "Button phone number",
      type: "string",
    }),
    defineField({
      name: "btnIcon",
      title: "Button icon",
      type: PARTIALS.IMG,
    }),
    defineField({
      name: "rightSideIcon",
      title: "Right side icon",
      type: PARTIALS.IMG,
    }),
  ],
});
