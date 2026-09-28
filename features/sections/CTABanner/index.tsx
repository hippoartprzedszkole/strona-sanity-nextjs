import { ICTABanner } from "./types";
import SectionHeading from "@/src/components/SectionHeading";
import Image from "@/src/components/Image";
import SectionPaddingWrapper from "@/src/components/SectionPaddingWrapper";
import Link from "next/link";

export default async function CTABanner({
  bgImg,
  title,
  description,
  appStoreLink,
  appStoreImg,
  appStoreQR,
  googlePlayLink,
  googlePlayImg,
  googlePlayQR,
}: ICTABanner) {
  return (
    <SectionPaddingWrapper>
      <div className="w-full relative flex text-white">
        <div className="absolute top-0 bottom-0 left-0 right-0">
          <Image
            sanityImage={bgImg}
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="relative w-full z-10 bg-neutrals-black-opacity p-4 py-8 md:p-16">
          <div className="md:max-w-[494px]">
            <SectionHeading title={title} description={description}>
              <div className="flex flex-col md:flex-row gap-x-16 items-stretch">
                <div
                  // href={appStoreLink}
                  className="flex flex-1 flex-col justify-between"
                >
                  <Image sanityImage={appStoreImg} />
                  <Image sanityImage={appStoreQR} className="hidden md:block" />
                </div>
                <div
                  // href={googlePlayLink}
                  className="flex flex-1 flex-col justify-between"
                >
                  <Image sanityImage={googlePlayImg} />
                  <Image
                    sanityImage={googlePlayQR}
                    className="hidden md:block"
                  />
                </div>
              </div>
            </SectionHeading>
          </div>
        </div>
      </div>
    </SectionPaddingWrapper>
  );
}
