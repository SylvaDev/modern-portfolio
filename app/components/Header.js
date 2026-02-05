"use client";

import Link from "next/link";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#about", label: "About me" },
  { href: "#contact", label: "Contact" },
];

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 border-b border-slate-800 bg-slate-950/50 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2" onClick={scrollToTop}>
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/10 text-sm font-semibold text-emerald-400">
            IS
          </span>
          <span className="text-sm font-semibold tracking-[0.18em] uppercase text-slate-300">
            Irving Sylva (SylvaDev)
          </span>
        </Link>

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
  );
}

