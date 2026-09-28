import clsx from "clsx";
import { ReactNode } from "react";

const SectionPaddingWrapper = ({
  children,
  id,
  className,
}: {
  children: ReactNode;
  id?: string;
  className?: HTMLElement["className"];
}) => {
  return (
    <div
      className={clsx("w-full px-4 lg:px-8 mx-auto max-w-[1400px]", className)}
      id={id}
    >
      {children}
    </div>
  );
};

export default SectionPaddingWrapper;
