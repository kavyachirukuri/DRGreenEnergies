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
      <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="relative aspect-[21/9] w-full min-h-[140px] bg-slate-100 md:min-h-0">
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
          <h1 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Contact Us</h1>
          <p className="mt-3 max-w-xl text-sm text-slate-600">
            Share a few details about your property and current electricity
            bills. Our team will prepare a customized savings and ROI estimate
            and schedule a consultation.
          </p>
          <div className="mt-6 space-y-3 text-sm text-slate-700">
            <p className="font-semibold text-slate-900">{COMPANY.name}</p>
            <p className="text-slate-600">
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
                className="text-amber-500 hover:text-amber-600"
              >
                {COMPANY.phone}
              </a>
            </p>
            <p>
              <span className="font-semibold">Email:</span>{" "}
              <a
                href={`mailto:${COMPANY.email}`}
                className="text-amber-500 hover:text-amber-600"
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
                className="text-amber-500 hover:text-amber-600"
              >
                Chat with us on WhatsApp
              </a>
            </p>
          </div>
        </div>
        <div className="min-w-0 rounded-2xl border border-slate-200 bg-white p-3 sm:p-4">
          <div className="aspect-[4/3] min-h-[200px] w-full overflow-hidden rounded-xl bg-slate-100">
            <iframe
              title={`${COMPANY.name} location`}
              src={mapEmbedUrl}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <p className="mt-2 text-xs text-slate-500">
            {addressSingleLine}
          </p>
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-lg font-semibold text-slate-900">
          Inquiry form
        </h2>
        <p className="mb-4 max-w-xl text-sm text-slate-600">
          Fill in the form below and we will contact you within 24–48 hours
          with next steps.
        </p>
        <ContactForm />
      </section>
    </div>
  );
}
