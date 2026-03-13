import Link from "next/link";
import { BriefcaseBusiness } from "lucide-react";

export function RecruitmentSection() {
  return (
    <section
      id="recrutement"
      className="scroll-mt-28 px-4 py-16 md:px-8"
      aria-labelledby="recruitment-title"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-6 overflow-hidden rounded-3xl border border-slate-200/70 bg-gradient-to-br from-slate-950 via-slate-900 to-teal-900 p-8 text-slate-50 shadow-[0_30px_70px_-45px_rgba(2,8,23,0.95)] md:grid-cols-[1fr_auto] md:items-center">
        <div
          className="pointer-events-none absolute inset-0 water-ripple opacity-25"
          aria-hidden="true"
        />
        <div className="space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-cyan-100 backdrop-blur-sm">
            <BriefcaseBusiness size={14} aria-hidden="true" />
            Recrutement
          </p>
          <h2
            id="recruitment-title"
            className="text-3xl leading-tight sm:text-4xl"
          >
            Rejoignez l&apos;equipe Valois
          </h2>
          <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
            Nous recrutons des agents de proprete rigoureux et bienveillants
            pour accompagner notre croissance locale.
          </p>
        </div>
        <Link
          href="/carrieres"
          className="inline-flex h-fit items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
        >
          Voir les offres d&apos;emploi
        </Link>
      </div>
    </section>
  );
}
