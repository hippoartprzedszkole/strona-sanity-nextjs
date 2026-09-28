import { LANGS } from "@/src/types/langs";
import { IPage } from "@/src/types/page";
import Link from "next/link";
import { ReactNode } from "react";

export default function InternalLink({
  page,
  lang,
  children,
  className,
}: {
  page: Pick<IPage, "slug">;
  lang: LANGS;
  children: ReactNode;
  className?: HTMLAnchorElement["className"];
}) {
  return (
    <Link href={`/${lang}${page.slug.current}`} className={className}>
      {children}
    </Link>
  );
}
