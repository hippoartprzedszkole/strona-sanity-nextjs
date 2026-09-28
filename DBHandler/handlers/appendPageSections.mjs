import { client } from "../client.mjs";

/**
 * Appends sections to a Sanity page document.
 * Sections are inserted after the last element of the existing array.
 *
 * @param {string} pageId
 * @param {object[]} sections
 * @returns {Promise<string>} Updated document ID.
 */
const appendPageSections = async (pageId, sections) => {
  const result = await client
    .patch(pageId)
    .setIfMissing({ sections: [] })
    .insert("after", "sections[-1]", sections)
    .commit();

  console.log(`✅ Page updated: ${result._id}`);
  return result._id;
};

export default appendPageSections;
