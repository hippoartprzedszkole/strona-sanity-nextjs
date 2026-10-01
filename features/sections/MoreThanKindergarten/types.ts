import { ISanityImage, PopulatedPageForLink } from "@/src/types/common";

export interface IMoreThanKindergartenTile {
  _key: string;
  icon: ISanityImage;
  title: string;
  description: string;
}

export interface IMoreThanKindergarten {
  hippoImg: ISanityImage;
  rightStainImg: ISanityImage;
  topText: string;
  titleFirstLine: string;
  titleSecondLine: string;
  description: string;
  btn: { label: string; link: PopulatedPageForLink };
  tileList: IMoreThanKindergartenTile[];
}
