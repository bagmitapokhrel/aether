"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Container from "./Container";
import { scrollToHash } from "@/lib/scrollTo";

const links = [
  { label: "About", href: "/#about" },
  { label: "Work", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [hovered, setHovered] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  // Scroll background state & Intersection Observer
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);

    // Only observe sections if we are on the homepage
    if (pathname === "/") {
      const sections = links
        .map((l) => document.querySelector(l.href.replace("/#", "#")))
        .filter(Boolean) as Element[];

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActive(`/#${entry.target.id}`);
            }
          });
        },
        { rootMargin: "-30% 0px -60% 0px" }
      );

      sections.forEach((s) => observer.observe(s));

      return () => {
        window.removeEventListener("scroll", onScroll);
        observer.disconnect();
      };
    }

    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    if (pathname === "/") {
      scrollToHash(href);
    } else {
      router.push("/");
      setTimeout(() => {
        scrollToHash(href);
      }, 300);
    }
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[var(--background)]/85 border-b border-[var(--muted)]/15 backdrop-blur-md py-3 shadow-xs"
          : "bg-transparent py-5"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="/#hero"
            onClick={(e) => handleClick(e, "/#hero")}
            className="font-serif text-2xl font-semibold tracking-tight text-[var(--foreground)] transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          >
            Bagmita<span className="text-[var(--accent)]">.</span>
          </a>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-1 md:flex"
            onMouseLeave={() => setHovered(null)}
          >
            {links.map((link, i) => {
              const isActive = active === link.href;
              const isHovered = hovered === link.href;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  onMouseEnter={() => setHovered(link.href)}
                  className="relative flex items-center gap-1.5 px-4 py-2 font-sans text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                >
                  <span
                    className={`font-hand text-xs transition-colors ${
                      isActive
                        ? "text-[var(--accent)] font-bold"
                        : "text-[var(--muted)]/60"
                    }`}
                  >
                    0{i + 1}
                  </span>
                  <span
                    className={`transition-colors ${
                      isActive
                        ? "text-[var(--foreground)] font-semibold"
                        : "text-[var(--muted)] hover:text-[var(--foreground)]"
                    }`}
                  >
                    {link.label}
                  </span>

                  {/* Dynamic Spring Active Underline */}
                  <AnimatePresence>
                    {(isHovered || (isActive && !hovered)) && (
                      <motion.div
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-[var(--accent)]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 35,
                        }}
                      />
                    )}
                  </AnimatePresence>
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={isOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--muted)]/20 text-[var(--foreground)] transition-colors hover:bg-[var(--accent-soft)]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] md:hidden"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </Container>

      {/* Mobile Slide-down Overlay Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="overflow-hidden border-b border-[var(--muted)]/20 bg-[var(--background)]/98 backdrop-blur-xl md:hidden"
          >
            <Container>
              <div className="flex flex-col gap-2 py-6">
                {links.map((link, i) => {
                  const isActive = active === link.href;

                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleClick(e, link.href)}
                      className={`flex items-center gap-3 rounded-lg px-4 py-3 font-sans text-lg font-medium transition-colors ${
                        isActive
                          ? "bg-[var(--accent-soft)]/40 text-[var(--accent)]"
                          : "text-[var(--foreground)] hover:bg-[var(--accent-soft)]/20"
                      }`}
                    >
                      <span className="font-hand text-sm text-[var(--accent)]">
                        0{i + 1}
                      </span>
                      <span>{link.label}</span>
                    </a>
                  );
                })}
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}