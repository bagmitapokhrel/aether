"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
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
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    const sections = links.map((l) => document.querySelector(l.href.replace("/#", "#"))).filter(Boolean) as Element[];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(`/#${entry.target.id}`);
      });
    }, { rootMargin: "-40% 0px -50% 0px" });
    sections.forEach((s) => observer.observe(s));
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const handleClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    if (pathname === "/") {
      scrollToHash(href);
    } else {
      router.push(href);
      setTimeout(() => scrollToHash(href), 300);
    }
  };

  const navClass = scrolled ? "bg-[var(--background)]/90 backdrop-blur-sm border-b border-[var(--muted)]/15" : "bg-transparent";

  return (
    <nav className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${navClass}`}>
      <Container>
        <div className="flex h-20 items-center justify-between">
          <a href="/#hero" onClick={(e) => handleClick(e, "/#hero")} className="font-serif text-2xl font-bold text-[var(--foreground)]">Bagmita</a>

          <div className="flex items-center gap-1" onMouseLeave={() => setHovered(null)}>
            {links.map((link, i) => {
              const isActive = active === link.href;
              const isHovered = hovered === link.href;
              const numClass = isActive ? "text-[var(--accent)]" : "text-[var(--muted)]/50";
              const labelClass = isActive ? "text-[var(--accent)]" : "text-[var(--muted)] hover:text-[var(--foreground)]";
              return (
                <a key={link.href} href={link.href} onClick={(e) => handleClick(e, link.href)} onMouseEnter={() => setHovered(link.href)} className="relative flex items-center gap-1.5 px-4 py-2 font-sans text-sm">
                  <span className={`font-hand text-xs transition-colors ${numClass}`}>0{i + 1}</span>
                  <span className={`transition-colors ${labelClass}`}>{link.label}</span>
                  <AnimatePresence>
                    {(isHovered || (isActive && !hovered)) && (
                      <motion.div layoutId="nav-underline" className="absolute bottom-0 left-2 right-2 h-[1.5px] bg-[var(--accent)]" transition={{ type: "spring", stiffness: 380, damping: 30 }} />
                    )}
                  </AnimatePresence>
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </nav>
  );
}