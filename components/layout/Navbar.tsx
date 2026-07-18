export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/40 backdrop-blur-2xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        <h1 className="text-xl font-bold tracking-[0.4em]">
          AETHER.
        </h1>

        <nav className="hidden gap-12 text-sm md:flex">

          <a href="#about" className="hover:text-cyan-400 transition">
            Identity
          </a>

          <a href="#projects" className="hover:text-cyan-400 transition">
            Work
          </a>

          <a href="#skills" className="hover:text-cyan-400 transition">
            Stack
          </a>

          <a href="#contact" className="hover:text-cyan-400 transition">
            Connect
          </a>

        </nav>

      </div>
    </header>
  );
}