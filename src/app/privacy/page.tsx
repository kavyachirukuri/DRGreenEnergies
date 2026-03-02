import { COMPANY } from "@/lib/company";

export const metadata = {
  title: "Privacy Policy | DR Green Energies",
  description: "Privacy policy for DR Green Energies – how we collect, use and protect your information.",
};

export default function PrivacyPage() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-semibold text-black">Privacy Policy</h1>
        <p className="mt-2 text-sm text-neutral-500">
          Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
        </p>
        <p className="mt-4 max-w-3xl text-sm text-neutral-600">
          {COMPANY.name} (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your privacy.
          This policy explains how we collect, use, and safeguard your information when you use our website
          or contact us for solar EPC services.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-black">Information we collect</h2>
        <p className="max-w-3xl text-sm text-neutral-600">
          We may collect information that you provide when you fill out our contact or inquiry forms,
          including your name, email address, phone number, property type, approximate monthly electricity
          bill, location, and any message you send. We may also collect information when you call us,
          email us, or communicate via WhatsApp.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-black">How we use your information</h2>
        <p className="max-w-3xl text-sm text-neutral-600">
          We use your information to respond to your inquiries, prepare customized solar proposals and
          savings estimates, schedule site visits and consultations, and communicate with you about our
          services. We do not sell your personal information to third parties.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-black">Cookies and analytics</h2>
        <p className="max-w-3xl text-sm text-neutral-600">
          Our website may use cookies and similar technologies to improve your experience and to
          understand how visitors use our site (e.g. through Google Analytics). You can control cookie
          preferences through your browser settings.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-black">Data security and retention</h2>
        <p className="max-w-3xl text-sm text-neutral-600">
          We take reasonable steps to protect your personal data. We retain your information only for
          as long as necessary to fulfil the purposes described in this policy or as required by law.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-black">Your rights and contact</h2>
        <p className="max-w-3xl text-sm text-neutral-600">
          You may request access to, correction of, or deletion of your personal data by contacting us
          at {COMPANY.email} or {COMPANY.phone}. If you have questions about this privacy policy, please
          reach out to us at the same contact details.
        </p>
      </section>
    </div>
  );
}
