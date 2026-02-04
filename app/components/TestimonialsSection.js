const testimonials = [
  {
    quote:
      "Irving took our rough idea and turned it into a clean, fast site. Communication was clear and he handled changes without any drama. He was able to build our website in 2 days and we could not be happier.",
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

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-fade-in mt-0">
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
            className="card-elevated flex h-full flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
          >
            <p className="text-base text-slate-200">&ldquo;{item.quote}&rdquo;</p>
            <figcaption className="mt-4 text-xs text-slate-400">
              <div className="font-semibold text-slate-100">{item.name}</div>
              <div>{item.role}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

