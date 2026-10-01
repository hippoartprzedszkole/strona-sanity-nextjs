import { ISanityImage } from "@/src/types/common";

export interface IDayInHippoArtTile {
  _key: string;
  hourText: string;
  icon: ISanityImage;
  title: string;
  description: string;
}

export interface IDayInHippoArt {
  title: string;
  rightImg: ISanityImage;
  separatorImg: ISanityImage;
  tileList: IDayInHippoArtTile[];
}
