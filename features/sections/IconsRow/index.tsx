import { Fragment } from "react";
import { IIconsRow } from "./types";
import Image from "@/src/components/Image";
import SectionPaddingWrapper from "@/src/components/SectionPaddingWrapper";
import { Text12, Text14, Text36 } from "@/src/components/Text";

const SEPARATOR_AFTER_INDEX = 2;

export default async function IconsRow({
  hippoImg,
  separatorImg,
  topText,
  title,
  iconList,
}: IIconsRow) {
  return (
    <section className="w-full my-8 lg:my-16">
      <SectionPaddingWrapper className="py-8 lg:py-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-8">
          <div className="flex flex-1 flex-col gap-4 font-menu text-navy lg:gap-5">
            <div className="flex flex-col gap-1">
              <Text14 className="font-bold uppercase tracking-wide text-pink">
                {topText}
              </Text14>
              <Text36 className="font-bold leading-tight">{title}</Text36>
            </div>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 lg:flex lg:items-start lg:justify-between lg:gap-4">
              {iconList?.map((item, i) => (
                <Fragment key={item._key}>
                  <li className="flex flex-col items-center gap-2 text-center lg:flex-1">
                    <Image
                      sanityImage={item.icon}
                      className="h-16 w-16 object-contain lg:h-[4.5rem] lg:w-[4.5rem]"
                    />
                    <p className="text-[0.875rem] font-bold lg:text-[1rem]">
                      {item.title}
                    </p>
                    <Text12 className="max-w-[10rem] whitespace-pre-line leading-snug">
                      {item.description}
                    </Text12>
                  </li>
                  {i === SEPARATOR_AFTER_INDEX && (
                    <li aria-hidden className="hidden lg:block lg:flex-1 lg:self-center">
                      <Image
                        sanityImage={separatorImg}
                        className="mx-auto h-[4.5rem] w-auto object-contain"
                      />
                    </li>
                  )}
                </Fragment>
              ))}
            </ul>
          </div>
          <Image
            sanityImage={hippoImg}
            className="mx-auto w-44 h-auto lg:mx-0 lg:w-56 xl:w-64 lg:shrink-0"
          />
        </div>
      </SectionPaddingWrapper>
    </section>
  );
}
