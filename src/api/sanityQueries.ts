export const imageAssetQuery = `asset-> {
    url,
    metadata {
      dimensions {
        width,
        height
      }
    }
}`;

export const noDrafts = `!(_id match "drafts.*")`;

export const linkQuery = `
  label,
  url,
  type,
  reference-> {
    slug,
    _type
  }
`;

export const assetQuery = `
  asset-> {
    url
  }
`;

export const slugWithTitleQuery = `
  title,
  slug {
    current
  }
`;
