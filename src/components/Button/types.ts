import { ReactNode } from "react";
import variantStyles from "./variantStyles";

export interface IButton {
  text?: string;
  children?: ReactNode;
  className?: HTMLButtonElement["className"];
  variant?: keyof typeof variantStyles;
}
