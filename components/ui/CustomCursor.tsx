"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springX = useSpring(cursorX, { damping: 25, stiffness: 400 });
  const springY = useSpring(cursorY, { damping: 25, stiffness: 400 });

  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);

      if (isHidden) setIsHidden(false);

      const target = e.target as HTMLElement;
      const isInteractive = !!target.closest(
        "a, button, [role='button'], input, textarea"
      );
      setIsPointer(isInteractive);
    };

    const hideCursor = () => setIsHidden(true);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", hideCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", hideCursor);
    };
  }, [cursorX, cursorY, isHidden]);

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      animate={{
        scale: isPointer ? 1.8 : 1,
        opacity: isHidden ? 0 : 1,
        backgroundColor: isPointer ? "rgba(0, 255, 255, 0.15)" : "transparent",
      }}
      transition={{ scale: { duration: 0.2 } }}
      className="pointer-events-none fixed left-0 top-0 z-[200] h-8 w-8 rounded-full border border-cyan-400"
    />
  );
}