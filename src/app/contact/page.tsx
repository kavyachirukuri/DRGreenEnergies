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
      <section className="grid gap-8 md:grid-cols-[3fr,2fr] md:items-start">
        <div>
          <h1 className="text-3xl font-semibold text-slate-900">Contact Us</h1>
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
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100">
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
