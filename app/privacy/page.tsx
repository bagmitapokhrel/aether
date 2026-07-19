import Container from "@/components/layout/Container";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — Bagmita Pokhrel",
  description: "A plain explanation of what this site collects and why.",
};

export default function PrivacyPolicy() {
  return (
    <section className="py-32">
      <Container>
        <div className="max-w-2xl">
          <p className="font-hand text-2xl text-[var(--accent)]">
            the fine print
          </p>

          <h1 className="mt-3 font-serif text-4xl leading-snug text-[var(--foreground)] sm:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-6 font-sans text-sm text-[var(--muted)]">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <div className="mt-10 space-y-8 font-sans text-lg leading-8 text-[var(--muted)]">
            <p>
              This is a personal portfolio, not a business collecting your
              data for profit. Here's the honest, plain version of what
              happens when you visit.
            </p>

            <div>
              <h2 className="font-serif text-2xl text-[var(--foreground)]">
                What I collect
              </h2>
              <p className="mt-3">
                I use basic analytics (like Google Analytics and/or Vercel
                Analytics) to see general, anonymous information — things
                like how many people visited, which pages they looked at,
                what country they're roughly in, and what device or browser
                they used. This helps me understand if the site's actually
                being seen and used, nothing more.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-[var(--foreground)]">
                What I don't collect
              </h2>
              <p className="mt-3">
                I don't have a login system, a contact form that stores your
                message, or any tracking that identifies you personally. If
                you email me or message me on GitHub/LinkedIn, that
                conversation happens on those platforms directly, under
                their own privacy policies, not mine.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-[var(--foreground)]">
                Cookies
              </h2>
              <p className="mt-3">
                The analytics tools above may use small cookies or similar
                technology to avoid counting the same visitor twice. You can
                block or clear these anytime through your browser settings
                without breaking anything on this site.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-[var(--foreground)]">
                Third parties
              </h2>
              <p className="mt-3">
                This site is hosted on Vercel, which may log standard
                technical data (like IP address and request logs) as part of
                normal hosting infrastructure — the same way any website
                host operates. I don't have direct access to that raw data
                beyond what analytics dashboards summarize.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-[var(--foreground)]">
                Questions
              </h2>
              <p className="mt-3">
                If anything here is unclear, or you'd like something
                explained further, just reach out —{" "}
                <Link
                  href="/#contact"
                  className="text-[var(--accent)] underline underline-offset-4"
                >
                  I'm easy to find
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}