"use client";

import { SocialIcon } from "react-social-icons";
import { useState } from "react";

type SMName = "instagram" | "facebook";
// | "linkedin";

interface ISingleSM {
  url: string;
  fgColor: string;
  bgColor: string;
}

interface ISMData {
  instagram: ISingleSM;
  facebook: ISingleSM;
  // linkedin: ISingleSM;
}

const colorConfig: Record<
  "white" | "black" | "orange",
  { bg: string; fg: string; hover: string }
> = {
  white: { bg: "#faf9fa", fg: "#212427", hover: "#d48a38" },
  black: { bg: "#6f9d22", fg: "#212427", hover: "#FFF" },
  orange: { bg: "#f76e19", fg: "#faf9fa", hover: "#6f9d22" },
};

export default function SocialIconsBelt({
  color = "white",
  iconSize,
}: {
  color?: keyof typeof colorConfig;
  iconSize?: number;
}) {
  const { bg, fg, hover } = colorConfig[color];

  const iconStyle = {
    height: iconSize || 80,
    width: iconSize || 80,
  };

  const [data, setData] = useState<ISMData>({
    instagram: {
      url: "https://www.instagram.com/shoppingo_app",
      fgColor: fg,
      bgColor: "transparent",
    },
    facebook: {
      url: "https://www.facebook.com/profile.php?id=61575915253371",
      fgColor: fg,
      bgColor: "transparent",
    },
    // linkedin: {
    //   url: "https://linkedin.com",
    //   fgColor: fg,
    //   bgColor: "transparent",
    // },
  });

  const setColor = (el: SMName, active: boolean) => {
    setData((prev: ISMData) => {
      prev[el].fgColor = active ? hover : fg;
      prev[el].bgColor = active ? bg : "transparent";

      return { ...prev };
    });
  };

  const smNames = Object.keys(data) as SMName[];

  return (
    <div className="flex flex-row items-center justify-center">
      {smNames.map((el: SMName, i: number) => {
        return (
          <SocialIcon
            key={i}
            network={el}
            url={data[el].url}
            style={iconStyle}
            fgColor={data[el].fgColor}
            bgColor={data[el].bgColor}
            onMouseEnter={() => setColor(el, true)}
            onMouseLeave={() => setColor(el, false)}
          />
        );
      })}
    </div>
  );
}
