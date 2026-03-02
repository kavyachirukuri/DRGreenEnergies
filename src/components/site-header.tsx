import Link from "next/link";
import { MobileNav } from "@/components/mobile-nav";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/process", label: "Process" },
  { href: "/financing", label: "Financing / Subsidy" },
  { href: "/blog", label: "Blog / Resources" },
  { href: "/contact", label: "Contact Us" },
];

export function SiteHeader() {
  return (
    <header className="relative z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="flex min-w-0 items-baseline gap-2">
          <span className="shrink-0 rounded-full bg-amber-400 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-900 sm:px-3 sm:text-xs">
            Solar EPC
          </span>
          <span className="truncate text-base font-semibold text-slate-900 sm:text-lg">
            DR Green Energies
          </span>
        </Link>
        <nav className="hidden gap-4 text-sm font-medium text-slate-700 md:flex lg:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap transition-colors hover:text-amber-500"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-amber-500 md:inline-block"
          >
            Free Consultation
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

