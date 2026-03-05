import Image from "next/image";

const STREET_IMAGES = [
  { src: "/street1.jpeg", alt: "Solar street and garden lighting installation 1" },
  { src: "/street2.jpeg", alt: "Solar street and garden lighting installation 2" },
  { src: "/street3.jpeg", alt: "Solar street and garden lighting installation 3" },
  { src: "/street4.jpeg", alt: "Solar street and garden lighting installation 4" },
  { src: "/street6.jpeg", alt: "Solar street and garden lighting installation 5" },
];

const benefits = [
  "Automatic dusk-to-dawn operation with no manual switching or cabling.",
  "Zero electricity bills and reduced maintenance compared to conventional lighting.",
  "Improved safety, visibility and ambience for streets, driveways, gardens and pathways.",
  "Ideal for layouts, campuses, farmhouses and gated communities with long cable runs.",
];

export default function StreetGardenLightsServicePage() {
  return (
    <div className="space-y-10">
      <section>
        <h1 className="text-3xl font-semibold text-black">
          Street &amp; Garden Solar Lights
        </h1>
        <p className="mt-3 max-w-3xl text-sm text-neutral-600">
          Solar street and garden lights use high-efficiency LEDs powered by
          integrated solar panels and batteries, providing reliable outdoor
          lighting without trenching, wiring or reliance on grid power.
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
            Typical applications
          </h2>
          <p className="text-sm text-neutral-600">
            We design and supply solar lighting solutions for internal roads,
            pathways, parking areas, gardens, security perimeters and common
            amenity spaces, with pole heights, battery sizing and optics
            tailored to your site conditions.
          </p>
        </div>
      </section>

      <section className="space-y-4 rounded-2xl border border-neutral-200 bg-white p-5">
        <h2 className="text-sm font-semibold text-black">
          Recent street &amp; garden lighting projects
        </h2>
        <div className="grid gap-3 md:grid-cols-3">
          {STREET_IMAGES.map((img) => (
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

