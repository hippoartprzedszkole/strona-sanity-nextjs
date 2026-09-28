import { useEffect, useRef, useState } from "react";

export interface IUseScroll {
  scrollPosition: number;
  scrollDirection: "up" | "down" | undefined;
  scrolled: boolean | undefined;
}

const useScrollPosition = (): IUseScroll => {
  const scrollPosition = useRef<number>(0);
  const scrollDirection = useRef<"up" | "down" | undefined>(undefined);
  const [scrolled, setScrolled] = useState<boolean | undefined>(false);

  useEffect(() => {
    const updatePosition = () => {
      if (window.scrollY === 0) setScrolled(false);
      else if (window.scrollY > 0 && !scrolled) setScrolled(true);

      if (
        window.scrollY > scrollPosition.current &&
        scrollDirection.current !== "down"
      )
        scrollDirection.current = "down";
      else if (
        window.scrollY < scrollPosition.current &&
        scrollDirection.current !== "up"
      )
        scrollDirection.current = "up";

      scrollPosition.current = window.scrollY;
    };

    window.addEventListener("scroll", updatePosition);
    return () => window.removeEventListener("scroll", updatePosition);
  }, [scrolled]);

  return {
    scrollPosition: scrollPosition.current,
    scrollDirection: scrollDirection.current,
    scrolled,
  };
};

export default useScrollPosition;
