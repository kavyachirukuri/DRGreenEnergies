"use client";

import Link from "next/link";
import { useState } from "react";
import { createPortal } from "react-dom";

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
  { href: "/services/solar-watch-towers", label: "Solar-Powered Watch Towers" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const menuPanel =
    typeof document !== "undefined" &&
    open &&
    createPortal(
      <>
        <button
          type="button"
          className="fixed inset-0 z-[100] bg-black/30"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        />
        <div
          className="fixed left-0 right-0 top-0 z-[101] max-h-[85vh] overflow-y-auto border-b border-neutral-200 bg-white shadow-xl"
          role="dialog"
          aria-modal="true"
          aria-label="Main menu"
        >
          <div className="flex items-center justify-between border-b border-neutral-100 px-4 py-3">
            <span className="text-sm font-semibold text-neutral-500">Menu</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-neutral-600 transition hover:bg-neutral-100"
              aria-label="Close menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="px-4 py-4">
            <ul className="flex flex-col gap-0.5">
              {navLinks.map((link) => {
                if (link.href === "/services") {
                  return (
                    <li key={link.href}>
                      <button
                        type="button"
                        onClick={() => setServicesOpen((prev) => !prev)}
                        className="flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-left text-base font-medium text-black transition hover:bg-green-50 hover:text-[#16a34a] active:bg-green-50"
                        aria-expanded={servicesOpen}
                      >
                        <span>{link.label}</span>
                        <svg
                          className={`h-4 w-4 text-current transition-transform ${
                            servicesOpen ? "rotate-180" : "rotate-0"
                          }`}
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
                      {servicesOpen && (
                        <ul className="mt-1 mb-1 ml-2 flex flex-col gap-0.5 border-l border-neutral-200 pl-3">
                          <li>
                            <Link
                              href="/services"
                              onClick={() => {
                                setOpen(false);
                                setServicesOpen(false);
                              }}
                              className="block rounded-lg px-3 py-2 text-sm font-semibold text-neutral-800 transition hover:bg-green-50 hover:text-[#16a34a]"
                            >
                              All Services
                            </Link>
                          </li>
                          {serviceLinks.map((item) => (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                onClick={() => {
                                  setOpen(false);
                                  setServicesOpen(false);
                                }}
                                className="block rounded-lg px-3 py-2 text-sm text-neutral-800 transition hover:bg-green-50 hover:text-[#16a34a]"
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                }

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-4 py-3.5 text-base font-medium text-black transition hover:bg-green-50 hover:text-[#16a34a] active:bg-green-50"
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 flex min-h-[48px] items-center justify-center rounded-full bg-[#16a34a] px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-[#15803d] active:bg-green-700"
            >
              Free Consultation
            </Link>
          </nav>
        </div>
      </>,
      document.body
    );

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-lg text-neutral-700 transition hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>
      {menuPanel}
    </div>
  );
}
