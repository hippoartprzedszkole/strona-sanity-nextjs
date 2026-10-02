import { PARTIALS } from "@/src/types/schemas";
import { defineArrayMember, defineType } from "sanity";

export const RICH_TEXT_COLORS = [
  { title: "Granatowy", value: "navy" },
  { title: "Różowy", value: "pink" },
  { title: "Zielony", value: "green" },
  { title: "Niebieski", value: "blue" },
  { title: "Pomarańczowy", value: "orange" },
  { title: "Fioletowy", value: "purple" },
  { title: "Szary", value: "gray" },
];

export default defineType({
  name: PARTIALS.RICH_TEXT,
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      styles: [
        { title: "Tekst", value: "normal" },
        { title: "Nagłówek duży", value: "h2" },
        { title: "Nagłówek średni", value: "h3" },
        { title: "Nagłówek mały", value: "h4" },
        { title: "Tekst mały", value: "small" },
        { title: "Cytat", value: "blockquote" },
      ],
      lists: [
        { title: "Punktowana", value: "bullet" },
        { title: "Numerowana", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "Pogrubienie", value: "strong" },
          { title: "Kursywa", value: "em" },
          { title: "Podkreślenie", value: "underline" },
          { title: "Przekreślenie", value: "strike-through" },
        ],
        annotations: [
          {
            name: "textColor",
            title: "Kolor tekstu",
            type: "object",
            fields: [
              {
                name: "color",
                type: "string",
                options: { list: RICH_TEXT_COLORS, layout: "radio" },
                initialValue: "pink",
              },
            ],
          },
          {
            name: "link",
            title: "Link",
            type: "object",
            fields: [
              {
                name: "href",
                type: "url",
                validation: (Rule) =>
                  Rule.uri({ scheme: ["http", "https", "mailto", "tel"] }),
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({ type: PARTIALS.IMG }),
    defineArrayMember({
      name: "table",
      title: "Tabela",
      type: "object",
      fields: [
        {
          name: "hasHeader",
          title: "Pierwszy wiersz jako nagłówek",
          type: "boolean",
          initialValue: true,
        },
        {
          name: "rows",
          title: "Wiersze",
          type: "array",
          of: [
            {
              type: "object",
              name: "row",
              fields: [
                {
                  name: "cells",
                  title: "Komórki",
                  type: "array",
                  of: [{ type: "string" }],
                },
              ],
              preview: {
                select: { cells: "cells" },
                prepare: ({ cells = [] }) => ({ title: cells.join(" | ") }),
              },
            },
          ],
        },
      ],
      preview: {
        select: { rows: "rows" },
        prepare: ({ rows = [] }) => ({
          title: "Tabela",
          subtitle: `${rows.length} wierszy`,
        }),
      },
    }),
  ],
});
