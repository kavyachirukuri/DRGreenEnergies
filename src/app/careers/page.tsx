import type { Metadata } from "next";
import Image from "next/image";
import { CareerHeader } from "@/components/career-header";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Careers | DR Green Energies",
  description:
    "Join DR Green Energies. Send your resume and cover letter—we’d love to hear from you.",
};

const TEAM_ILLUSTRATION =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80";

export default function CareersPage() {
  return (
    <div className="-mx-4 space-y-0 md:-mx-6">
      <CareerHeader />

      <section className="mx-auto max-w-7xl bg-white px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1fr,1fr] md:items-center md:gap-12">
          <div className="space-y-4 text-neutral-700">
            <p className="text-base leading-relaxed md:text-lg">
              If you&apos;re excited about the possibility of joining our team,
              we&apos;d love to hear from you! Please send your resume and a
              cover letter to{" "}
              <a
                href={`mailto:${COMPANY.email}`}
                className="font-semibold text-[#16a34a] underline decoration-green-600/40 underline-offset-2 hover:text-[#15803d]"
              >
                {COMPANY.email}
              </a>
              .
            </p>
            <p className="text-base leading-relaxed md:text-lg">
              Join us in shaping the future at {COMPANY.name}. Together, we can
              achieve great things!
            </p>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-neutral-100 bg-neutral-50 shadow-sm">
            <Image
              src={TEAM_ILLUSTRATION}
              alt="Team collaboration"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
