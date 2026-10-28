"use client";

import { useState } from "react";
import { FAQItem } from "@/lib/data/faqs";
import { ChevronDown } from "lucide-react";

interface FaqSectionProps {
  faqs: FAQItem[];
}

export function FaqSection({ faqs }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-3 sm:space-y-4">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        const panelId = `faq-panel-${idx}`;
        const headerId = `faq-header-${idx}`;

        return (
          <div
            key={faq.question}
            className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-xs transition-colors"
          >
            <h3>
              <button
                id={headerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(idx)}
                className="w-full py-3.5 px-4 sm:py-4.5 sm:px-6 text-left font-serif font-bold text-slate-900 flex items-center justify-between gap-3 hover:text-amber-700 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <span className="text-sm sm:text-base leading-snug">{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 sm:w-5 sm:h-5 text-amber-600 shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              hidden={!isOpen}
              className={`px-4 pb-4 sm:px-6 sm:pb-5 text-xs sm:text-sm leading-relaxed text-slate-600 border-t border-slate-100 pt-2.5 sm:pt-3 ${
                isOpen ? "block" : "hidden"
              }`}
            >
              {faq.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
