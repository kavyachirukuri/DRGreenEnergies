import Link from "next/link";

/**
 * Full-bleed page banner for Careers (and similar inner pages).
 * Matches reference: dark band, subtle tech network background, title + breadcrumbs.
 */
export function CareerHeader({
  title = "Careers",
  crumbs = [{ href: "/", label: "Home" }, { label: "Careers" }],
}: {
  title?: string;
  crumbs?: { href?: string; label: string }[];
}) {
  return (
    <section
      className="relative left-1/2 right-0 -ml-[50vw] w-screen overflow-hidden bg-[#0c0e12] py-14 text-white md:py-20"
      aria-labelledby="career-header-title"
    >
      {/* Network / node background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
      >
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id="career-grid"
              width="48"
              height="48"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 24h48M24 0v48"
                fill="none"
                stroke="rgba(147,197,253,0.12)"
                strokeWidth="0.5"
              />
            </pattern>
            <radialGradient id="career-glow" cx="50%" cy="40%" r="70%">
              <stop offset="0%" stopColor="rgba(59,130,246,0.15)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#career-grid)" />
          <rect width="100%" height="100%" fill="url(#career-glow)" />
          {/* Scattered nodes + edges */}
          <g stroke="rgba(147,197,253,0.25)" strokeWidth="0.6" fill="none">
            <path d="M8% 35% L18% 28% L22% 42% L12% 48% Z" />
            <path d="M75% 22% L88% 18% L92% 32% L80% 38% Z" />
            <path d="M35% 55% L50% 48% L55% 62% L40% 68% Z" />
            <path d="M65% 70% L78% 65% L82% 78% L70% 85% Z" />
            <path d="M18% 28% L35% 35% L22% 42%" />
            <path d="M50% 48% L65% 45% L55% 62%" />
            <path d="M88% 18% L92% 32% L75% 40%" />
          </g>
          <g fill="rgba(186,230,253,0.5)">
            <circle cx="8%" cy="35%" r="2" />
            <circle cx="18%" cy="28%" r="1.5" />
            <circle cx="22%" cy="42%" r="1.5" />
            <circle cx="75%" cy="22%" r="2" />
            <circle cx="88%" cy="18%" r="1.5" />
            <circle cx="50%" cy="48%" r="2" />
            <circle cx="65%" cy="70%" r="1.5" />
            <circle cx="35%" cy="55%" r="1.5" />
            <circle cx="92%" cy="55%" r="1.5" />
            <circle cx="45%" cy="25%" r="1.2" />
            <circle cx="60%" cy="30%" r="1.2" />
          </g>
        </svg>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

      <div className="relative mx-auto max-w-7xl px-4 text-center md:px-6">
        <h1
          id="career-header-title"
          className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          {title}
        </h1>
        <nav
          className="mt-4 flex flex-wrap items-center justify-center gap-1 text-sm text-white/80 md:text-base"
          aria-label="Breadcrumb"
        >
          {crumbs.map((c, i) => (
            <span key={`${c.label}-${i}`} className="flex items-center gap-1">
              {i > 0 && (
                <span className="mx-1 text-white/50" aria-hidden>
                  →
                </span>
              )}
              {c.href ? (
                <Link
                  href={c.href}
                  className="transition hover:text-white hover:underline"
                >
                  {c.label}
                </Link>
              ) : (
                <span className="font-medium text-white">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </section>
  );
}
