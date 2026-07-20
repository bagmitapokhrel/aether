import Link from "next/link";
import Container from "@/components/layout/Container";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center py-32">
      <Container>
        <div className="max-w-xl">
          <p className="font-hand text-2xl text-[var(--accent)]">
            well, this is awkward
          </p>

          <h1 className="mt-3 font-serif text-4xl leading-snug text-[var(--foreground)] sm:text-5xl">
            This page doesn't exist. Or maybe it did, once.
          </h1>

          <p className="mt-6 font-sans text-lg leading-8 text-[var(--muted)]">
            Either way, I don't have anything here. But there's plenty on
            the rest of the site — projects I've actually finished, and a
            few I'm still not totally happy with.
          </p>

          <Link
            href="/"
            className="mt-10 inline-flex items-center gap-2 font-sans text-sm text-[var(--accent)] underline underline-offset-4 hover:text-[var(--foreground)]"
          >
            Take me back home
          </Link>
        </div>
      </Container>
    </section>
  );
}