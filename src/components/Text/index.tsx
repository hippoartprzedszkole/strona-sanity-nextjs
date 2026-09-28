import clsx from "clsx";
import { ReactNode, CSSProperties } from "react";

interface IText {
  children?: ReactNode;
  className?: string;
}

const Text = ({
  Tag,
  style,
  className,
  children,
  ...props
}: IText & {
  Tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  style?: CSSProperties;
}) => {
  const classes = clsx("currentColor", className);
  return (
    <Tag {...props} style={style} className={classes}>
      {children}
    </Tag>
  );
};

export const Text10 = (props: IText) => {
  return (
    <Text
      Tag="span"
      {...props}
      className={clsx("text-[0.5rem] lg:text-[0.625rem]", props.className)}
    >
      {props.children}
    </Text>
  );
};

export const Text12 = (props: IText) => {
  return (
    <Text
      Tag="p"
      {...props}
      className={clsx("text-[0.6rem] lg:text-[0.75rem]", props.className)}
    >
      {props.children}
    </Text>
  );
};

export const Text14 = (props: IText) => {
  return (
    <Text
      Tag="p"
      {...props}
      className={clsx("text-[0.7rem] lg:text-[0.875rem]", props.className)}
    >
      {props.children}
    </Text>
  );
};

export const Text16 = (props: IText) => {
  return (
    <Text
      Tag="p"
      {...props}
      className={clsx("text-[0.8rem] lg:text-[1rem]", props.className)}
    >
      {props.children}
    </Text>
  );
};

export const Text18 = (props: IText) => {
  return (
    <Text
      Tag="h6"
      {...props}
      className={clsx("text-[0.9rem] lg:text-[1.125rem]", props.className)}
    >
      {props.children}
    </Text>
  );
};

export const Text20 = (props: IText) => {
  return (
    <Text
      Tag="h5"
      {...props}
      className={clsx("text-[1rem] lg:text-[1.25rem]", props.className)}
    >
      {props.children}
    </Text>
  );
};

export const Text32 = (props: IText) => {
  return (
    <Text
      Tag="h3"
      {...props}
      className={clsx(
        "text-[1.25rem] lg:text-[2rem] font-bold",
        props.className,
      )}
    >
      {props.children}
    </Text>
  );
};

export const Text36 = (props: IText) => {
  return (
    <Text
      Tag="h3"
      {...props}
      className={clsx(
        "text-[1.5rem] lg:text-[2.25rem] font-bold",
        props.className,
      )}
    >
      {props.children}
    </Text>
  );
};

export const Text48 = (props: IText) => {
  return (
    <Text
      Tag="h2"
      {...props}
      className={clsx("text-[2rem] lg:text-[3rem] font-bold", props.className)}
    >
      {props.children}
    </Text>
  );
};

export const Text64 = (props: IText) => {
  return (
    <Text
      Tag="h1"
      {...props}
      className={clsx("text-[2rem] lg:text-[4rem] font-bold", props.className)}
    >
      {props.children}
    </Text>
  );
};
