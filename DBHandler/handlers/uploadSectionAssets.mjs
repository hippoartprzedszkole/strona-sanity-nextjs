import { readdir, readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { client } from "../client.mjs";

const ASSETS_DIR = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../../../grafiki-hippoart-final",
);

const MIME = { ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg" };

/**
 * Uploads all images numbered with the given section prefix
 * (e.g. prefix 2 -> "2.1.Logo.jpg – ze zmianami.png", "2.2.HeartIcon...").
 * Sanity dedupes assets by hash, so re-running is safe.
 *
 * @param {number|string} prefix Section prefix, e.g. 2
 * @returns {Promise<Record<string, object>>} Map `Name` -> value ready to use
 *   in a field of type `img` (`{ _type: "img", asset: { _type: "reference", _ref } }`).
 *   Each image is also available under its number, e.g. `"2.5"`.
 */
const uploadSectionAssets = async (prefix) => {
  const files = (await readdir(ASSETS_DIR))
    .filter((f) => f.startsWith(`${prefix}.`) && MIME[path.extname(f).toLowerCase()])
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  const result = {};
  for (const file of files) {
    const match = file.match(/^(\d+\.\d+)\.([^.]+)/);
    if (!match) continue;
    const [, number, name] = match;

    const asset = await client.assets.upload(
      "image",
      await readFile(path.join(ASSETS_DIR, file)),
      { filename: file, contentType: MIME[path.extname(file).toLowerCase()] },
    );

    const img = {
      _type: "img",
      asset: { _type: "reference", _ref: asset._id },
    };
    result[name] = img;
    result[number] = img;
    console.log(`🖼  ${number} ${name} -> ${asset._id}`);
  }
  return result;
};

export default uploadSectionAssets;
