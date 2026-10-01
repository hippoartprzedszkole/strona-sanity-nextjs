import { ComponentType } from "react";
import dynamic from "next/dynamic";

export enum SECTION_NAMES {
  CTA_BANNER = "ctaBanner",
  HERO_SECTION = "heroSection",
  INFO_COLUMNS_BAR = "infoColumnsBar",
  MORE_THAN_KINDERGARTEN = "moreThanKindergarten",
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
  [SECTION_NAMES.MORE_THAN_KINDERGARTEN]: {
    name: SECTION_NAMES.MORE_THAN_KINDERGARTEN,
    title: "More than kindergarten",
    component: dynamic(() => import("./MoreThanKindergarten")),
  },
};

export default SECTIONS;
