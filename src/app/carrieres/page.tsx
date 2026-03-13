import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { CareerApplicationForm } from "@/components/forms/CareerApplicationForm";

export const metadata: Metadata = {
  title: "Carrieres",
  description:
    "Consultez les offres d'emploi Valois Nettoyage a Crepy-en-Valois et candidatez rapidement.",
};

const jobs = [
  {
    id: "agent-proprete",
    title: "Agent de proprete polyvalent",
    type: "CDI - Temps plein",
    location: "Crepy-en-Valois (60)",
  },
  {
    id: "chef-equipe",
    title: "Chef d'equipe nettoyage industriel",
    type: "CDI",
    location: "Oise - interventions mobiles",
  },
];

export default function CarrieresPage() {
  return (
    <main className="px-4 pb-20 pt-10 md:px-8">
      <section className="mx-auto w-full max-w-5xl space-y-7">
        <Link
          href="/"
          className="inline-flex text-sm font-semibold text-slate-600 underline-offset-4 hover:text-slate-900 hover:underline"
        >
          Retour a l&apos;accueil
        </Link>
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">
            Recrutement
          </p>
          <h1 className="text-3xl text-slate-950 sm:text-4xl">
            Rejoignez l&apos;equipe Valois
          </h1>
          <p className="text-sm text-slate-700 sm:text-base">
            Nous cherchons des profils engages, fiables et orientes qualite.
          </p>
        </div>

        <article className="rounded-2xl border border-teal-200 bg-teal-50/80 p-5 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-teal-700">
            Contact rapide
          </p>
          <h2 className="mt-2 text-xl font-semibold text-slate-900">
            Vous preferez appeler directement ?
          </h2>
          <p className="mt-1 text-sm text-slate-700">
            Notre equipe recrutement vous repond du lundi au vendredi.
          </p>
          <a
            href="tel:+33600000000"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            <Phone size={16} aria-hidden="true" />
            Appeler le 06 00 00 00 00
          </a>
        </article>

        <div className="grid gap-4">
          {jobs.map((job) => (
            <article
              key={job.id}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h2 className="text-xl font-semibold text-slate-900">
                {job.title}
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                {job.type} - {job.location}
              </p>
              <Link
                href="mailto:recrutement@valois-nettoyage.fr?subject=Candidature%20Valois%20Nettoyage"
                className="mt-4 inline-flex rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Postuler
              </Link>
            </article>
          ))}
        </div>

        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-semibold text-slate-900">
            Candidature en ligne
          </h2>
          <p className="mt-2 text-sm text-slate-600 sm:text-base">
            Completez le formulaire ci-dessous pour postuler directement sur le
            site.
          </p>
          <div className="mt-5">
            <CareerApplicationForm
              jobs={jobs.map((job) => ({ id: job.id, title: job.title }))}
            />
          </div>
        </article>
      </section>
    </main>
  );
}
