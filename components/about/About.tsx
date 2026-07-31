"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "../layout/Container";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start xl:gap-20">
          
          {/* Main Copy */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-2xl lg:max-w-none"
          >
            {/* Eyebrow */}
            <motion.p
              variants={itemVariants}
              className="font-hand text-2xl tracking-wide text-[var(--accent)]"
            >
              a bit more about me
            </motion.p>

            {/* Main Headline */}
            <motion.h2
              variants={itemVariants}
              className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-snug tracking-tight text-[var(--foreground)]"
            >
              I didn't fall in love with code.
              <br className="hidden sm:inline" />
              {" "}I just kept showing up for it.
            </motion.h2>

            {/* Narrative Body */}
            <motion.div
              variants={itemVariants}
              className="mt-8 space-y-6 font-sans text-base sm:text-lg leading-relaxed text-[var(--muted)]"
            >
              <p>
                I'm currently a BIM (Bachelor in Information Management) student,
                figuring out development mostly by building things and breaking
                them.
              </p>
              
              <p>
                I'm not going to tell you I've always dreamed of being a
                developer, or that I code sixteen hours a day out of pure
                passion. That's not true, and I'd rather you know the real
                version.
              </p>

              <p>
                What's true is this — when something doesn't work, I can't
                leave it alone. I'll sit with a bug longer than I should. I'll
                rebuild something three times if the first two versions feel
                wrong, even if no one else would've noticed.
              </p>

              <p>
                I care about things being{" "}
                <em className="font-serif italic text-[var(--foreground)] font-medium">
                  right
                </em>
                , not just finished. That's probably the closest thing I have to
                a work philosophy.
              </p>

              <p>
                Outside of that, I'm quiet, a little old-fashioned, and I'd
                rather write one honest sentence than ten polished ones.
              </p>
            </motion.div>
          </motion.div>

          {/* Editorial Portrait Column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative mx-auto w-full max-w-sm sm:max-w-md lg:mx-0 lg:mt-12"
          >
            <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-md border border-[var(--muted)]/20 bg-[var(--accent-soft)]/20 shadow-sm transition-transform duration-500 hover:-translate-y-1">
              <Image
                src="/photos/Bagmitaa-portrait.jpg"
                alt="Bagmita Pokhrel portrait"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 35vw"
                className="object-cover grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
              />
            </div>
            
            <p className="mt-4 text-center font-hand text-xl text-[var(--muted)]">
              me, on an ordinary day
            </p>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}