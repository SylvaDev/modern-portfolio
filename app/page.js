import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Irving (SylvaDev) – Web Developer",
  description:
    "Portfolio of Irving (SylvaDev), a full-stack web developer building fast, modern websites and web applications.",
};

const navLinks = [
  { href: "#services", label: "Services" },
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
  "Three.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "SQLite",
  "Docker",
  "AWS"
];

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

const testimonials = [
  {
    quote:
      "Irving took our rough idea and turned it into a clean, fast site. Communication was clear and he handled changes without any drama. Her was able to build our website in 2 days and we could not be happier.",
    name: "AllanOutWest - Community Owner",
    role: "Skyline RP",
  },
  {
    quote:
      "Super easy to work with. He explained the tech in plain English and made sure the site was simple for us to manage.",
    name: "Studio Partner",
    role: "Exovara Labs Collaborator",
  },
];

import ContactForm from "./components/ContactForm";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-30 border-b border-slate-800 bg-slate-950/50 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/10 text-sm font-semibold text-emerald-400">
              IS
            </span>
            <span className="text-sm font-semibold tracking-[0.18em] uppercase text-slate-300">
              Irving Sylva (SylvaDev)
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

      <main className="mx-auto max-w-6xl px-4 pb-20 pt-24 md:pt-28">
        {/* Hero */}
        <section className="grid gap-10 md:grid-cols-[3fr,2fr] md:items-center">
          <div>
            <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
              Web apps that work hard
              <br />
              <span className="text-emerald-400">
                User experiences that feel alive.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-sm text-slate-300 md:mt-8 md:text-base lg:text-lg">
              I&apos;m Irving (aka <span className="font-medium">SylvaDev</span>),
              a full-stack web developer. I build fast, modern websites 
              and web applications for communities, creators, and businesses that want more than just a template.
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
              <div className="mb-4 flex items-center justify-between text-xs text-slate-400">
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Available for work
                </span>
                <span>Remote · PST</span>
              </div>
              <div className="space-y-3 text-sm">
                <p className="text-slate-200">
                  <span className="font-semibold text-emerald-400">
                    What I do:
                  </span>{" "}
                  Web apps, landing pages, you name it — from
                  first idea to production-ready.
                </p>
                <p className="text-slate-300">
                  You bring the problem or concept. I&apos;ll handle the stack,
                  structure, and smooth user experience.
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-slate-300">
                {["Next.js", "Tailwind", "Node.js", "React", "Express", "MongoDB"].map(
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
                I&apos;ve got your back
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
                your visitors&apos; time.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="mt-20 py-12 md:mt-32 md:py-16 lg:mt-40 lg:py-20">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-400">
                Services
              </p>
              <h2 className="mt-3 text-2xl font-semibold md:text-3xl lg:text-4xl">
                What I build
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-300 md:text-base">
                From small business sites to multiplayer game prototypes, I
                focus on durable builds that are easy to extend as you grow.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:mt-12 md:grid-cols-3 lg:mt-16 lg:gap-8">
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
        <section id="stack" className="mt-2">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-400">
            Tech stack
          </p>
          <h2 className="mt-3 text-2xl font-semibold md:text-3xl lg:text-4xl">
            Tools I use
          </h2>
          <p className="mt-2 max-w-xl text-sm text-slate-300 md:text-base">
            I lean on proven tools that keep your project simple to maintain,
            but powerful enough to scale.
          </p>

          <div className="mt-8 flex flex-wrap gap-2 md:mt-10 lg:mt-12">
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
        <section id="portfolio" className="mt-20 py-12 md:mt-32 md:py-16 lg:mt-40 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-400">
            Projects
          </p>
          <h2 className="mt-3 text-2xl font-semibold md:text-3xl lg:text-4xl">
            Selected work
          </h2>
          <p className="mt-2 max-w-xl text-sm text-slate-300 md:text-base">
            A few recent projects that show how I think about structure,
            usability, and long-term maintainability.
          </p>

          <div className="mt-10 grid gap-6 md:mt-12 md:grid-cols-2 lg:mt-16 lg:gap-8">
            {projects.map((project) => (
              <article
                key={project.title}
                className="flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70"
              >
                {project.image && (
                  <div className="relative h-44 w-full overflow-hidden border-b border-slate-800 bg-slate-900">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition duration-500 hover:scale-[1.03]"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      priority={false}
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-5">
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
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="mt-0">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-400">
            Testimonial
          </p>
          <h2 className="mt-3 text-2xl font-semibold md:text-3xl lg:text-4xl">
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
        <section id="about" className="mt-20 grid gap-10 py-12 md:mt-32 md:grid-cols-[2fr,3fr] md:py-16 lg:mt-40 lg:gap-16 lg:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-400">
              My bio
            </p>
            <h2 className="mt-3 text-2xl font-semibold md:text-3xl lg:text-4xl">
              About me
            </h2>
            <h3 className="mt-3 text-sm font-semibold text-slate-200">
              Hey, I&apos;m Irving – born in 1991 in California, USA.
            </h3>
            <p className="mt-3 text-sm text-slate-300">
              I&apos;m a full-stack web developer and indie game creator. I
              build sites, dashboards, and tools with React/Next.js, Three.js, Node.js, and more.
            </p>
            <p className="mt-3 text-sm text-slate-300">
              My work tends to sit where design, code, and systems thinking
              overlap. Whether it&apos;s a community website, a small SaaS idea,
               or an e-commerce store, I focus on making it both clean under
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
              <Link
                href="/#contact"
                className="mt-1 inline-flex text-sm font-medium text-emerald-400 underline-offset-4 hover:underline"
              >
                Click here to Email the SylvaDev team
              </Link>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-32 py-12 md:mt-48 md:py-16 lg:mt-56 lg:py-20">
          <div className="rounded-3xl border border-emerald-600/40 bg-gradient-to-r from-emerald-500/10 via-slate-900 to-slate-900 p-8 md:p-12 lg:p-16">
            <div className="grid gap-8 md:grid-cols-[3fr,2fr] md:items-center">
              <div>
                <p className="text-2xl font-semibold uppercase tracking-[0.4em] text-emerald-400">
                  Let&apos;s build
                </p>
                <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
                  Have a project in mind?
                </h2>
                <p className="mt-2 text-sm text-slate-200">
                  Tell me what you&apos;re trying to build — a site, or an app — and I&apos;ll reply with options, timelines,
                  and what I recommend technically.
                </p>
              </div>

              <ContactForm />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-10 border-t border-slate-800 pt-6 text-xs text-slate-500">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p>© {new Date().getFullYear()} Irving / SylvaDev. All rights reserved.</p>
            <div className="flex gap-4">
              <a
                href="https://github.com/SylvaDev"
                target="_blank"
                rel="noreferrer"
                className="hover:text-emerald-400"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/irvingsylva"
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
