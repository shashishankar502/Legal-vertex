import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { JsonLd, getBreadcrumbSchema } from "@/components/seo/JsonLd";

export interface BreadcrumbItem {
  name: string;
  item: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const fullItems = [{ name: "Home", item: "/" }, ...items];

  return (
    <>
      <JsonLd data={getBreadcrumbSchema(fullItems)} />
      <nav aria-label="Breadcrumb" className="py-3.5 px-4 sm:px-6 max-w-7xl mx-auto border-b border-slate-200/60">
        <ol className="flex items-center flex-wrap gap-2 text-xs sm:text-sm text-slate-500">
          {fullItems.map((crumb, idx) => {
            const isLast = idx === fullItems.length - 1;
            return (
              <li key={crumb.item} className="flex items-center gap-2">
                {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-slate-400" />}
                {isLast ? (
                  <span className="text-amber-700 font-semibold" aria-current="page">
                    {crumb.name}
                  </span>
                ) : (
                  <Link
                    href={crumb.item}
                    className="hover:text-slate-900 transition-colors flex items-center gap-1 text-slate-600"
                  >
                    {idx === 0 && <Home className="w-3.5 h-3.5" />}
                    <span>{crumb.name}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
