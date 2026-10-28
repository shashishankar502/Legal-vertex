import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumb";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy | Client Data & Confidentiality",
  description:
    "Privacy Policy and client confidentiality standards maintained by Legal Vertex LLP.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Privacy Policy", item: "/privacy-policy" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mb-3">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-500">Effective Date: January 1, 2026</p>
        </header>

        <article className="prose prose-slate space-y-6 text-sm text-slate-700 leading-relaxed">
          <p>
            {siteConfig.legalName} (&quot;Legal Vertex&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to preserving the privacy, confidentiality, and data integrity of our clients, prospective clients, and website visitors.
          </p>

          <h2 className="text-lg font-serif font-bold text-slate-900">1. Information We Collect</h2>
          <p>
            We collect personal identification details (such as names, business email addresses, telephone numbers, and case summaries) exclusively when submitted voluntarily through our secure contact forms or telephone consultations.
          </p>

          <h2 className="text-lg font-serif font-bold text-slate-900">2. Attorney-Client Privilege &amp; Confidentiality</h2>
          <p>
            Prospective client submissions sent through this website are treated with ethical care under applicable bar standards. However, transmission of unsolicited confidential trade secrets prior to the execution of a written engagement letter is discouraged.
          </p>

          <h2 className="text-lg font-serif font-bold text-slate-900">3. Third-Party Disclosures</h2>
          <p>
            We never sell, rent, or commercialize your personal information. Data is disclosed only to authorized service providers bound by strict confidentiality, or where mandated by subpoena or governing law.
          </p>

          <h2 className="text-lg font-serif font-bold text-slate-900">4. Contacting Our Data Privacy Officer</h2>
          <p>
            For privacy inquiries or CCPA/GDPR data requests, contact us at:{" "}
            <a href={`mailto:${siteConfig.contact.email}`} className="text-amber-700 font-medium">
              {siteConfig.contact.email}
            </a>.
          </p>
        </article>
      </div>
    </>
  );
}
