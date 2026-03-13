import type { Metadata } from "next";
import Link from "next/link";
import { QuoteRequestForm } from "@/components/forms/QuoteRequestForm";

export const metadata: Metadata = {
  title: "Demande de devis",
  description:
    "Demandez votre devis gratuit pour un service de nettoyage professionnel a Crepy-en-Valois et dans l'Oise.",
};

export default function DevisPage() {
  return (
    <main className="px-4 pb-20 pt-10 md:px-8">
      <section className="mx-auto w-full max-w-4xl space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">
        <Link
          href="/"
          className="inline-flex text-sm font-semibold text-slate-600 underline-offset-4 hover:text-slate-900 hover:underline"
        >
          Retour a l&apos;accueil
        </Link>
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">
            Conversion
          </p>
          <h1 className="text-3xl text-slate-950 sm:text-4xl">
            Demander un devis gratuit
          </h1>
          <p className="text-sm text-slate-700 sm:text-base">
            Decrivez votre besoin, nous vous recontactons en moins de 24h
            ouvrables.
          </p>
        </div>

        <QuoteRequestForm />
      </section>
    </main>
  );
}
