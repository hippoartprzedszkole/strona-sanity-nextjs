import clsx from "clsx";
import { IButton } from "./types";
import variantStyles from "./variantStyles";
import { ButtonHTMLAttributes } from "react";

const Button = ({
  disabled,
  text,
  children,
  className,
  variant = "primary",
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
      {config.wrapSpan ? (
        <span className="relative z-[2]">{content}</span>
      ) : (
        content
      )}
    </button>
  );
};

export default Button;
