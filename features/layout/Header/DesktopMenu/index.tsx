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
            className="pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-[12px] h-auto w-[150%] max-w-[125px] transition-[clip-path] duration-300 ease-out [clip-path:inset(0_100%_0_0)] group-hover:[clip-path:inset(0_0_0_0)]"
          />
        </InternalLink>
      ))}
    </nav>
  );
}
