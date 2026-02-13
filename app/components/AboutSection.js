import Link from "next/link";
import ResumeButtons from "./ResumeButtons";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="section-fade-in mt-20 grid gap-10 py-12 md:mt-32 md:grid-cols-[2fr,3fr] md:py-16 lg:mt-40 lg:gap-16 lg:py-20"
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-400">
          My bio
        </p>
        <h2 className="mt-3 text-2xl font-semibold md:text-3xl lg:text-4xl">
          About me
        </h2>
        <h3 className="mt-3 text-base font-semibold text-slate-200">
          Hey, I&apos;m Irving – born in 1991 in California, USA.
        </h3>
        <p className="mt-3 text-base text-slate-300">
          I&apos;m a full-stack web developer and indie game creator. I build
          sites, dashboards, and tools with React/Next.js, Three.js, Node.js,
          and more.
        </p>
        <p className="mt-3 text-base text-slate-300">
          My work tends to sit where design, code, and systems thinking overlap.
          Whether it&apos;s a community website, a small SaaS idea, or an
          e-commerce store, I focus on making it both clean under the hood and
          fun to actually use.
        </p>
        <p className="mt-3 text-base text-slate-300">
          Outside of client work, I run{" "}
          <span className="font-medium">Exovara Labs</span>, my independent game
          studio, and teach friends how to ship their own projects.
        </p>
        {/* <ResumeButtons /> */}
      </div>

      <div className="card-elevated rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
        <h3 className="text-base font-semibold text-slate-100">
          What it&apos;s like to work with me
        </h3>
        <ul className="mt-3 space-y-2.5 text-base text-slate-300">
          <li className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>
              Clear communication, no jargon — I translate the technical side so
              you can make good decisions.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>
              I document what I build so you&apos;re not locked into a mystery
              codebase later.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>
              Performance and UX matter — fast sites and smooth flows are part
              of the deliverable, not add-ons.
            </span>
          </li>
        </ul>

        <div className="mt-5 text-base text-slate-300">
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
        <ResumeButtons />
      </div>
    </section>
  );
}

