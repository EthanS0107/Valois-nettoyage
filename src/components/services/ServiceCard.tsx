import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/types/service";

type ServiceCardProps = {
  service: Service;
  featured?: boolean;
};

export function ServiceCard({ service, featured = false }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <article
      className={`liquid-card group relative overflow-hidden rounded-3xl border border-white/80 bg-white/85 p-5 shadow-[0_18px_40px_-30px_rgba(12,24,50,0.9)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_50px_-28px_rgba(12,24,50,0.85)] ${featured ? "md:col-span-2" : ""}`}
      aria-labelledby={`service-${service.id}`}
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${service.accentClass} opacity-90`}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute -right-8 -top-10 h-28 w-28 rounded-full bg-white/65 blur-2xl" />
      <div className="relative space-y-4">
        <div className="inline-flex rounded-lg bg-slate-900 p-2 text-white shadow-md">
          <Icon size={18} aria-hidden="true" />
        </div>
        <h3
          id={`service-${service.id}`}
          className="text-xl font-semibold text-slate-950"
        >
          {service.title}
        </h3>
        <p className="text-sm leading-relaxed text-slate-700">
          {service.description}
        </p>
        <Link
          href={service.href}
          className="inline-flex items-center gap-1 text-sm font-semibold text-slate-900 underline-offset-4 transition group-hover:underline"
          aria-label={`Demander un devis pour ${service.title}`}
        >
          Demander un devis
          <ArrowUpRight size={15} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
