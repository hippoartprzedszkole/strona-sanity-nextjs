import { ISanityImage, PopulatedPageForLink } from "@/src/types/common";

export interface IGalleryPreviewBtn {
  label: string;
  link: PopulatedPageForLink;
}

export interface IGalleryPreview {
  title: string;
  photos: (ISanityImage & { _key: string })[];
  btn: IGalleryPreviewBtn;
  rightSideImg: ISanityImage;
}
