"use client";

import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "filled" | "outline";
}

export default function Button({ children, variant = "filled" }: ButtonProps) {
  const isOutline = variant === "outline";

  return (
    <button
      className={`group relative overflow-hidden rounded-full border px-8 py-4 transition-all duration-500 hover:scale-105 ${
        isOutline
          ? "border-[var(--accent)]/30 bg-transparent"
          : "border-[var(--accent)] bg-[var(--accent)]"
      }`}
    >
      <div className="absolute inset-0 translate-y-full bg-[var(--accent)] transition-transform duration-500 group-hover:translate-y-0" />

      <span
        className={`relative z-10 flex items-center justify-center gap-3 font-sans transition-opacity duration-300 group-hover:opacity-0 ${
          isOutline ? "text-[var(--foreground)]" : "text-[var(--background)]"
        }`}
      >
        {children}
        <ArrowRight size={18} className="transition group-hover:translate-x-1" />
      </span>

      <span className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center font-sans font-semibold text-[var(--background)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {children}
      </span>
    </button>
  );
}