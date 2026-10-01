import { Fragment } from "react";
import { IDayInHippoArt } from "./types";
import Image from "@/src/components/Image";
import SectionPaddingWrapper from "@/src/components/SectionPaddingWrapper";
import { Text12, Text14 } from "@/src/components/Text";

const HOUR_COLORS = [
  "text-blue",
  "text-green",
  "text-pink",
  "text-orange",
  "text-purple",
  "text-green",
];

export default async function DayInHippoArt({
  title,
  rightImg,
  separatorImg,
  tileList,
}: IDayInHippoArt) {
  return (
    <section className="w-full my-8 lg:my-10">
      <SectionPaddingWrapper>
        <div className="flex flex-col gap-6 font-menu text-navy lg:flex-row lg:items-center lg:gap-8">
          <div className="flex flex-1 flex-col gap-4">
            <Text14 className="font-bold uppercase tracking-wide text-pink">
              {title}
            </Text14>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 lg:flex lg:items-start lg:gap-0">
              {tileList?.map((tile, i) => (
                <Fragment key={tile._key}>
                  <li className="flex flex-col gap-1 lg:flex-1">
                    <Image
                      sanityImage={tile.icon}
                      className="mb-1 h-12 w-12 object-contain"
                    />
                    <p
                      className={`text-[0.875rem] font-bold ${HOUR_COLORS[i % HOUR_COLORS.length]}`}
                    >
                      {tile.hourText}
                    </p>
                    <p className="text-[0.75rem] font-bold leading-snug">
                      {tile.title}
                    </p>
                    <Text12 className="whitespace-pre-line leading-relaxed">
                      {tile.description}
                    </Text12>
                  </li>
                  {i < tileList.length - 1 && (
                    <li
                      aria-hidden
                      className="hidden lg:flex lg:w-16 lg:shrink-0 lg:items-center lg:pt-3 xl:w-20"
                    >
                      <Image
                        sanityImage={separatorImg}
                        className="h-auto w-full object-contain"
                      />
                    </li>
                  )}
                </Fragment>
              ))}
            </ul>
          </div>
          <Image
            sanityImage={rightImg}
            className="mx-auto h-auto w-full max-w-sm lg:mx-0 lg:w-72 lg:shrink-0 xl:w-80"
          />
        </div>
      </SectionPaddingWrapper>
    </section>
  );
}
