import { ConfigContext } from "sanity";
import { apiVersion } from "@/sanity/env";
import { Rule } from "sanity";

export const required = (Rule: Rule) => Rule.required();
export const unique = (Rule: Rule) => Rule.unique();

export const maxLengthArray = (maxLength: number) => (Rule: Rule) =>
  Rule.custom((arr: []) => {
    if (arr && arr.length > maxLength) {
      return `Array may only contain ${maxLength} items`;
    }
    return true;
  });

export const isSlugUnique = async (slug: string, context: ConfigContext) => {
  const query = `*[slug.current == $slug]`;

  const documents: { _id: string }[] = await context
    .getClient({ apiVersion })
    .fetch(query, {
      slug,
    });

  return (
    documents.filter((item) => !item._id.startsWith("drafts.")).length <= 1
  );
};

export const onlyUrlFriendlyCharactersSlug = (Rule: Rule) =>
  Rule.custom((value: { current: string }) => {
    if (!value.current) {
      return true;
    }
    // Allow lowercase letters, numbers, hyphens, and slashes
    if (!/^[a-z0-9/]+(?:-[a-z0-9/]+)*$/.test(value.current)) {
      return "Slug can only contain lowercase letters, numbers, hyphens, and slashes";
    }
    return true;
  });
