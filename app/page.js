// app/page.js

export const metadata = {
  title: "Irving (Bugzee) – Web Developer & Game Dev",
  description:
    "Portfolio of Irving (Bugzee), a full-stack web developer and indie game creator building fast, modern websites and Unreal Engine projects.",
};

const navLinks = [
  { href: "#portfolio", label: "Portfolio" },
  { href: "#about", label: "About me" },
  { href: "#contact", label: "Contact" },
];

const services = [
  {
    title: "Web Apps & Dashboards",
    description:
      "Custom-built tools, portals, and admin dashboards that make it easy to run your business and track what matters.",
    bulletPoints: [
      "Role-based auth & logins",
      "API integrations & automation",
      "Clean, responsive layouts",
    ],
  },
  {
    title: "Business Sites & Landing Pages",
    description:
      "Fast, modern marketing sites that look sharp on every device and are easy to maintain and extend.",
    bulletPoints: [
      "Conversion-focused layout",
      "SEO-ready structure",
      "Deployed to Vercel or your host",
    ],
  },
  {
    title: "Game Prototypes & Systems",
    description:
      "Unreal Engine prototypes and gameplay systems for content creators and indie teams.",
    bulletPoints: [
      "UE5 Blueprints systems",
      "Multiplayer-ready logic",
      "Horror & stylized projects",
    ],
  },
];

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
  "Unreal Engine 5",
];

const projects = [
  {
    tag: "Community Platform",
    title: "Tennessee RP – Community Website",
    description:
      "Landing page and portal for a roleplay community with forum integration and Discord onboarding.",
    stack: ["Next.js", "React", "Tailwind", "Vercel"],
    link: "https://tnrp.vercel.app",
    highlight:
      "Gave the community a modern, fast home base and improved the onboarding flow.",
  },
  {
    tag: "Studio Brand Site",
    title: "Exovara Labs – Game Studio",
    description:
      "Brand site for my indie game studio, featuring current projects, lore, and ways to work together.",
    stack: ["Next.js", "Tailwind", "Vercel"],
    link: "https://exovaralabs.com",
    highlight:
      "Unified branding for my game projects and development services under one roof.",
  },
  {
    tag: "Horror Prototype",
    title: "Hauntscape – Micro-Extraction Horror",
    description:
      "Unreal Engine horror prototype focused on tense extraction-style gameplay and replayable runs.",
    stack: ["Unreal Engine 5", "Blueprints"],
    link: "#",
    highlight:
      "Showcases my ability to design systems, atmosphere, and gameplay loops in UE5.",
  },
];

const testimonials = [
  {
    quote:
      "Irving took our rough idea and turned it into a clean, fast site. Communication was clear and he handled changes without any drama.",
    name: "Community Owner",
    role: "Tennessee RP",
  },
  {
    quote:
      "Super easy to work with. He explained the tech in plain English and made sure the site was simple for us to manage.",
    name: "Studio Partner",
    role: "Exovara Labs Collaborator",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Nav */}
      <header className="sticky top-0 z-30 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/10 text-sm font-semibold text-emerald-400">
              BZ
            </span>
            <span className="text-sm font-semibold tracking-[0.18em] uppercase text-slate-300">
              BugzeeDev
            </span>
          </a>

          <nav className="hidden gap-6 text-sm font-medium text-slate-300 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-emerald-400"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400 md:inline-flex"
          >
            Work with me
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-20 pt-10 md:pt-16">
        {/* Hero */}
        <section className="grid gap-10 md:grid-cols-[3fr,2fr] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-400">
              Welcome
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
              Web apps that work hard.
              <br />
              <span className="text-emerald-400">
                Game worlds that feel alive.
              </span>
            </h1>
            <p className="mt-4 max-w-xl text-sm text-slate-300 md:text-base">
              I&apos;m Irving (aka <span className="font-medium">Bugzee</span>),
              a full-stack web developer and indie game creator. I build fast,
              modern websites and Unreal Engine projects for communities,
              creators, and businesses that want more than just a template.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
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

            <p className="mt-6 text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
              Custom-built · Speed-optimized · Indie-friendly
            </p>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -inset-10 -z-10 rounded-[2rem] bg-emerald-500/10 blur-3xl" />
            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 shadow-2xl">
              <div className="mb-4 flex items-center justify-between text-xs text-slate-400">
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Available for work
                </span>
                <span>Remote · CST</span>
              </div>
              <div className="space-y-3 text-sm">
                <p className="text-slate-200">
                  <span className="font-semibold text-emerald-400">
                    What I do:
                  </span>{" "}
                  Web apps, landing pages, and Unreal Engine prototypes — from
                  first idea to production-ready.
                </p>
                <p className="text-slate-300">
                  You bring the problem or concept. I&apos;ll handle the stack,
                  structure, and smooth user experience.
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-slate-300">
                {["Next.js", "Tailwind", "Node.js", "Unreal Engine 5"].map(
                  (chip) => (
                    <span
                      key={chip}
                      className="rounded-full bg-slate-800 px-3 py-1"
                    >
                      {chip}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Mini Feature / Promise */}
        <section className="mt-16 rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-400">
                We got your back
              </h2>
              <p className="mt-3 text-sm text-slate-300">
                No black-box magic. You get clean, documented builds that are
                easy to grow, hand off, or maintain yourself.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-100">
                Custom-built. Future-proof.
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Every project is tailored to your goals — not just plugged into
                a generic theme and shipped.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-100">
                Performance & clarity.
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Fast loads, clear structure, and a UX that actually respects
                your visitors’ time.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="mt-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-400">
                Services
              </p>
              <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
                What I build
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-300">
                From small business sites to multiplayer game prototypes, I
                focus on durable builds that are easy to extend as you grow.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
              >
                <div>
                  <h3 className="text-base font-semibold text-slate-50">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">
                    {service.description}
                  </p>
                </div>
                <ul className="mt-4 space-y-1.5 text-xs text-slate-300">
                  {service.bulletPoints.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section id="stack" className="mt-16">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-400">
            Tech stack
          </p>
          <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
            Tools I use
          </h2>
          <p className="mt-2 max-w-xl text-sm text-slate-300">
            I lean on proven tools that keep your project simple to maintain,
            but powerful enough to scale.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {techStack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs text-slate-200"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* Projects / Portfolio */}
        <section id="portfolio" className="mt-16">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-400">
            Projects
          </p>
          <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
            Selected work
          </h2>
          <p className="mt-2 max-w-xl text-sm text-slate-300">
            A few recent projects that show how I think about structure,
            usability, and long-term maintainability.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
              >
                <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-400">
                  {project.tag}
                </div>
                <h3 className="mt-2 text-lg font-semibold text-slate-50">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  {project.description}
                </p>
                <p className="mt-3 text-xs text-slate-400">
                  {project.highlight}
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-slate-300">
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
              </article>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="mt-16">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-400">
            Testimonial
          </p>
          <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
            What people say
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <figure
                key={item.name}
                className="flex h-full flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
              >
                <p className="text-sm text-slate-200">&ldquo;{item.quote}&rdquo;</p>
                <figcaption className="mt-4 text-xs text-slate-400">
                  <div className="font-semibold text-slate-100">
                    {item.name}
                  </div>
                  <div>{item.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="mt-16 grid gap-10 md:grid-cols-[2fr,3fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-400">
              My bio
            </p>
            <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
              About me
            </h2>
            <h3 className="mt-3 text-sm font-semibold text-slate-200">
              Hey, I&apos;m Irving – but most people online know me as
              Bugzee.
            </h3>
            <p className="mt-3 text-sm text-slate-300">
              I&apos;m a full-stack web developer and indie game creator. I
              build sites, dashboards, and tools with React/Next.js and also
              create games and prototypes in Unreal Engine 5.
            </p>
            <p className="mt-3 text-sm text-slate-300">
              My work tends to sit where design, code, and systems thinking
              overlap. Whether it&apos;s a community website, a small SaaS idea,
              or a horror game prototype, I focus on making it both clean under
              the hood and fun to actually use.
            </p>
            <p className="mt-3 text-sm text-slate-300">
              Outside of client work, I run{" "}
              <span className="font-medium">Exovara Labs</span>, my independent
              game studio, and teach friends how to ship their own projects.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <h3 className="text-sm font-semibold text-slate-100">
              What it&apos;s like to work with me
            </h3>
            <ul className="mt-3 space-y-2.5 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  Clear communication, no jargon — I translate the technical
                  side so you can make good decisions.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  I document what I build so you&apos;re not locked into a
                  mystery codebase later.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  Performance and UX matter — fast sites and smooth flows are
                  part of the deliverable, not add-ons.
                </span>
              </li>
            </ul>

            <div className="mt-5 text-sm text-slate-300">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Email
              </div>
              <a
                href="mailto:hello@yourdomain.com"
                className="mt-1 inline-flex text-sm font-medium text-emerald-400 underline-offset-4 hover:underline"
              >
                hello@yourdomain.com
              </a>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-16">
          <div className="rounded-3xl border border-emerald-600/40 bg-gradient-to-r from-emerald-500/10 via-slate-900 to-slate-900 p-6 md:p-8">
            <div className="grid gap-8 md:grid-cols-[3fr,2fr] md:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-400">
                  Let&apos;s build
                </p>
                <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
                  Have a project in mind?
                </h2>
                <p className="mt-2 text-sm text-slate-200">
                  Tell me what you&apos;re trying to build — a site, an app, or
                  a game prototype — and I&apos;ll reply with options, timelines,
                  and what I recommend technically.
                </p>
              </div>

              <form className="space-y-3 text-sm">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium text-slate-300"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 outline-none ring-emerald-500/40 placeholder:text-slate-500 focus:ring"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-slate-300"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 outline-none ring-emerald-500/40 placeholder:text-slate-500 focus:ring"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium text-slate-300"
                  >
                    Project details
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 outline-none ring-emerald-500/40 placeholder:text-slate-500 focus:ring"
                    placeholder="Tell me about your idea, timeline, and budget range."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
                >
                  Send message
                </button>
                <p className="text-[11px] text-slate-400">
                  This form is static in this example. Hook it up to your
                  backend, Formspree, Web3Forms, or similar to start receiving
                  messages.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-10 border-t border-slate-800 pt-6 text-xs text-slate-500">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p>© {new Date().getFullYear()} Irving / BugzeeDev. All rights reserved.</p>
            <div className="flex gap-4">
              <a
                href="https://github.com/bugzeedev"
                target="_blank"
                rel="noreferrer"
                className="hover:text-emerald-400"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-emerald-400"
              >
                LinkedIn
              </a>
              <a
                href="https://exovaralabs.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-emerald-400"
              >
                Exovara Labs
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
