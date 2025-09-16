import Head from "next/head";
import AttempoLanding from "@/components/AttempoLanding";
import Footer from "../components/Footer"; // ✅ ruta relativa y caso correcto

export default function Home() {
  const title = "Attempo Choir — Música que emociona";
  const description =
    "Attempo Choir: grupo vocal para bodas y eventos. Armonía, elegancia y emoción en cada actuación.";
  const siteUrl = "https://attempochoir.com";
  const ogImage = "/og.jpg";
  const logoPath = "/logo_attempo_positivo.png";

  const ld = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    name: "Attempo Choir",
    url: siteUrl,
    logo: logoPath,
    email: "attempochoir@gmail.com",
    telephone: "+34 660 550 452",
    sameAs: [
      "https://www.instagram.com/attempochoir/",
      "https://www.facebook.com/profile.php?id=61574412730911",
      "https://www.tiktok.com/@attempo.choir"
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "Bookings",
        email: "attempochoir@gmail.com",
        telephone: "+34 660 550 452",
        areaServed: "ES",
        availableLanguage: ["es", "en"]
      }
    ],
    member: [
      { "@type": "Person", name: "Lola Morales", jobTitle: "Alto" },
      { "@type": "Person", name: "César Leal", jobTitle: "Bajo" },
      { "@type": "Person", name: "Daniel Díaz", jobTitle: "Tenor" },
      { "@type": "Person", name: "Miguel Pérez", jobTitle: "Tenor" },
      { "@type": "Person", name: "Natacha Sáez", alternateName: "Nat Sáez", jobTitle: "Soprano" },
      { "@type": "Person", name: "Carlos Hernández", jobTitle: "Piano" }
    ]
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:site_name" content="Attempo Choir" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <meta name="theme-color" content="#6E3AFF" />
      </Head>

      <AttempoLanding />
      <Footer />
    </>
  );
}



