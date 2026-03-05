import Link from "next/link";
import Image from "next/image";
import { MobileNav } from "@/components/mobile-nav";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/process", label: "Process" },
  { href: "/financing", label: "Financing / Subsidy" },
  // { href: "/blog", label: "Blog / Resources" },
  { href: "/contact", label: "Contact Us" },
];

const serviceLinks = [
  { href: "/services/residential", label: "Residential Solar" },
  { href: "/services/commercial", label: "Commercial Solar" },
  { href: "/services/industrial", label: "Industrial Solar" },
  { href: "/services/maintenance", label: "Operations & Maintenance" },
  { href: "/services/street-garden-lights", label: "Street & Garden Solar Lights" },
  { href: "/services/solar-pergola", label: "Solar Pergola Structures" },
  { href: "/services/solar-carport", label: "Solar Carports" },
  {
    href: "/services/solar-water-pump-overhead-tank",
    label: "Solar Water Pumps & Overhead Tanks",
  },
  { href: "/services/solar-tree", label: "Solar Trees" },
  { href: "/services/solar-watch-towers", label: "Watch Towers" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white shadow-sm md:bg-white/90 md:backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 pb-3 pt-[max(0.75rem,env(safe-area-inset-top))] md:px-6 md:pt-3">
        <Link href="/" className="min-w-0 shrink-0">
          <span className="flex items-center gap-2">
            <Image
              src="/drgreenLogo.png"
              alt="DR Green Energies logo"
              width={80}
              height={80}
              className="h-20 w-auto"
              priority
            />
            {/* <span className="truncate text-base font-semibold text-black sm:text-lg">
              DR Green Energies
            </span> */}
          </span>
        </Link>
        <nav className="hidden gap-4 text-sm font-medium text-neutral-700 md:flex lg:gap-6">
          {navLinks.map((link) => {
            if (link.href === "/services") {
              return (
                <div key={link.href} className="relative group">
                  <button
                    type="button"
                    className="flex items-center gap-1 whitespace-nowrap transition-colors duration-200 hover:text-[#16a34a]"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {link.label}
                    <svg
                      className="h-3 w-3 text-current"
                      viewBox="0 0 12 12"
                      aria-hidden="true"
                    >
                      <path
                        d="M2 4.5L6 8.5L10 4.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <div className="pointer-events-none absolute left-0 top-full z-40 mt-2 min-w-[220px] rounded-xl border border-neutral-200 bg-white py-1 text-sm shadow-lg opacity-0 transition duration-150 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
                    <Link
                      href="/services"
                      className="block px-4 py-2 font-semibold text-neutral-800 hover:bg-green-50 hover:text-[#16a34a]"
                    >
                      All Services
                    </Link>
                    <div className="my-1 border-t border-neutral-100" />
                    {serviceLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-1.5 text-neutral-700 hover:bg-green-50 hover:text-[#16a34a]"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className="whitespace-nowrap transition-colors duration-200 hover:text-[#16a34a]"
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hero-cta hidden rounded-full bg-[#16a34a] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#15803d] md:inline-block"
          >
            Free Consultation
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
