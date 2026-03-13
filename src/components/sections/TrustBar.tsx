import { trustBadges } from "@/lib/site-data";

export function TrustBar() {
  return (
    <section className="px-4 py-8 md:px-8" aria-label="Preuves de confiance">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-center gap-3 rounded-2xl border border-white/70 bg-white/75 p-4 shadow-[0_15px_35px_-28px_rgba(12,24,50,0.8)] backdrop-blur-sm">
        {trustBadges.map((badge) => (
          <span
            key={badge}
            className="rounded-full border border-slate-200 bg-slate-50/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-slate-600"
          >
            {badge}
          </span>
        ))}
      </div>
    </section>
  );
}
