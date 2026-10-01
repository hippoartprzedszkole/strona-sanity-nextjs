import { IInfoColumnsBar } from "./types";
import Image from "@/src/components/Image";
import SectionPaddingWrapper from "@/src/components/SectionPaddingWrapper";
import { Text14 } from "@/src/components/Text";

export default async function InfoColumnsBar({
  leftStainImg,
  rightBubblesImg,
  separatorImg,
  items,
}: IInfoColumnsBar) {
  return (
    <section className="w-full">
      <SectionPaddingWrapper className="relative py-4">
        <ul className="mx-auto my-6 lg:my-10 lg:w-4/5 grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 lg:flex lg:items-center lg:justify-between lg:gap-0 rounded-2xl bg-cream shadow-md px-6 py-6 lg:px-10 lg:py-5">
          {items?.map((item, i) => (
            <li
              key={item._key}
              className="flex items-center gap-3 lg:flex-1 lg:justify-center"
            >
              {i > 0 && (
                <Image
                  sanityImage={separatorImg}
                  className="hidden lg:block h-12 w-auto -ml-2 mr-4"
                />
              )}
              <Image
                sanityImage={item.icon}
                className="h-10 w-10 lg:h-12 lg:w-12 shrink-0 object-contain"
              />
              <div className="flex flex-col font-menu text-navy font-bold leading-snug">
                <Text14 className="font-bold">{item.title}</Text14>
                <Text14 className="font-bold">{item.subtitle}</Text14>
              </div>
            </li>
          ))}
        </ul>
        <Image
          sanityImage={leftStainImg}
          className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-12 xl:w-16 h-auto"
        />
        <Image
          sanityImage={rightBubblesImg}
          className="hidden lg:block absolute right-0 -top-6 w-16 h-auto"
        />
      </SectionPaddingWrapper>
    </section>
  );
}
