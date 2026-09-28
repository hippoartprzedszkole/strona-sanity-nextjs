import { ISanityImage } from "@/src/types/common";
import { PortableTextBlock } from "next-sanity";

export interface ICTABanner {
  title: string;
  description: PortableTextBlock[];
  bgImg: ISanityImage;
  appStoreLink: string;
  appStoreImg: ISanityImage;
  appStoreQR: ISanityImage;
  googlePlayLink: string;
  googlePlayImg: ISanityImage;
  googlePlayQR: ISanityImage;
}
