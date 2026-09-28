import { MODELS } from "@/src/types/schemas";
import { sanityClient } from "@/sanity/lib/client";
import { slugWithTitleQuery } from "@/src/api/sanityQueries";
import { LANGS } from "@/src/types/langs";
import { ICommonComponents } from "@/src/types/common";

const getCommonComponents = async ({
  lang,
}: {
  lang: LANGS;
}): Promise<ICommonComponents> => {
  const commonComponents = await sanityClient.fetch(
    `*[_type == $type && language == $lang][0] {
      ...,
      header {
        ...,
        menu[]-> {
          ${slugWithTitleQuery}
        },
        userSettings[]-> {
          ${slugWithTitleQuery}
        },
        logout,
        webVersion
      },
      footer {
        ...,
        links[]-> {
          ${slugWithTitleQuery}
        }
      }
    }`,
    { type: MODELS.COMMON_COMPONENTS, lang },
  );

  return commonComponents;
};

export default getCommonComponents;
