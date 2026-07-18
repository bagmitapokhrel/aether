"use client";

import { motion, useMotionValue } from "framer-motion";

export default function MouseGlow() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  return (
    <motion.div
      onMouseMove={(e) => {
        x.set(e.clientX - 150);
        y.set(e.clientY - 150);
      }}
      style={{ x, y }}
      className="pointer-events-none fixed z-0 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[120px]"
    />
  );
}