"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { practiceAreas } from "@/lib/data/practice-areas";

export function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    practiceArea: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    setTimeout(() => {
      setStatus("success");
    }, 1000);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4.5 sm:p-8 shadow-sm">
      <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900 mb-1.5 sm:mb-2">
        Confidential Legal Inquiry
      </h3>
      <p className="text-[11px] sm:text-xs text-slate-500 mb-4 sm:mb-6">
        All submissions are protected under prospective client confidentiality. An attorney will review your inquiry within 24 business hours.
      </p>

      {status === "success" ? (
        <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-lg text-center space-y-3">
          <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
          <h4 className="text-lg font-semibold text-emerald-900">
            Inquiry Submitted Successfully
          </h4>
          <p className="text-sm text-emerald-800 leading-relaxed">
            Thank you for reaching out to Legal Vertex. Our conflicts committee and intake partner will review your inquiry and follow up promptly.
          </p>
          <button
            type="button"
            onClick={() => {
              setFormData({
                fullName: "",
                email: "",
                phone: "",
                company: "",
                practiceArea: "",
                message: "",
              });
              setStatus("idle");
            }}
            className="mt-4 px-4 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 rounded-md border border-slate-300 transition-colors shadow-xs"
          >
            Submit Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 mb-1">
                Full Name *
              </label>
              <input
                id="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="Jane Doe"
                className="w-full bg-slate-50 border border-slate-300 rounded-md px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-bold text-slate-700 mb-1">
                Business Email *
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="jane@company.com"
                className="w-full bg-slate-50 border border-slate-300 rounded-md px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-xs font-bold text-slate-700 mb-1">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+1 (555) 000-0000"
                className="w-full bg-slate-50 border border-slate-300 rounded-md px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-colors"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-xs font-bold text-slate-700 mb-1">
                Organization / Company
              </label>
              <input
                id="company"
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="Acme Enterprises"
                className="w-full bg-slate-50 border border-slate-300 rounded-md px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-colors"
              />
            </div>
          </div>

          <div>
            <label htmlFor="practiceArea" className="block text-xs font-bold text-slate-700 mb-1">
              Primary Practice Area *
            </label>
            <select
              id="practiceArea"
              required
              value={formData.practiceArea}
              onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
              className="w-full bg-slate-50 border border-slate-300 rounded-md px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-colors"
            >
              <option value="">Select Practice Area...</option>
              {practiceAreas.map((p) => (
                <option key={p.slug} value={p.slug}>
                  {p.title}
                </option>
              ))}
              <option value="other">Other / General Corporate Inquiry</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-bold text-slate-700 mb-1">
              Brief Description of Legal Matter *
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Please provide high-level context without disclosing confidential trade secrets until an NDA/retainer is executed..."
              className="w-full bg-slate-50 border border-slate-300 rounded-md px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-md font-semibold text-sm text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-md shadow-slate-900/10 active:scale-[0.99] disabled:opacity-70"
          >
            {status === "submitting" ? (
              <span>Transmitting Securely...</span>
            ) : (
              <>
                <Send className="w-4 h-4 text-amber-400" />
                <span>Submit Confidential Inquiry</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
