import { ReactNode } from "react";
import { PortableTextBlock } from "next-sanity";
import RichText from "../RichText";
import { Text36 } from "../Text";

export default function SectionHeading({
  title,
  description,
  children,
}: {
  title?: string;
  description?: PortableTextBlock[];
  children?: ReactNode;
}) {
  return (
    <div className="flex flex-col items-start">
      <div className="flex flex-col">
        {title && <Text36>{title}</Text36>}
        {description && <RichText value={description} />}
      </div>
      {children}
    </div>
  );
}
