"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Button from "../ui/Button";
import Container from "../layout/Container";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[90vh] items-center overflow-hidden py-16 sm:py-24 lg:py-32"
    >
      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center xl:gap-20">
          
          {/* Main Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl lg:max-w-none"
          >
            <motion.p
              variants={itemVariants}
              className="font-hand text-2xl tracking-wide text-[var(--accent)]"
            >
              hi, I'm
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="mt-2 font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.05] tracking-tight text-[var(--foreground)]"
            >
              Bagmita Pokhrel.
            </motion.h1>

            <motion.div variants={itemVariants} className="mt-8 space-y-4">
              <p className="font-sans text-lg sm:text-xl leading-relaxed text-[var(--muted)]">
                I've been coding for two years. I'm not a genius. I just don't
                quit on things until they work.
              </p>
              <p className="font-sans text-lg sm:text-xl leading-relaxed text-[var(--muted)]">
                Most of what I've built started because something annoyed me
                enough to fix it myself.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6"
            >
              <Button href="/#projects">See what I've built</Button>
              <Button href="/resume" variant="outline">
                Read my resume
              </Button>
            </motion.div>
          </motion.div>

          {/* Styled Image Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative mx-auto w-full max-w-sm sm:max-w-md lg:mx-0 lg:max-w-none"
          >
            <div className="group overflow-hidden rounded-xl border border-[var(--muted)]/20 bg-[var(--background)] shadow-[10px_10px_0_0_var(--accent-soft)] transition-transform duration-500 hover:-translate-y-1">
              {/* Window Header */}
              <div
                aria-hidden="true"
                className="flex items-center gap-2 border-b border-[var(--muted)]/15 bg-[var(--accent-soft)]/30 px-4 py-3"
              >
                <span className="h-3 w-3 rounded-full bg-[var(--accent)]/80" />
                <span className="h-3 w-3 rounded-full bg-[var(--muted)]/40" />
                <span className="h-3 w-3 rounded-full bg-[var(--muted)]/40" />
                <span className="ml-2 font-mono text-xs font-medium tracking-wide text-[var(--muted)]">
                  bagmita.jpg
                </span>
              </div>

              {/* Image Container */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[var(--accent-soft)]/20">
                <Image
                  src="/photos/bagmita-hero.jpg"
                  alt="Bagmita Pokhrel"
                  fill
                  priority
                  
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}