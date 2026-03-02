export default function FinancingPage() {
  return (
    <div className="space-y-10">
      <section>
        <h1 className="text-3xl font-semibold text-black">
          Financing & Subsidy
        </h1>
        <p className="mt-3 max-w-3xl text-sm text-neutral-600">
          We help you take advantage of available government subsidies, bank
          financing and optimized ROI structures so your decision to go solar is
          financially straightforward.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-neutral-200 bg-white p-5">
          <h2 className="text-sm font-semibold text-black">
            Government subsidies
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            Residential customers may be eligible for central and state-level
            subsidies under various rooftop solar programs. These subsidies are
            typically linked to system capacity and installation type, and are
            disbursed through empanelled vendors and DISCOMs.
          </p>
          <p className="mt-2 text-sm text-neutral-600">
            Our team guides you on current schemes, eligibility criteria and
            documentation requirements, and supports you through the application
            process.
          </p>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-5">
          <h2 className="text-sm font-semibold text-black">
            EMI & bank financing
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            We collaborate with lending partners to offer EMIs and structured
            loans for eligible homeowners and businesses. In many cases, the
            monthly EMI can be comparable to or lower than your current
            electricity bill.
          </p>
          <p className="mt-2 text-sm text-neutral-600">
            We can help you compare options and choose a tenure and structure
            aligned with your cash flow preferences.
          </p>
        </div>
      </section>

      {/* PM Surya Ghar (Muft Bijli Yojana) – Central rooftop solar subsidy */}
      <section className="rounded-2xl border border-neutral-200 bg-white p-5 md:p-6">
        <h2 className="text-lg font-semibold text-black">
          PM Surya Ghar: Muft Bijli Yojana
        </h2>
        <p className="mt-2 text-sm text-neutral-600">
          The Government of India&apos;s PM Surya Ghar scheme aims to install rooftop solar in 1 crore households, offering central financial assistance (CFA) and optional collateral-free loans. Subsidy is transferred directly to your bank account (DBT) after installation and inspection.
        </p>

        <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold text-black">Central subsidy (CFA)</h3>
            <ul className="mt-2 space-y-1.5 text-sm text-neutral-600">
              <li>• ₹30,000 per kW for capacity up to 2 kW</li>
              <li>• ₹18,000 per kW for additional capacity from 2 kW to 3 kW</li>
              <li>• Maximum subsidy cap: ₹78,000 (for systems above 3 kW)</li>
            </ul>
            <p className="mt-2 text-xs text-neutral-500">
              Examples: 1 kW → ₹30,000 | 2 kW → ₹60,000 | 3 kW → ₹78,000
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-black">Eligibility</h3>
            <ul className="mt-2 space-y-1 text-sm text-neutral-600">
              <li>• Indian citizen with own residential property</li>
              <li>• Valid electricity connection in your name</li>
              <li>• No prior subsidised rooftop solar under the scheme</li>
              <li>• Bank account for direct benefit transfer</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-black">Benefits & application</h3>
            <ul className="mt-2 space-y-1 text-sm text-neutral-600">
              <li>• Typical savings ~₹15,000/year (up to 300 units/month)</li>
              <li>• Collateral-free loans at ~7% (e.g. 0.5% above Repo Rate)</li>
              <li>• Apply on national portal: <strong>pmsuryaghar.gov.in</strong></li>
              <li>• State-level top-ups (e.g. up to ₹30,000) may apply in some states</li>
            </ul>
          </div>
        </div>

        <p className="mt-4 text-sm text-neutral-600">
          We help you understand eligibility, documentation and the DISCOM approval process, and can install your system as per scheme requirements so you receive the subsidy without hassle.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-1 md:items-start">
        <div className="rounded-2xl border border-neutral-200 bg-white p-5">
          <h2 className="text-sm font-semibold text-black">
            Sample ROI scenarios
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-600">
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
          <p className="mt-3 text-sm text-neutral-600">
            Every property is unique. Our proposals include detailed cash flow,
            payback and IRR calculations tailored to your tariff, usage and
            financing preferences.
          </p>
        </div>
        {/* Solar Buyer Guide – commented out
        <div className="space-y-4 rounded-2xl border border-neutral-200 bg-white p-5">
          <h2 className="text-sm font-semibold text-black">
            Solar Buyer Guide
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            Download our Solar Buyer Guide to understand key concepts, common
            mistakes to avoid and a step-by-step checklist for evaluating solar
            proposals.
          </p>
          <a
            href="/solar-buyer-guide.pdf"
            className="inline-flex items-center justify-center rounded-full bg-[#16a34a] px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#15803d]"
          >
            Download Solar Buyer Guide (PDF)
          </a>
          <p className="text-xs text-neutral-500">
            The guide opens as a PDF. You can share it with other decision
            makers in your family or organization.
          </p>
        </div>
        */}
      </section>
    </div>
  );
}

