"use client";

import { ReactNode } from "react";

interface ArrowContainerProps {
  children: ReactNode;
  right?: boolean;
  className?: string;
}

export default function ArrowContainer({
  children,
  right = false,
  className = "",
}: ArrowContainerProps) {
  const baseClasses =
    "opacity-70 cursor-pointer z-[100] [&_svg]:w-24 lg:[&_svg]:w-40";
  const rotationClass = right ? "rotate-180" : "";

  const combinedClasses = [baseClasses, rotationClass, className]
    .filter(Boolean)
    .join(" ");

  return <div className={combinedClasses}>{children}</div>;
}
