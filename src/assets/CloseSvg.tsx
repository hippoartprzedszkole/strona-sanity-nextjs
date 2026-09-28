import React from "react";

export default function CloseSvg({
  size = 36,
  color = "#f76e19",
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg
      fill={color}
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <line x1="4" y1="4" x2="20" y2="20" strokeWidth="2" stroke={color} />
      <line x1="4" y1="20" x2="20" y2="4" strokeWidth="2" stroke={color} />
    </svg>
  );
}
