import {
  PortableText,
  PortableTextBlock,
  PortableTextProps,
} from "next-sanity";

const RichText = ({
  value,
  className,
}: {
  value: PortableTextBlock[];
  className?: HTMLElement["className"];
}) => {
  const components: PortableTextProps["components"] = {};

  if (!value) {
    return null;
  }

  return (
    <div className={className}>
      <PortableText value={value} components={components} />
    </div>
  );
};

export default RichText;
