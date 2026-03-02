import { COMPANY } from "@/lib/company";

export const metadata = {
  title: "Terms of Service | DR Green Energies",
  description: "Terms of service for using the DR Green Energies website and our solar EPC services.",
};

export default function TermsPage() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-semibold text-black">Terms of Service</h1>
        <p className="mt-2 text-sm text-neutral-500">
          Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
        </p>
        <p className="mt-4 max-w-3xl text-sm text-neutral-600">
          Welcome to the website of {COMPANY.name}. By accessing or using this website, you agree to
          be bound by these Terms of Service. Please read them carefully.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-black">Use of website</h2>
        <p className="max-w-3xl text-sm text-neutral-600">
          This website is provided for informational purposes and to help you learn about our solar
          EPC services and request consultations or proposals. You agree to use the site only for lawful
          purposes and not to misuse, disrupt, or attempt to gain unauthorized access to our systems
          or data.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-black">Services and proposals</h2>
        <p className="max-w-3xl text-sm text-neutral-600">
          Any solar savings estimates, proposals, or quotes provided through this website or by our
          team are indicative and subject to site survey, technical design, and final commercial terms.
          Formal agreements will be governed by separate contracts between you and {COMPANY.name}.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-black">Intellectual property</h2>
        <p className="max-w-3xl text-sm text-neutral-600">
          All content on this website, including text, images, logos, and design, is the property of{" "}
          {COMPANY.name} or its licensors. You may not copy, reproduce, or use such content for
          commercial purposes without our prior written consent.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-black">Disclaimer</h2>
        <p className="max-w-3xl text-sm text-neutral-600">
          We strive to keep the information on this website accurate and up to date. However, we do not
          warrant that the content is complete or error-free. Subsidy and financing information is
          subject to government and lender policies and may change. For the latest details, please
          contact us directly.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-black">Limitation of liability</h2>
        <p className="max-w-3xl text-sm text-neutral-600">
          To the extent permitted by law, {COMPANY.name} shall not be liable for any indirect,
          incidental, or consequential damages arising from your use of this website or reliance on
          its content. Liability for our contracted solar EPC services will be as set out in the
          relevant project agreement.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-black">Governing law and contact</h2>
        <p className="max-w-3xl text-sm text-neutral-600">
          These terms are governed by the laws of India. For any questions about these Terms of
          Service, please contact us at {COMPANY.email} or {COMPANY.phone}.
        </p>
      </section>
    </div>
  );
}
