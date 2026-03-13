import type { Metadata } from "next";
import Script from "next/script";
import { Libre_Baskerville, Manrope } from "next/font/google";
import { BackToTopButton } from "@/components/layout/BackToTopButton";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.valois-nettoyage.fr"),
  title: {
    default: "Valois Nettoyage | Proprete industrielle et residentielle",
    template: "%s | Valois Nettoyage",
  },
  description:
    "Entreprise de nettoyage a Crepy-en-Valois (Oise): bureaux, vitrerie, fin de chantier et interventions industrielles. Devis gratuit en moins de 24h.",
  keywords: [
    "nettoyage Crepy-en-Valois",
    "societe de nettoyage Oise",
    "nettoyage bureaux",
    "nettoyage industriel",
    "vitrerie professionnelle",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Valois Nettoyage - Proprete premium dans l'Oise",
    description:
      "Services de proprete pour professionnels et particuliers a Crepy-en-Valois et dans tout l'Oise.",
    url: "https://www.valois-nettoyage.fr",
    siteName: "Valois Nettoyage",
    locale: "fr_FR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Valois Nettoyage",
  image: "https://www.valois-nettoyage.fr/og-image.jpg",
  url: "https://www.valois-nettoyage.fr",
  telephone: "+33 6 00 00 00 00",
  email: "contact@valois-nettoyage.fr",
  address: {
    "@type": "PostalAddress",
    streetAddress: "10 Rue Nationale",
    addressLocality: "Crepy-en-Valois",
    postalCode: "60800",
    addressCountry: "FR",
  },
  areaServed: ["Crepy-en-Valois", "Compiegne", "Senlis", "Oise"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "19:00",
    },
  ],
  sameAs: ["https://www.google.com/maps"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${manrope.variable} ${libreBaskerville.variable} antialiased`}
      >
        <Script
          id="local-business-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
        <BackToTopButton />
      </body>
    </html>
  );
}
