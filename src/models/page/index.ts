import {
  required,
  unique,
  onlyUrlFriendlyCharactersSlug,
} from "@/src/utils/schemaValidation";
import { isSlugUnique } from "@/src/utils/schemaValidation";
import { defineType } from "sanity";
import { MODELS } from "@/src/types/schemas";
import { SECTION_NAMES } from "@/features/sections";
import { DEFAULT_SEO_DESCRIPTION } from "@/src/utils/seoDefaults";

export default defineType({
  name: MODELS.PAGE,
  type: "document",
  groups: [
    {
      name: "content",
      title: "Content",
    },
    {
      name: "seo",
      title: "SEO",
    },
  ],
  fields: [
    {
      name: "title",
      type: "string",
      validation: required,
      group: "content",
    },
    {
      title: "Path name",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
        slugify: (input: string): string => {
          return `/${input.toLowerCase().replace(/\s+/g, "-")}`;
        },
        isUnique: isSlugUnique,
      },
      validation: [required, onlyUrlFriendlyCharactersSlug],
      group: "content",
    },
    {
      name: "seo",
      title: "SEO",
      type: "object",
      group: "seo",
      initialValue: {
        description: DEFAULT_SEO_DESCRIPTION,
      },
      fields: [
        {
          name: "description",
          title: "Meta description",
          type: "text",
          rows: 3,
          description:
            "Domyślnie wstawiony jest opis ogólny przedszkola – zmień go, aby nadpisać dla tej strony",
        },
        {
          name: "ogTitle",
          title: "OG Title",
          type: "string",
          description: "Domyślnie używany jest title strony",
        },
        {
          name: "ogImage",
          title: "OG Image",
          type: "image",
        },
      ],
    },
    {
      name: "sections",
      type: "array",
      validation: unique,
      of: Object.values(SECTION_NAMES).map((section) => ({
        type: section,
      })),
      group: "content",
    },
  ],
});
