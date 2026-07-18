"use client";

import { motion } from "framer-motion";
import Background from "../background/Background";
import Button from "../ui/Button";
import Container from "../layout/Container";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">

      <Background />

      <Container className="relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="text-center"
        >

          {/* Availability Badge */}

          <div className="mb-8 inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-slate-300 backdrop-blur-xl">
            Open to Opportunities
          </div>

          {/* Small Heading */}

          <p className="mb-8 uppercase tracking-[0.6em] text-slate-500">
            CREATIVE DEVELOPER
          </p>

          {/* Name */}

          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 1,
            }}
            className="text-5xl font-black leading-none sm:text-6xl md:text-7xl lg:text-8xl"
          >
            <span className="bg-gradient-to-r from-white via-slate-200 to-cyan-400 bg-clip-text text-transparent">
              Bagmita
              <br />
              Pokhrel
            </span>
          </motion.h1>

          {/* Role */}

          <p className="mt-6 text-sm uppercase tracking-[0.45em] text-cyan-400">
            Full Stack Developer
          </p>

          {/* Description */}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.6,
              duration: 1,
            }}
            className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-400"
          >
            I build modern, scalable, and user-focused web experiences using
            clean architecture, thoughtful design, and powerful technologies.
          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1,
              duration: 0.8,
            }}
            className="mt-12 flex flex-wrap justify-center gap-6"
          >
            <Button>Explore Work</Button>

            <Button>Get Resume</Button>
          </motion.div>

          {/* Scroll */}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1.5,
              duration: 1,
            }}
            className="mt-16 text-xs uppercase tracking-[0.5em] text-slate-500"
          >
            Scroll to Explore
          </motion.p>

        </motion.div>

      </Container>

    </section>
  );
}