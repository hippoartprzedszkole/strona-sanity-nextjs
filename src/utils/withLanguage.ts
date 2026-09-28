import { DocumentDefinition, defineField } from "sanity";
import { LANGS } from "../types/langs";

export function withLanguage(schema: DocumentDefinition): DocumentDefinition {
  schema.fields.push(
    defineField({
      name: "language",
      type: "string",
      title: "Language",
      options: {
        list: Object.entries(LANGS).map((el) => ({
          title: el[0],
          value: el[1],
        })),
      },
      hidden: true,
    })
  );
  return schema;
}
