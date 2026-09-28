import { IPage } from "@/src/types/page";

type PageType = Pick<IPage, "slug" | "title">[];

export interface IFooter {
  links: PageType;
}
