import Image from "next/image";

const ABOUT_HERO =
  "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200&q=80";

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="relative aspect-[21/9] w-full min-h-[180px] bg-slate-100 md:min-h-0">
          <Image
            src={ABOUT_HERO}
            alt="Solar panels and clean energy"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        <div className="p-5 md:p-6">
          <h1 className="text-3xl font-semibold text-slate-900">About Us</h1>
          <p className="mt-3 max-w-3xl text-sm text-slate-600">
            DR Green Energies is a turnkey solar EPC company focused on delivering
            bankable, high-performance solar plants for residential, commercial
            and industrial customers. Our in-house engineering, procurement and
            construction teams work together to ensure predictable generation,
            faster payback and a hassle-free experience throughout the lifecycle
            of your solar asset.
          </p>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="relative aspect-[2/1] w-full bg-slate-100">
            <Image
              src="https://images.unsplash.com/photo-1624397640148-949b1732bb0a?w=600&q=80"
              alt="Solar engineering and design"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="p-5">
            <h2 className="text-sm font-semibold text-slate-900">
              Engineering excellence
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Designs based on detailed site studies, advanced generation
              simulations and proven component selection to maximize kWh output.
            </p>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="relative aspect-[2/1] w-full bg-slate-100">
            <Image
              src="https://images.unsplash.com/photo-1559302504-64aae0ca2a3d?w=600&q=80"
              alt="Solar installation team"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="p-5">
            <h2 className="text-sm font-semibold text-slate-900">
              Certified project delivery
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Structured project management, certified technicians and strict
              quality checks at every stage of installation and commissioning.
            </p>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="relative aspect-[2/1] w-full bg-slate-100">
            <Image
              src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80"
              alt="Long-term solar partnership"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="p-5">
            <h2 className="text-sm font-semibold text-slate-900">
              Long-term partnership
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Proactive monitoring, performance reporting and comprehensive AMC
              packages to protect your generation over 25+ years.
            </p>
          </div>
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

