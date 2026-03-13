import { Star } from "lucide-react";
import { testimonials } from "@/lib/site-data";

export function SocialProof() {
  return (
    <section
      id="avis"
      className="scroll-mt-28 px-4 pb-24 pt-10 md:px-8"
      aria-labelledby="testimonials-title"
    >
      <div className="mx-auto w-full max-w-6xl space-y-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-700">
              Preuve sociale
            </p>
            <h2
              id="testimonials-title"
              className="text-balance text-3xl text-slate-950 sm:text-4xl"
            >
              Ce que disent nos clients sur Google
            </h2>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-800">
            <Star size={16} className="fill-amber-400 text-amber-400" />
            Note moyenne 4.9/5
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.id}
              className="float-soft rounded-3xl border border-white/80 bg-white/90 p-5 shadow-[0_16px_40px_-32px_rgba(12,24,50,0.95)]"
              style={{ animationDelay: `${index * 0.45}s` }}
              aria-label={`Temoignage de ${testimonial.author}`}
            >
              <div
                className="mb-3 flex items-center gap-1"
                aria-label={`${testimonial.rating} sur 5`}
              >
                {Array.from({ length: testimonial.rating }).map((_, idx) => (
                  <Star
                    key={idx}
                    size={16}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-slate-700">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <p className="mt-4 text-sm font-semibold text-slate-900">
                {testimonial.author}
              </p>
              <p className="text-xs text-slate-500">{testimonial.company}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
