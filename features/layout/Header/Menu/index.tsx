import InternalLink from "@/src/components/InternalLink";
import { useCommonComponentsContext } from "@/src/context/CommonComponentsContext";

export default function Menu() {
  const {
    language,
    header: { menu },
  } = useCommonComponentsContext();
  return (
    <div className="flex flex-col items-center gap-4 p-8">
      {menu.map((page, index) => (
        <InternalLink key={index} page={page} lang={language}>
          {page.title}
        </InternalLink>
      ))}
    </div>
  );
}
