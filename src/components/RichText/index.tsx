import {
  PortableText,
  PortableTextBlock,
  PortableTextComponents,
} from "next-sanity";
import clsx from "clsx";
import Image from "@/src/components/Image";
import { ISanityImage } from "@/src/types/common";
import { Text12, Text14, Text16, Text20, Text32, Text36 } from "../Text";

const COLOR_CLASSES: Record<string, string> = {
  navy: "text-navy",
  pink: "text-pink",
  green: "text-green",
  blue: "text-blue",
  orange: "text-orange",
  purple: "text-purple",
  gray: "text-gray",
};

type TableValue = {
  hasHeader?: boolean;
  rows?: { _key: string; cells?: string[] }[];
};

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <Text16 className="min-h-[1.5em] leading-relaxed">{children}</Text16>
    ),
    h2: ({ children }) => (
      <Text36 className="mt-4 leading-tight">{children}</Text36>
    ),
    h3: ({ children }) => (
      <Text32 className="mt-3 leading-tight">{children}</Text32>
    ),
    h4: ({ children }) => (
      <Text20 className="mt-2 font-bold leading-snug">{children}</Text20>
    ),
    small: ({ children }) => (
      <Text12 className="leading-relaxed">{children}</Text12>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-pink pl-4 italic">
        <Text16 className="leading-relaxed">{children}</Text16>
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="flex list-disc flex-col gap-1 pl-6">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="flex list-decimal flex-col gap-1 pl-6">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li>
        <Text16 className="leading-relaxed">{children}</Text16>
      </li>
    ),
    number: ({ children }) => (
      <li>
        <Text16 className="leading-relaxed">{children}</Text16>
      </li>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    underline: ({ children }) => <span className="underline">{children}</span>,
    "strike-through": ({ children }) => (
      <span className="line-through">{children}</span>
    ),
    textColor: ({ value, children }) => (
      <span className={COLOR_CLASSES[value?.color]}>{children}</span>
    ),
    link: ({ value, children }) => (
      <a href={value?.href} className="text-blue underline hover:opacity-80">
        {children}
      </a>
    ),
  },
  types: {
    img: ({ value }: { value: ISanityImage }) => (
      <Image
        sanityImage={value}
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="h-auto max-w-full rounded-xl"
      />
    ),
    table: ({ value }: { value: TableValue }) => {
      const [first, ...rest] = value?.rows ?? [];
      const header = value?.hasHeader ? first : undefined;
      const body = value?.hasHeader ? rest : (value?.rows ?? []);
      return (
        <div className="w-full overflow-x-auto rounded-xl border border-gray-light">
          <table className="w-full border-collapse text-left">
            {header && (
              <thead className="bg-pink/10">
                <tr>
                  {header.cells?.map((cell, i) => (
                    <th
                      key={i}
                      className="border-b border-gray-light px-3 py-2"
                    >
                      <Text14 className="font-bold">{cell}</Text14>
                    </th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody>
              {body.map((row) => (
                <tr key={row._key} className="odd:bg-cream/60">
                  {row.cells?.map((cell, i) => (
                    <td
                      key={i}
                      className="border-t border-gray-light px-3 py-2 align-top"
                    >
                      <Text14>{cell}</Text14>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    },
  },
};

const RichText = ({
  value,
  className,
}: {
  value: PortableTextBlock[];
  className?: HTMLElement["className"];
}) => {
  if (!value) {
    return null;
  }

  return (
    <div className={clsx("flex flex-col gap-2", className)}>
      <PortableText value={value} components={components} />
    </div>
  );
};

export default RichText;
