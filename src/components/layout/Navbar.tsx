"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { Phone, Menu, X, Shield } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Practice Areas", href: "/practice-areas" },
    { name: "Attorneys", href: "/attorneys" },
    { name: "Insights", href: "/insights" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Utility Bar (White Background) */}
      <div className="bg-white text-slate-700 text-[11px] sm:text-xs py-2 px-3 sm:px-6 border-b border-slate-200 relative z-40">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-slate-600 truncate">
            <Shield className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span className="truncate font-semibold text-slate-800">Civil, Criminal &amp; Taxation Law Counsel</span>
            <span className="hidden md:inline text-slate-300">|</span>
            <span className="hidden md:inline text-slate-500 text-[11px]">
              Patna &amp; Bengaluru Offices &bull; Nationwide Legal Counsel
            </span>
          </div>
          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
              className="flex items-center gap-1.5 text-slate-800 font-semibold hover:text-amber-600 transition-colors"
            >
              <Phone className="w-3 h-3 text-amber-600 shrink-0" />
              <span>{siteConfig.contact.displayPhone}</span>
            </a>
            <span className="hidden sm:inline text-slate-300">|</span>
            <a
              href={`tel:${siteConfig.contact.secondaryPhone.replace(/[^0-9+]/g, "")}`}
              className="hidden sm:flex items-center gap-1 text-slate-800 font-semibold hover:text-amber-600 transition-colors"
            >
              <span>{siteConfig.contact.secondaryDisplayPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar (Dark Blue Background) */}
      <header className="sticky top-0 z-50 bg-[#0B1528]/95 backdrop-blur-md border-b border-slate-800/80 shadow-md shadow-black/20 text-white transition-colors">
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          <div className="flex items-center justify-between h-18 sm:h-22">
            {/* Logo & Tagline */}
            <Link
              href="/"
              className="flex items-end gap-2 sm:gap-2.5 group focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-md py-1"
              aria-label="Legal Vertex Home"
            >
              <Image
                src="/logo.png"
                alt="Legal Vertex"
                width={280}
                height={144}
                priority
                className="h-12 sm:h-14 md:h-16 lg:h-[68px] w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_2px_14px_rgba(217,119,6,0.3)]"
              />
              <span className="cursive-tagline text-amber-300/90 group-hover:text-amber-200 transition-colors text-xs sm:text-[13px] md:text-sm select-none translate-y-[2px] sm:translate-y-[3px] self-end drop-shadow-[0_1px_6px_rgba(251,191,36,0.25)] whitespace-nowrap">
                ... Setting the Standards
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-semibold text-slate-200 hover:text-amber-400 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-400 hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-md text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 transition-all shadow-md shadow-amber-500/20 hover:shadow-amber-500/30 active:scale-[0.98]"
              >
                Request Consultation
              </Link>
            </div>

            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-slate-200 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-amber-400"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-800 bg-[#0B1528] px-4 pt-2 pb-5 space-y-1 shadow-2xl">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-md text-sm font-semibold text-slate-200 hover:text-amber-400 hover:bg-white/5 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3 border-t border-slate-800/80">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center py-2.5 rounded-md text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-colors shadow-md"
              >
                Request Consultation
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
