import { type SchemaTypeDefinition } from "sanity";

import richText from "@/src/partials/richText";
import img from "@/src/partials/img";

import page from "@/src/models/page";
import commonComponentsSchema from "@/src/models/commonComponents";

import header from "@/features/layout/Header/schema";
import footer from "@/features/layout/Footer/schema";

import ctaBanner from "@/features/sections/CTABanner/schema";
import heroSection from "@/features/sections/HeroSection/schema";

const models = [page, commonComponentsSchema];

const partials = [richText, img];

const commonComponents = [header, footer];

const sections = [ctaBanner, heroSection];

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [...models, ...sections, ...partials, ...commonComponents],
};
