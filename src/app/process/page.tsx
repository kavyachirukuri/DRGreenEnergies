const steps = [
  {
    title: "Consultation",
    description:
      "Understand your energy needs, roof or land availability, and overall project objectives.",
  },
  {
    title: "Site Survey",
    description:
      "On-site assessment including measurements, shading analysis, structure checks and safety review.",
  },
  {
    title: "Design Engineering",
    description:
      "System sizing, layout, single line diagrams and selection of modules, inverters and structures.",
  },
  {
    title: "Documentation & Approvals",
    description:
      "Preparation and submission of drawings and documents for DISCOM, net metering and statutory approvals.",
  },
  {
    title: "Installation",
    description:
      "Mechanical, electrical and civil works carried out by certified teams following strict safety standards.",
  },
  {
    title: "Testing & Commissioning",
    description:
      "System testing, synchronization with grid, quality checks and handover with documentation.",
  },
  {
    title: "Monitoring & AMC",
    description:
      "Remote monitoring, performance reviews and preventive maintenance for long-term reliability.",
  },
];

export default function ProcessPage() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-semibold text-slate-900">Our Process</h1>
        <p className="mt-3 max-w-3xl text-sm text-slate-600">
          A structured, transparent process ensures your solar project is
          delivered safely, on time and with predictable performance. From first
          consultation to long-term monitoring, every stage is handled by
          specialists.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {steps.map((step, index) => (
          <article
            key={step.title}
            className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5"
          >
            <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-400 text-xs font-semibold text-slate-900">
              {index + 1}
            </span>
            <h2 className="text-sm font-semibold text-slate-900">
              {step.title}
            </h2>
            <p className="mt-2 text-sm text-slate-600">{step.description}</p>
          </article>
        ))}
      </section>
    </div>
  );
}

