"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "../layout/Container";

export default function About() {
  return (
    <section id="about" className="py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-hand text-2xl text-[var(--accent)]">
              a bit more about me
            </p>

            <h2 className="mt-3 font-serif text-4xl leading-snug text-[var(--foreground)] sm:text-5xl">
              I didn't fall in love with code.
              <br />
              I just kept showing up for it.
            </h2>

            <div className="mt-10 space-y-6 font-sans text-lg leading-8 text-[var(--muted)]">
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
                I care about things being <em className="text-[var(--foreground)]">right</em>,
                not just finished. That's probably the closest thing I have to
                a work philosophy.
              </p>

              <p>
                Outside of that, I'm quiet, a little old-fashioned, and I'd
                rather write one honest sentence than ten polished ones.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative mx-auto w-full max-w-sm lg:mx-0 lg:mt-16"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-[var(--muted)]/20 bg-[var(--accent-soft)]/30">
              <Image
                src="/photos/Bagmitaa-portrait.jpg"
                alt="Bagmita Pokhrel"
                fill
                className="object-cover"
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