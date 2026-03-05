import Image from "next/image";
import Link from "next/link";

// Local images from public folder – segment + O&M
const IMG_RESIDENTIAL = "/residentail%20solar.webp";
const IMG_COMMERCIAL = "/commercial%20solar.webp";
const IMG_INDUSTRIAL = "/industrial%20solar.webp";
const IMG_OPS_MAINTENANCE = "/operations%20and%20maintainance.jpg";

// Images for specialised solar solutions
// Use a local street / garden lighting visual only for street & garden services
const IMG_STREET_GARDEN = "/street1.jpeg";
// Use a local pergola visual only for pergola services
const IMG_SOLAR_PERGOLA = "/perigola1.png";
// Use one of the local carport visuals specifically for the carport card
const IMG_SOLAR_CARPORT = "/carport3.jpeg";
// Use a local water pump visual only for solar water pump services
const IMG_SOLAR_WATER_PUMP = "/waterPump1.png";
// Use a local solar tree visual only for solar tree services
const IMG_SOLAR_TREE = "/solarTree1.png";
// Use a local watch tower visual only for watch tower services
const IMG_WATCH_TOWERS = "/watchTower1.png";

const services = [
  {
    title: "Residential Solar",
    href: "/services/residential",
    summary:
      "Customized rooftop solar for independent homes, villas and gated communities.",
    img: IMG_RESIDENTIAL,
    alt: "Residential solar",
  },
  {
    title: "Commercial Solar",
    href: "/services/commercial",
    summary:
      "Optimized solar plants for schools, hospitals, offices and warehouses.",
    img: IMG_COMMERCIAL,
    alt: "Commercial solar",
  },
  {
    title: "Industrial Solar",
    href: "/services/industrial",
    summary:
      "High-capacity, high-uptime systems for factories and heavy energy users.",
    img: IMG_INDUSTRIAL,
    alt: "Industrial solar",
  },
  {
    title: "Street & Garden Solar Lights",
    href: "/services/street-garden-lights",
    summary:
      "Standalone solar-powered poles and garden lights that improve safety, ambience and security without trenching or cabling.",
    img: IMG_STREET_GARDEN,
    alt: "Solar-powered street and garden lighting",
  },
  {
    title: "Solar Pergola Structures",
    href: "/services/solar-pergola",
    summary:
      "Architectural pergolas that double as shaded outdoor spaces and fully functional solar power plants.",
    img: IMG_SOLAR_PERGOLA,
    alt: "Outdoor solar pergola structure",
  },
  {
    title: "Solar Carports",
    href: "/services/solar-carport",
    summary:
      "Covered parking structures with integrated solar modules that generate power while protecting vehicles from heat and weather.",
    img: IMG_SOLAR_CARPORT,
    alt: "Solar carport structure with parked cars",
  },
  {
    title: "Solar Water Pumps & Overhead Tanks",
    href: "/services/solar-water-pump-overhead-tank",
    summary:
      "Solar-powered pumping systems that lift water to overhead tanks for reliable, grid-free supply in homes, farms and institutions.",
    img: IMG_SOLAR_WATER_PUMP,
    alt: "Solar water pump feeding an overhead tank",
  },
  {
    title: "Solar Trees",
    href: "/services/solar-tree",
    summary:
      "Space-efficient solar tree structures that combine striking aesthetics with high energy generation in tight or urban spaces.",
    img: IMG_SOLAR_TREE,
    alt: "Decorative solar tree installation",
  },
  {
    title: "Solar-Powered Watch Towers",
    href: "/services/solar-watch-towers",
    summary:
      "Autonomous watch towers with solar-powered lighting and surveillance for remote sites, campuses and critical infrastructure.",
    img: IMG_WATCH_TOWERS,
    alt: "Solar-powered security and watch tower",
  },
  {
    title: "Operations & Maintenance",
    href: "/services/maintenance",
    summary:
      "End-to-end monitoring, preventive maintenance and performance optimization.",
    img: IMG_OPS_MAINTENANCE,
    alt: "Operations and maintenance",
  },
];

export default function ServicesPage() {
  return (
    <div className="space-y-8">
      <section className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
        <div className="relative aspect-[21/9] w-full min-h-[160px] bg-[#fef9c3]/50 md:min-h-0">
          <Image
            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200&q=80"
            alt="Solar EPC services"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        <div className="p-5 md:p-6">
          <h1 className="text-3xl font-semibold text-black">Services</h1>
          <p className="mt-3 max-w-3xl text-sm text-neutral-600">
            We provide complete EPC services across residential, commercial and
            industrial segments, along with dedicated operations and maintenance
            support to keep your plant performing at its best.
          </p>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <Link
            key={service.href}
            href={service.href}
            className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-green-500 hover:shadow-md"
          >
            <div className="relative aspect-[16/10] w-full bg-[#fef9c3]/50">
              <Image
                src={service.img}
                alt={service.alt}
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between p-5">
              <div>
                <h2 className="text-base font-semibold text-black">
                  {service.title}
                </h2>
                <p className="mt-2 text-sm text-neutral-600">{service.summary}</p>
              </div>
              <span className="mt-4 text-xs font-semibold text-[#16a34a] group-hover:text-[#15803d]">
                View details →
              </span>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}

