import Container from "@/components/layout/Container";

export const metadata = {
  title: "Now — Bagmita Pokhrel",
  description: "What I'm actually working on right now.",
};

export default function Now() {
  return (
    <section className="py-32">
      <Container>
        <div className="max-w-2xl">
          <p className="font-hand text-2xl text-[var(--accent)]">
            right now
          </p>

          <h1 className="mt-3 font-serif text-4xl leading-snug text-[var(--foreground)] sm:text-5xl">
            What I'm actually doing these days.
          </h1>

          <p className="mt-6 font-sans text-sm text-[var(--muted)]">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long" })}
          </p>

          <div className="mt-10 space-y-8 font-sans text-lg leading-8 text-[var(--muted)]">
            <p>
              This is a page I'll keep updating, so if you're reading this
              later, some of it might be out of date. That's fine — it's
              meant to be honest about right now, not a permanent record.
            </p>

            <div>
              <h2 className="font-serif text-2xl text-[var(--foreground)]">
                Right now
              </h2>
              <p className="mt-3">
                I'm preparing to apply for internships — sharpening my
                projects, cleaning up my GitHub, and being honest with
                myself about what I actually know versus what I've just
                copied once and half-understood.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-[var(--foreground)]">
                Not right now
              </h2>
              <p className="mt-3">
                I'm not chasing every new framework that shows up on
                Twitter. I'd rather actually understand the tools I already
                use than collect a longer list of ones I've only tried
                once.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}