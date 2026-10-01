import { ReactNode } from "react";
import { ISanityImage } from "@/src/types/common";
import variantStyles from "./variantStyles";

export interface IButton {
  text?: string;
  children?: ReactNode;
  className?: HTMLButtonElement["className"];
  leftIcon?: ISanityImage;
  variant?: keyof typeof variantStyles;
}
