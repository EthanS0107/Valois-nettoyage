import type { Metadata } from "next";
import Link from "next/link";

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
      </section>
    </main>
  );
}
