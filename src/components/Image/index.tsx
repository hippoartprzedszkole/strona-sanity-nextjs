import NextImage, { ImageProps } from "next/image";
import { ISanityImage } from "@/src/types/common";

export default function Image({
  sanityImage,
  ...props
}: Omit<ImageProps, "src" | "alt"> & {
  sanityImage?: ISanityImage;
}) {
  if (!sanityImage?.asset?.url) {
    return null;
  }
  return (
    <NextImage
      src={sanityImage.asset.url}
      width={
        (!props.fill && sanityImage.asset?.metadata?.dimensions?.width) ||
        undefined
      }
      height={
        (!props.fill && sanityImage.asset?.metadata?.dimensions?.height) ||
        undefined
      }
      alt={sanityImage.alt || ""}
      loading={props.priority ? "eager" : "lazy"}
      placeholder="blur"
      blurDataURL={sanityImage.asset.metadata?.lqip || sanityImage.asset.url}
      {...props}
    />
  );
}
