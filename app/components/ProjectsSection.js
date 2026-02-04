import Image from "next/image";

const projects = [
  {
    tag: "Community Platform",
    title: "Skyline RP – Community Website",
    description:
      "Landing page and portal for a roleplay community with forum integration and Discord onboarding.",
    stack: ["Next.js", "React", "Tailwind", "Node.js", "Vercel", "MongoDB"],
    link: "https://www.skyline-rp.org",
    image: "/skyline-rp-preview.png",
    highlight:
      "Gave the community a modern, fast home base and improved the onboarding flow.",
  },
  {
    tag: "Studio Brand Site",
    title: "Exovara Labs – Game Studio",
    description:
      "Brand site for my indie game studio, featuring current projects, lore, and ways to work together.",
    stack: ["Express.js", "React", "Node.js", "Vercel"],
    link: "https://exovaralabs.com",
    image: "/exovara-labs-preview.png",
    highlight:
      "Unified branding for my game projects and development services under one roof.",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="portfolio"
      className="section-fade-in mt-16 py-12 md:mt-24 md:py-16 lg:mt-32 lg:py-20"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-400">
        Projects
      </p>
      <h2 className="mt-3 text-2xl font-semibold md:text-3xl lg:text-4xl">
        Selected work
      </h2>
      <p className="mt-2 max-w-xl text-base text-slate-300 md:text-lg">
        A few recent projects that show how I think about structure, usability,
        and long-term maintainability.
      </p>

      <div className="mt-10 grid gap-6 md:mt-12 md:grid-cols-2 lg:mt-16 lg:gap-8">
        {projects.map((project) => (
          <article
            key={project.title}
            className="card-elevated flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70"
          >
            {project.image && (
              <div className="relative h-44 w-full overflow-hidden border-b border-slate-800 bg-slate-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            )}
            <div className="flex flex-1 flex-col p-5">
              <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-400">
                {project.tag}
              </div>
              <h3 className="mt-2 text-xl font-semibold text-slate-50">
                {project.title}
              </h3>
              <p className="mt-2 text-base text-slate-300">
                {project.description}
              </p>
              <p className="mt-3 text-sm text-slate-400">{project.highlight}</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-300">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-slate-800 px-3 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.link && project.link !== "#" && (
                <div className="mt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-400 underline-offset-4 hover:underline"
                  >
                    Visit site <span aria-hidden>↗</span>
                  </a>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

