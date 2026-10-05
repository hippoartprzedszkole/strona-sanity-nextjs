import { IHeroSection } from "./types";
import Image from "@/src/components/Image";
import SectionPaddingWrapper from "@/src/components/SectionPaddingWrapper";
import ButtonLink from "@/src/components/Button/ButtonLink";
import { Text16, Text64 } from "@/src/components/Text";

const LETTER_COLORS = [
  "text-red",
  "text-orange",
  "text-yellow",
  "text-green",
  "text-blue",
  "text-purple",
  "text-pink",
];

export default async function HeroSection({
  logo,
  titleFirstLine,
  titleSecondLine,
  yellowBoxText,
  blueBoxImg,
  hippoImg,
  mainImg,
  heartIcon,
  starIcon,
  arrowIcon,
  pinkBtn,
  whiteBtn,
}: IHeroSection) {
  return (
    <SectionPaddingWrapper className="pt-32 pb-8">
      <div className="flex flex-col items-center gap-6 text-center xl:text-left xl:grid xl:grid-cols-[5fr_6fr] xl:gap-4">
        <div className="contents xl:relative xl:z-10 xl:flex xl:flex-col xl:items-start xl:gap-6">
          <Image
            sanityImage={logo}
            priority
            className="order-1 xl:order-none w-48 xl:w-72 h-auto"
          />
          <Image
            sanityImage={heartIcon}
            className="hidden xl:block absolute top-16 left-[55%] w-12 h-auto"
          />
          <Image
            sanityImage={starIcon}
            className="hidden xl:block absolute top-12 left-[75%] w-16 h-auto"
          />

          <Text64 className="order-2 xl:order-none font-menu leading-tight">
            <span className="block text-navy">{titleFirstLine}</span>
            <span className="block text-[3rem] xl:text-[6rem]">
              {titleSecondLine.split("").map((letter, i) => (
                <span key={i} className={LETTER_COLORS[i % LETTER_COLORS.length]}>
                  {letter}
                </span>
              ))}
            </span>
          </Text64>

          <div className="order-4 xl:order-none bg-yellow/70 -rotate-1 rounded-lg px-6 py-4 max-w-md">
            <Text16 className="font-menu text-text-dark">{yellowBoxText}</Text16>
          </div>

          <div className="order-5 xl:order-none flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <ButtonLink
              variant="pink"
              href={`tel:${pinkBtn.tel}`}
              leftIcon={pinkBtn.icon}
              text={pinkBtn.label}
              className="pl-12 pr-6"
            />
            {whiteBtn?.link && (
              <ButtonLink
                variant="white"
                page={whiteBtn.link}
                text={whiteBtn.label}
                rightIcon={arrowIcon}
              />
            )}
          </div>
        </div>

        <div className="relative order-3 xl:order-none w-full mb-12 xl:mb-0 xl:w-[120%] xl:-ml-[20%]">
          <Image sanityImage={mainImg} priority className="w-full h-auto" />
          <Image
            sanityImage={hippoImg}
            className="absolute bottom-0 left-0 xl:left-[4%] xl:-bottom-8 translate-y-[50px] w-24 sm:w-32 xl:w-48 h-auto"
          />
          <div className="absolute bottom-0 right-0 xl:-right-4 xl:-bottom-8 translate-y-[50px] w-2/5 xl:w-1/3">
            <Image sanityImage={blueBoxImg} className="w-full h-auto" />
          </div>
        </div>
      </div>
    </SectionPaddingWrapper>
  );
}
