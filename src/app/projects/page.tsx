"use client";

import Image from "next/image";
import { useState } from "react";

type Segment = "All" | "Residential" | "Commercial" | "Industrial";

const projects = [
  {
    id: 1,
    segment: "Residential" as Segment,
    size: "8 kW Rooftop",
    location: "Villa Community, City",
    duration: "3 weeks",
    testimonial:
      "Professional team and seamless execution. Our bills have dropped significantly.",
    img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80",
    alt: "Residential solar project",
  },
  {
    id: 2,
    segment: "Commercial" as Segment,
    size: "120 kW Rooftop",
    location: "Logistics Park, City",
    duration: "6 weeks",
    testimonial:
      "Clear communication, on-time delivery and strong generation from day one.",
    img: "https://images.unsplash.com/photo-1569163138763-92a2c9642a1a?w=600&q=80",
    alt: "Commercial solar project",
  },
  {
    id: 3,
    segment: "Industrial" as Segment,
    size: "750 kW Ground Mount",
    location: "Manufacturing Unit, Region",
    duration: "10 weeks",
    testimonial:
      "End-to-end project management and strong safety culture on-site.",
    img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&q=80",
    alt: "Industrial solar project",
  },
  {
    id: 4,
    segment: "Commercial" as Segment,
    size: "65 kW Rooftop",
    location: "School Campus, City",
    duration: "5 weeks",
    testimonial: "",
    img: "https://images.unsplash.com/photo-1559302504-64aae0ca2a3d?w=600&q=80",
    alt: "School campus solar",
  },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState<Segment>("All");

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((project) => project.segment === filter);

  const filters: Segment[] = ["All", "Residential", "Commercial", "Industrial"];

  return (
    <div className="space-y-8">
      <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="relative aspect-[21/9] w-full min-h-[160px] bg-slate-100 md:min-h-0">
          <Image
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80"
            alt="Solar projects portfolio"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        <div className="p-5 md:p-6">
          <h1 className="text-3xl font-semibold text-slate-900">Projects</h1>
          <p className="mt-3 max-w-3xl text-sm text-slate-600">
            A snapshot of residential, commercial and industrial solar projects
            executed by DR Green Energies. Each project is engineered for high
            performance, safety and long-term reliability.
          </p>
        </div>
      </section>

      <section className="flex flex-wrap gap-3">
        {filters.map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => setFilter(value)}
            className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
              filter === value
                ? "bg-amber-400 text-slate-900 shadow-sm"
                : "bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50"
            }`}
          >
            {value}
          </button>
        ))}
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {filtered.map((project) => (
          <article
            key={project.id}
            className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
          >
            <div className="relative aspect-[16/10] w-full bg-slate-100">
              <Image
                src={project.img}
                alt={project.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between p-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-amber-500">
                {project.segment}
              </p>
              <h2 className="mt-1 text-sm font-semibold text-slate-900">
                {project.size}
              </h2>
              <p className="mt-1 text-xs text-slate-500">{project.location}</p>
            </div>
            <dl className="mt-3 space-y-1 text-xs text-slate-600">
              <div className="flex gap-1">
                <dt className="font-semibold">Completion time:</dt>
                <dd>{project.duration}</dd>
              </div>
            </dl>
            {project.testimonial && (
              <p className="mt-3 text-sm text-slate-600">
                “{project.testimonial}”
              </p>
            )}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

