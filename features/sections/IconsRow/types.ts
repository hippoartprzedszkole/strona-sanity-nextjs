import { ISanityImage } from "@/src/types/common";

export interface IIconsRowItem {
  _key: string;
  icon: ISanityImage;
  title: string;
  description: string;
}

export interface IIconsRow {
  hippoImg: ISanityImage;
  separatorImg: ISanityImage;
  topText: string;
  title: string;
  iconList: IIconsRowItem[];
}
