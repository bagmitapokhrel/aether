"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";
import Container from "../layout/Container";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">

      <Container className="relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-3xl"
        >

          <p className="font-hand text-2xl text-[var(--accent)]">
            hi, I'm
          </p>

          <h1 className="mt-2 font-serif text-5xl leading-tight text-[var(--foreground)] sm:text-6xl md:text-7xl">
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
            <Button>See what I've built</Button>
            <Button variant="outline">Read my resume</Button>
          </motion.div>

        </motion.div>

      </Container>

    </section>
  );
}