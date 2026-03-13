import Script from "next/script";
import { HeroSection } from "@/components/sections/HeroSection";
import { RecruitmentSection } from "@/components/sections/RecruitmentSection";
import { ServicesBento } from "@/components/sections/ServicesBento";
import { SocialProof } from "@/components/sections/SocialProof";
import { TrustBar } from "@/components/sections/TrustBar";

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Nettoyage professionnel et residentiel",
  provider: {
    "@type": "LocalBusiness",
    name: "Valois Nettoyage",
    areaServed: "Oise",
  },
  serviceType: [
    "Nettoyage de bureaux",
    "Nettoyage de fin de chantier",
    "Nettoyage de vitrerie",
    "Nettoyage industriel",
  ],
};

export default function Home() {
  return (
    <>
      <Script
        id="service-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <div className="relative min-h-screen overflow-hidden">
        <div className="pointer-events-none absolute inset-0 grid-pattern opacity-35" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[40vh] water-ripple opacity-55" />
        <div className="water-orb pointer-events-none absolute -left-40 top-28 h-96 w-96 rounded-full bg-cyan-300/30 blur-3xl" />
        <div className="water-orb water-orb-slow pointer-events-none absolute -right-52 top-52 h-[26rem] w-[26rem] rounded-full bg-teal-300/25 blur-3xl" />
        <div className="water-orb pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-sky-200/35 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-56 water-ripple opacity-40" />
        <main className="relative z-10">
          <HeroSection />
          <TrustBar />
          <ServicesBento />
          <RecruitmentSection />
          <SocialProof />
        </main>
      </div>
    </>
  );
}
