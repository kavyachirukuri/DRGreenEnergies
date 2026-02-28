import Link from "next/link";

const services = [
  {
    title: "Residential Solar",
    href: "/services/residential",
    summary:
      "Customized rooftop solar for independent homes, villas and gated communities.",
  },
  {
    title: "Commercial Solar",
    href: "/services/commercial",
    summary:
      "Optimized solar plants for schools, hospitals, offices and warehouses.",
  },
  {
    title: "Industrial Solar",
    href: "/services/industrial",
    summary:
      "High-capacity, high-uptime systems for factories and heavy energy users.",
  },
  {
    title: "Operations & Maintenance",
    href: "/services/maintenance",
    summary:
      "End-to-end monitoring, preventive maintenance and performance optimization.",
  },
];

export default function ServicesPage() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-semibold text-slate-900">Services</h1>
        <p className="mt-3 max-w-3xl text-sm text-slate-600">
          We provide complete EPC services across residential, commercial and
          industrial segments, along with dedicated operations and maintenance
          support to keep your plant performing at its best.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <Link
            key={service.href}
            href={service.href}
            className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-amber-400 hover:shadow-md"
          >
            <div>
              <h2 className="text-base font-semibold text-slate-900">
                {service.title}
              </h2>
              <p className="mt-2 text-sm text-slate-600">{service.summary}</p>
            </div>
            <span className="mt-4 text-xs font-semibold text-amber-500 group-hover:text-amber-600">
              View details →
            </span>
          </Link>
        ))}
      </section>
    </div>
  );
}

