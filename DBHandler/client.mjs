import { createClient } from "next-sanity";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: true,
  token: process.env.SANITY_EDITOR_TOKEN,
});
