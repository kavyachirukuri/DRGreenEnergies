import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { COMPANY, addressSingleLine, toTelHref } from "@/lib/company";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/process", label: "Process" },
  { href: "/financing", label: "Financing / Subsidy" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact Us" },
];

const iconClass =
  "mt-0.5 h-4 w-4 shrink-0 text-amber-400 [&_svg]:stroke-[2]";

export function SiteFooter() {
  const phones =
    COMPANY.contactPhones?.length > 0
      ? [...COMPANY.contactPhones]
      : [{ display: COMPANY.phone }];

  return (
    <footer className="relative mt-12 overflow-hidden border-t border-white/10 bg-[#0c0c0c] text-white">
      {/* Subtle dot texture like reference */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `radial-gradient(circle at center, rgba(255,255,255,0.9) 1px, transparent 1px)`,
          backgroundSize: "14px 14px",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-12">
        <div className="grid gap-10 text-sm md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-10">
          {/* Brand */}
          <div className="space-y-3 text-center md:text-left">
            <p className="text-base font-bold tracking-wide text-white">
              {COMPANY.name.toUpperCase()}
            </p>
            <p className="text-white/75 leading-relaxed">
              Premium solar EPC—residential, commercial & industrial across
              Telangana.
            </p>
          </div>

          {/* Quick links */}
          <nav
            className="flex flex-col items-center gap-3 md:items-start"
            aria-label="Footer navigation"
          >
            <p className="text-base font-bold text-white">Quick Links</p>
            <ul className="flex flex-col items-center gap-2 md:items-start">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 transition-colors hover:text-amber-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <div className="flex flex-col items-center gap-3 md:items-start">
            <p className="text-base font-bold text-white">Legal</p>
            <div className="flex flex-col items-center gap-2 md:items-start">
              <Link
                href="/privacy"
                className="text-white/80 transition-colors hover:text-amber-400"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-white/80 transition-colors hover:text-amber-400"
              >
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Contact Info — matches reference: icons + tel/mailto */}
          <div className="flex flex-col items-center gap-4 md:items-start">
            <p className="text-base font-bold text-white">Contact Info</p>
            <div className="flex w-full max-w-sm flex-col gap-4 text-left">
              <div className="flex gap-3">
                <MapPin className={iconClass} aria-hidden />
                <p className="text-white/90 leading-relaxed">{addressSingleLine}</p>
              </div>
              <div className="flex flex-col gap-3">
                {phones.map((row) => {
                  const href = `tel:${toTelHref(row.display)}`;
                  return (
                    <div key={row.display} className="flex gap-3">
                      <Phone className={iconClass} aria-hidden />
                      <a
                        href={href}
                        className="text-white/90 underline-offset-2 transition-colors hover:text-amber-400 hover:underline"
                      >
                        {row.display}
                      </a>
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-3">
                <Mail className={iconClass} aria-hidden />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="break-all text-white/90 underline-offset-2 transition-colors hover:text-amber-400 hover:underline"
                >
                  {COMPANY.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-10 border-t border-white/10 pt-6 text-center text-[11px] text-white/50 md:text-left">
          © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
