"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Phone } from "lucide-react";
import { COMPANY } from "@/lib/company";

const telUrl = `tel:${COMPANY.phone.replace(/\s/g, "")}`;
const whatsappUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
  "Hi, I would like to explore solar for my property."
)}`;

export default function ContactFAB() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        open &&
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [open]);

  return (
    <div ref={containerRef} className="fixed bottom-6 right-5 z-[60] flex flex-col items-end gap-3">
      {/* Backdrop when open - only on mobile/touch to avoid stealing clicks */}
      {open && (
        <button
          type="button"
          className="fixed inset-0 z-[59] bg-black/20 backdrop-blur-[1px] transition-opacity duration-200 md:bg-transparent md:backdrop-blur-none"
          aria-label="Close contact menu"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Expanded actions: Call + WhatsApp (stacked upward, so reverse order in DOM) */}
      <div
        className={`relative z-[61] flex flex-col-reverse items-center gap-3 transition-all duration-300 ease-out ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <Link
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-[#fffbeb]"
          style={{ transitionDelay: open ? "0ms" : "50ms" }}
          onClick={() => setOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
            aria-hidden
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.865 9.865 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </Link>
        <Link
          href={telUrl}
          aria-label="Call Now"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black text-white shadow-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-neutral-600 focus:ring-offset-2 focus:ring-offset-[#fffbeb]"
          style={{ transitionDelay: open ? "50ms" : "0ms" }}
          onClick={() => setOpen(false)}
        >
          <Phone className="h-5 w-5" strokeWidth={2} aria-hidden />
        </Link>
      </div>

      {/* Main FAB – call button with glow, pulse, shimmer */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Close contact menu" : "Contact Us"}
        aria-expanded={open}
        className="fab-cta relative z-[61] flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f97316] text-white shadow-[0_4px_14px_0_rgba(249,115,22,0.4)] focus:outline-none focus:ring-2 focus:ring-[#f97316] focus:ring-offset-2 focus:ring-offset-[#fffbeb]"
      >
        <Phone
          className={`h-6 w-6 transition-transform duration-300 ease-out ${
            open ? "rotate-45" : "rotate-0"
          }`}
          strokeWidth={2}
          aria-hidden
        />
      </button>
    </div>
  );
}
