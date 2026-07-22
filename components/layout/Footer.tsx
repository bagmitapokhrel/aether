"use client";

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--muted)]/15 py-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-3 px-6 text-center md:flex-row md:justify-between md:px-8 lg:px-12">
        <p className="font-serif text-sm text-[var(--muted)]">
          Bagmita Pokhrel, © {year} All rights reserved.
        </p>

        <div className="flex gap-6">
          <Link
            href="#hero"
            className="font-sans text-sm text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
          >
            Back to top
          </Link>
          <Link
            href="#contact"
            className="font-sans text-sm text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
          >
            Say hello
          </Link>
          <Link
           href="/privacy"
           className="font-sans text-sm text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
           >
           Privacy 
            </Link>
        </div>
      </div>
    </footer>
  );
}