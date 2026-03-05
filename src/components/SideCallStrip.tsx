import Link from "next/link";
import { Phone } from "lucide-react";
import { COMPANY } from "@/lib/company";

const telUrl = `tel:${COMPANY.phone.replace(/\s/g, "")}`;

export function SideCallStrip() {
  return (
    <Link
      href={telUrl}
      aria-label={`Call ${COMPANY.name}`}
      className="fixed right-0 top-1/2 z-[55] flex -translate-y-1/2 flex-col items-center gap-1 rounded-l-full bg-[#f97316] px-3 py-3 text-xs font-semibold text-white shadow-lg transition hover:bg-[#ea580c] focus:outline-none focus:ring-2 focus:ring-[#f97316] focus:ring-offset-2 focus:ring-offset-[#fffbeb]"
    >
      <Phone className="h-4 w-4" strokeWidth={2} aria-hidden />
      <span className="mt-1 text-[10px] leading-tight tracking-wide [writing-mode:vertical-rl]">
        {COMPANY.phone}
      </span>
    </Link>
  );
}

