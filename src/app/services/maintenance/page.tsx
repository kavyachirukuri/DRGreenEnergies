const components = [
  "Remote monitoring and performance analytics",
  "Preventive maintenance visits and health checks",
  "Cleaning schedules and vegetation management (where applicable)",
  "Corrective maintenance, troubleshooting and replacements",
];

const faqs = [
  {
    q: "Do you provide AMC for existing plants?",
    a: "Yes, we can take over operations and maintenance for plants commissioned by other vendors after an initial health audit.",
  },
  {
    q: "How often will my plant be serviced?",
    a: "Service frequency depends on plant size, location and environment. Typical visits range from quarterly to monthly with additional remote checks.",
  },
  {
    q: "What reports will I receive?",
    a: "You receive periodic performance reports, generation summaries and actionable recommendations to improve plant output.",
  },
];

export default function MaintenanceServicePage() {
  return (
    <div className="space-y-10">
      <section>
        <h1 className="text-3xl font-semibold text-black">
          Operations & Maintenance (O&M)
        </h1>
        <p className="mt-3 max-w-3xl text-sm text-neutral-600">
          Long-term plant performance depends on consistent monitoring and
          proactive maintenance. Our O&M services are designed to keep your
          solar asset healthy, safe and delivering expected generation.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-[2fr,1.5fr]">
        <div className="space-y-4 rounded-2xl border border-neutral-200 bg-white p-5">
          <h2 className="text-sm font-semibold text-black">
            Key benefits
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-neutral-600">
            <li>Higher annual generation through proactive maintenance</li>
            <li>Early detection of issues via remote monitoring</li>
            <li>Reduced downtime and faster fault resolution</li>
            <li>Transparent reporting and performance benchmarking</li>
          </ul>
        </div>
        <div className="space-y-4 rounded-2xl border border-neutral-200 bg-white p-5">
          <h2 className="text-sm font-semibold text-black">
            Typical scope
          </h2>
          <p className="text-sm text-neutral-600">
            We tailor O&M packages to your plant size and criticality, ranging
            from basic monitoring and periodic cleaning to full-scope contracts
            with guaranteed response times and performance commitments.
          </p>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-neutral-200 bg-white p-5">
          <h2 className="text-sm font-semibold text-black">
            Service components
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-600">
            {components.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-5">
          <h2 className="text-sm font-semibold text-black">
            Engagement process
          </h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-neutral-600">
            <li>Plant audit and baseline health assessment</li>
            <li>O&M scope definition and package selection</li>
            <li>Onboarding, documentation and monitoring setup</li>
            <li>Scheduled visits and remote checks</li>
            <li>Quarterly/annual performance reviews</li>
          </ol>
        </div>
      </section>

      <section className="space-y-4 rounded-2xl border border-neutral-200 bg-white p-5">
        <h2 className="text-sm font-semibold text-black">FAQs</h2>
        <div className="space-y-4">
          {faqs.map((item) => (
            <div key={item.q}>
              <p className="text-sm font-semibold text-black">{item.q}</p>
              <p className="mt-1 text-sm text-neutral-600">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl bg-black px-6 py-7 text-white">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-lg font-semibold">
              Talk to us about O&M for your plant
            </h2>
            <p className="mt-1 text-sm text-neutral-200">
              Whether you are commissioning a new system or already have solar
              installed, we can structure an O&M package that fits your needs.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#16a34a] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#15803d]"
          >
            Discuss O&M Options
          </a>
        </div>
      </section>
    </div>
  );
}

