"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { COMPANY } from "@/lib/company";

const defaultMessage = "Hi, I would like to explore solar for my property.";
const whatsappNumber = (COMPANY.whatsapp || COMPANY.phone).replace(/\D/g, "");
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

const welcomeMessage = `Hello! Welcome to ${COMPANY.name}. We provide residential, rooftop, commercial, industrial and power plants solar solutions. How can we help you today?`;

const bubbleGreen = "#DCF8C6";
const headerGreen = "#075E54";

const WA_GREEN = "#25D366";

/** WhatsApp logomark: speech bubble + phone (white on green FAB) */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.865 9.865 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.395 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 005.683 1.448h.006c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z" />
    </svg>
  );
}

export function WhatsAppFloat() {
  const [open, setOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => setShowMessage(true), 500);
      return () => clearTimeout(t);
    }
    setShowMessage(false);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  return (
    <div className="fixed bottom-5 right-5 z-[70] flex flex-col items-end sm:bottom-6 sm:right-6">
      {open && (
        <div className="relative mb-2 w-[min(100vw-2rem,22rem)] animate-wa-float-in">
          {/* Chat Card */}
          <div className="flex max-h-[min(82vh,30rem)] flex-col overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-black/10">
            {/* Header */}
            <div
              className="flex items-center justify-between px-4 py-4 text-white"
              style={{ backgroundColor: headerGreen }}
            >
              <div>
                <p className="text-[16px] font-semibold">{COMPANY.name}</p>
                <p className="text-[13px] text-white/90">
                  Typically replies within minutes
                </p>
              </div>

              <button
                onClick={close}
                className="rounded-full p-1.5 hover:bg-white/20"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Chat Background */}
            <div
              className="flex-1 px-4 pb-3 pt-5"
              style={{
                backgroundColor: "#ECE5DD",
                backgroundImage:
                  "url('https://cdn.jsdelivr.net/gh/rodrigoborgesdeoliveira/whatsapp-bg/whatsapp-bg.png')",
                backgroundSize: "412px",
              }}
            >
              {showMessage && (
                <div className="max-w-[85%]">
                  {/* Message Bubble */}
                  <div
                    className="relative rounded-lg px-3.5 py-2.5 text-[14px] leading-[1.5] text-[#111]"
                    style={{
                      backgroundColor: bubbleGreen,
                      boxShadow: "0 1px 1px rgba(0,0,0,0.15)",
                    }}
                  >
                    {welcomeMessage}
                  </div>
                </div>
              )}
            </div>

            {/* CTA */}
            <div className="border-t border-black/10 bg-white px-4 pb-3 pt-3">
              <Link
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="flex w-full items-center justify-center gap-2 rounded-md py-3 text-[15px] font-medium text-white shadow-sm transition hover:brightness-95"
                style={{ backgroundColor: WA_GREEN }}
              >
                <WhatsAppIcon className="h-6 w-6" />
                WhatsApp Us
              </Link>

              <p className="mt-2 text-center text-[12px] text-[#667781]">
                <span className="text-[#25D366]">Online</span>
                <span className="mx-1.5">|</span>
                <Link href="/privacy" className="hover:underline">
                  Privacy policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* FAB — vibrant WhatsApp green, white bubble logo tilted clockwise (like reference) */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open WhatsApp chat"}
        aria-expanded={open}
        className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full text-white shadow-[0_4px_14px_rgba(0,0,0,0.35),0_2px_6px_rgba(37,211,102,0.5)] transition hover:scale-105 hover:shadow-[0_6px_20px_rgba(0,0,0,0.38)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#25D366] active:scale-95 sm:h-[62px] sm:w-[62px]"
        style={{ backgroundColor: WA_GREEN }}
      >
        <span
          className="flex h-[30px] w-[30px] items-center justify-center sm:h-[32px] sm:w-[32px]"
          style={{ transform: "rotate(10deg)" }}
          aria-hidden
        >
          <WhatsAppIcon className="h-full w-full" />
        </span>
      </button>
    </div>
  );
}
