import { ISanityImage, PopulatedPageForLink } from "@/src/types/common";

export interface IHeader {
  menu: PopulatedPageForLink[];
  menuItemHoverImg?: ISanityImage;
  btnLabel?: string;
  btnPhone?: string;
  btnIcon?: ISanityImage;
  rightSideIcon?: ISanityImage;
}
