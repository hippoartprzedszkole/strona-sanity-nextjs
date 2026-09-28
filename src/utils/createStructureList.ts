import { IconComponent } from "@sanity/icons";
import { ListItemBuilder, StructureBuilder } from "sanity/structure";

export const createStructureList = ({
  S,
  icon,
  title,
  items,
}: {
  S: StructureBuilder;
  icon?: IconComponent;
  title: string;
  items: ListItemBuilder[];
}) => {
  return S.listItem()
    .title(title)
    .icon(icon)
    .child(S.list().title(title).items(items));
};
