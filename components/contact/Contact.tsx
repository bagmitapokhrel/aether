"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Container from "../layout/Container";

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }
  },
};

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInVariants}
          className="max-w-2xl"
        >
          {/* Eyebrow Label */}
          <p className="font-hand text-2xl tracking-wide text-[var(--accent)]">
            one last thing
          </p>

          {/* Heading */}
          <h2 className="mt-3 font-serif text-3xl sm:text-5xl leading-tight text-[var(--foreground)] tracking-tight">
            If something here made you want to talk, don't wait for a better reason.
          </h2>

          {/* Body Copy */}
          <p className="mt-6 font-sans text-base sm:text-lg leading-relaxed text-[var(--muted)]">
            I'm not going to pretend I have it all figured out, or that I'm the
            perfect fit for every role. But I show up, I follow through, and I'd
            genuinely like to hear from you.
          </p>

          {/* Action Links */}
          <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
            {/* Primary Action: Email */}
            <a
              href="mailto:bagmitapokhrel@gmail.com"
              aria-label="Send an email"
              className="group inline-flex items-center gap-3 rounded-full bg-[var(--accent)] px-6 py-3.5 font-sans text-sm sm:text-base font-medium text-[var(--background)] transition-all duration-300 hover:opacity-90 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
            >
              <Mail className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
              <span>Say hello</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/bagmitapokhrel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit GitHub profile"
              className="group inline-flex items-center gap-2.5 rounded-full border border-[var(--accent)]/30 px-6 py-3.5 font-sans text-sm sm:text-base font-medium text-[var(--foreground)] transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--accent)]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
            >
              <FaGithub className="h-4 w-4 text-[var(--foreground)]" />
              <span>GitHub</span>
              <ArrowUpRight className="h-3.5 w-3.5 opacity-60 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/bagmitapokhrel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit LinkedIn profile"
              className="group inline-flex items-center gap-2.5 rounded-full border border-[var(--accent)]/30 px-6 py-3.5 font-sans text-sm sm:text-base font-medium text-[var(--foreground)] transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--accent)]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
            >
              <FaLinkedin className="h-4 w-4 text-[var(--foreground)]" />
              <span>LinkedIn</span>
              <ArrowUpRight className="h-3.5 w-3.5 opacity-60 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
            </a>
          </div>

          {/* Section End Sign-off (Transitions cleanly into Footer) */}
          <p className="mt-16 sm:mt-20 font-hand text-xl text-[var(--accent)] opacity-80">
            — talk soon
          </p>
        </motion.div>
      </Container>
    </section>
  );
}