import clsx from "clsx";
import { IButton } from "./types";
import variantStyles from "./variantStyles";
import ButtonContent from "./ButtonContent";
import { ButtonHTMLAttributes } from "react";

const Button = ({
  disabled,
  text,
  children,
  className,
  variant = "primary",
  leftIcon,
  rightIcon,
  ...props
}: IButton & ButtonHTMLAttributes<HTMLButtonElement>) => {
  const config = variantStyles[variant!];

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
      <ButtonContent
        variant={variant}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
      >
        {children ?? text}
      </ButtonContent>
    </button>
  );
};

export default Button;
