"use client";

import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 450);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-5 right-5 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/70 bg-slate-900 text-white shadow-lg transition hover:bg-slate-800"
      aria-label="Remonter en haut de la page"
    >
      <ChevronUp size={18} aria-hidden="true" />
    </button>
  );
}
