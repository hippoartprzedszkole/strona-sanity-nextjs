import { ComponentType } from "react";
import dynamic from "next/dynamic";

export enum SECTION_NAMES {
  CTA_BANNER = "ctaBanner",
  HERO_SECTION = "heroSection",
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
};

export default SECTIONS;
