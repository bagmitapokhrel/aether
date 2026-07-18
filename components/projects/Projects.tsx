"use client";

import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "GymCart",
    description:
      "A modern e-commerce platform for fitness equipment with secure authentication, shopping cart, and payment integration.",
    tech: "Next.js • Node.js • Express • MySQL",
  },
  {
    number: "02",
    title: "AI Study Assistant",
    description:
      "An AI-powered learning companion that helps students summarize notes, generate quizzes, and improve productivity.",
    tech: "Next.js • OpenAI • Tailwind CSS",
  },
  {
    number: "03",
    title: "Realtime Collaboration",
    description:
      "A collaborative workspace with live editing, authentication, and real-time synchronization.",
    tech: "Next.js • Socket.io • MongoDB",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-8 py-32"
    >
      <p className="mb-4 uppercase tracking-[0.4em] text-cyan-400">
        Creations
      </p>

      <h2 className="mb-20 text-6xl font-bold">
        Selected Work
      </h2>

      <div className="space-y-8">

        {projects.map((project) => (
          <motion.div
            key={project.number}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="group rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
          >
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

              <div className="max-w-2xl">

                <p className="mb-3 text-cyan-400">
                  {project.number}
                </p>

                <h3 className="text-4xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-5 text-slate-400">
                  {project.description}
                </p>

                <p className="mt-6 text-sm uppercase tracking-wider text-slate-500">
                  {project.tech}
                </p>

              </div>

              <button className="rounded-full border border-cyan-400/20 px-6 py-3 transition hover:bg-cyan-500 hover:text-black">
                View Project →
              </button>

            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}