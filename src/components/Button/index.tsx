import clsx from "clsx";
import { IButton } from "./types";
import variantStyles from "./variantStyles";
import { ButtonHTMLAttributes } from "react";
import Image from "../Image";

const Button = ({
  disabled,
  text,
  children,
  className,
  variant = "primary",
  leftIcon,
  ...props
}: IButton & ButtonHTMLAttributes<HTMLButtonElement>) => {
  const config = variantStyles[variant!];
  const content = children ?? text;

  return (
    <button
      disabled={disabled}
      className={clsx(
        config.baseClasses,
        disabled ? "bg-[#cec9c9] cursor-not-allowed" : config.className,
        className,
      )}
      {...props}
    >
      {leftIcon && (
        <span className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center">
          <Image sanityImage={leftIcon} className="h-6 w-auto" />
        </span>
      )}
      {config.wrapSpan ? (
        <span className="relative z-[2]">{content}</span>
      ) : (
        content
      )}
    </button>
  );
};

export default Button;
