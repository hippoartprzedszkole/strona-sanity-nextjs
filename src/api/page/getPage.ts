import { MODELS } from "@/src/types/schemas";
import { sanityClient } from "@/sanity/lib/client";
import { IPage } from "@/src/types/page";
import {
  assetQuery,
  imageAssetQuery,
  slugWithTitleQuery,
} from "@/src/api/sanityQueries";
import { LANGS } from "@/src/types/langs";

const getPage = async ({
  slug,
  lang,
}: {
  slug: string;
  lang: LANGS;
}): Promise<IPage> => {
  const page = await sanityClient.fetch(
    `*[_type == $type && slug.current == $slug && language == $lang][0] {
      ...,
      seo {
        description,
        ogTitle,
        "ogImage": ogImage.asset->url
      },
      sections[] {
        ...,
        slides[] {
          ...,
          img {
            ${imageAssetQuery}
          }
        },
        link-> {
          ${slugWithTitleQuery}
        },
        img {
          ${imageAssetQuery}
        },
        bgImg {
          ${imageAssetQuery}
        },
        mobileBg {
          ${imageAssetQuery}
        },
        desktopBg {
          ${imageAssetQuery}
        },
        mockupVideo {
          ${assetQuery}
        },
        mainImage {
          ${imageAssetQuery}
        },
        bullets[] {
          ...,
          img {
            ${imageAssetQuery}
          }
        },
        testimonials[] {
          ...,
          avatar {
            ${imageAssetQuery}
          }
        },
        tiles[] {
          ...,
          icon {
            ${imageAssetQuery}
          }
        },
        badges[] {
          ...,
          icon {
            ${imageAssetQuery}
          }
        },
        benefits[] {
          ...,
          icon {
            ${imageAssetQuery}
          }
        },
        files[] {
          ...,
          file {
           ${assetQuery}
          }
        },
        video {
          ${assetQuery}
        },
        appStoreImg {
          ${imageAssetQuery}
        },
        googlePlayImg {
          ${imageAssetQuery}
        },
        appStoreQR {
          ${imageAssetQuery}
        },
        googlePlayQR {
          ${imageAssetQuery}
        },
        expertLandingTile {
          ...,
          img {
            ${imageAssetQuery}
          },
          link-> {
            ${slugWithTitleQuery}
          }
        },
        premiumLandingTile {
          ...,
          img {
            ${imageAssetQuery}
          },
          link-> {
            ${slugWithTitleQuery}
          }
        },
      }
    }`,
    { slug, type: MODELS.PAGE, lang },
  );

  return page;
};

export default getPage;
