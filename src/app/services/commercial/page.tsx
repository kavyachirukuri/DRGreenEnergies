const components = ["Tier-1 solar panels", "High-efficiency string or central inverters", "Optimized mounting structures for roofs and sheds", "Net metering, safety and protection systems"];

const faqs = [
  {
    q: "Will solar impact my business operations?",
    a: "Our teams plan installation schedules around your operations and safety norms so downtime is minimized or eliminated.",
  },
  {
    q: "Can I claim accelerated depreciation?",
    a: "Many commercial entities can claim accelerated depreciation benefits. Our team coordinates with your finance and tax advisors to structure the project optimally.",
  },
  {
    q: "Do you support multi-location rollouts?",
    a: "Yes, we can design and execute standardized solar plants across multiple branches or facilities.",
  },
];

export default function CommercialServicePage() {
  return (
    <div className="space-y-10">
      <section>
        <h1 className="text-3xl font-semibold text-slate-900">
          Commercial Solar EPC
        </h1>
        <p className="mt-3 max-w-3xl text-sm text-slate-600">
          Lower operating costs and make your business more sustainable with
          rooftop and carport solar solutions built for offices, schools,
          hospitals and warehouses.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-[2fr,1.5fr]">
        <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="text-sm font-semibold text-slate-900">Key benefits</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-600">
            <li>Significant reduction in energy expenses and demand charges</li>
            <li>Improved ESG scores and sustainability credentials</li>
            <li>Attractive payback with tax and depreciation benefits</li>
            <li>Shadow-free designs tailored to your roof and load profile</li>
          </ul>
        </div>
        <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="text-sm font-semibold text-slate-900">
            Estimated savings & ROI
          </h2>
          <p className="text-sm text-slate-600">
            Commercial plants typically see 3–4 year payback periods depending
            on tariffs and usage patterns. Our proposals clearly outline cash
            flows, IRR and payback so you can evaluate the project easily.
          </p>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="text-sm font-semibold text-slate-900">
            System components
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
            {components.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="text-sm font-semibold text-slate-900">
            Installation process
          </h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-600">
            <li>Baseline energy study and feasibility</li>
            <li>
              Detailed engineering, structural checks and statutory approvals
            </li>
            <li>Material delivery, erection and electrical works</li>
            <li>Testing, synchronization and commissioning</li>
            <li>Handover, training and performance guarantee</li>
          </ol>
        </div>
      </section>

      <section className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5">
        <h2 className="text-sm font-semibold text-slate-900">FAQs</h2>
        <div className="space-y-4">
          {faqs.map((item) => (
            <div key={item.q}>
              <p className="text-sm font-semibold text-slate-900">{item.q}</p>
              <p className="mt-1 text-sm text-slate-600">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl bg-slate-900 px-6 py-7 text-slate-50">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-lg font-semibold">
              Discuss solar for your business
            </h2>
            <p className="mt-1 text-sm text-slate-200">
              Share your tariff details and consumption profile. Our team will
              help you build a business case for commercial solar.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-amber-300"
          >
            Request Commercial Proposal
          </a>
        </div>
      </section>
    </div>
  );
}

