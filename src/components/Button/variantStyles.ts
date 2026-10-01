export type VariantConfig = {
  className: string;
  baseClasses: string;
  wrapSpan?: boolean;
};

const DEFAULT_BASE =
  "min-w-[150px] min-h-[50px] p-[10px] rounded-[5px] items-center justify-center " +
  "cursor-pointer hover:opacity-90 transition-opacity";

const SCROLL_BTN_BASE = "relative z-[1]";

const variantStyles: Record<
  | "primary"
  | "pink"
  | "danger"
  | "dangerLink"
  | "scrollDownBtn"
  | "scrollDownBtnRotated",
  VariantConfig
> = {
  primary: {
    className: "bg-green hover:scale-105 active:scale-105 active:shadow-xl p-4",
    baseClasses:
      "min-h-16 w-40 rounded-sm cursor-pointer transition-transform duration-200 text-white font-bold text-center",
  },
  pink: {
    className: "bg-pink hover:scale-105 active:scale-105 active:shadow-xl px-4",
    baseClasses:
      "relative flex items-center justify-center min-h-12 rounded-md cursor-pointer " +
      "transition-transform duration-200 text-white font-menu font-bold text-base text-center",
  },
  danger: { className: "bg-error", baseClasses: DEFAULT_BASE },
  dangerLink: {
    className: "text-error border border-error",
    baseClasses: DEFAULT_BASE,
  },
  scrollDownBtn: {
    baseClasses: SCROLL_BTN_BASE,
    wrapSpan: true,
    className:
      "uppercase cursor-pointer bg-transparent border-0 max-w-72 text-center font-semibold " +
      "text-[15px] px-12 py-8 " +
      "after:content-[''] after:absolute after:bg-green after:left-0 after:right-0 after:bottom-0 after:h-1 " +
      "lg:hover:after:h-full lg:hover:after:transition-all lg:hover:after:duration-300 " +
      "lg:hover:text-white " +
      "lg:hover:after:bg-[url('/assets/arrow.png')] lg:hover:after:bg-no-repeat lg:hover:after:bg-center lg:hover:after:bg-[length:35px]",
  },
  scrollDownBtnRotated: {
    baseClasses: SCROLL_BTN_BASE,
    wrapSpan: true,
    className:
      "uppercase cursor-pointer bg-transparent border-0 max-w-72 text-center font-semibold " +
      "text-[15px] px-12 py-8 rotate-90 " +
      "after:content-[''] after:absolute after:bg-green after:left-0 after:right-0 after:bottom-0 after:h-1 " +
      "lg:hover:after:h-full lg:hover:after:transition-all lg:hover:after:duration-300 " +
      "lg:hover:text-white",
  },
};

export default variantStyles;
