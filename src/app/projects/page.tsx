"use client";

import Image from "next/image";
import { useState } from "react";

type Segment = "All" | "Residential" | "Commercial" | "Industrial";

// Capacity-specific images for 8 kW, 120 kW, 65 kW, 750 kW projects
const IMG_8KW = "/8kw%20rooftop.png";
const IMG_120KW = "/120kw%20rootop.webp";
const IMG_65KW = "/65%20kW%20Rooftop%20solar.webp";
const IMG_750KW = "/750k%20on%20grid%20mount.png";

const projects = [
  {
    id: 1,
    segment: "Residential" as Segment,
    size: "8 kW Rooftop",
    location: "Villa Community, City",
    duration: "3 weeks",
    testimonial:
      "Professional team and seamless execution. Our bills have dropped significantly.",
    img: IMG_8KW,
    alt: "8 kW rooftop solar project",
  },
  {
    id: 2,
    segment: "Commercial" as Segment,
    size: "120 kW Rooftop",
    location: "Logistics Park, City",
    duration: "6 weeks",
    testimonial:
      "Clear communication, on-time delivery and strong generation from day one.",
    img: IMG_120KW,
    alt: "120 kW rooftop solar project",
  },
  {
    id: 3,
    segment: "Industrial" as Segment,
    size: "750 kW Ground Mount",
    location: "Manufacturing Unit, Region",
    duration: "10 weeks",
    testimonial:
      "End-to-end project management and strong safety culture on-site.",
    img: IMG_750KW,
    alt: "750 kW on-grid ground mount solar project",
  },
  {
    id: 4,
    segment: "Commercial" as Segment,
    size: "65 kW Rooftop",
    location: "School Campus, City",
    duration: "5 weeks",
    testimonial: "",
    img: IMG_65KW,
    alt: "65 kW rooftop solar – school campus",
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
      <section className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
        <div className="relative aspect-[21/9] w-full min-h-[160px] bg-[#fef9c3]/50 md:min-h-0">
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
          <h1 className="text-3xl font-semibold text-black">Projects</h1>
          <p className="mt-3 max-w-3xl text-sm text-neutral-600">
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
                ? "bg-[#16a34a] text-white shadow-sm"
                : "bg-white text-neutral-700 ring-1 ring-neutral-200 hover:bg-neutral-50"
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
            className="flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm"
          >
            <div className="relative aspect-[16/10] w-full bg-[#fef9c3]/50">
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
              <p className="text-xs font-semibold uppercase tracking-wide text-[#16a34a]">
                {project.segment}
              </p>
              <h2 className="mt-1 text-sm font-semibold text-black">
                {project.size}
              </h2>
              <p className="mt-1 text-xs text-neutral-500">{project.location}</p>
            </div>
            <dl className="mt-3 space-y-1 text-xs text-neutral-600">
              <div className="flex gap-1">
                <dt className="font-semibold">Completion time:</dt>
                <dd>{project.duration}</dd>
              </div>
            </dl>
            {project.testimonial && (
              <p className="mt-3 text-sm text-neutral-600">
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

