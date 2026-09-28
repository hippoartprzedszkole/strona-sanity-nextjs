import { type SchemaTypeDefinition } from "sanity";
import { withLanguage } from "@/src/utils/withLanguage";

import richText from "@/src/partials/richText";
import img from "@/src/partials/img";

import page from "@/src/models/page";
import commonComponentsSchema from "@/src/models/commonComponents";

import header from "@/features/layout/Header/schema";
import footer from "@/features/layout/Footer/schema";

import ctaBanner from "@/features/sections/CTABanner/schema";

const models = [withLanguage(page), withLanguage(commonComponentsSchema)];

const partials = [richText, img];

const commonComponents = [header, footer];

const sections = [ctaBanner];

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [...models, ...sections, ...partials, ...commonComponents],
};
