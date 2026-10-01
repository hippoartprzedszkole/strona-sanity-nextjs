import { ILanguagesCounterBox, ILanguagesSection } from "./types";
import Image from "@/src/components/Image";
import SectionPaddingWrapper from "@/src/components/SectionPaddingWrapper";
import ButtonLink from "@/src/components/Button/ButtonLink";
import { Text14, Text32, Text48 } from "@/src/components/Text";

const CounterBox = ({
  box,
  numberClassName,
}: {
  box: ILanguagesCounterBox;
  numberClassName: string;
}) => (
  <div className="flex flex-1 flex-col items-center text-center font-menu text-navy">
    <Text48 className={`leading-none ${numberClassName}`}>
      {box?.numberField}
    </Text48>
    <Text14 className="mt-1 whitespace-pre-line font-bold">{box?.text}</Text14>
  </div>
);

export default async function LanguagesSection({
  sectionBg,
  leftImg,
  rightImg,
  topText,
  titleFirstLine,
  titleSecondLine,
  description,
  firstCounterBox,
  secondCounterBox,
  btn,
}: ILanguagesSection) {
  return (
    <section className="w-full my-8 overflow-x-clip lg:my-10">
      <SectionPaddingWrapper>
        <div className="relative flex flex-col gap-6 p-4 xl:grid xl:grid-cols-[1fr_auto_15rem] xl:gap-8 xl:p-0 xl:pr-8">
          <div className="pointer-events-none absolute -inset-x-4 -inset-y-8 xl:-inset-x-10 xl:-inset-y-14">
            <Image fill sanityImage={sectionBg} className="object-fill" />
          </div>

          <div className="relative mx-auto aspect-[2/1] w-full max-w-md xl:mx-0 xl:aspect-auto xl:max-w-none">
            <Image
              fill
              sanityImage={leftImg}
              className="object-cover"
            />
          </div>

          <div className="relative flex flex-col gap-3 self-center py-0 font-menu text-navy xl:py-8">
            <Text14 className="font-bold uppercase tracking-wide text-blue">
              {topText}
            </Text14>
            <Text32 className="leading-tight">
              <span className="block">{titleFirstLine}</span>
              <span className="block whitespace-nowrap">{titleSecondLine}</span>
            </Text32>
            <Text14 className="leading-relaxed xl:w-0 xl:min-w-full">{description}</Text14>
          </div>

          <div className="relative flex w-full max-w-sm flex-col items-center gap-5 self-center xl:max-w-none">
            <div className="flex w-full items-center">
              <CounterBox box={firstCounterBox} numberClassName="text-green" />
              <div
                aria-hidden
                className="mx-2 h-20 border-l-2 border-dotted border-navy/40"
              />
              <CounterBox box={secondCounterBox} numberClassName="text-pink" />
            </div>
            {btn?.link && (
              <ButtonLink
                variant="blue"
                page={btn.link}
                className="w-full"
              >
                {btn.label} <span aria-hidden>→</span>
              </ButtonLink>
            )}
          </div>

          <Image
            sanityImage={rightImg}
            className="pointer-events-none absolute right-0 top-1/2 hidden h-auto w-24 -translate-y-1/2 translate-x-1/2 xl:block"
          />
        </div>
      </SectionPaddingWrapper>
    </section>
  );
}
