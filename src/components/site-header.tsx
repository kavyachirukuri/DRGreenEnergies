import Link from "next/link";
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

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white shadow-sm md:bg-white/90 md:backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 pb-3 pt-[max(0.75rem,env(safe-area-inset-top))] md:px-6 md:pt-3">
        <Link href="/" className="min-w-0 shrink-0">
          <span className="truncate text-base font-semibold text-black sm:text-lg">
            DR Green Energies
          </span>
        </Link>
        <nav className="hidden gap-4 text-sm font-medium text-neutral-700 md:flex lg:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap transition-colors duration-200 hover:text-[#16a34a]"
            >
              {link.label}
            </Link>
          ))}
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

