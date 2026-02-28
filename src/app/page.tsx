export default function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Section - full width */}
      <section className="relative left-1/2 right-0 -ml-[50vw] w-screen bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800 text-slate-50 animate-fade-in">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 md:grid-cols-2 md:px-6 md:py-10">
        <div className="space-y-4">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-300 ring-1 ring-white/20">
            Premium Solar EPC Partner
          </p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Go solar with a trusted partner and cut your energy bills.
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-slate-200">
            DR Green Energies designs, engineers, and commissions high-performance
            solar plants for residential, commercial, and industrial customers –
            with complete end-to-end project ownership.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/contact"
              className="rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-amber-400/40 transition hover:bg-amber-300"
            >
              Book a Free Consultation
            </a>
            <p className="text-xs text-slate-200">
              Avg. payback in 3–5 years with up to 80% bill savings.
            </p>
          </div>
        </div>
        <div className="space-y-6 rounded-2xl bg-slate-900/60 p-6 ring-1 ring-white/10">
          <div className="grid grid-cols-3 gap-4 text-center text-sm">
            <div className="rounded-xl bg-slate-800/80 p-4">
              <p className="text-xs text-slate-300">Installed Capacity</p>
              <p className="mt-1 text-xl font-semibold text-amber-300">
                25+ MW
              </p>
            </div>
            <div className="rounded-xl bg-slate-800/80 p-4">
              <p className="text-xs text-slate-300">Projects Delivered</p>
              <p className="mt-1 text-xl font-semibold text-amber-300">
                450+
              </p>
            </div>
            <div className="rounded-xl bg-slate-800/80 p-4">
              <p className="text-xs text-slate-300">Avg. Uptime</p>
              <p className="mt-1 text-xl font-semibold text-amber-300">
                99.5%
              </p>
            </div>
          </div>
          <div className="rounded-xl bg-slate-800/80 p-4 text-xs text-slate-200">
            <p className="font-semibold text-amber-200">
              Residential, Commercial & Industrial
            </p>
            <p className="mt-1">
              Rooftop, ground-mount and carport installations with remote
              monitoring, AMC and performance guarantees.
            </p>
          </div>
        </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section animate-slide-up animation-delay-100 opacity-0 [animation-fill-mode:forwards]">
        <div className="section-header flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-900 md:text-2xl">
              Solar solutions for every segment
            </h2>
            <p className="mt-0.5 text-sm text-slate-600">
              Tailored solar EPC services for homes, businesses and industries.
            </p>
          </div>
          <a
            href="/services"
            className="text-sm font-semibold text-amber-500 hover:text-amber-600"
          >
            View all services →
          </a>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Residential Solar",
              href: "/services/residential",
              desc: "Rooftop systems for independent houses, villas and gated communities.",
            },
            {
              title: "Commercial Solar",
              href: "/services/commercial",
              desc: "Solar plants for schools, hospitals, offices and warehouses.",
            },
            {
              title: "Industrial Solar",
              href: "/services/industrial",
              desc: "High-capacity systems for factories and heavy energy consumers.",
            },
          ].map((service) => (
            <a
              key={service.href}
              href={service.href}
              className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-amber-400 hover:shadow-md"
            >
              <div>
                <h3 className="text-base font-semibold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{service.desc}</p>
              </div>
              <span className="mt-4 text-xs font-semibold text-amber-500 group-hover:text-amber-600">
                Learn more →
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section animate-slide-up animation-delay-200 opacity-0 [animation-fill-mode:forwards]">
        <div className="section-header">
          <h2 className="text-xl font-semibold text-slate-900 md:text-2xl">
            Why customers choose DR Green Energies
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <h3 className="text-sm font-semibold text-slate-900">
              End-to-end EPC ownership
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              From design and engineering to installation, commissioning and AMC
              – handled by a single expert team.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <h3 className="text-sm font-semibold text-slate-900">
              Tier-1 components & bankable designs
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              High-efficiency modules, inverters and structures designed for
              optimal generation and long-term reliability.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <h3 className="text-sm font-semibold text-slate-900">
              Transparent ROI & subsidy guidance
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Clear savings projections, payback calculations and support for
              government subsidies and financing.
            </p>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="section animate-slide-up animation-delay-200 opacity-0 [animation-fill-mode:forwards]">
        <div className="section-header flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-900 md:text-2xl">
              Simple, transparent project process
            </h2>
            <p className="mt-0.5 text-sm text-slate-600">
              A proven 5-step journey from first call to commissioning.
            </p>
          </div>
          <a
            href="/process"
            className="text-sm font-semibold text-amber-500 hover:text-amber-600"
          >
            View detailed process →
          </a>
        </div>
        <ol className="grid gap-3 text-sm md:grid-cols-5">
          {[
            "Consultation",
            "Site Survey",
            "Design Engineering",
            "Documentation & Approvals",
            "Installation & Commissioning",
          ].map((step, index) => (
            <li
              key={step}
              className="flex flex-col rounded-xl border border-slate-200 bg-white p-3"
            >
              <span className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-amber-400 text-xs font-semibold text-slate-900">
                {index + 1}
              </span>
              <p className="font-semibold text-slate-900">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Project Showcase */}
      <section className="section animate-slide-up animation-delay-300 opacity-0 [animation-fill-mode:forwards]">
        <div className="section-header flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-900 md:text-2xl">
              Recent solar projects
            </h2>
            <p className="mt-0.5 text-sm text-slate-600">
              A snapshot of residential, commercial and industrial installations.
            </p>
          </div>
          <a
            href="/projects"
            className="text-sm font-semibold text-amber-500 hover:text-amber-600"
          >
            Explore all projects →
          </a>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              segment: "Residential",
              size: "8 kW Rooftop",
              location: "Premium Villa Community",
              result: "Up to 80% reduction in monthly bills.",
            },
            {
              segment: "Commercial",
              size: "120 kW Rooftop",
              location: "Warehouse Cluster",
              result: "3.5 year payback with accelerated depreciation.",
            },
            {
              segment: "Industrial",
              size: "750 kW Ground Mount",
              location: "Manufacturing Plant",
              result: "Over ₹35L annual energy cost savings.",
            },
          ].map((project) => (
            <article
              key={project.size + project.segment}
              className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-4"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-amber-500">
                  {project.segment}
                </p>
                <h3 className="mt-1 text-sm font-semibold text-slate-900">
                  {project.size}
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  {project.location}
                </p>
              </div>
              <p className="mt-3 text-sm text-slate-600">{project.result}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section animate-slide-up animation-delay-300 rounded-2xl bg-white px-5 py-8 shadow-sm ring-1 ring-slate-200 md:px-8 opacity-0 [animation-fill-mode:forwards]">
        <div className="grid gap-4 md:grid-cols-[2fr,1fr] md:items-center">
          <div>
            <h2 className="text-xl font-semibold text-slate-900 md:text-2xl">
              Ready to explore solar for your property?
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Share your latest electricity bill and property details. Our team
              will send a customized savings and ROI report within 24–48 hours.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-amber-300"
            >
              Get My Solar Proposal
            </a>
            <p className="text-xs text-slate-500">
              No obligation, no spam – just clear numbers.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
