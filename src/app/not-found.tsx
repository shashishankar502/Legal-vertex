import Link from "next/link";
import { Scale, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-20 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-16 h-16 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center mx-auto text-amber-700">
          <Scale className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <span className="text-xs font-bold tracking-wider uppercase text-amber-700">
            Error 404
          </span>
          <h1 className="text-3xl font-serif font-bold text-slate-900">
            Page Not Located
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            The legal brief, attorney biography, or resource you were seeking may have been relocated or updated.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-xs"
          >
            <ArrowLeft className="w-4 h-4 text-amber-400" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/practice-areas"
            className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-md text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 transition-colors shadow-xs"
          >
            Browse Practice Areas
          </Link>
        </div>
      </div>
    </div>
  );
}
