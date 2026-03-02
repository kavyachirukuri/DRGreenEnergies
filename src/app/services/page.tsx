import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Residential Solar",
    href: "/services/residential",
    summary:
      "Customized rooftop solar for independent homes, villas and gated communities.",
    img: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?w=600&q=80",
    alt: "Residential rooftop solar",
  },
  {
    title: "Commercial Solar",
    href: "/services/commercial",
    summary:
      "Optimized solar plants for schools, hospitals, offices and warehouses.",
    img: "https://images.unsplash.com/photo-1559302504-64aae0ca2a3d?w=600&q=80",
    alt: "Commercial solar installation",
  },
  {
    title: "Industrial Solar",
    href: "/services/industrial",
    summary:
      "High-capacity, high-uptime systems for factories and heavy energy users.",
    img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80",
    alt: "Industrial solar plant",
  },
  {
    title: "Operations & Maintenance",
    href: "/services/maintenance",
    summary:
      "End-to-end monitoring, preventive maintenance and performance optimization.",
    img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&q=80",
    alt: "Solar maintenance and monitoring",
  },
];

export default function ServicesPage() {
  return (
    <div className="space-y-8">
      <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="relative aspect-[21/9] w-full min-h-[160px] bg-slate-100 md:min-h-0">
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
          <h1 className="text-3xl font-semibold text-slate-900">Services</h1>
          <p className="mt-3 max-w-3xl text-sm text-slate-600">
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
            className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-amber-400 hover:shadow-md"
          >
            <div className="relative aspect-[16/10] w-full bg-slate-100">
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
                <h2 className="text-base font-semibold text-slate-900">
                  {service.title}
                </h2>
                <p className="mt-2 text-sm text-slate-600">{service.summary}</p>
              </div>
              <span className="mt-4 text-xs font-semibold text-amber-500 group-hover:text-amber-600">
                View details →
              </span>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}

