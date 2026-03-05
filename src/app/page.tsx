import Image from "next/image";

// Local images from public folder – segment images (Residential, Commercial, Industrial)
const IMG_RESIDENTIAL = "/residentail solar.webp";
const IMG_COMMERCIAL = "/commercial solar.webp";
const IMG_INDUSTRIAL = "/industrial solar.webp";

// Capacity-specific (for reference; used where segment image not needed)
const IMG_8KW_ROOFTOP = IMG_RESIDENTIAL;
const IMG_120KW_ROOFTOP = "/120kw rootop.webp";
const IMG_750KW_GRID = IMG_INDUSTRIAL;

// Hero + Why Choose Us still use Unsplash (no matching local assets)
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80";
const IMG_EPC_TEAM =
  "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?w=600&q=80";
const IMG_TIER1_PANELS =
  "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&q=80";
const IMG_ROI_SAVINGS =
  "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80";

// Services: segment images. Recent solar projects: capacity-specific (8kw, 120kw, 750k)
const IMG_PROJECT_RES = IMG_8KW_ROOFTOP;
const IMG_PROJECT_COM = IMG_120KW_ROOFTOP;
const IMG_PROJECT_IND = IMG_750KW_GRID;

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Section - full width */}
      <section className="relative left-1/2 right-0 -ml-[50vw] w-screen overflow-hidden bg-gradient-to-r from-black via-neutral-900 to-black text-white animate-fade-in">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 md:grid-cols-2 md:items-center md:px-6 md:py-10">
          <div className="space-y-4">
            <p className="badge-float inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#fef08a] ring-1 ring-white/20">
              Premium Solar EPC Partner
            </p>
            <h1 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
              Go solar with a trusted partner and cut your energy bills.
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-neutral-200">
              DR Green Energies designs, engineers, and commissions high-performance
              solar plants for residential, commercial, and industrial customers –
              with complete end-to-end project ownership.
            </p>
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="flex flex-nowrap items-center gap-2 sm:gap-4">
                <a
                  href="/contact"
                  className="hero-cta inline-flex min-h-[44px] shrink-0 items-center justify-center rounded-full bg-[#16a34a] px-4 py-2.5 text-xs font-semibold text-white shadow-lg shadow-green-500/40 hover:bg-[#15803d] active:bg-green-700 sm:px-6 sm:py-3 sm:text-sm"
                >
                  Book a Free Consultation
                </a>
                <a
                  href="/services"
                  className="cta-secondary inline-flex min-h-[44px] shrink-0 items-center justify-center rounded-full border-2 border-white/80 bg-transparent px-4 py-2.5 text-xs font-semibold text-white transition hover:border-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black sm:px-6 sm:py-3 sm:text-sm"
                >
                  View our services
                </a>
              </div>
              <p className="text-xs text-neutral-200">
                Avg. payback in 3–5 years with up to 80% bill savings.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl min-h-[200px] md:min-h-0">
            <Image
              src={HERO_IMAGE}
              alt="Solar panels on a rooftop installation"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section animate-slide-up animation-delay-100 opacity-0 [animation-fill-mode:forwards]">
        <div className="section-header flex flex-col items-center gap-2 text-center md:flex-row md:items-end md:justify-between md:text-left">
          <div>
            <h2 className="text-xl font-semibold text-black md:text-2xl">
              Solar solutions for every segment
            </h2>
            <p className="mt-0.5 text-sm text-neutral-600">
              Tailored solar EPC services for homes, businesses and industries.
            </p>
          </div>
          <a
            href="/services"
            className="link-arrow text-sm font-semibold text-[#16a34a] hover:text-[#15803d]"
          >
            View all services →
          </a>
        </div>
        <div className="mx-auto grid max-w-md gap-4 md:max-w-none md:grid-cols-3">
          {[
            {
              title: "Residential Solar",
              href: "/services/residential",
              desc: "Rooftop systems for independent houses, villas and gated communities.",
              img: IMG_RESIDENTIAL,
              alt: "Residential rooftop solar installation",
            },
            {
              title: "Commercial Solar",
              href: "/services/commercial",
              desc: "Solar plants for schools, hospitals, offices and warehouses.",
              img: IMG_COMMERCIAL,
              alt: "Commercial building with solar panels",
            },
            {
              title: "Industrial Solar",
              href: "/services/industrial",
              desc: "High-capacity systems for factories and heavy energy consumers.",
              img: IMG_INDUSTRIAL,
              alt: "Industrial solar plant",
            },
          ].map((service) => (
            <a
              key={service.href}
              href={service.href}
              className="card-hover group flex flex-col justify-between overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm hover:border-green-500"
            >
              <div className="relative aspect-[16/10] w-full bg-[#fef9c3]/50">
                <Image
                  src={service.img}
                  alt={service.alt}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-4 text-center md:text-left">
                <h3 className="text-base font-semibold text-black">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600">{service.desc}</p>
                <span className="link-arrow mt-4 text-xs font-semibold text-[#16a34a] group-hover:text-[#15803d]">
                  Learn more →
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section animate-slide-up animation-delay-200 opacity-0 [animation-fill-mode:forwards]">
        <div className="section-header text-center md:text-left">
          <h2 className="text-xl font-semibold text-black md:text-2xl">
            Why customers choose DR Green Energies
          </h2>
        </div>
        <div className="mx-auto grid max-w-md gap-4 md:max-w-none md:grid-cols-3">
          <div className="card-hover overflow-hidden rounded-xl border border-neutral-200 bg-white">
            <div className="relative aspect-[2/1] w-full bg-[#fef9c3]/50">
              <Image
                src={IMG_EPC_TEAM}
                alt="Solar installation team at work"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-4 text-center md:text-left">
              <h3 className="text-sm font-semibold text-black">
                End-to-end EPC ownership
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                From design and engineering to installation, commissioning and AMC
                – handled by a single expert team.
              </p>
            </div>
          </div>
          <div className="card-hover overflow-hidden rounded-xl border border-neutral-200 bg-white">
            <div className="relative aspect-[2/1] w-full bg-[#fef9c3]/50">
              <Image
                src={IMG_TIER1_PANELS}
                alt="High-efficiency solar modules"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-4 text-center md:text-left">
              <h3 className="text-sm font-semibold text-black">
                Tier-1 components & bankable designs
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                High-efficiency modules, inverters and structures designed for
                optimal generation and long-term reliability.
              </p>
            </div>
          </div>
          <div className="card-hover overflow-hidden rounded-xl border border-neutral-200 bg-white">
            <div className="relative aspect-[2/1] w-full bg-[#fef9c3]/50">
              <Image
                src={IMG_ROI_SAVINGS}
                alt="Solar savings and ROI"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-4 text-center md:text-left">
              <h3 className="text-sm font-semibold text-black">
                Transparent ROI & subsidy guidance
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                Clear savings projections, payback calculations and support for
                government subsidies and financing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="section animate-slide-up animation-delay-200 opacity-0 [animation-fill-mode:forwards]">
        <div className="section-header flex flex-col items-center gap-2 text-center md:flex-row md:items-end md:justify-between md:text-left">
          <div>
            <h2 className="text-xl font-semibold text-black md:text-2xl">
              Simple, transparent project process
            </h2>
            <p className="mt-0.5 text-sm text-neutral-600">
              A proven 5-step journey from first call to commissioning.
            </p>
          </div>
          <a
            href="/process"
            className="link-arrow text-sm font-semibold text-[#16a34a] hover:text-[#15803d]"
          >
            View detailed process →
          </a>
        </div>
        <div className="flex w-full justify-center">
          <ol className="w-full max-w-[340px] grid gap-3 text-sm sm:max-w-md md:max-w-none md:grid-cols-5">
            {[
              "Consultation",
              "Site Survey",
              "Design Engineering",
              "Documentation & Approvals",
              "Installation & Commissioning",
            ].map((step, index) => (
              <li
                key={step}
                className="card-hover flex flex-col items-center rounded-xl border border-neutral-200 bg-white p-4 text-center md:items-start md:text-left"
              >
                <span className="mb-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#16a34a] text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <p className="font-semibold text-black">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="section animate-slide-up animation-delay-300 opacity-0 [animation-fill-mode:forwards]">
        <div className="section-header flex flex-col items-center gap-2 text-center md:flex-row md:items-end md:justify-between md:text-left">
          <div>
            <h2 className="text-xl font-semibold text-black md:text-2xl">
              Recent solar projects
            </h2>
            <p className="mt-0.5 text-sm text-neutral-600">
              A snapshot of residential, commercial and industrial installations.
            </p>
          </div>
          <a
            href="/projects"
            className="link-arrow text-sm font-semibold text-[#16a34a] hover:text-[#15803d]"
          >
            Explore all projects →
          </a>
        </div>
        <div className="mx-auto grid max-w-md gap-4 md:max-w-none md:grid-cols-3">
          {[
            {
              segment: "Residential",
              size: "8 kW Rooftop",
              location: "Premium Villa Community",
              result: "Up to 80% reduction in monthly bills.",
              img: IMG_PROJECT_RES,
              alt: "Residential solar project",
            },
            {
              segment: "Commercial",
              size: "120 kW Rooftop",
              location: "Warehouse Cluster",
              result: "3.5 year payback with accelerated depreciation.",
              img: IMG_PROJECT_COM,
              alt: "Commercial solar project",
            },
            {
              segment: "Industrial",
              size: "750 kW Ground Mount",
              location: "Manufacturing Plant",
              result: "Over ₹35L annual energy cost savings.",
              img: IMG_PROJECT_IND,
              alt: "Industrial solar project",
            },
          ].map((project) => (
            <article
              key={project.size + project.segment}
              className="card-hover flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm"
            >
              <div className="relative aspect-[16/10] w-full bg-[#fef9c3]/50">
                <Image
                  src={project.img}
                  alt={project.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between p-4 text-center md:text-left">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#16a34a]">
                    {project.segment}
                  </p>
                  <h3 className="mt-1 text-sm font-semibold text-black">
                    {project.size}
                  </h3>
                  <p className="mt-1 text-xs text-neutral-500">
                    {project.location}
                  </p>
                </div>
                <p className="mt-3 text-sm text-neutral-600">{project.result}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section animate-slide-up animation-delay-300 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-neutral-200 opacity-0 [animation-fill-mode:forwards]">
        <div className="grid gap-0 md:grid-cols-[1.5fr,1fr] md:items-stretch">
          <div className="relative order-1 aspect-[2/1] w-full min-h-[180px] md:min-h-0">
            <Image
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80"
              alt="Solar installation"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          </div>
          <div className="order-2 flex flex-col items-center justify-center px-5 py-6 text-center md:items-start md:px-8 md:py-8 md:text-left">
            <h2 className="text-xl font-semibold text-black md:text-2xl">
              Ready to explore solar for your property?
            </h2>
            <p className="mt-2 text-sm text-neutral-600">
              Share your latest electricity bill and property details. Our team
              will send a customized savings and ROI report within 24–48 hours.
            </p>
            <div className="mt-4 flex flex-col items-center gap-3 md:items-start">
              <a
                href="/contact"
                className="hero-cta inline-flex min-h-[44px] items-center justify-center rounded-full bg-[#16a34a] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#15803d] active:bg-green-700"
              >
                Get My Solar Proposal
              </a>
              <p className="text-xs text-neutral-500">
                No obligation, no spam – just clear numbers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
