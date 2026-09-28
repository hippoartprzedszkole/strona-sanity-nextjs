import React from "react";
import SocialIconsBar from "@/src/components/SocialIconsBar";
import { Text18 } from "@/src/components/Text";
import SectionPaddingWrapper from "@/src/components/SectionPaddingWrapper";
import { useCommonComponentsContext } from "@/src/context/CommonComponentsContext";
import InternalLink from "@/src/components/InternalLink";

export default function Footer() {
  const {
    footer: { links, copyrightText, instagramUrl, facebookUrl },
  } = useCommonComponentsContext();
  return (
    <footer className="w-full mt-8 md:mt-16 bg-gray-footer">
      <SectionPaddingWrapper>
        <div className="flex flex-col items-center w-full">
          <div className="w-full">
            <div className="w-full flex flex-col lg:flex-row justify-around items-center py-[10vh] lg:px-0 opacity-70 gap-6 lg:gap-0">
              <div className="flex-1 flex flex-col items-center md:items-start">
                <SocialIconsBar
                  iconSize={50}
                  color="black"
                  instagramUrl={instagramUrl}
                  facebookUrl={facebookUrl}
                />
              </div>

              <div className="flex-1 flex flex-col items-center">
                {copyrightText && <Text18>{copyrightText}</Text18>}
              </div>

              <div className="flex-1 flex flex-wrap gap-2 justify-center md:justify-end">
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
          </div>
        </div>
      </SectionPaddingWrapper>
    </footer>
  );
}
