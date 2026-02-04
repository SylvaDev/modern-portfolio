import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="section-fade-in mt-32 py-12 md:mt-48 md:py-16 lg:mt-56 lg:py-20"
    >
      <div className="card-elevated rounded-3xl border border-emerald-600/40 bg-gradient-to-r from-emerald-500/10 via-slate-900 to-slate-900 p-8 md:p-12 lg:p-16">
        <div className="grid gap-8 md:grid-cols-[3fr,2fr] md:items-center">
          <div>
            <p className="text-2xl font-semibold uppercase tracking-[0.4em] text-emerald-400">
              Let&apos;s build
            </p>
            <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
              Have a project in mind?
            </h2>
            <p className="mt-2 text-base text-slate-200">
              Tell me what you&apos;re trying to build — a site, or an app — and
              I&apos;ll reply with options, timelines, and what I recommend
              technically.
            </p>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}

