import Link from "next/link";
import { COMPANY, addressSingleLine } from "@/lib/company";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-6">
        <div className="flex flex-col gap-6 text-sm text-slate-600 md:flex-row md:items-start md:justify-between">
          <div className="min-w-0 space-y-1">
            <p className="font-semibold text-slate-900">{COMPANY.name}</p>
            <p className="max-w-sm break-words text-slate-600">{addressSingleLine}</p>
            <p>
              <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="text-amber-600 hover:text-amber-700">
                {COMPANY.phone}
              </a>
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
          <Link
            href="/privacy"
            className="transition-colors hover:text-amber-500"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="transition-colors hover:text-amber-500"
          >
            Terms of Service
          </Link>
        </div>
          </div>
        <p className="mt-4 border-t border-slate-200 pt-4 text-xs text-slate-500">
          © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

