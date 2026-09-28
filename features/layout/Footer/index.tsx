import React from "react";
import Image from "next/image";
import SocialIconsBelt from "@/src/components/SocialIconsBelt";
import { Text18 } from "@/src/components/Text";
import SectionPaddingWrapper from "@/src/components/SectionPaddingWrapper";
import { useCommonComponentsContext } from "@/src/context/CommonComponentsContext";
import InternalLink from "@/src/components/InternalLink";

export default function Footer() {
  const {
    footer: { links },
  } = useCommonComponentsContext();
  return (
    <footer className="w-full mt-8 md:mt-16 bg-gray-footer">
      <SectionPaddingWrapper>
        <div className="flex flex-col items-center w-full">
          <div className="w-full">
            <div className="w-full flex flex-col lg:flex-row justify-around items-center py-[10vh] lg:px-0 opacity-70 gap-6 lg:gap-0">
              <div className="flex-1 flex flex-col items-center md:items-start">
                <SocialIconsBelt iconSize={50} color="black" />
              </div>

              <div className="flex-1 flex flex-col items-center gap-2">
                <Text18>© 2026 Shoppin'go</Text18>
                <div className="gap-2 flex flex-wrap">
                  {links.map((page, index) => (
                    <InternalLink
                      key={index}
                      page={page}
                      className="text-gray-500 hover:text-gray-700 text-sm"
                    >
                      {page.title}
                    </InternalLink>
                  ))}
                </div>
              </div>

              <div className="flex-1 flex flex-row justify-center md:justify-end items-center gap-4 lg:gap-0 order-2 lg:order-3">
                <div className="flex items-center justify-center">
                  <Image
                    src="/assets/visa.png"
                    width={50}
                    height={50}
                    alt="visa logo"
                    className="object-contain"
                  />
                </div>
                <div className="lg:px-4 lg:ml-8 flex items-center justify-center">
                  <Image
                    src="/assets/master-card.png"
                    width={125}
                    height={50}
                    alt="mastercard logo"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionPaddingWrapper>
    </footer>
  );
}
