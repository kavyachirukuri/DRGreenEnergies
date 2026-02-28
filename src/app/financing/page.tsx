export default function FinancingPage() {
  return (
    <div className="space-y-10">
      <section>
        <h1 className="text-3xl font-semibold text-slate-900">
          Financing & Subsidy
        </h1>
        <p className="mt-3 max-w-3xl text-sm text-slate-600">
          We help you take advantage of available government subsidies, bank
          financing and optimized ROI structures so your decision to go solar is
          financially straightforward.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="text-sm font-semibold text-slate-900">
            Government subsidies
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Residential customers may be eligible for central and state-level
            subsidies under various rooftop solar programs. These subsidies are
            typically linked to system capacity and installation type, and are
            disbursed through empanelled vendors and DISCOMs.
          </p>
          <p className="mt-2 text-sm text-slate-600">
            Our team guides you on current schemes, eligibility criteria and
            documentation requirements, and supports you through the application
            process.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="text-sm font-semibold text-slate-900">
            EMI & bank financing
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            We collaborate with lending partners to offer EMIs and structured
            loans for eligible homeowners and businesses. In many cases, the
            monthly EMI can be comparable to or lower than your current
            electricity bill.
          </p>
          <p className="mt-2 text-sm text-slate-600">
            We can help you compare options and choose a tenure and structure
            aligned with your cash flow preferences.
          </p>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-[2fr,1.5fr] md:items-start">
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="text-sm font-semibold text-slate-900">
            Sample ROI scenarios
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
            <li>
              A 5 kW residential system with subsidy can achieve payback in
              approximately 3–4 years, followed by decades of low-cost power.
            </li>
            <li>
              A 100 kW commercial system may see 3–4 year payback, especially
              when combined with accelerated depreciation benefits.
            </li>
            <li>
              Industrial plants with higher tariffs and daytime usage often see
              attractive IRR and strong cash flow from the first year.
            </li>
          </ul>
          <p className="mt-3 text-sm text-slate-600">
            Every property is unique. Our proposals include detailed cash flow,
            payback and IRR calculations tailored to your tariff, usage and
            financing preferences.
          </p>
        </div>
        <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="text-sm font-semibold text-slate-900">
            Solar Buyer Guide
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Download our Solar Buyer Guide to understand key concepts, common
            mistakes to avoid and a step-by-step checklist for evaluating solar
            proposals.
          </p>
          <a
            href="/solar-buyer-guide.pdf"
            className="inline-flex items-center justify-center rounded-full bg-amber-400 px-5 py-2.5 text-xs font-semibold text-slate-900 shadow-sm transition hover:bg-amber-300"
          >
            Download Solar Buyer Guide (PDF)
          </a>
          <p className="text-xs text-slate-500">
            The guide opens as a PDF. You can share it with other decision
            makers in your family or organization.
          </p>
        </div>
      </section>
    </div>
  );
}

