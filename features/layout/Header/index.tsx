import HamburgerMenu from "react-hamburger-menu";
import useScrollPosition from "@/src/hooks/useScrollPosition";
import getTopOffset from "@/src/utils/getTopOffset";
import clsx from "clsx";
import SectionPaddingWrapper from "@/src/components/SectionPaddingWrapper";
import { useParams } from "next/navigation";
import OpenSidebarModal from "@/src/components/OpenSidebarModal";
import Menu from "./Menu";
import DesktopMenu from "./DesktopMenu";
import BookVisit from "./BookVisit";
import { useEffect, useState } from "react";
import { useScrollbarContext } from "@/src/context/ScrollbarContext";

const Header = () => {
  const { slug } = useParams();
  const topOffset = getTopOffset();
  const { scrolled } = useScrollPosition();
  const iconSize = "35px";

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { showScrollbar, hideScrollbar } = useScrollbarContext();

  const closeSidebars = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    closeSidebars();
  }, [slug]);

  useEffect(() => {
    if (isMenuOpen) {
      hideScrollbar();
    } else {
      showScrollbar();
    }
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={clsx(
          slug ? "sticky" : "fixed",
          "top-0 left-0 right-0 z-[99999]",
          `w-full flex`,
        )}
        style={{
          height: topOffset,
          backgroundColor: "white",
          boxShadow: scrolled ? "0 2px 12px rgba(0, 0, 0, 0.08)" : "none",
        }}
      >
        <SectionPaddingWrapper className="flex-1 flex">
          <div className={clsx("flex-1 w-full flex")}>
            <div className="flex-1 flex flex-row justify-between items-center">
              <div
                className={`tablet-h:hidden cursor-pointer w-[${iconSize}] h-[${iconSize}] relative`}
              >
                <HamburgerMenu
                  isOpen={isMenuOpen}
                  menuClicked={() => setIsMenuOpen((isMenuOpen) => !isMenuOpen)}
                  width={30}
                  height={20}
                  strokeWidth={3}
                  color="var(--color-pink)"
                  animationDuration={0.5}
                />
              </div>

              <div className="ml-auto flex items-center gap-10">
                <div className="hidden tablet-h:block">
                  <DesktopMenu />
                </div>
                <BookVisit />
              </div>
            </div>
          </div>
        </SectionPaddingWrapper>
      </header>
      <div className="tablet-h:hidden">
        <OpenSidebarModal
          side="left"
          isOpen={isMenuOpen}
          closeSidebar={closeSidebars}
        >
          <Menu />
        </OpenSidebarModal>
      </div>
    </>
  );
};

export default Header;
