"use client";

import { motion } from "framer-motion";
import Container from "../layout/Container";

export default function Manifesto() {
  return (
    <section className="py-40">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="font-serif text-3xl italic leading-snug text-[var(--foreground)] sm:text-4xl md:text-5xl">
            I don't think good work has to be loud. It just has to be
            honest, and it has to actually work.
          </p>

          <p className="mt-8 font-hand text-xl text-[var(--accent)]">
            — that's the whole philosophy, really
          </p>
        </motion.div>
      </Container>
    </section>
  );
}