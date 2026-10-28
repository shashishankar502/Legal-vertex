import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { practiceAreas } from "@/lib/data/practice-areas";
import { Scale, Phone, Mail, MapPin, ShieldCheck } from "lucide-react";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-slate-100 text-slate-700 border-t border-slate-200" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-7 sm:gap-10">
          {/* Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-amber-400 font-bold">
                <Scale className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                LEGAL <span className="text-amber-600 font-serif">VERTEX</span>
              </span>
            </Link>
            <p className="text-sm text-slate-600 max-w-sm leading-relaxed">
              Legal Vertex LLP delivers aggressive litigation defense, strategic corporate M&amp;A advisory, intellectual property counseling, and regulatory compliance guidance for ambitious organizations.
            </p>
            <div className="flex items-center gap-2 text-xs text-amber-700 font-medium pt-2">
              <ShieldCheck className="w-4 h-4 text-amber-600" />
              <span>Dedicated Corporate, Litigation &amp; Intellectual Property Counsel</span>
            </div>
          </div>

          {/* Practice Areas Links */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-wider text-slate-900 font-bold">
              Practice Areas
            </h3>
            <ul className="space-y-2 text-sm">
              {practiceAreas.slice(0, 5).map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/practice-areas/${area.slug}`}
                    className="text-slate-600 hover:text-amber-600 transition-colors"
                  >
                    {area.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/practice-areas"
                  className="text-amber-700 font-semibold hover:text-amber-600 transition-colors inline-block pt-1"
                >
                  View All Practices &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-wider text-slate-900 font-bold">
              The Firm
            </h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <Link href="/about" className="hover:text-amber-600 transition-colors">
                  About Our Firm
                </Link>
              </li>
              <li>
                <Link href="/attorneys" className="hover:text-amber-600 transition-colors">
                  Our Attorneys
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-amber-600 transition-colors">
                  Legal Insights &amp; News
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-600 transition-colors">
                  Schedule Consultation
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-amber-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-amber-600 transition-colors">
                  Terms of Representation
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact & NAP */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-wider text-slate-900 font-bold">
              Contact &amp; Headquarters
            </h3>
            <address className="not-italic text-sm text-slate-600 space-y-2.5">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  {siteConfig.contact.address.streetAddress}
                  <br />
                  {siteConfig.contact.address.addressLocality},{" "}
                  {siteConfig.contact.address.addressRegion}{" "}
                  {siteConfig.contact.address.postalCode}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-600 shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                  className="hover:text-amber-600 transition-colors font-medium text-slate-800"
                >
                  {siteConfig.contact.displayPhone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-600 shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-amber-600 transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </address>
            <div className="pt-2 text-xs text-slate-500">
              Hours: Mon &ndash; Fri (8:30 AM &ndash; 6:30 PM PST)
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-200 text-xs text-slate-500 space-y-4">
          <p className="leading-relaxed">
            <strong>Attorney Advertising Notice:</strong> The materials provided on this website are for informational purposes only and do not constitute formal legal advice. Viewing this information or submitting an inquiry through this site does not create an attorney-client relationship. Prior case results do not guarantee similar outcomes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div>
              &copy; {currentYear} {siteConfig.legalName}. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <Link href="/privacy-policy" className="hover:text-slate-800">
                Privacy Policy
              </Link>
              <span>&bull;</span>
              <Link href="/terms" className="hover:text-slate-800">
                Terms of Use
              </Link>
              <span>&bull;</span>
              <Link href="/sitemap.xml" className="hover:text-slate-800">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
