import { ComponentType } from "react";
import dynamic from "next/dynamic";

export enum SECTION_NAMES {
  CTA_BANNER = "ctaBanner",
  HERO_SECTION = "heroSection",
  INFO_COLUMNS_BAR = "infoColumnsBar",
  ICONS_ROW = "iconsRow",
  MORE_THAN_KINDERGARTEN = "moreThanKindergarten",
  LANGUAGES_SECTION = "languagesSection",
  DAY_IN_HIPPOART = "dayInHippoArt",
  FOR_PARENTS_SECTION = "forParentsSection",
  GALLERY_PREVIEW = "galleryPreview",
}

const SECTIONS: Record<
  SECTION_NAMES,
  { name: SECTION_NAMES; title: string; component: ComponentType<any> }
> = {
  [SECTION_NAMES.CTA_BANNER]: {
    name: SECTION_NAMES.CTA_BANNER,
    title: "CTA banner",
    component: dynamic(() => import("./CTABanner")),
  },
  [SECTION_NAMES.HERO_SECTION]: {
    name: SECTION_NAMES.HERO_SECTION,
    title: "Hero section",
    component: dynamic(() => import("./HeroSection")),
  },
  [SECTION_NAMES.INFO_COLUMNS_BAR]: {
    name: SECTION_NAMES.INFO_COLUMNS_BAR,
    title: "Info columns bar",
    component: dynamic(() => import("./InfoColumnsBar")),
  },
  [SECTION_NAMES.ICONS_ROW]: {
    name: SECTION_NAMES.ICONS_ROW,
    title: "Icons row",
    component: dynamic(() => import("./IconsRow")),
  },
  [SECTION_NAMES.MORE_THAN_KINDERGARTEN]: {
    name: SECTION_NAMES.MORE_THAN_KINDERGARTEN,
    title: "More than kindergarten",
    component: dynamic(() => import("./MoreThanKindergarten")),
  },
  [SECTION_NAMES.LANGUAGES_SECTION]: {
    name: SECTION_NAMES.LANGUAGES_SECTION,
    title: "Languages section",
    component: dynamic(() => import("./LanguagesSection")),
  },
  [SECTION_NAMES.DAY_IN_HIPPOART]: {
    name: SECTION_NAMES.DAY_IN_HIPPOART,
    title: "Day in HippoArt",
    component: dynamic(() => import("./DayInHippoArt")),
  },
  [SECTION_NAMES.FOR_PARENTS_SECTION]: {
    name: SECTION_NAMES.FOR_PARENTS_SECTION,
    title: "For parents section",
    component: dynamic(() => import("./ForParentsSection")),
  },
  [SECTION_NAMES.GALLERY_PREVIEW]: {
    name: SECTION_NAMES.GALLERY_PREVIEW,
    title: "Gallery preview",
    component: dynamic(() => import("./GalleryPreview")),
  },
};

export default SECTIONS;
