import { LANGS } from "@/src/types/langs";
import { MODELS } from "@/src/types/schemas";
import { createStructureListItem } from "@/src/utils/createStructureListItem";
import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      createStructureListItem({
        S,
        schemaType: MODELS.PAGE,
        title: "Landing page",
        filter: {
          query: `_type == $schemaType && (language == $lang || language == null)`,
          params: { schemaType: MODELS.PAGE, lang: LANGS.POLISH },
        },
      }),
      createStructureListItem({
        S,
        schemaType: MODELS.COMMON_COMPONENTS,
        title: "Common components",
        filter: {
          query: `_type == $schemaType && (language == $lang)`,
          params: { schemaType: MODELS.COMMON_COMPONENTS, lang: LANGS.POLISH },
        },
        isSingleton: true,
      }),
      createStructureListItem({
        S,
        schemaType: MODELS.SURVEY_RESPONSE,
        title: "Survey Responses",
      }),
    ]);
