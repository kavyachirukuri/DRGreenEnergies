import Link from "next/link";
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
    <footer className="mt-16 border-t border-neutral-200 bg-[#fef9c3]/40">
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-6">
        <div className="flex flex-col items-center gap-8 text-center text-sm text-neutral-600 md:flex-row md:items-start md:justify-between md:gap-12 md:text-left">
          <div className="w-full max-w-sm space-y-1 md:min-w-0 md:max-w-none">
            <p className="font-semibold text-black">{COMPANY.name}</p>
            <p className="break-words text-neutral-600">{addressSingleLine}</p>
            <p>
              <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="text-[#16a34a] hover:text-[#15803d]">
                {COMPANY.phone}
              </a>
            </p>
          </div>
          <nav className="flex w-full flex-col items-center gap-2 md:w-auto md:items-start" aria-label="Footer navigation">
            <p className="font-semibold text-black">Quick links</p>
            <ul className="flex flex-col items-center gap-1.5 md:items-start md:gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-[#16a34a]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex w-full flex-col items-center gap-2 md:w-auto md:items-start">
            <p className="font-semibold text-black">Legal</p>
            <div className="flex flex-col items-center gap-1.5 md:flex-row md:items-start md:gap-2">
              <Link
                href="/privacy"
                className="transition-colors hover:text-[#16a34a]"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="transition-colors hover:text-[#16a34a]"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
        <p className="mt-6 border-t border-neutral-200 pt-4 text-center text-xs text-neutral-500 md:text-left">
          © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

