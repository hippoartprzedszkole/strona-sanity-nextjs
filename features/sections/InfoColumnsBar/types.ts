import { ISanityImage } from "@/src/types/common";

export interface IInfoColumnsBarItem {
  _key: string;
  icon: ISanityImage;
  title: string;
  subtitle: string;
}

export interface IInfoColumnsBar {
  leftStainImg: ISanityImage;
  rightBubblesImg: ISanityImage;
  separatorImg: ISanityImage;
  items: IInfoColumnsBarItem[];
}
