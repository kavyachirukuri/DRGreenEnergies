const components = ["Tier-1 solar panels", "High-efficiency inverter", "Rooftop mounting structure", "Net metering & safety protections"];

const faqs = [
  {
    q: "What is the typical payback period for residential solar?",
    a: "Most homeowners recover their investment in 3–5 years depending on consumption, tariffs and subsidy eligibility.",
  },
  {
    q: "Will my roof be damaged during installation?",
    a: "We use engineered mounting structures and follow strict installation practices to protect your roof and waterproofing.",
  },
  {
    q: "Can I monitor my system performance?",
    a: "Yes, you get access to a mobile/web app with real-time generation and performance analytics.",
  },
];

export default function ResidentialServicePage() {
  return (
    <div className="space-y-10">
      <section>
        <h1 className="text-3xl font-semibold text-slate-900">
          Residential Solar EPC
        </h1>
        <p className="mt-3 max-w-3xl text-sm text-slate-600">
          Reduce your monthly electricity bills and protect yourself from rising
          tariffs with a rooftop solar system designed specifically for your
          home&apos;s consumption pattern and available roof space.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-[2fr,1.5fr]">
        <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="text-sm font-semibold text-slate-900">Key benefits</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-600">
            <li>Up to 80% savings on monthly electricity bills</li>
            <li>3–5 year payback with 25+ years of generation</li>
            <li>Silent, low-maintenance and grid-synchronized operation</li>
            <li>Increased property value and reduced carbon footprint</li>
          </ul>
        </div>
        <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="text-sm font-semibold text-slate-900">
            Estimated savings & ROI
          </h2>
          <p className="text-sm text-slate-600">
            A typical 5 kW residential system can offset ₹4,000–₹6,000 in
            monthly electricity costs. With subsidies and accelerated
            depreciation (for eligible entities), the effective payback period
            can be as low as 3–4 years.
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
            <li>Initial consultation and bill analysis</li>
            <li>Site survey and shading study</li>
            <li>System design and approvals</li>
            <li>Installation, wiring and safety checks</li>
            <li>Net meter integration and commissioning</li>
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
              Get a customized solar proposal for your home
            </h2>
            <p className="mt-1 text-sm text-slate-200">
              Share your latest electricity bill and roof details. We&apos;ll
              send an ROI estimate and system sizing within 24–48 hours.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-amber-300"
          >
            Request Residential Proposal
          </a>
        </div>
      </section>
    </div>
  );
}

