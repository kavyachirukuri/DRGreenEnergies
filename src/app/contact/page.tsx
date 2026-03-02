import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { COMPANY, addressSingleLine } from "@/lib/company";

const { lat, lng } = COMPANY.coordinates;
const mapEmbedUrl = `https://www.google.com/maps?q=${lat},${lng}&z=18&output=embed`;

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
    "Hi, I would like to explore solar for my property.",
  )}`;

  return (
    <div className="space-y-10">
      <section className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
        <div className="relative aspect-[21/9] w-full min-h-[140px] bg-[#fef9c3]/50 md:min-h-0">
          <Image
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200&q=80"
            alt="Get in touch for solar solutions"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
      </section>
      <section className="grid gap-6 md:grid-cols-[3fr,2fr] md:gap-8 md:items-start">
        <div className="min-w-0">
          <h1 className="text-2xl font-semibold text-black sm:text-3xl">Contact Us</h1>
          <p className="mt-3 max-w-xl text-sm text-neutral-600">
            Share a few details about your property and current electricity
            bills. Our team will prepare a customized savings and ROI estimate
            and schedule a consultation.
          </p>
          <div className="mt-6 space-y-3 text-sm text-neutral-700">
            <p className="font-semibold text-black">{COMPANY.name}</p>
            <p className="text-neutral-600">
              {COMPANY.address.line1}
              <br />
              {COMPANY.address.line2}
              <br />
              {COMPANY.address.line3}
              <br />
              {COMPANY.address.state}
            </p>
            <p>
              <span className="font-semibold">Mobile:</span>{" "}
              <a
                href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                className="text-[#16a34a] hover:text-[#15803d]"
              >
                {COMPANY.phone}
              </a>
            </p>
            <p>
              <span className="font-semibold">Email:</span>{" "}
              <a
                href={`mailto:${COMPANY.email}`}
                className="text-[#16a34a] hover:text-[#15803d]"
              >
                {COMPANY.email}
              </a>
            </p>
            <p>
              <span className="font-semibold">GST No.:</span> {COMPANY.gst}
            </p>
            <p>
              <span className="font-semibold">WhatsApp:</span>{" "}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="text-[#16a34a] hover:text-[#15803d]"
              >
                Chat with us on WhatsApp
              </a>
            </p>
          </div>
        </div>
        <div className="min-w-0 rounded-2xl border border-neutral-200 bg-white p-3 sm:p-4">
          <div className="aspect-[4/3] min-h-[200px] w-full overflow-hidden rounded-xl bg-[#fef9c3]/50">
            <iframe
              title={`${COMPANY.name} location`}
              src={mapEmbedUrl}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <p className="mt-2 text-xs text-neutral-500">
            {addressSingleLine}
          </p>
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-lg font-semibold text-black">
          Inquiry form
        </h2>
        <p className="mb-4 max-w-xl text-sm text-neutral-600">
          Fill in the form below and we will contact you within 24–48 hours
          with next steps.
        </p>
        <ContactForm />
      </section>
    </div>
  );
}
