import HamburgerMenu from "react-hamburger-menu";
import Image from "next/image";
import useScrollPosition from "@/src/hooks/useScrollPosition";
import Link from "next/link";
import useWindowSize from "@/src/hooks/useWindowSize";
import getTopOffset from "@/src/utils/getTopOffset";
import clsx from "clsx";
import SectionPaddingWrapper from "@/src/components/SectionPaddingWrapper";
import { useParams } from "next/navigation";
import OpenSidebarModal from "@/src/components/OpenSidebarModal";
import Menu from "./Menu";
import { useEffect, useState } from "react";
import { useScrollbarContext } from "@/src/context/ScrollbarContext";

const Header = () => {
  const { slug } = useParams();
  const windowSize = useWindowSize();
  const topOffset = getTopOffset();
  const { scrolled } = useScrollPosition();
  const iconSize = "35px";

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { showScrollbar, hideScrollbar } = useScrollbarContext();

  let shadow = !windowSize.isMobile
    ? "1rem 1rem 2rem 1rem rgba(247, 110, 25, 0.08)"
    : "1rem 1rem 1rem 15px rgba(247, 110, 25, 0.2)";

  let bgColor;
  if (isMenuOpen || !slug) {
    bgColor = "transparent";
    shadow = "initial";
  } else {
    bgColor = scrolled ? "white" : "transparent";
  }

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
          scrolled && `shadow-${shadow}`,
          `w-full flex`,
        )}
        style={{
          height: topOffset,
          backgroundColor: bgColor,
        }}
      >
        <SectionPaddingWrapper className="flex-1 flex">
          <div className={clsx("flex-1 w-full flex")}>
            <div className="flex-1 flex flex-row justify-between items-center">
              <div
                className={`cursor-pointer w-[${iconSize}] h-[${iconSize}] relative`}
              >
                <HamburgerMenu
                  isOpen={isMenuOpen}
                  menuClicked={() => setIsMenuOpen((isMenuOpen) => !isMenuOpen)}
                  width={30}
                  height={20}
                  strokeWidth={3}
                  color="var(--color-green)"
                  animationDuration={0.5}
                />
              </div>

              {slug && (
                <Link href="/">
                  <div
                    className={`${scrolled ? "scale-75" : ""} transition-transform duration-300`}
                  >
                    <Image
                      src="/assets/logo/logo-vector-2.png"
                      width={80}
                      height={80}
                      alt="logo"
                    />
                  </div>
                </Link>
              )}
            </div>
          </div>
        </SectionPaddingWrapper>
      </header>
      <OpenSidebarModal
        side="left"
        isOpen={isMenuOpen}
        closeSidebar={closeSidebars}
      >
        <Menu />
      </OpenSidebarModal>
    </>
  );
};

export default Header;
