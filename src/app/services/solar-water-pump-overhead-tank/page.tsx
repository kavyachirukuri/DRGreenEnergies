import Image from "next/image";

const WATER_PUMP_IMAGES = [
  { src: "/waterPump1.png", alt: "Solar water pump and overhead tank installation 1" },
  { src: "/waterPump2.png", alt: "Solar water pump and overhead tank installation 2" },
];

const benefits = [
  "Replaces diesel or grid-powered pumps with a clean solar alternative.",
  "Lifts water to an overhead tank during the day for round-the-clock gravity supply.",
  "Eliminates fuel logistics and reduces dependence on erratic grid power.",
  "Suitable for domestic, institutional and agricultural water needs.",
];

export default function SolarWaterPumpOverheadTankServicePage() {
  return (
    <div className="space-y-10">
      <section>
        <h1 className="text-3xl font-semibold text-black">
          Solar Water Pump &amp; Overhead Tank
        </h1>
        <p className="mt-3 max-w-3xl text-sm text-neutral-600">
          Solar water pumping systems use photovoltaic panels to power a pump
          that lifts water from a source to an elevated storage tank, ensuring
          reliable water availability without recurring fuel or high electricity
          costs.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-[2fr,1.5fr]">
        <div className="space-y-4 rounded-2xl border border-neutral-200 bg-white p-5">
          <h2 className="text-sm font-semibold text-black">Key benefits</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-neutral-600">
            {benefits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="space-y-4 rounded-2xl border border-neutral-200 bg-white p-5">
          <h2 className="text-sm font-semibold text-black">
            Typical system scope
          </h2>
          <p className="text-sm text-neutral-600">
            Depending on your requirement, we size the solar array, select AC
            or DC pumps, design the pumping head and storage capacity, and
            integrate level controls and protection to deliver a complete
            turnkey solution.
          </p>
        </div>
      </section>

      <section className="space-y-4 rounded-2xl border border-neutral-200 bg-white p-5">
        <h2 className="text-sm font-semibold text-black">
          Recent solar water pump projects
        </h2>
        <div className="grid gap-3 md:grid-cols-2">
          {WATER_PUMP_IMAGES.map((img) => (
            <div
              key={img.src}
              className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#fef9c3]/50"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

