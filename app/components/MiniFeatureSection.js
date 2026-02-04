export default function MiniFeatureSection() {
  return (
    <section className="section-fade-in mt-16 rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400">
            I&apos;ve got your back
          </h2>
          <p className="mt-3 text-base text-slate-300">
            No black-box magic. You get clean, documented builds that are easy
            to grow, hand off, or maintain yourself.
          </p>
        </div>
        <div>
          <h3 className="text-base font-semibold text-slate-100">
            Custom-built. Future-proof.
          </h3>
          <p className="mt-2 text-base text-slate-300">
            Every project is tailored to your goals — not just plugged into a
            generic theme and shipped.
          </p>
        </div>
        <div>
          <h3 className="text-base font-semibold text-slate-100">
            Performance & clarity.
          </h3>
          <p className="mt-2 text-base text-slate-300">
            Fast loads, clear structure, and a UX that actually respects your
            visitors&apos; time.
          </p>
        </div>
      </div>
    </section>
  );
}

