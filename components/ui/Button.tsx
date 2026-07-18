"use client";

import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button className="group relative overflow-hidden rounded-full border border-cyan-400/20 bg-white/5 px-8 py-4 backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,.25)]">
      <span className="relative z-10 flex items-center gap-3">
        {children}
        <ArrowRight
          size={18}
          className="transition group-hover:translate-x-1"
        />
      </span>

      <div className="absolute inset-0 translate-y-full bg-cyan-500 transition duration-500 group-hover:translate-y-0" />

      <span className="absolute inset-0 z-20 flex items-center justify-center opacity-0 transition duration-500 group-hover:opacity-100 text-black font-semibold">
        {children}
      </span>
    </button>
  );
}