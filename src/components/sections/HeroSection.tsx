"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="px-4 pb-12 pt-6 md:px-8 md:pt-12">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0.88, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="space-y-6"
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-teal-200/70 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-teal-800 backdrop-blur">
            <Sparkles size={14} aria-hidden="true" />
            Proprete premium dans l&apos;Oise
          </p>
          <h1 className="text-balance text-4xl leading-tight text-slate-950 sm:text-5xl md:text-6xl">
            Transformez vos espaces en vitrine de confiance
          </h1>
          <p className="max-w-xl text-pretty text-base text-slate-700 sm:text-lg">
            Valois Nettoyage accompagne entreprises et particuliers a
            Crepy-en-Valois avec des protocoles fiables, un suivi qualite strict
            et un service reactif.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/devis"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Demander un devis gratuit
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link
              href="/carrieres"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-500"
            >
              Rejoindre l&apos;equipe
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-3 pt-2">
            <div className="rounded-xl border border-white/60 bg-white/75 p-3 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.1em] text-slate-500">
                Clients
              </p>
              <p className="text-xl font-bold text-slate-900">+350</p>
            </div>
            <div className="rounded-xl border border-white/60 bg-white/75 p-3 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.1em] text-slate-500">
                Note
              </p>
              <p className="text-xl font-bold text-slate-900">4.9/5</p>
            </div>
            <div className="rounded-xl border border-white/60 bg-white/75 p-3 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.1em] text-slate-500">
                Reponse
              </p>
              <p className="text-xl font-bold text-slate-900">&lt; 24h</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0.9, scale: 0.985 }}
          animate={{ opacity: 1, scale: 1, y: [0, -4, 0] }}
          transition={{
            duration: 0.75,
            ease: "easeOut",
            delay: 0.1,
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
          className="liquid-card relative overflow-hidden rounded-3xl border border-white/60 bg-gradient-to-br from-[#03122c] via-[#0a2b4f] to-[#0a7b74] p-7 text-slate-100 shadow-[0_35px_75px_-35px_rgba(10,20,45,0.8)]"
          aria-label="Valeurs et engagements Valois Nettoyage"
        >
          <div className="pointer-events-none absolute inset-0 water-ripple opacity-25" />
          <div className="absolute -right-10 -top-8 h-36 w-36 rounded-full bg-cyan-300/35 blur-2xl" />
          <div className="absolute -left-8 bottom-0 h-28 w-28 rounded-full bg-emerald-200/35 blur-2xl" />
          <p className="text-sm font-medium text-cyan-100/95">
            Interventions B2B et B2C
          </p>
          <p className="mt-4 text-2xl font-semibold leading-tight">
            Controle qualite continu et interlocuteur unique pour chaque
            contrat.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-xl border border-white/15 bg-white/10 p-3">
              Protocoles sur mesure
            </div>
            <div className="rounded-xl border border-white/15 bg-white/10 p-3">
              Materiel pro certifie
            </div>
            <div className="rounded-xl border border-white/15 bg-white/10 p-3">
              Equipe locale reactive
            </div>
            <div className="rounded-xl border border-white/15 bg-white/10 p-3">
              Reporting transparent
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
