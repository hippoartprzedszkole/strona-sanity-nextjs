import { MODELS } from "@/src/types/schemas";
import { sanityClient } from "@/sanity/lib/client";
import { IPage } from "@/src/types/page";
import {
  assetQuery,
  imageAssetQuery,
  slugWithTitleQuery,
} from "@/src/api/sanityQueries";

const getPage = async ({ slug }: { slug: string }): Promise<IPage> => {
  const page = await sanityClient.fetch(
    `*[_type == $type && slug.current == $slug][0] {
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
      
 
        mainImg {
          ${imageAssetQuery}
        },
        logo {
          ${imageAssetQuery}
        },
        blueBoxImg {
          ${imageAssetQuery}
        },
        hippoImg {
          ${imageAssetQuery}
        },
        heartIcon {
          ${imageAssetQuery}
        },
        starIcon {
          ${imageAssetQuery}
        },
        arrowIcon {
          ${imageAssetQuery}
        },
        leftStainImg {
          ${imageAssetQuery}
        },
        rightBubblesImg {
          ${imageAssetQuery}
        },
        separatorImg {
          ${imageAssetQuery}
        },
        sectionBg {
          ${imageAssetQuery}
        },
        leftImg {
          ${imageAssetQuery}
        },
        rightImg {
          ${imageAssetQuery}
        },
        rightStainImg {
          ${imageAssetQuery}
        },
        iconList[] {
          ...,
          icon {
            ${imageAssetQuery}
          }
        },
        tileList[] {
          ...,
          icon {
            ${imageAssetQuery}
          }
        },
        btn {
          ...,
          link-> {
            ${slugWithTitleQuery}
          }
        },
        items[] {
          ...,
          icon {
            ${imageAssetQuery}
          }
        },
        pinkBtn {
          ...,
          icon {
            ${imageAssetQuery}
          }
        },
        whiteBtn {
          ...,
          link-> {
            ${slugWithTitleQuery}
          }
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
        firstBox {
          ...,
          starsImg {
            ${imageAssetQuery}
          },
          heartImg {
            ${imageAssetQuery}
          },
          bottomImg {
            ${imageAssetQuery}
          },
          leftImg {
            ${imageAssetQuery}
          }
        },
        secondBox {
          ...,
          leftImg {
            ${imageAssetQuery}
          },
          rightImg {
            ${imageAssetQuery}
          },
          btn {
            ...,
            icon {
              ${imageAssetQuery}
            },
            link-> {
              ${slugWithTitleQuery}
            }
          }
        },
        thirdBox {
          ...,
          plusIcon {
            ${imageAssetQuery}
          },
          leftImg {
            ${imageAssetQuery}
          },
          rightImg {
            ${imageAssetQuery}
          },
          btn {
            ...,
            link-> {
              ${slugWithTitleQuery}
            }
          }
        },
        fourthBox {
          ...,
          leftImg {
            ${imageAssetQuery}
          },
          rightImg {
            ${imageAssetQuery}
          },
          btn {
            ...,
            link-> {
              ${slugWithTitleQuery}
            }
          }
        },
        rightSideImg {
          ${imageAssetQuery}
        },
        photos[] {
          ...,
          ${imageAssetQuery}
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
    { slug, type: MODELS.PAGE },
  );

  return page;
};

export default getPage;
