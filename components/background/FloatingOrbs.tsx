"use client";

import { motion } from "framer-motion";

export default function FloatingOrbs() {
  return (
    <>
      {/* Orb 1 */}
      <motion.div
        animate={{
          x: [-20, 20, -20],
          y: [-30, 30, -30],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-20 top-32 h-64 w-64 rounded-full bg-cyan-500/10 blur-[120px]"
      />

      {/* Orb 2 */}
      <motion.div
        animate={{
          x: [20, -20, 20],
          y: [30, -30, 30],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-20 bottom-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[140px]"
      />
    </>
  );
}