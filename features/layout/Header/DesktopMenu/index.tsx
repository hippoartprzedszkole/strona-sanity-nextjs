import Image from "@/src/components/Image";
import InternalLink from "@/src/components/InternalLink";
import { useCommonComponentsContext } from "@/src/context/CommonComponentsContext";

export default function DesktopMenu() {
  const {
    header: { menu, menuItemHoverImg },
  } = useCommonComponentsContext();

  return (
    <nav className="flex items-center gap-10 font-menu font-bold text-navy">
      {menu.map((page, index) => (
        <InternalLink
          key={index}
          page={page}
          className="group relative pb-2 text-lg"
        >
          {page.title}
          <Image
            sanityImage={menuItemHoverImg}
            className="pointer-events-none absolute -left-1/4 -bottom-2 h-auto w-[150%] max-w-none opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          />
        </InternalLink>
      ))}
    </nav>
  );
}
