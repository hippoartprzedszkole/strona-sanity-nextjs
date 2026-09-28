import { ReactNode } from "react";

interface GlassBackgroundProps {
  children?: ReactNode;
}

export const GlassBackground: React.FC<GlassBackgroundProps> = ({
  children,
}) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-white/20 backdrop-blur-[8.4px]">
      {children}
    </div>
  );
};
