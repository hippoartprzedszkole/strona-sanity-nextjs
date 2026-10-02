import { IForParentsLinkBox, IForParentsSection } from "./types";
import Image from "@/src/components/Image";
import SectionPaddingWrapper from "@/src/components/SectionPaddingWrapper";
import ButtonLink from "@/src/components/Button/ButtonLink";
import { Text14, Text20 } from "@/src/components/Text";

const LinkBox = ({
  box,
  bgClassName,
  btnVariant,
}: {
  box: IForParentsLinkBox;
  bgClassName: string;
  btnVariant: "green" | "blue" | "orange";
}) => (
  <div
    className={`flex items-center justify-between gap-2 rounded-3xl px-4 py-5 font-menu text-navy ${bgClassName}`}
  >
    <Image
      sanityImage={box?.leftImg}
      className="h-auto w-20 shrink-0 object-contain xl:w-24"
    />
    <div className="flex min-w-0 flex-1 flex-col items-center gap-3 text-center">
      <Text20 className="font-bold leading-tight">
        <span className="block">{box?.titleFirstLine}</span>
        <span className="block">{box?.titleSecondLine}</span>
      </Text20>
      {box?.btn?.link && (
        <ButtonLink
          variant={btnVariant}
          page={box.btn.link}
          className="w-full max-w-60 text-xs"
        >
          {box.btn.label} <span aria-hidden>→</span>
        </ButtonLink>
      )}
    </div>
    <Image
      sanityImage={box?.rightImg}
      className="h-auto w-12 shrink-0 object-contain xl:w-16"
    />
  </div>
);

export default async function ForParentsSection({
  firstBox,
  secondBox,
  thirdBox,
  fourthBox,
}: IForParentsSection) {
  return (
    <section className="w-full my-8 lg:my-10">
      <SectionPaddingWrapper>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-[minmax(0,0.8fr)_repeat(3,minmax(0,1fr))]">
          <div className="relative flex flex-col gap-2 py-2 pl-14 font-menu text-navy md:col-span-2 xl:col-span-1 xl:self-center xl:pl-12">
            <Image
              sanityImage={firstBox?.leftImg}
              className="absolute -left-4 top-1/2 h-auto w-16 -translate-y-1/2 object-contain xl:-left-8"
            />
            <Text14 className="font-bold uppercase text-green">
              {firstBox?.title}
            </Text14>
            <Text20 className="whitespace-pre-line font-bold leading-snug">
              {firstBox?.description}
            </Text20>
            <Image
              sanityImage={firstBox?.bottomImg}
              className="h-auto w-40 object-contain"
            />
          </div>
          <LinkBox
            box={secondBox}
            bgClassName="bg-green/15"
            btnVariant="green"
          />
          <LinkBox box={thirdBox} bgClassName="bg-blue/10" btnVariant="blue" />
          <LinkBox
            box={fourthBox}
            bgClassName="bg-orange/15"
            btnVariant="orange"
          />
        </div>
      </SectionPaddingWrapper>
    </section>
  );
}
