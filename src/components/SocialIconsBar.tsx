"use client";

import { SocialIcon } from "react-social-icons";
import { useState } from "react";

type SMName = "instagram" | "facebook";

const colorConfig: Record<
  "white" | "black" | "orange",
  { bg: string; fg: string; hover: string }
> = {
  white: { bg: "#faf9fa", fg: "#212427", hover: "#d48a38" },
  black: { bg: "#6f9d22", fg: "#212427", hover: "#FFF" },
  orange: { bg: "#f76e19", fg: "#faf9fa", hover: "#6f9d22" },
};

export default function SocialIconsBar({
  color = "white",
  iconSize,
  instagramUrl,
  facebookUrl,
}: {
  color?: keyof typeof colorConfig;
  iconSize?: number;
  instagramUrl?: string;
  facebookUrl?: string;
}) {
  const { bg, fg, hover } = colorConfig[color];

  const iconStyle = {
    height: iconSize || 80,
    width: iconSize || 80,
  };

  const links: Partial<Record<SMName, string>> = {
    ...(instagramUrl && { instagram: instagramUrl }),
    ...(facebookUrl && { facebook: facebookUrl }),
  };

  const smNames = Object.keys(links) as SMName[];

  const [hovered, setHovered] = useState<SMName | null>(null);

  return (
    <div className="flex flex-row items-center justify-center">
      {smNames.map((el) => (
        <SocialIcon
          key={el}
          network={el}
          url={links[el]}
          style={iconStyle}
          fgColor={hovered === el ? hover : fg}
          bgColor={hovered === el ? bg : "transparent"}
          onMouseEnter={() => setHovered(el)}
          onMouseLeave={() => setHovered(null)}
        />
      ))}
    </div>
  );
}
