const components = [
  "Tier-1 high-wattage solar panels",
  "Central or string inverters sized for industrial loads",
  "Ground-mount or elevated structures with corrosion protection",
  "Grid synchronization, protection panels and SCADA-ready monitoring",
];

const faqs = [
  {
    q: "Can solar support my large connected load?",
    a: "Solar offsets your grid consumption during the day. Our engineering team sizes the plant based on your sanctioned load, consumption pattern and DISCOM regulations.",
  },
  {
    q: "Do you support open access or captive models?",
    a: "We can work with your advisors and partners to evaluate on-site and off-site solar structures including captive and group captive models.",
  },
  {
    q: "How do you ensure safety and compliance?",
    a: "Industrial projects follow stringent safety protocols, electrical standards and DISCOM guidelines, with detailed documentation at every stage.",
  },
];

export default function IndustrialServicePage() {
  return (
    <div className="space-y-10">
      <section>
        <h1 className="text-3xl font-semibold text-black">
          Industrial Solar EPC
        </h1>
        <p className="mt-3 max-w-3xl text-sm text-neutral-600">
          For energy-intensive manufacturing units and industrial facilities, we
          design and commission high-capacity solar plants that provide
          predictable, low-cost power over decades.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-[2fr,1.5fr]">
        <div className="space-y-4 rounded-2xl border border-neutral-200 bg-white p-5">
          <h2 className="text-sm font-semibold text-black">Key benefits</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-neutral-600">
            <li>Large-scale reduction in per-unit energy cost</li>
            <li>Hedge against tariff escalations and fuel price volatility</li>
            <li>Improved ESG scores and compliance with sustainability targets</li>
            <li>Robust designs for industrial environments and loads</li>
          </ul>
        </div>
        <div className="space-y-4 rounded-2xl border border-neutral-200 bg-white p-5">
          <h2 className="text-sm font-semibold text-black">
            Estimated savings & ROI
          </h2>
          <p className="text-sm text-neutral-600">
            Industrial solar projects often deliver strong IRR with attractive
            payback periods, especially when combined with accelerated
            depreciation, open access and carefully structured power purchase
            agreements.
          </p>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-neutral-200 bg-white p-5">
          <h2 className="text-sm font-semibold text-black">
            System components
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-600">
            {components.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-5">
          <h2 className="text-sm font-semibold text-black">
            Installation process
          </h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-neutral-600">
            <li>Detailed load and demand analysis</li>
            <li>Land/roof assessment and structural design</li>
            <li>Regulatory, safety and grid approvals</li>
            <li>Phased execution, testing and commissioning</li>
            <li>Handover with monitoring and AMC plans</li>
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
              Explore solar for your industrial facility
            </h2>
            <p className="mt-1 text-sm text-neutral-200">
              Our team can evaluate your load profile and suggest the right
              plant size and commercial structure for maximum savings.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#16a34a] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#15803d]"
          >
            Request Industrial Proposal
          </a>
        </div>
      </section>
    </div>
  );
}

