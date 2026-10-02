import { defineType, defineField } from "sanity";
import { COMMON_COMPONENTS, MODELS } from "@/src/types/schemas";

export default defineType({
  name: MODELS.COMMON_COMPONENTS,
  type: "document",
  title: "Komponenty wspólne",
  groups: Object.values(COMMON_COMPONENTS).map((component: string) => ({
    name: component,
    title: component,
  })),
  fields: Object.values(COMMON_COMPONENTS).map((component: string) =>
    defineField({
      name: component,
      type: component,
      group: component,
    }),
  ),
  preview: {
    prepare: () => ({
      title: "Komponenty wspólne",
      subtitle: "Nagłówek i stopka strony",
    }),
  },
});
