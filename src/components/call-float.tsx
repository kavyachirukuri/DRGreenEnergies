import Link from "next/link";
import { COMPANY } from "@/lib/company";

const telUrl = `tel:${COMPANY.phone.replace(/\s/g, "")}`;

export function CallFloat() {
  return (
    <Link
      href={telUrl}
      aria-label={`Call ${COMPANY.name}`}
      className="fixed bottom-4 right-20 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 text-white shadow-lg transition-all duration-300 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-50 sm:bottom-6 sm:right-24 sm:h-14 sm:w-14"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6 sm:h-7 sm:w-7"
        aria-hidden
      >
        <path d="M6.62 10.79a15.44 15.44 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1 17 17 0 0 1-17-17 1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
      </svg>
    </Link>
  );
}
