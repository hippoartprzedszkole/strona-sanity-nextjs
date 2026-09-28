import { ReactNode } from "react";

export default function OldPrice({
  children,
  lineColor,
  lineWidth = 6,
}: {
  children: ReactNode;
  lineColor: string;
  lineWidth?: number;
}) {
  return (
    <div className="relative">
      {children}
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
        <div
          className="w-full"
          style={{
            height: `${lineWidth}px`,
            backgroundColor: lineColor,
          }}
        />
      </div>
    </div>
  );
}
