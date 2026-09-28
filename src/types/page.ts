import { Slug } from "sanity";
import { SECTION_NAMES } from "@/features/sections";
import { LANGS } from "./langs";

export interface ISeo {
  description?: string;
  ogTitle?: string;
  ogImage?: string;
}

export interface IPage {
  title: string;
  slug: Slug;
  seo?: ISeo;
  sections: {
    _type: SECTION_NAMES;
    _key: string;
  }[];
  language: LANGS;
}
