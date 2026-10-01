import { IMoreThanKindergarten } from "./types";
import Image from "@/src/components/Image";
import SectionPaddingWrapper from "@/src/components/SectionPaddingWrapper";
import ButtonLink from "@/src/components/Button/ButtonLink";
import { Text14, Text16, Text20, Text48 } from "@/src/components/Text";

export default async function MoreThanKindergarten({
  hippoImg,
  rightStainImg,
  topText,
  titleFirstLine,
  titleSecondLine,
  description,
  btn,
  tileList,
}: IMoreThanKindergarten) {
  return (
    <section className="w-full relative">
      <SectionPaddingWrapper className="relative py-8 lg:py-12">
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[4fr_9fr] lg:gap-10">
          <div className="relative flex flex-col items-start gap-4 font-menu">
            <Text14 className="font-bold uppercase tracking-wide text-pink">
              {topText}
            </Text14>
            <Text48 className="leading-tight text-navy">
              <span className="block">{titleFirstLine}</span>
              <span className="inline-block pb-2 underline decoration-pink decoration-wavy decoration-2 underline-offset-8">
                {titleSecondLine}
              </span>
            </Text48>
            <Text14 className="text-navy lg:max-w-xs lg:leading-relaxed">
              {description}
            </Text14>
            {btn?.link && (
              <ButtonLink variant="green" page={btn.link}>
                {btn.label} <span aria-hidden>→</span>
              </ButtonLink>
            )}
            <Image
              sanityImage={hippoImg}
              className="self-center w-40 h-auto lg:absolute lg:left-[40%] lg:top-full lg:-translate-y-[55%] lg:w-44 xl:w-52"
            />
          </div>

          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tileList?.map((tile) => (
              <li
                key={tile._key}
                className="flex items-start gap-4 rounded-2xl border border-gray-light bg-white/60 p-4 lg:p-5"
              >
                <Image
                  sanityImage={tile.icon}
                  className="h-14 w-14 lg:h-16 lg:w-16 shrink-0 object-contain"
                />
                <div className="flex flex-col gap-1 font-menu text-navy">
                  <Text20 className="font-bold">{tile.title}</Text20>
                  <Text14 className="leading-relaxed">{tile.description}</Text14>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <Image
          sanityImage={rightStainImg}
          className="hidden lg:block absolute right-0 top-1/4 w-12 xl:w-16 h-auto"
        />
      </SectionPaddingWrapper>
    </section>
  );
}
