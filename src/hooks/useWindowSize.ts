import { useState, useEffect } from "react";
import { sizes } from "../utils/mediaQueries";

export type WindowSize = {
  [K in
    | "isMobile"
    | "isTabletVertical"
    | "isTabletHorizontal"
    | "isDesktop"
    | "isBigScreen"]: undefined | boolean;
};

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    isMobile: undefined,
    isTabletVertical: undefined,
    isTabletHorizontal: undefined,
    isDesktop: undefined,
    isBigScreen: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        isMobile: window.innerWidth < sizes.tabletHorizontal,
        isTabletVertical:
          window.innerWidth > sizes.tabletVertical &&
          window.innerWidth < sizes.tabletHorizontal,
        isTabletHorizontal:
          window.innerWidth > sizes.tabletHorizontal &&
          window.innerWidth < sizes.desktop,
        isDesktop:
          window.innerWidth > sizes.desktop &&
          window.innerWidth < sizes.bigScreen,
        isBigScreen: window.innerWidth > sizes.desktop,
      });
    };

    if (windowSize.isMobile === undefined) handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [
    windowSize.isMobile,
    windowSize.isTabletVertical,
    windowSize.isTabletHorizontal,
    windowSize.isDesktop,
    windowSize.isBigScreen,
  ]);

  return windowSize;
};

export default useWindowSize;
