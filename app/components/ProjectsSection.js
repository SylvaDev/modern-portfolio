"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";

const projects = [
  {
    tag: "Community Platform",
    title: "Skyline RP – Community Website",
    description:
      "Full-Stack Web Application offering a Landing page, Forum, Community Applications, Admin dashboard, and Admin portal for a roleplay community with Discord integration.",
    stack: ["PostgreSQL", "Supabase", "React", "Tailwind", "Node.js", "Vercel"],
    link: "https://www.skyline-rp.org",
    image: "/skyline-rp-preview.png",
    highlight:
      "Gave the community a modern, fast home base and improved the onboarding flow.",
  },
  {
    tag: "Studio Brand Site",
    title: "Exovara Labs – Web Development Studio",
    description:
      "Brand site for Exovara Labs, a fullstack development studio and marketplace",
    stack: ["Vite", "Tailwind", "React", "Supabase", "Shadcn UI", "Typescript", "Stripe"],
    link: "https://www.exovaralabs.com",
    image: "/exovara-labs-preview.png",
    highlight:
      "Unified branding for my development studio and website marketplace and customizer.",
  },
  {
    tag: "Agency & Marketing Site",
    title: "Hidden Groves — Growth & Strategy",
    description:
      "Conversion-focused agency site for strategy and digital experiences—positioning, services, proof, and clear booking CTAs so visitors grasp the value fast.",
    stack: ["Next.js", "React", "Tailwind", "Vercel"],
    link: "https://hidden-groves.vercel.app/",
    image: "/hidden-groves-preview.jpg",
    highlight:
      "Structured funnel messaging, testimonial-led trust, and frictionless paths to a strategy call.",
  },
  {
    tag: "Local Services Website",
    title: "SJR Cleaning — Allentown, PA",
    description:
      "Residential cleaning brand site for the Lehigh Valley—recurring, deep, and move-in/out offerings with quote flow, gallery, reviews, and FAQ for busy homeowners.",
    stack: ["Next.js", "React", "Tailwind", "Vercel"],
    link: "https://sjrcleaning.vercel.app/",
    image: "/sjr-cleaning-preview.jpg",
    highlight:
      "Local-first copy, service tiers, and simple CTAs so visitors can request a quote and plan visits confidently.",
  },
  {
    tag: "Luxury Real Estate Brand Site",
    title: "Luxe Realty — Listings & Consultations",
    description:
      "Premium property marketing site with featured listings, market highlights, team profiles, and consultation CTAs for luxury buyers and sellers.",
    stack: ["React", "Vite", "Tailwind", "Vercel"],
    link: "https://luxe-realty-pi.vercel.app/",
    image: "/luxe-realty-preview.jpg",
    highlight:
      "Listing-forward layout with stats, property cards, and clear routes to browse inventory or talk to an agent.",
  },
];

function subscribeReducedMotion(onChange) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );
}

export default function ProjectsSection() {
  const scrollerRef = useRef(null);
  const activeIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const reducedMotion = usePrefersReducedMotion();

  const scrollBehavior = reducedMotion ? "auto" : "smooth";

  const updateActiveFromScroll = useCallback(() => {
    const root = scrollerRef.current;
    if (!root) return;
    const w = root.clientWidth;
    if (w <= 0) return;
    const i = Math.round(root.scrollLeft / w);
    const next = Math.min(Math.max(0, i), projects.length - 1);
    setActiveIndex(next);
    activeIndexRef.current = next;
  }, []);

  const scrollByDir = useCallback(
    (dir) => {
      const root = scrollerRef.current;
      if (!root) return;
      const w = root.clientWidth;
      root.scrollBy({ left: dir * w, behavior: scrollBehavior });
    },
    [scrollBehavior],
  );

  const goTo = useCallback(
    (i) => {
      const root = scrollerRef.current;
      if (!root) return;
      const w = root.clientWidth;
      root.scrollTo({ left: i * w, behavior: scrollBehavior });
    },
    [scrollBehavior],
  );

  useEffect(() => {
    const root = scrollerRef.current;
    if (!root) return;
    root.addEventListener("scroll", updateActiveFromScroll, { passive: true });
    window.addEventListener("resize", updateActiveFromScroll);
    const ro = new ResizeObserver(() => {
      const w = root.clientWidth;
      if (w <= 0) return;
      const i = Math.min(
        Math.max(0, activeIndexRef.current),
        projects.length - 1,
      );
      root.scrollTo({ left: i * w, behavior: "auto" });
      updateActiveFromScroll();
    });
    ro.observe(root);
    updateActiveFromScroll();
    return () => {
      root.removeEventListener("scroll", updateActiveFromScroll);
      window.removeEventListener("resize", updateActiveFromScroll);
      ro.disconnect();
    };
  }, [updateActiveFromScroll, activeIndex]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        scrollByDir(-1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        scrollByDir(1);
      }
    };
    const root = scrollerRef.current;
    root?.addEventListener("keydown", onKey);
    return () => root?.removeEventListener("keydown", onKey);
  }, [scrollByDir]);

  const canPrev = activeIndex > 0;
  const canNext = activeIndex < projects.length - 1;

  return (
    <section
      id="portfolio"
      className="section-fade-in mt-16 w-full min-w-0 py-12 md:mt-24 md:py-16 lg:mt-32 lg:py-20"
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

      <div
        className="relative mt-10 w-full min-w-0 md:mt-12 lg:mt-16"
        role="region"
        aria-roledescription="carousel"
        aria-label="Selected project work"
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-0 flex w-6 items-center justify-start bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent sm:w-8 md:w-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-0 flex w-6 items-center justify-end bg-gradient-to-l from-slate-950 via-slate-950/70 to-transparent sm:w-8 md:w-10" />

        <div className="relative z-10 flex min-w-0 items-stretch gap-2 sm:gap-3">
          <button
            type="button"
            aria-label="Previous project"
            disabled={!canPrev}
            onClick={() => scrollByDir(-1)}
            className="z-20 hidden h-10 w-10 shrink-0 items-center justify-center self-center rounded-full border border-slate-700 bg-slate-900/90 text-slate-200 shadow-lg backdrop-blur transition hover:border-emerald-500/50 hover:text-emerald-400 disabled:pointer-events-none disabled:opacity-30 sm:flex"
          >
            <span aria-hidden className="text-lg leading-none">
              ‹
            </span>
          </button>

          <div
            ref={scrollerRef}
            tabIndex={0}
            className="flex min-h-0 min-w-0 flex-1 snap-x snap-mandatory overflow-x-auto overscroll-x-contain pb-1 pt-0.5 [-ms-overflow-style:none] [scrollbar-width:none] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 [&::-webkit-scrollbar]:hidden"
          >
            {projects.map((project) => (
              <article
                key={project.title}
                data-carousel-slide
                className="card-elevated box-border flex min-h-0 min-w-0 w-full max-w-full shrink-0 snap-start snap-always flex-[0_0_100%] flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70"
              >
                {project.image && (
                  <div className="relative h-40 w-full shrink-0 overflow-hidden border-b border-slate-800 bg-slate-900 sm:h-44">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition duration-500 hover:scale-[1.03]"
                      sizes="(min-width: 1280px) 72rem, (min-width: 1024px) calc(100vw - 8rem), calc(100vw - 2rem)"
                    />
                  </div>
                )}
                <div className="flex min-h-0 min-w-0 flex-1 flex-col p-4 sm:p-5">
                  <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-400">
                    {project.tag}
                  </div>
                  <h3 className="mt-2 text-lg font-semibold text-slate-50 sm:text-xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 break-words text-sm text-slate-300 sm:text-base">
                    {project.description}
                  </p>
                  <p className="mt-3 break-words text-sm text-slate-400">{project.highlight}</p>
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

          <button
            type="button"
            aria-label="Next project"
            disabled={!canNext}
            onClick={() => scrollByDir(1)}
            className="z-20 hidden h-10 w-10 shrink-0 items-center justify-center self-center rounded-full border border-slate-700 bg-slate-900/90 text-slate-200 shadow-lg backdrop-blur transition hover:border-emerald-500/50 hover:text-emerald-400 disabled:pointer-events-none disabled:opacity-30 sm:flex"
          >
            <span aria-hidden className="text-lg leading-none">
              ›
            </span>
          </button>
        </div>

        <div className="mt-6 flex flex-col items-center gap-4 sm:mt-8 sm:flex-row sm:justify-center">
          <div
            className="flex flex-wrap items-center justify-center gap-2"
            role="tablist"
            aria-label="Choose project"
          >
            {projects.map((project, i) => (
              <button
                key={project.title}
                type="button"
                role="tab"
                aria-selected={i === activeIndex}
                aria-label={`Show project ${i + 1}: ${project.title}`}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
                  i === activeIndex
                    ? "w-8 bg-emerald-400"
                    : "w-2 bg-slate-600 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2 sm:hidden">
            <button
              type="button"
              aria-label="Previous project"
              disabled={!canPrev}
              onClick={() => scrollByDir(-1)}
              className="inline-flex h-10 min-w-[2.5rem] items-center justify-center rounded-full border border-slate-700 bg-slate-900/90 px-3 text-slate-200 transition hover:border-emerald-500/50 hover:text-emerald-400 disabled:opacity-30"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Next project"
              disabled={!canNext}
              onClick={() => scrollByDir(1)}
              className="inline-flex h-10 min-w-[2.5rem] items-center justify-center rounded-full border border-slate-700 bg-slate-900/90 px-3 text-slate-200 transition hover:border-emerald-500/50 hover:text-emerald-400 disabled:opacity-30"
            >
              ›
            </button>
          </div>
        </div>

        <p className="sr-only" aria-live="polite">
          Slide {activeIndex + 1} of {projects.length}: {projects[activeIndex]?.title}
        </p>
      </div>
    </section>
  );
}
