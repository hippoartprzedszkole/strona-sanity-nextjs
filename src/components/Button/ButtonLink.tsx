import clsx from "clsx";
import { ComponentProps } from "react";
import InternalLink from "../InternalLink";
import ButtonContent from "./ButtonContent";
import { IButton } from "./types";
import variantStyles from "./variantStyles";

type IButtonLink = Omit<IButton, "className"> & {
  className?: string;
} & (
    | { page: ComponentProps<typeof InternalLink>["page"]; href?: never }
    | { href: string; page?: never }
  );

const ButtonLink = ({
  page,
  href,
  text,
  children,
  className,
  variant = "primary",
  leftIcon,
  rightIcon,
}: IButtonLink) => {
  const config = variantStyles[variant];
  const classes = clsx(config.baseClasses, config.className, className);
  const content = (
    <ButtonContent variant={variant} leftIcon={leftIcon} rightIcon={rightIcon}>
      {children ?? text}
    </ButtonContent>
  );

  return page ? (
    <InternalLink page={page} className={classes}>
      {content}
    </InternalLink>
  ) : (
    <a href={href} className={classes}>
      {content}
    </a>
  );
};

export default ButtonLink;
