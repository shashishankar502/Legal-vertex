import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { practiceAreas } from "@/lib/data/practice-areas";
import { Phone, Mail, MapPin, ShieldCheck } from "lucide-react";

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
            <Link href="/" className="inline-block group focus:outline-none" aria-label="Legal Vertex Home">
              <Image
                src="/logo.png"
                alt="Legal Vertex"
                width={260}
                height={133}
                className="h-12 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
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
              Office Locations
            </h3>
            <address className="not-italic text-xs sm:text-sm text-slate-600 space-y-3">
              {/* Patna */}
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 font-semibold text-xs">Office 1 (Patna):</strong>
                  <span className="text-[11px] sm:text-xs leading-relaxed block">
                    Flat No - 703, 7th Floor, Venus Empire, Khagaul Road, Patna &ndash; 801503
                  </span>
                </div>
              </div>

              {/* Bengaluru */}
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 font-semibold text-xs">Office 2 (Bengaluru):</strong>
                  <span className="text-[11px] sm:text-xs leading-relaxed block">
                    Flat No - 007, Ground Floor, Block-A, Shakti Sprinkle Apt, Begur, Bengaluru &ndash; 560068
                  </span>
                </div>
              </div>

              {/* Contact info */}
              <div className="pt-1 space-y-1.5 border-t border-slate-200">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <div className="flex flex-wrap items-center gap-x-2 text-xs">
                    <a
                      href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                      className="hover:text-amber-600 transition-colors font-semibold text-slate-800"
                    >
                      {siteConfig.contact.displayPhone}
                    </a>
                    <span className="text-slate-400">/</span>
                    <a
                      href={`tel:${siteConfig.contact.secondaryPhone.replace(/[^0-9+]/g, "")}`}
                      className="hover:text-amber-600 transition-colors font-semibold text-slate-800"
                    >
                      {siteConfig.contact.secondaryDisplayPhone}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="hover:text-amber-600 transition-colors text-xs"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>
            </address>
            <div className="pt-1 text-[11px] text-slate-500">
              Hours: Mon &ndash; Fri (9:00 AM &ndash; 7:00 PM IST)
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
