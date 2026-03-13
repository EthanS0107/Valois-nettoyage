import {
  Building2,
  Factory,
  Sparkles,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { Service, Testimonial } from "@/types/service";

export const trustBadges: string[] = [
  "Interventions 7j/7",
  "Agents formes et assures",
  "Devis en 24h",
  "Suivi qualite sur site",
];

type ServiceSeed = Omit<Service, "icon"> & { icon: LucideIcon };

export const services: ServiceSeed[] = [
  {
    id: "bureaux",
    title: "Nettoyage de bureaux",
    description:
      "Des espaces de travail nets et sains pour vos collaborateurs et vos visiteurs.",
    icon: Building2,
    href: "/devis",
    accentClass: "from-cyan-500/20 to-transparent",
  },
  {
    id: "chantier",
    title: "Fin de chantier",
    description:
      "Remise en etat complete pour livrer un site impeccable, sans retard.",
    icon: Wrench,
    href: "/devis",
    accentClass: "from-amber-500/20 to-transparent",
  },
  {
    id: "vitrerie",
    title: "Vitrerie",
    description:
      "Des vitrages parfaitement transparents pour valoriser votre image.",
    icon: Sparkles,
    href: "/devis",
    accentClass: "from-sky-500/20 to-transparent",
  },
  {
    id: "industriel",
    title: "Nettoyage industriel",
    description:
      "Protocoles adaptes a vos contraintes de production et de securite.",
    icon: Factory,
    href: "/devis",
    accentClass: "from-emerald-500/20 to-transparent",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    author: "Camille R.",
    company: "Cabinet medical a Senlis",
    rating: 5,
    quote:
      "Equipe ponctuelle, tres professionnelle et site toujours impeccable le matin.",
  },
  {
    id: "t2",
    author: "Nicolas D.",
    company: "Syndic a Crepy-en-Valois",
    rating: 5,
    quote:
      "Interventions rapides, communication fluide et vraie rigueur de suivi.",
  },
  {
    id: "t3",
    author: "Sophie M.",
    company: "Particulier a Compiegne",
    rating: 5,
    quote:
      "Excellent resultat apres travaux. Devis clair et equipe tres respectueuse.",
  },
];
