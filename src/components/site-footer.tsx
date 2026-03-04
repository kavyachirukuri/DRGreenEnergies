import Link from "next/link";
import Image from "next/image";
import { COMPANY, addressSingleLine } from "@/lib/company";

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

export function SiteFooter() {
  return (
    <footer className="mt-12 border-t border-green-700 bg-[#16a34a]">
      <div className="mx-auto max-w-7xl px-4 py-4 md:px-6">
        <div className="flex flex-col items-center gap-6 text-center text-sm text-white/85 md:flex-row md:items-start md:justify-between md:gap-10 md:text-left">
          <div className="w-full max-w-sm space-y-1 md:min-w-0 md:max-w-none">
            <div className="flex items-center justify-center gap-2 md:justify-start">
              <Image
                src="/drgreenLogo.png"
                alt="DR Green Energies logo"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
              <p className="font-semibold text-white">{COMPANY.name}</p>
            </div>
            <p className="break-words text-white/80">{addressSingleLine}</p>
            <p>
              <a
                href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                className="font-semibold text-white hover:text-yellow-100"
              >
                {COMPANY.phone}
              </a>
            </p>
          </div>
          <nav
            className="flex w-full flex-col items-center gap-2 md:w-auto md:items-start"
            aria-label="Footer navigation"
          >
            <p className="font-semibold text-white">Quick links</p>
            <ul className="flex flex-col items-center gap-1.5 md:items-start md:gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors text-white/85 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex w-full flex-col items-center gap-2 md:w-auto md:items-start">
            <p className="font-semibold text-white">Legal</p>
            <div className="flex flex-col items-center gap-1.5 md:flex-row md:items-start md:gap-2">
              <Link
                href="/privacy"
                className="transition-colors text-white/85 hover:text-white"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="transition-colors text-white/85 hover:text-white"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
        <p className="mt-4 border-t border-white/20 pt-3 text-center text-[11px] text-white/75 md:text-left">
          © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
