import { IInfoBoxes } from "./types";
import Image from "@/src/components/Image";
import SectionPaddingWrapper from "@/src/components/SectionPaddingWrapper";
import ButtonLink from "@/src/components/Button/ButtonLink";
import QuestionAccordion from "./QuestionAccordion";
import { Text12, Text14, Text20 } from "@/src/components/Text";

const BOX = "rounded-3xl border border-gray-light bg-white/70 p-5";

export default async function InfoBoxes({
  leftImg,
  rightImg,
  firstBox,
  secondBox,
  thirdBox,
}: IInfoBoxes) {
  return (
    <section className="w-full my-8 lg:my-10">
      <SectionPaddingWrapper>
        <div className="flex items-center gap-4">
          <Image
            sanityImage={leftImg}
            className="hidden h-auto w-12 shrink-0 object-contain md:block lg:w-16"
          />
          <div className="grid min-w-0 flex-1 grid-cols-1 gap-4 font-menu text-navy lg:grid-cols-3 lg:items-stretch">
            <div
              className={`${BOX} relative flex flex-col items-center gap-2 text-center`}
            >
              <Image
                sanityImage={firstBox?.heartImg}
                className="pointer-events-none absolute bottom-3 right-3 h-auto w-10 object-contain lg:w-12"
              />
              <Text14 className="font-bold uppercase">{firstBox?.title}</Text14>
              <Image
                sanityImage={firstBox?.starsImg}
                className="h-auto w-28 object-contain"
              />
              <Text12 className="whitespace-pre-line leading-relaxed">
                “{firstBox?.quote}”
              </Text12>
              <Text12 className="font-bold">– {firstBox?.author}</Text12>
            </div>

            <div
              className={`${BOX} flex items-center justify-between gap-3 bg-pink/10`}
            >
              <div className="flex flex-col items-start gap-2">
                <Text20 className="font-bold">{secondBox?.title}</Text20>
                <Text12 className="whitespace-pre-line">
                  {secondBox?.subtitle}
                </Text12>
                {secondBox?.btn?.link && (
                  <ButtonLink
                    variant="pink"
                    page={secondBox.btn.link}
                    leftIcon={secondBox.btn.icon}
                    className="mt-1 pl-12 pr-6 text-xs uppercase"
                  >
                    {secondBox.btn.label}
                  </ButtonLink>
                )}
              </div>
              <Image
                sanityImage={secondBox?.rightImg}
                className="h-auto w-24 shrink-0 object-contain lg:w-28"
              />
            </div>

            <div className={BOX}>
              <Text14 className="mb-2 font-bold uppercase text-pink">
                {thirdBox?.title}
              </Text14>
              <QuestionAccordion
                questionList={thirdBox?.questionList}
                plusIcon={thirdBox?.plusIcon}
              />
            </div>
          </div>
          <Image
            sanityImage={rightImg}
            className="hidden h-auto w-12 shrink-0 object-contain md:block lg:w-16"
          />
        </div>
      </SectionPaddingWrapper>
    </section>
  );
}
