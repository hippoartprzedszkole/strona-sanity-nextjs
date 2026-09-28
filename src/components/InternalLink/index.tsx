import { IPage } from "@/src/types/page";
import Link from "next/link";
import { ReactNode } from "react";

export default function InternalLink({
  page,
  children,
  className,
}: {
  page: Pick<IPage, "slug">;
  children: ReactNode;
  className?: HTMLAnchorElement["className"];
}) {
  return (
    <Link href={page.slug.current} className={className}>
      {children}
    </Link>
  );
}
