"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Container from "../layout/Container";

export default function Contact() {
  return (
    <section id="contact" className="py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <p className="font-hand text-2xl text-[var(--accent)]">
            one last thing
          </p>

          <h2 className="mt-3 font-serif text-4xl leading-snug text-[var(--foreground)] sm:text-5xl">
            If something here made you want to talk, don't wait for a
            better reason.
          </h2>

          <p className="mt-8 max-w-xl font-sans text-lg leading-8 text-[var(--muted)]">
            I'm not going to pretend I have it all figured out, or that
            I'm the perfect fit for every role. But I show up, I follow
            through, and I'd genuinely like to hear from you.
          </p>

          <div className="mt-10 flex flex-wrap gap-6">
            <a
              href="mailto:bagmitapokhrel@gmail.com"
              className="group flex items-center gap-3 rounded-full border border-[var(--accent)] bg-[var(--accent)] px-6 py-3 font-sans text-[var(--background)] transition-transform duration-300 hover:scale-105"
            >
              <Mail size={18} />
              Say hello
            </a>

            <a
              href="https://github.com/bagmitapokhrel"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-full border border-[var(--accent)]/30 px-6 py-3 font-sans text-[var(--foreground)] transition-colors hover:border-[var(--accent)]"
            >
              <FaGithub size={18} />
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/bagmitapokhrel"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-full border border-[var(--accent)]/30 px-6 py-3 font-sans text-[var(--foreground)] transition-colors hover:border-[var(--accent)]"
            >
              <FaLinkedin size={18} />
              LinkedIn
            </a>
          </div>

          <p className="mt-20 font-sans text-sm text-[var(--muted)]">
            Bagmita Pokhrel 
          </p>
        </motion.div>
      </Container>
    </section>
  );
}