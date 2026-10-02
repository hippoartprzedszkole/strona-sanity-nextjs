import { ISanityImage, PopulatedPageForLink } from "@/src/types/common";

export interface IInfoBoxesFirstBox {
  title: string;
  starsImg: ISanityImage;
  heartImg?: ISanityImage;
  quote: string;
  author: string;
}

export interface IInfoBoxesSecondBox {
  title: string;
  subtitle: string;
  btn: {
    label: string;
    link: PopulatedPageForLink;
    icon?: ISanityImage;
  };
  rightImg: ISanityImage;
}

export interface IInfoBoxesQuestion {
  _key?: string;
  question: string;
  answer: string;
}

export interface IInfoBoxesThirdBox {
  title: string;
  questionList: IInfoBoxesQuestion[];
  plusIcon: ISanityImage;
}

export interface IInfoBoxes {
  leftImg: ISanityImage;
  rightImg: ISanityImage;
  firstBox: IInfoBoxesFirstBox;
  secondBox: IInfoBoxesSecondBox;
  thirdBox: IInfoBoxesThirdBox;
}
