import { ISanityImage, PopulatedPageForLink } from "@/src/types/common";

export interface ILanguagesCounterBox {
  numberField: string;
  text: string;
}

export interface ILanguagesSection {
  sectionBg: ISanityImage;
  leftImg: ISanityImage;
  rightImg: ISanityImage;
  topText: string;
  titleFirstLine: string;
  titleSecondLine: string;
  description: string;
  firstCounterBox: ILanguagesCounterBox;
  secondCounterBox: ILanguagesCounterBox;
  btn: { label: string; link: PopulatedPageForLink };
}
