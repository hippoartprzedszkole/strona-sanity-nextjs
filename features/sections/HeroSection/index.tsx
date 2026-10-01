import { IHeroSection } from "./types";
import Image from "@/src/components/Image";
import SectionPaddingWrapper from "@/src/components/SectionPaddingWrapper";
import InternalLink from "@/src/components/InternalLink";
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
      <div className="flex flex-col items-center gap-6 text-center lg:text-left lg:grid lg:grid-cols-[5fr_6fr] lg:gap-4">
        <div className="contents lg:relative lg:z-10 lg:flex lg:flex-col lg:items-start lg:gap-6">
          <Image
            sanityImage={logo}
            priority
            className="order-1 lg:order-none w-48 lg:w-72 h-auto"
          />
          <Image
            sanityImage={heartIcon}
            className="hidden lg:block absolute top-16 left-[55%] w-12 h-auto"
          />
          <Image
            sanityImage={starIcon}
            className="hidden lg:block absolute top-12 left-[75%] w-16 h-auto"
          />

          <Text64 className="order-2 lg:order-none font-menu leading-tight">
            <span className="block text-navy">{titleFirstLine}</span>
            <span className="block text-[3rem] lg:text-[6rem]">
              {titleSecondLine.split("").map((letter, i) => (
                <span key={i} className={LETTER_COLORS[i % LETTER_COLORS.length]}>
                  {letter}
                </span>
              ))}
            </span>
          </Text64>

          <div className="order-4 lg:order-none bg-yellow/70 -rotate-1 rounded-lg px-6 py-4 max-w-md">
            <Text16 className="font-menu text-text-dark">{yellowBoxText}</Text16>
          </div>

          <div className="order-5 lg:order-none flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href={`tel:${pinkBtn.tel}`}
              className="relative flex items-center justify-center min-h-12 pl-12 pr-6 rounded-md bg-pink text-white font-menu font-bold hover:scale-105 transition-transform duration-200"
            >
              <Image
                sanityImage={pinkBtn.icon}
                className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-auto"
              />
              {pinkBtn.label}
            </a>
            {whiteBtn?.link && (
              <InternalLink
                page={whiteBtn.link}
                className="flex items-center justify-center gap-2 min-h-12 px-6 rounded-md border border-blue bg-white text-navy font-menu font-bold hover:scale-105 transition-transform duration-200"
              >
                {whiteBtn.label}
                <Image sanityImage={arrowIcon} className="h-4 w-auto" />
              </InternalLink>
            )}
          </div>
        </div>

        <div className="relative order-3 lg:order-none w-full mb-12 lg:mb-0 lg:w-[120%] lg:-ml-[20%]">
          <Image sanityImage={mainImg} priority className="w-full h-auto" />
          <Image
            sanityImage={hippoImg}
            className="absolute bottom-0 left-0 lg:left-[4%] lg:-bottom-8 translate-y-[50px] w-24 sm:w-32 lg:w-48 h-auto"
          />
          <div className="absolute bottom-0 right-0 lg:-right-4 lg:-bottom-8 translate-y-[50px] w-2/5 lg:w-1/3">
            <Image sanityImage={blueBoxImg} className="w-full h-auto" />
          </div>
        </div>
      </div>
    </SectionPaddingWrapper>
  );
}
