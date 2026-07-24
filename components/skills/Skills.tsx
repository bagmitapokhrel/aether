"use client";

import { motion } from "framer-motion";
import Container from "../layout/Container";

const groups = [
  {
    category: "Frontend",
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    tools: ["Node.js", "Express", "MongoDB", "MySQL", "Python Django"],
  },
  {
    category: "Tools I keep coming back to",
    tools: ["Framer Motion", "GSAP", "Git", "Figma"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32">
      <Container>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-hand text-2xl text-[var(--accent)]"
        >
          what I reach for
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-3 max-w-2xl font-serif text-4xl leading-snug text-[var(--foreground)] sm:text-5xl"
        >
          Nothing exotic. Just the things I trust.
        </motion.h2>

        <div className="mt-16 grid gap-14 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                {group.category}
              </p>

              <ul className="mt-4 space-y-2">
                {group.tools.map((tool) => (
                  <li
                    key={tool}
                    className="font-serif text-xl text-[var(--foreground)]"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}