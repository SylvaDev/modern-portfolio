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

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="section-fade-in mt-20 py-12 md:mt-32 md:py-16 lg:mt-40 lg:py-20"
    >
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-400">
            Services
          </p>
          <h2 className="mt-3 text-2xl font-semibold md:text-3xl lg:text-4xl">
            What I build
          </h2>
          <p className="mt-2 max-w-xl text-base text-slate-300 md:text-lg">
            From small business sites to multiplayer game prototypes, I focus on
            durable builds that are easy to extend as you grow.
          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:mt-12 md:grid-cols-3 lg:mt-16 lg:gap-8">
        {services.map((service) => (
          <article
            key={service.title}
            className="card-elevated flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
          >
            <div>
              <h3 className="text-base font-semibold text-slate-50">
                {service.title}
              </h3>
              <p className="mt-2 text-base text-slate-300">
                {service.description}
              </p>
            </div>
            <ul className="mt-4 space-y-1.5 text-sm text-slate-300">
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
  );
}

