import Image from "next/image";

const PERGOLA_IMAGES = [
  { src: "/perigola1.png", alt: "Solar pergola installation 1" },
  { src: "/perigola2.png", alt: "Solar pergola installation 2" },
  { src: "/perigola3.png", alt: "Solar pergola installation 3" },
  { src: "/perigola4.png", alt: "Solar pergola installation 4" },
];

const benefits = [
  "Creates a shaded outdoor living or parking space that also generates clean power.",
  "Independent structure allows optimal panel tilt and orientation even when your roof is constrained.",
  "Improves aesthetics and usability of terraces, sit-out areas and backyards.",
  "Ideal for homes, cafés, farmhouses and rooftop lounges with premium design expectations.",
];

export default function SolarPergolaServicePage() {
  return (
    <div className="space-y-10">
      <section>
        <h1 className="text-3xl font-semibold text-black">
          Solar Pergola Structures
        </h1>
        <p className="mt-3 max-w-3xl text-sm text-neutral-600">
          A solar pergola combines a designer pergola frame with rooftop
          photovoltaic panels, turning your terrace or garden sit-out into a
          shaded space that quietly generates electricity through the day.
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
            Design &amp; execution
          </h2>
          <p className="text-sm text-neutral-600">
            We work with structural and architectural requirements to size the
            pergola, select suitable module layouts and integrate lighting or
            fans if needed, delivering a turnkey solution from design to
            commissioning.
          </p>
        </div>
      </section>

      <section className="space-y-4 rounded-2xl border border-neutral-200 bg-white p-5">
        <h2 className="text-sm font-semibold text-black">
          Recent pergola installations
        </h2>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {PERGOLA_IMAGES.map((img) => (
            <div
              key={img.src}
              className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#fef9c3]/50"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

