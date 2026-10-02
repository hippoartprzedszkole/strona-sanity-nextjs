import { IGalleryPreview } from "./types";
import Image from "@/src/components/Image";
import SectionPaddingWrapper from "@/src/components/SectionPaddingWrapper";
import ButtonLink from "@/src/components/Button/ButtonLink";
import { Text14 } from "@/src/components/Text";

export default async function GalleryPreview({
  title,
  photos,
  btn,
  rightSideImg,
}: IGalleryPreview) {
  return (
    <section className="w-full my-8 lg:my-10">
      <SectionPaddingWrapper>
        <div className="flex flex-col gap-4 font-menu text-navy">
          <Text14 className="font-bold uppercase">{title}</Text14>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-5">
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:flex lg:flex-1 lg:gap-4">
              {photos?.map((photo, i) => (
                <li
                  key={photo._key}
                  className={`relative aspect-[2/1] overflow-hidden rounded-xl shadow-md lg:flex-1 ${
                    i === photos.length - 1 && photos.length % 2 === 1
                      ? "max-sm:col-span-2 max-sm:mx-auto max-sm:w-1/2"
                      : ""
                  }`}
                >
                  <Image
                    sanityImage={photo}
                    fill
                    sizes="(min-width: 1024px) 15vw, 50vw"
                    className="object-cover"
                  />
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between gap-4 lg:shrink-0 lg:justify-start">
              {btn?.link && (
                <ButtonLink
                  variant="pink"
                  page={btn.link}
                  className="text-sm uppercase"
                >
                  {btn.label} <span aria-hidden>→</span>
                </ButtonLink>
              )}
              <Image
                sanityImage={rightSideImg}
                className="h-auto w-28 object-contain lg:w-40 xl:w-48"
              />
            </div>
          </div>
        </div>
      </SectionPaddingWrapper>
    </section>
  );
}
