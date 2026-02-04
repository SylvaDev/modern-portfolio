import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="section-fade-in grid gap-10 md:grid-cols-[3fr,2fr] md:items-center">
      <div>
        <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
          Web apps that work hard
          <br />
          <span className="text-emerald-400">User experiences that feel alive.</span>
        </h1>
        <p className="mt-6 max-w-xl text-base text-slate-300 md:mt-8 md:text-lg">
          I&apos;m Irving (aka <span className="font-medium">SylvaDev</span>), a
          full-stack web developer. I build fast, modern websites and web
          applications for communities, creators, and businesses that want more
          than just a template.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4 md:mt-10 lg:mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
          >
            Let&apos;s build something
            <span aria-hidden>↗</span>
          </a>
          <a
            href="#portfolio"
            className="text-sm font-semibold text-slate-300 underline-offset-4 hover:text-emerald-400 hover:underline"
          >
            View selected work
          </a>
        </div>

        <p className="mt-8 text-xs font-medium uppercase tracking-[0.18em] text-slate-400 md:mt-10 lg:mt-12">
          Custom-built · Speed-optimized · Responsive
        </p>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute -inset-10 -z-10 rounded-[2rem] bg-emerald-500/10 blur-3xl" />
        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-2xl md:p-8 lg:p-10">
          <div className="mb-4 flex items-center justify-between text-sm text-slate-400">
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Available for work
            </span>
            <span>Remote · PST</span>
          </div>
          <div className="space-y-3 text-base">
            <p className="text-slate-200">
              <span className="font-semibold text-emerald-400">What I do:</span>{" "}
              Web apps, landing pages, you name it — from first idea to
              production-ready.
            </p>
            <p className="text-slate-300">
              You bring the problem or concept. I&apos;ll handle the stack,
              structure, and smooth user experience.
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-slate-300">
            {["Next.js", "Tailwind", "Node.js", "React", "Express", "MongoDB"].map(
              (chip) => (
                <span key={chip} className="rounded-full bg-slate-800 px-3 py-1">
                  {chip}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

