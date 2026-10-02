import { ISanityImage, PopulatedPageForLink } from "@/src/types/common";

export interface IForParentsBtn {
  label: string;
  link: PopulatedPageForLink;
}

export interface IForParentsFirstBox {
  title: string;
  description: string;
  bottomImg: ISanityImage;
  leftImg: ISanityImage;
}

export interface IForParentsLinkBox {
  leftImg: ISanityImage;
  rightImg?: ISanityImage;
  titleFirstLine: string;
  titleSecondLine: string;
  btn: IForParentsBtn;
}

export interface IForParentsSection {
  firstBox: IForParentsFirstBox;
  secondBox: IForParentsLinkBox;
  thirdBox: IForParentsLinkBox;
  fourthBox: IForParentsLinkBox;
}
