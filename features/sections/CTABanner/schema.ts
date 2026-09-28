import { defineType } from "sanity";
import SECTIONS from "..";
import { MODELS, PARTIALS } from "@/src/types/schemas";

export default defineType({
  name: SECTIONS.ctaBanner.name,
  title: SECTIONS.ctaBanner.title,
  type: "object",
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "description",
      type: PARTIALS.RICH_TEXT,
    },
    {
      name: "bgImg",
      type: PARTIALS.IMG,
    },
    {
      name: "appStoreLink",
      type: 'url',
    },
    {
      name: "appStoreImg",
      type: PARTIALS.IMG, 
    },
    {name: "appStoreQR",
      type: PARTIALS.IMG, 
    },
    {
      name: "googlePlayLink",
      type: 'url',
    },
      {
      name: "googlePlayImg",
      type: PARTIALS.IMG, 
    },
       {
      name: "googlePlayQR",
      type: PARTIALS.IMG,
    },
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "description",
    },
  },
});
