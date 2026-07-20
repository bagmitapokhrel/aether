"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Container from "../layout/Container";

const projects = [
  { number: "01", title: "GymCart", tagline: "An ecommerce site for fitness gear.", note: "I built this because I was tired of clunky checkout flows on the sites I actually shopped on. It's not revolutionary — it's just a store that works the way I think a store should. Cart, payments, auth, done properly.", tech: "Next.js, Node.js, Express, MySQL", demo: "https://your-gymcart-demo.vercel.app", github: "https://github.com/bagmitapokhrel/gym-cart" },
  { number: "02", title: "AI Study Assistant", tagline: "A tool to help students study smarter, not longer.", note: "This came out of watching friends rewrite the same notes over and over. It summarizes, quizzes, and organizes — nothing flashy, just something that saves the hours I used to waste before exams.", tech: "Next.js, OpenAI, Tailwind CSS", demo: "https://your-study-assistant-demo.vercel.app", github: "https://github.com/bagmitapokhrel/ai-study-assistant" },
  { number: "03", title: "Realtime Collaboration", tagline: "A shared workspace that updates as you type.", note: "The hardest part wasn't the UI, it was making sure two people editing the same thing at once didn't break everything. I spent more time on that one problem than on the rest of the app combined.", tech: "Next.js, Socket.io, MongoDB", demo: "https://your-realtime-demo.vercel.app", github: "https://github.com/bagmitapokhrel/realtime-collaboration-tool" },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32">
      <Container>
        <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-hand text-2xl text-[var(--accent)]">things I've built</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="mt-3 max-w-2xl font-serif text-4xl leading-snug text-[var(--foreground)] sm:text-5xl">Not everything worked the first time. Here's what did, eventually.</motion.h2>

        <div className="mt-20 divide-y divide-[var(--muted)]/20">
          {projects.map((project, i) => {
            const linkClass = "group inline-flex items-center gap-1.5 font-sans text-sm text-[var(--foreground)] underline decoration-[var(--muted)]/40 underline-offset-4 transition-colors hover:text-[var(--accent)] hover:decoration-[var(--accent)]";
            return (
              <motion.div key={project.number} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, delay: i * 0.05 }} className="grid gap-4 py-12 lg:grid-cols-[80px_1fr]">
                <span className="font-hand text-3xl text-[var(--accent)]">{project.number}</span>
                <div className="max-w-2xl">
                  <h3 className="font-serif text-3xl text-[var(--foreground)]">{project.title}</h3>
                  <p className="mt-1 font-sans text-base text-[var(--muted)]">{project.tagline}</p>
                  <p className="mt-5 font-sans text-lg leading-8 text-[var(--muted)]">{project.note}</p>
                  <p className="mt-5 font-sans text-sm tracking-wide text-[var(--accent)]">{project.tech}</p>
                  <div className="mt-6 flex flex-wrap gap-4">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className={linkClass}>Live demo<ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className={linkClass}><FaGithub size={14} />Source code</a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}