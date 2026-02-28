import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between md:px-6">
        <p>
          © {new Date().getFullYear()} SunPeak Energy. All rights reserved.
        </p>
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
    </footer>
  );
}

