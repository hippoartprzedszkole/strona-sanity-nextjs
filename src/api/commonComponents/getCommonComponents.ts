import { MODELS } from "@/src/types/schemas";
import { sanityClient } from "@/sanity/lib/client";
import { slugWithTitleQuery } from "@/src/api/sanityQueries";
import { ICommonComponents } from "@/src/types/common";

const getCommonComponents = async (): Promise<ICommonComponents> => {
  const commonComponents = await sanityClient.fetch(
    `*[_type == $type][0] {
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
    { type: MODELS.COMMON_COMPONENTS },
  );

  return commonComponents;
};

export default getCommonComponents;
