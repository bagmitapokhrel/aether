export default function About() {
  return (
    <section
      id="about"
      className="mx-auto flex min-h-screen max-w-7xl items-center px-8"
    >
      <div className="grid gap-20 lg:grid-cols-2">

        <div>
          <p className="mb-5 uppercase tracking-[0.4em] text-cyan-400">
            Identity
          </p>

          <h2 className="text-6xl font-bold leading-tight">
            Building products,
            <br />
            not just websites.
          </h2>
        </div>

        <div className="space-y-8 text-lg leading-9 text-slate-400">

          <p>
            Hi, I'm <span className="text-white font-semibold">Bagmita Pokhrel</span>,
            a Full Stack Developer passionate about crafting modern,
            responsive and meaningful digital experiences.
          </p>

          <p>
            I enjoy transforming ideas into products that are beautiful,
            functional and built with attention to detail.
          </p>

          <p>
            Every project is an opportunity to learn,
            improve and create something memorable.
          </p>

        </div>

      </div>
    </section>
  );
}