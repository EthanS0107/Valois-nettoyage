"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("services");
  const inHome = pathname === "/";

  const navItems = useMemo(
    () => [
      {
        key: "services",
        label: "Services",
        href: `${inHome ? "" : "/"}#services`,
      },
      {
        key: "recrutement",
        label: "Recrutement",
        href: `${inHome ? "" : "/"}#recrutement`,
      },
      { key: "avis", label: "Avis clients", href: `${inHome ? "" : "/"}#avis` },
    ],
    [inHome],
  );

  useEffect(() => {
    if (!inHome) {
      setActiveSection("none");
      return;
    }

    const sectionIds = ["services", "recrutement", "avis"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => node !== null);

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-35% 0px -50% 0px",
        threshold: [0.2, 0.45, 0.7],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [inHome]);

  return (
    <header className="sticky top-0 z-50 px-4 py-4 md:px-8">
      <nav
        className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-2xl border border-white/65 bg-white/70 px-4 py-3 shadow-[0_15px_45px_-24px_rgba(8,20,45,0.7)] backdrop-blur-2xl"
        aria-label="Navigation principale"
      >
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-slate-900"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-teal-600 to-cyan-500 text-sm font-bold text-white shadow-md">
            VN
          </span>
          <span className="text-lg font-semibold tracking-tight">
            Valois Nettoyage
          </span>
        </Link>

        <ul className="hidden items-center gap-7 min-[900px]:flex">
          {!inHome && (
            <li>
              <Link
                href="/"
                className="text-sm font-semibold text-slate-700 transition hover:text-slate-950"
              >
                Accueil
              </Link>
            </li>
          )}
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`rounded-full px-3 py-1.5 text-sm font-semibold transition ${inHome && activeSection === item.key ? "bg-slate-900 text-white" : "text-slate-700 hover:text-slate-950"}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden min-[900px]:block">
          <Link
            href="/devis"
            className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-slate-50 transition hover:bg-slate-800"
          >
            Demander un devis gratuit
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center rounded-md p-2 text-slate-700 min-[900px]:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Ouvrir le menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isOpen && (
        <div
          id="mobile-menu"
          className="mx-auto mt-2 flex w-full max-w-6xl flex-col gap-4 rounded-2xl border border-white/70 bg-white/90 px-4 py-4 shadow-[0_20px_40px_-24px_rgba(8,20,45,0.8)] backdrop-blur-xl min-[900px]:hidden"
        >
          {!inHome && (
            <Link
              href="/"
              className="text-sm font-medium text-slate-700"
              onClick={() => setIsOpen(false)}
            >
              Accueil
            </Link>
          )}
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-lg px-2 py-1 text-sm font-medium ${inHome && activeSection === item.key ? "bg-slate-900 text-white" : "text-slate-700"}`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/devis"
            className="rounded-full bg-slate-900 px-4 py-2 text-center text-sm font-semibold text-slate-50"
            onClick={() => setIsOpen(false)}
          >
            Demander un devis gratuit
          </Link>
        </div>
      )}

      <div className="pointer-events-none fixed inset-x-0 bottom-4 z-40 px-4 min-[900px]:hidden">
        <Link
          href="/devis"
          className="pointer-events-auto mx-auto block w-full max-w-6xl rounded-full bg-slate-900 px-5 py-3 text-center text-sm font-semibold text-white shadow-[0_16px_38px_-20px_rgba(8,20,45,0.85)]"
        >
          Demander un devis gratuit
        </Link>
      </div>
    </header>
  );
}
