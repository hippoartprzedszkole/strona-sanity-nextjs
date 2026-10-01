import { ISanityImage, PopulatedPageForLink } from "@/src/types/common";

export interface IHeroSection {
  logo: ISanityImage;
  titleFirstLine: string;
  titleSecondLine: string;
  yellowBoxText: string;
  blueBoxImg: ISanityImage;
  hippoImg: ISanityImage;
  mainImg: ISanityImage;
  heartIcon: ISanityImage;
  starIcon: ISanityImage;
  arrowIcon: ISanityImage;
  pinkBtn: { label: string; tel: string; icon: ISanityImage };
  whiteBtn: { label: string; link: PopulatedPageForLink };
}
