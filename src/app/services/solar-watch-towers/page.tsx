import Image from "next/image";

const WATCH_TOWER_IMAGES = [
  { src: "/watchTower1.png", alt: "Solar-powered watch tower installation 1" },
  { src: "/watchTower2.png", alt: "Solar-powered watch tower installation 2" },
];

const benefits = [
  "Fully self-powered surveillance and lighting in remote or off-grid locations.",
  "Reduces dependence on diesel generators and long cable runs.",
  "Supports continuous operation through battery-backed solar systems.",
  "Ideal for temporary as well as permanent deployments.",
];

export default function SolarWatchTowersServicePage() {
  return (
    <div className="space-y-10">
      <section>
        <h1 className="text-3xl font-semibold text-black">
          Solar-Powered Watch Towers
        </h1>
        <p className="mt-3 max-w-3xl text-sm text-neutral-600">
          Solar-powered watch towers combine elevated structures with solar
          modules, batteries, lighting and surveillance equipment to provide
          round-the-clock security coverage without relying on grid power.
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
            Where they are used
          </h2>
          <p className="text-sm text-neutral-600">
            We deploy solar watch towers for industrial plants, warehouses,
            construction sites, farm lands, institutions and critical
            infrastructure where reliable lighting and monitoring are essential.
          </p>
        </div>
      </section>

      <section className="space-y-4 rounded-2xl border border-neutral-200 bg-white p-5">
        <h2 className="text-sm font-semibold text-black">
          Recent watch tower deployments
        </h2>
        <div className="grid gap-3 md:grid-cols-2">
          {WATCH_TOWER_IMAGES.map((img) => (
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

