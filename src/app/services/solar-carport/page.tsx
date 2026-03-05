import Image from "next/image";

const CARPORT_IMAGES = [
  { src: "/carport1.jpeg", alt: "Solar carport installation 1" },
  { src: "/carport2.jpeg", alt: "Solar carport installation 2" },
  { src: "/carport3.jpeg", alt: "Solar carport installation 3" },
  { src: "/carport5.jpeg", alt: "Solar carport installation 4" },
  { src: "/carport6.jpeg", alt: "Solar carport installation 5" },
  { src: "/carport7.png", alt: "Solar carport installation 6" },
];

const benefits = [
  "Provides shaded, weather-protected parking while generating solar power.",
  "Makes use of existing open parking areas without consuming additional land.",
  "Ideal for integrating EV charging infrastructure under the same structure.",
  "Reduces heat load on vehicles and improves user comfort during daytime parking.",
];

export default function SolarCarportServicePage() {
  return (
    <div className="space-y-10">
      <section>
        <h1 className="text-3xl font-semibold text-black">Solar Carports</h1>
        <p className="mt-3 max-w-3xl text-sm text-neutral-600">
          Solar carports are elevated steel structures with solar panels as the
          roof, designed to cover parking bays while producing clean
          electricity for your building, common loads or EV chargers.
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
            Typical use cases
          </h2>
          <p className="text-sm text-neutral-600">
            We deploy solar carports for commercial complexes, institutions,
            industries and high-end residential communities, with bay layouts,
            clear heights and drainage designed to match your parking and site
            conditions.
          </p>
        </div>
      </section>

      <section className="space-y-4 rounded-2xl border border-neutral-200 bg-white p-5">
        <h2 className="text-sm font-semibold text-black">
          Recent carport installations
        </h2>
        <div className="grid gap-3 md:grid-cols-3">
          {CARPORT_IMAGES.map((img) => (
            <div
              key={img.src}
              className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#fef9c3]/50"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

