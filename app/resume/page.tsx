"use client";

import Container from "@/components/layout/Container";

export default function Resume() {
  return (
    <section className="py-32 print:py-8">
      <Container>
        <div className="max-w-3xl">
          <div className="flex items-start justify-between gap-6 print:hidden">
            <div>
              <p className="font-hand text-2xl text-[var(--accent)]">resume</p>
              <h1 className="mt-3 font-serif text-4xl leading-snug text-[var(--foreground)] sm:text-5xl">Bagmita Pokhrel</h1>
            </div>
            <button onClick={() => window.print()} className="mt-4 whitespace-nowrap rounded-full border border-[var(--accent)]/30 px-5 py-2.5 font-sans text-sm text-[var(--foreground)] transition-colors hover:border-[var(--accent)]">
              Print / Save as PDF
            </button>
          </div>

          <div className="mt-4 hidden print:block">
            <h1 className="font-serif text-3xl text-[var(--foreground)]">Bagmita Pokhrel</h1>
            <p className="font-sans text-sm text-[var(--muted)]">Full Stack Developer</p>
            <p className="mt-1 font-sans text-sm text-[var(--muted)]">
              bagmitapokhrel@gmail.com · github.com/bagmitapokhrel · linkedin.com/in/bagmitapokhrel
            </p>
          </div>

          <div className="mt-12 space-y-12 print:mt-6 print:space-y-6">
            <div>
              <h2 className="font-serif text-2xl text-[var(--foreground)]">Profile</h2>
              <p className="mt-3 font-sans text-lg leading-8 text-[var(--muted)]">
                Full stack developer with a focus on building functional,
                well-structured web applications. Comfortable across the
                stack, from database design to interface implementation,
                with a particular interest in clean architecture and
                practical problem-solving over unnecessary complexity.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-[var(--foreground)]">Education</h2>
              <div className="mt-4 space-y-1">
                <p className="font-sans text-lg text-[var(--foreground)]">
                  Bachelor in Information Management (BIM) — Ambikeshwari Campus
                </p>
                <p className="font-sans text-sm text-[var(--muted)]">
                  2022 – 2027 · Currently in 8th semester
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-[var(--foreground)]">Technical skills</h2>
              <div className="mt-4 space-y-3 font-sans text-lg text-[var(--muted)]">
                <p><span className="text-[var(--foreground)]">Frontend:</span> React, Next.js, TypeScript, Tailwind CSS</p>
                <p><span className="text-[var(--foreground)]">Backend:</span> Node.js, Express, Python, Django</p>
                <p><span className="text-[var(--foreground)]">Databases:</span> MongoDB, MySQL, SQLite</p>
                <p><span className="text-[var(--foreground)]">Other:</span> Git, REST APIs, payment gateway integration (eSewa)</p>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-[var(--foreground)]">Projects</h2>
              <div className="mt-4 space-y-6">
                <div>
                  <p className="font-serif text-xl text-[var(--foreground)]">GymCart</p>
                  <p className="mt-1 font-sans text-base leading-7 text-[var(--muted)]">
                    An ecommerce platform for fitness equipment, including
                    cart management, authentication, and payment processing.
                  </p>
                  <p className="mt-2 font-sans text-sm tracking-wide text-[var(--accent)]">
                    Next.js · Node.js · Express · MySQL
                  </p>
                </div>
                <div>
                  <p className="font-serif text-xl text-[var(--foreground)]">AI Study Assistant</p>
                  <p className="mt-1 font-sans text-base leading-7 text-[var(--muted)]">
                    A study tool that summarizes notes and generates quizzes
                    to help students prepare more efficiently.
                  </p>
                  <p className="mt-2 font-sans text-sm tracking-wide text-[var(--accent)]">
                    Next.js · OpenAI · Tailwind CSS
                  </p>
                </div>
                <div>
                  <p className="font-serif text-xl text-[var(--foreground)]">Ecommerce System — Academic Project</p>
                  <p className="mt-1 font-sans text-base leading-7 text-[var(--muted)]">
                    A full-featured ecommerce application built independently
                    as a semester project, with integrated eSewa payment
                    processing.
                  </p>
                  <p className="mt-2 font-sans text-sm tracking-wide text-[var(--accent)]">
                    Python · Django · SQLite
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-[var(--foreground)]">Approach</h2>
              <p className="mt-3 font-sans text-lg leading-8 text-[var(--muted)]">
                I'm early in my career, and I don't present that as more than
                it is. What I bring is consistency: I follow through on what
                I start, I care about the quality of the work rather than
                just finishing it, and I'm direct about what I know and
                what I'm still learning.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}