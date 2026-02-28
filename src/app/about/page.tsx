export default function AboutPage() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-semibold text-slate-900">About Us</h1>
        <p className="mt-3 max-w-3xl text-sm text-slate-600">
          DR Green Energies is a turnkey solar EPC company focused on delivering
          bankable, high-performance solar plants for residential, commercial
          and industrial customers. Our in-house engineering, procurement and
          construction teams work together to ensure predictable generation,
          faster payback and a hassle-free experience throughout the lifecycle
          of your solar asset.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="text-sm font-semibold text-slate-900">
            Engineering excellence
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Designs based on detailed site studies, advanced generation
            simulations and proven component selection to maximize kWh output.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="text-sm font-semibold text-slate-900">
            Certified project delivery
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Structured project management, certified technicians and strict
            quality checks at every stage of installation and commissioning.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="text-sm font-semibold text-slate-900">
            Long-term partnership
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Proactive monitoring, performance reporting and comprehensive AMC
            packages to protect your generation over 25+ years.
          </p>
        </div>
      </section>

      <section className="grid gap-8 md:grid-cols-[3fr,2fr] md:items-start">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            Our mission and promise
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Our mission is to make high-quality solar power accessible and
            financially compelling for every property owner. We combine strong
            technical design with transparent commercial models so you always
            know what to expect from your solar investment.
          </p>
          <p className="mt-3 text-sm text-slate-600">
            From the first consultation call to post-commissioning support, our
            teams are aligned around one simple promise – predictable savings,
            clear communication and reliable long-term performance.
          </p>
        </div>
        <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5">
          <h3 className="text-sm font-semibold text-slate-900">
            Certifications & partnerships
          </h3>
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-600">
            <li>Experienced EPC team with multi-MW portfolio across segments</li>
            <li>Partnerships with leading Tier-1 module and inverter OEMs</li>
            <li>Compliance with local DISCOM, safety and net metering norms</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

