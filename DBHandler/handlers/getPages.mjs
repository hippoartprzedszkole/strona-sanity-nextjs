import { client } from "../client.mjs";

const getPages = async ({ language, slug } = {}) => {
  try {
    const conditions = [`_type == "page"`];
    if (language) conditions.push(`language == $language`);
    if (slug) conditions.push(`slug.current == $slug`);

    const query = `*[${conditions.join(" && ")}]`;
    const params = { language: language ?? null, slug: slug ?? null };

    const pages = await client.fetch(query, params);
    console.log("All Screen docs:", JSON.stringify(pages, null, 2));

    return { pages };
  } catch (error) {
    throw error;
  }
};

export default getPages;
