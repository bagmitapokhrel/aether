import Container from "@/components/layout/Container";

export const metadata = {
  title: "Uses — Bagmita Pokhrel",
  description: "The tools I actually use, day to day.",
};

export default function Uses() {
  return (
    <section className="py-32">
      <Container>
        <div className="max-w-2xl">
          <p className="font-hand text-2xl text-[var(--accent)]">
            what's on my desk
          </p>

          <h1 className="mt-3 font-serif text-4xl leading-snug text-[var(--foreground)] sm:text-5xl">
            The tools I actually use.
          </h1>

          <p className="mt-6 font-sans text-lg leading-8 text-[var(--muted)]">
            Not a wishlist, not sponsored, not aspirational — just what's
            genuinely open on my screen most days.
          </p>

          <div className="mt-12 space-y-10">
            <div>
              <h2 className="font-serif text-2xl text-[var(--foreground)]">
                Editor
              </h2>
              <p className="mt-3 font-sans text-lg leading-8 text-[var(--muted)]">
                VS Code. I've tried a couple of alternatives, but I always
                end up back here.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-[var(--foreground)]">
                What I build with
              </h2>
              <p className="mt-3 font-sans text-lg leading-8 text-[var(--muted)]">
                Next.js and React for most things. Node.js and Express when
                I need a backend. Python and Django for the projects that
                called for it.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-[var(--foreground)]">
                Everything else
              </h2>
              <p className="mt-3 font-sans text-lg leading-8 text-[var(--muted)]">
                Nothing fancy — a browser with too many tabs open, and
                whatever's actually needed for the thing I'm stuck on that
                day.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}