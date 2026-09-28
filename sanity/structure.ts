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
      }),
      createStructureListItem({
        S,
        schemaType: MODELS.COMMON_COMPONENTS,
        title: "Common components",
        isSingleton: true,
      }),
    ]);
