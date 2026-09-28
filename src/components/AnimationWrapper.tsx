"use client";

import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface IAnimationWrapper {
  children: ReactNode;
  duration?: number;
  className?: string;
  side?: "left" | "right";
  isShown?: boolean;
}

export default function AnimationWrapper({
  children,
  duration = 0.8,
  className = "",
  side = "right",
  isShown = true,
}: IAnimationWrapper) {
  const xHidden = side === "left" ? -300 : 300;
  return (
    <AnimatePresence>
      {isShown && (
        <motion.div
          initial={{ opacity: 0, x: xHidden }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: xHidden }}
          transition={{
            duration,
            type: "spring",
            bounce: 0.2,
          }}
          className={className}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
