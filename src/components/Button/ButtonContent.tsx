import { ReactNode } from "react";
import Image from "../Image";
import { IButton } from "./types";
import variantStyles from "./variantStyles";

const ButtonContent = ({
  variant = "primary",
  leftIcon,
  rightIcon,
  children,
}: Pick<IButton, "variant" | "leftIcon" | "rightIcon"> & {
  children: ReactNode;
}) => {
  const config = variantStyles[variant];

  return (
    <>
      {leftIcon && (
        <span className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center">
          <Image sanityImage={leftIcon} className="h-6 w-auto" />
        </span>
      )}
      {config.wrapSpan ? (
        <span className="relative z-[2]">{children}</span>
      ) : (
        children
      )}
      {rightIcon && <Image sanityImage={rightIcon} className="h-4 w-auto" />}
    </>
  );
};

export default ButtonContent;
