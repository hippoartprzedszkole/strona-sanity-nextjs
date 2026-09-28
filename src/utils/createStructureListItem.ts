import { MODELS } from "@/src/types/schemas";
import { StructureBuilder } from "sanity/structure";
import { IconComponent } from "@sanity/icons";
import startCase from "lodash/startCase"

export const createStructureListItem = ({
  S,
  schemaType,
  isSingleton,
  icon,
  title,
  filter,
}: {
  S: StructureBuilder;
  schemaType: MODELS;
  isSingleton?: boolean;
  icon?: IconComponent;
  title?: string;
  filter?: { query: string; params: Record<string, string> };
}) => {
  const outputTitle = title || schemaType;

  if (isSingleton) {
    const singletonId =
      filter && filter.params && filter.params.lang
        ? `${schemaType}_${filter.params.lang}`
        : `singleton-${schemaType}`;
    return S.listItem()
      .title(outputTitle)
      .icon(icon)
      .child(
        S.document()
          .schemaType(schemaType)
          .documentId(singletonId)
      );
  }

  if (filter) {
    return S.documentTypeListItem(schemaType)
      .icon(icon)
      .title(title || startCase(schemaType))
      .id(schemaType + String(Math.random()))
      .child(
        S.documentTypeList(schemaType)
          .title(title || startCase(schemaType))
          .filter(filter.query)
          .params(filter.params)
      );
  } else {
    return S.documentTypeListItem(schemaType)
      .icon(icon)
      .title(title || startCase(schemaType));
  }
};
