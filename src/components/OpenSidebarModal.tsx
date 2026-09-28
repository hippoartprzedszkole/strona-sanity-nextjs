import { ReactNode } from "react";
import getTopOffset from "@/src/utils/getTopOffset";
import clsx from "clsx";
import AnimationWrapper from "./AnimationWrapper";
import { GlassBackground } from "./GlassBackground";

export default function OpenSidebarModal({
  children,
  side,
  isOpen,
  closeSidebar,
}: {
  children: ReactNode;
  side: "left" | "right";
  isOpen: boolean;
  closeSidebar: () => void;
}) {
  const topOffset = getTopOffset();

  const boxShadow =
    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
  const shadowOffset = side === "left" ? "0 1rem 0 0" : "0 0 0 1rem";

  return (
    <>
      <div
        className={clsx(
          "fixed z-50 flex flex-col",
          side === "left" ? "left-0" : "right-0",
          `top-0 bottom-0`,
        )}
      >
        <AnimationWrapper side={side} isShown={isOpen} className="flex-1 flex">
          <div
            className={clsx(
              "flex-1 flex flex-col",
              `md:m-[${shadowOffset}] shadow-lg bg-white`,
            )}
            style={{
              padding: `${topOffset}px 0`,
              boxShadow,
            }}
          >
            {children}
          </div>
        </AnimationWrapper>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 flex flex-col z-10"
          onClick={closeSidebar}
        >
          <GlassBackground />
        </div>
      )}
    </>
  );
}
