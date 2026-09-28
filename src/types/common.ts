import { SanityAssetDocument, SanityImageAssetDocument } from "next-sanity";
import { IHeader } from "@/features/layout/Header/types";
import { COMMON_COMPONENTS } from "./schemas";
import { LANGS } from "./langs";
import { IAuthForm } from "@/features/layout/AuthForm/types";
import { IFooter } from "@/features/layout/Footer/types";
import { IPage } from "./page";

export interface ISanityImage {
  asset: SanityAssetDocument;
  alt?: string;
}

export interface ISanityReferenceItem {
  _type: "reference";
  _ref: string;
}

export interface ICommonComponents {
  [COMMON_COMPONENTS.HEADER]: IHeader;
  [COMMON_COMPONENTS.FOOTER]: IFooter;
  [COMMON_COMPONENTS.AUTH_FORM]: IAuthForm;
  language: LANGS;
}

export type IImg = [
  | {
      asset: SanityImageAssetDocument;
    }
  | { url: string; _type: "link"; _key?: string },
];

export type PopulatedPageForLink = Pick<IPage, "slug" | "title">;
