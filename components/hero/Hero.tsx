"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../ui/Button";
import Container from "../layout/Container";

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <Container className="relative z-10">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <p className="font-hand text-2xl text-[var(--accent)]">
              hi, I'm
            </p>

            <h1 className="mt-2 font-serif text-5xl leading-tight text-[var(--foreground)] sm:text-6xl md:text-7xl lg:text-8xl">
              Bagmita Pokhrel.
            </h1>

            <p className="mt-8 max-w-xl font-sans text-lg leading-8 text-[var(--muted)]">
              I've been coding for two years. I'm not a genius. I just don't
              quit on things until they work.
            </p>

            <p className="mt-4 max-w-xl font-sans text-lg leading-8 text-[var(--muted)]">
              Most of what I've built started because something annoyed me
              enough to fix it myself.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="mt-12 flex flex-wrap gap-6"
            >
              <Button href="/#projects">See what I've built</Button>
              <Button href="/resume" variant="outline">Read my resume</Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative mx-auto w-full max-w-sm lg:mx-0"
          >
            <div className="overflow-hidden rounded-lg border border-[var(--muted)]/25 shadow-[8px_8px_0_var(--accent-soft)]">
              <div className="flex items-center gap-2 border-b border-[var(--muted)]/20 bg-[var(--accent-soft)]/40 px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--muted)]/50" />
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--muted)]/50" />
                <span className="ml-2 font-mono text-xs text-[var(--muted)]">
                  bagmita.jpg
                </span>
              </div>

              <div className="relative aspect-[4/5] w-full bg-[var(--accent-soft)]/30">
                <Image
                  src="/photos/bagmita-hero.jpg"
                  alt="Bagmita Pokhrel"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}