import Image from "next/image";

const SOLAR_TREE_IMAGES = [
  { src: "/solarTree1.png", alt: "Solar tree installation 1" },
  { src: "/solarTree2.png", alt: "Solar tree installation 2" },
  { src: "/solarTree3.png", alt: "Solar tree installation 3" },
  { src: "/solarTree4.png", alt: "Solar tree installation 4" },
];

const benefits = [
  "Delivers high solar generation from a compact footprint.",
  "Frees up ground area beneath the structure for movement, parking or landscaping.",
  "Creates a visually striking landmark that showcases your sustainability commitment.",
  "Useful where conventional rooftop or ground-mount layouts are constrained.",
];

export default function SolarTreeServicePage() {
  return (
    <div className="space-y-10">
      <section>
        <h1 className="text-3xl font-semibold text-black">Solar Trees</h1>
        <p className="mt-3 max-w-3xl text-sm text-neutral-600">
          Solar trees are engineered structures that mimic the form of a tree,
          with multiple solar panels mounted on branching arms to harvest
          sunlight efficiently while occupying very little ground area.
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
            Ideal locations
          </h2>
          <p className="text-sm text-neutral-600">
            We recommend solar trees for campuses, public spaces, parks,
            corporate headquarters and tight urban plots where both visibility
            and land efficiency are important.
          </p>
        </div>
      </section>

      <section className="space-y-4 rounded-2xl border border-neutral-200 bg-white p-5">
        <h2 className="text-sm font-semibold text-black">
          Recent solar tree installations
        </h2>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {SOLAR_TREE_IMAGES.map((img) => (
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

