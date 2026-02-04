const techStack = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "Vercel",
  "REST APIs",
  "Git & GitHub",
  "Three.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "SQLite",
  "Docker",
  "AWS",
];

export default function TechStackSection() {
  return (
    <section id="stack" className="section-fade-in mt-2">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-400">
        Tech stack
      </p>
      <h2 className="mt-3 text-2xl font-semibold md:text-3xl lg:text-4xl">
        Tools I use
      </h2>
      <p className="mt-2 max-w-xl text-base text-slate-300 md:text-lg">
        I lean on proven tools that keep your project simple to maintain, but
        powerful enough to scale.
      </p>

      <div className="mt-8 flex flex-wrap gap-2 md:mt-10 lg:mt-12">
        {techStack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-sm text-slate-200"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

