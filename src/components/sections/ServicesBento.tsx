import { services } from "@/lib/site-data";
import { ServiceCard } from "@/components/services/ServiceCard";

export function ServicesBento() {
  return (
    <section
      id="services"
      className="scroll-mt-28 px-4 py-16 md:px-8"
      aria-labelledby="services-title"
    >
      <div className="mx-auto w-full max-w-6xl space-y-8">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-700">
            Nos services
          </p>
          <h2
            id="services-title"
            className="text-balance text-3xl text-slate-950 sm:text-4xl"
          >
            Une offre complete pour tous vos besoins de proprete
          </h2>
          <p className="max-w-2xl text-sm text-slate-600 sm:text-base">
            Une execution discrete, des standards eleves et une experience
            client fluide de la prise de contact au controle qualite.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              featured={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
