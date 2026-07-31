"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUp } from "lucide-react";
import Container from "./Container";
import { scrollToHash } from "@/lib/scrollTo";

export default function Footer() {
  const year = new Date().getFullYear();
  const pathname = usePathname();

  const handleHashClick = (e: React.MouseEvent, hash: string) => {
    if (pathname === "/") {
      e.preventDefault();
      scrollToHash(hash);
    }
  };

  return (
    <footer className="border-t border-[var(--muted)]/15 py-10 sm:py-12">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          {/* Copyright & Identity */}
          <p className="font-serif text-sm text-[var(--muted)] tracking-wide">
            © {year} Bagmita Pokhrel. All rights reserved.
          </p>

          {/* Quick Navigation & External Links */}
          <div className="flex items-center gap-6 font-sans text-sm text-[var(--muted)]">
            <Link
              href="/#contact"
              onClick={(e) => handleHashClick(e, "/#contact")}
              className="transition-colors hover:text-[var(--accent)] focus-visible:outline-none focus-visible:underline"
            >
              Say hello
            </Link>

            <Link
              href="/privacy"
              className="transition-colors hover:text-[var(--accent)] focus-visible:outline-none focus-visible:underline"
            >
              Privacy
            </Link>

            <Link
              href="/#hero"
              onClick={(e) => handleHashClick(e, "/#hero")}
              aria-label="Scroll back to top of page"
              className="group inline-flex items-center gap-1.5 transition-colors hover:text-[var(--foreground)] focus-visible:outline-none focus-visible:underline"
            >
              <span>Back to top</span>
              <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}