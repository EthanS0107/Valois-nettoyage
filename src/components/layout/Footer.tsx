import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 mt-16 border-t border-white/70 bg-white/75 backdrop-blur-xl">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 md:grid-cols-4 md:px-8">
        <div className="space-y-3 md:col-span-2">
          <div className="inline-flex items-center gap-2 text-slate-900">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-teal-600 to-cyan-500 text-sm font-bold text-white shadow-md">
              VN
            </span>
            <span className="text-lg font-semibold tracking-tight">
              Valois Nettoyage
            </span>
          </div>
          <p className="max-w-lg text-sm leading-relaxed text-slate-600">
            Solutions de proprete premium pour professionnels et particuliers a
            Crepy-en-Valois et dans tout l&apos;Oise.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-base font-semibold text-slate-900">Navigation</h2>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>
              <Link href="/" className="transition hover:text-slate-900">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/#services" className="transition hover:text-slate-900">
                Services
              </Link>
            </li>
            <li>
              <Link href="/devis" className="transition hover:text-slate-900">
                Demander un devis
              </Link>
            </li>
            <li>
              <Link href="/carrieres" className="transition hover:text-slate-900">
                Carrieres
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-base font-semibold text-slate-900">Contact</h2>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="inline-flex items-start gap-2">
              <MapPin size={16} className="mt-0.5" aria-hidden="true" />
              <span>Crepy-en-Valois, Oise</span>
            </li>
            <li>
              <a
                href="tel:+33600000000"
                className="inline-flex items-center gap-2 transition hover:text-slate-900"
              >
                <Phone size={16} aria-hidden="true" />
                06 00 00 00 00
              </a>
            </li>
            <li>
              <a
                href="mailto:contact@valois-nettoyage.fr"
                className="inline-flex items-center gap-2 transition hover:text-slate-900"
              >
                <Mail size={16} aria-hidden="true" />
                contact@valois-nettoyage.fr
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200/80 px-4 py-4 text-center text-xs text-slate-500 md:px-8">
        © {year} Valois Nettoyage. Tous droits reserves.
      </div>
    </footer>
  );
}
