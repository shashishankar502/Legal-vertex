import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumb";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of Use & Legal Disclaimers",
  description: "Terms of website use and attorney advertising disclosures for Legal Vertex LLP.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Terms of Use", item: "/terms" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mb-3">
            Terms of Use &amp; Attorney Advertising Disclaimers
          </h1>
          <p className="text-xs text-slate-500">Effective Date: January 1, 2026</p>
        </header>

        <article className="prose prose-slate space-y-6 text-sm text-slate-700 leading-relaxed">
          <h2 className="text-lg font-serif font-bold text-slate-900">1. No Attorney-Client Relationship</h2>
          <p>
            The information contained on this website is provided for informational and educational purposes only. Neither access to nor receipt of these materials creates an attorney-client relationship between {siteConfig.legalName} and any reader or user.
          </p>

          <h2 className="text-lg font-serif font-bold text-slate-900">2. Attorney Advertising</h2>
          <p>
            In certain jurisdictions, this website may be deemed attorney advertising. Prior case outcomes, settlements, or representative client matters do not guarantee or predict a similar outcome in any future legal matter.
          </p>

          <h2 className="text-lg font-serif font-bold text-slate-900">3. Jurisdictional Limitations</h2>
          <p>
            Attorneys at {siteConfig.name} are licensed to practice law in the specific jurisdictions identified in their respective professional biographies. We do not seek to represent individuals or entities in jurisdictions where this website fails to comply with applicable legal or ethical rules.
          </p>
        </article>
      </div>
    </>
  );
}
