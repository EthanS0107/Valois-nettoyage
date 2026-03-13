import type { LucideIcon } from "lucide-react";

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  accentClass: string;
};

export type Testimonial = {
  id: string;
  author: string;
  company: string;
  rating: number;
  quote: string;
};
