"use client";

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
  },
  {
    id: 2,
    segment: "Commercial" as Segment,
    size: "120 kW Rooftop",
    location: "Logistics Park, City",
    duration: "6 weeks",
    testimonial:
      "Clear communication, on-time delivery and strong generation from day one.",
  },
  {
    id: 3,
    segment: "Industrial" as Segment,
    size: "750 kW Ground Mount",
    location: "Manufacturing Unit, Region",
    duration: "10 weeks",
    testimonial:
      "End-to-end project management and strong safety culture on-site.",
  },
  {
    id: 4,
    segment: "Commercial" as Segment,
    size: "65 kW Rooftop",
    location: "School Campus, City",
    duration: "5 weeks",
    testimonial: "",
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
      <section>
        <h1 className="text-3xl font-semibold text-slate-900">Projects</h1>
        <p className="mt-3 max-w-3xl text-sm text-slate-600">
          A snapshot of residential, commercial and industrial solar projects
          executed by SunPeak Energy. Each project is engineered for high
          performance, safety and long-term reliability.
        </p>
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
            className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
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
          </article>
        ))}
      </section>
    </div>
  );
}

