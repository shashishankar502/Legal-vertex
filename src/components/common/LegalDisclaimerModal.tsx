"use client";

import { useEffect, useState } from "react";
import { Scale, ShieldCheck } from "lucide-react";

const STORAGE_KEY = "legalvertex_bci_disclaimer_accepted_v1";

export function LegalDisclaimerModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      const accepted = localStorage.getItem(STORAGE_KEY);
      if (!accepted) {
        setIsOpen(true);
      }
    } catch {
      // Fallback in case of storage permission restriction
      setIsOpen(true);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleAccept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // Ignore storage errors
    }
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="disclaimer-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md transition-all duration-300"
    >
      <div className="relative w-full max-w-2xl max-h-[92vh] sm:max-h-[88vh] bg-white rounded-2xl shadow-2xl border-t-4 border-t-amber-500 border border-slate-200 flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-4 sm:p-6 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 shrink-0 shadow-xs">
              <Scale className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100/80 px-2 py-0.5 rounded-full mb-1">
                <ShieldCheck className="w-3 h-3 text-amber-700" />
                <span>Bar Council of India Compliance</span>
              </div>
              <h2
                id="disclaimer-title"
                className="text-lg sm:text-2xl font-serif font-bold text-slate-900 tracking-tight"
              >
                Legal Disclaimer
              </h2>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <p className="font-semibold text-slate-800 bg-amber-50/60 p-3 rounded-lg border border-amber-200/60 text-xs sm:text-[13px]">
            The Bar Council of India does not permit advocates to advertise or solicit work in any form or manner.
          </p>

          <p>
            By accessing this website,{" "}
            <strong className="text-slate-900 font-semibold">www.legalvertex.legal</strong>, you acknowledge and confirm that you are seeking information about Legal Vertex of your own accord and that there has been no form of solicitation, advertisement, or inducement by Legal Vertex or its members.
          </p>

          <p>
            The information and content available on this website are provided solely for general informational purposes and should not be construed as legal advice, solicitation, or advertisement.
          </p>

          <p>
            No material or information provided on this website should be interpreted as legal advice or as creating an advocate-client relationship. Visitors are advised not to rely solely on the information available on this website when making legal decisions.
          </p>

          <p>
            Legal Vertex shall not be responsible or liable for any consequences arising from actions taken or decisions made based on the information or materials provided on this website.
          </p>

          <p>
            All content, materials, and information published on this website are the intellectual property of Legal Vertex, unless otherwise stated.
          </p>
        </div>

        {/* Footer with sticky action buttons */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 shrink-0 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] sm:text-xs text-slate-500 text-center sm:text-left">
            By clicking &ldquo;Accept&rdquo;, you acknowledge that you have read and understood this disclaimer.
          </p>

          <button
            type="button"
            onClick={handleAccept}
            className="w-full sm:w-auto min-w-[140px] px-8 py-2.5 rounded-lg text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 shadow-md shadow-amber-500/25 active:scale-[0.98] transition-all cursor-pointer text-center"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

