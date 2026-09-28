// import clsx from "clsx";
import SECTIONS from "@/features/sections";
import { IPage } from "@/src/types/page";
import { SECTION_NAMES } from "@/features/sections";

export default async function PageBuilder({ page }: { page: IPage }) {
  return page.sections.map((props) => {
    const Component = SECTIONS[props._type as SECTION_NAMES]?.component;
    if (!Component) {
      return null;
    }

    // const withoutBg = [].some((item) => item === props._type);

    return (
      <Component
        key={props._key}
        id={props._key}
        lang={page.language}
        {...props}
      />
    );
  });
}
