import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import YouTubePlaylist from "@/components/YouTubePlaylist";
import Script from "next/script";

export default function AttempoLanding() {
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1) Recogemos los campos del form
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // 2) Intentamos ejecutar reCAPTCHA v3
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    let token = "not-verified"; // fallback por defecto

    if (siteKey && window.grecaptcha) {
      try {
        token = await window.grecaptcha.execute(siteKey, { action: "contact" });
      } catch (err) {
        console.warn("reCAPTCHA falló, enviando sin validación:", err);
      }
    } else {
      console.warn("reCAPTCHA no cargado (posible Adblock). Se envía sin validación.");
    }

    // 3) Añadimos token (real o fallback)
    data.recaptchaToken = token;

    // 4) Enviamos al backend
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        console.error("API /api/contact status:", res.status, "body:", text);
        alert("Hubo un problema al enviar el mensaje. Inténtalo de nuevo.");
        return;
      }

      setSent(true);
      e.target.reset();
    } catch (err) {
      console.error("Fetch error:", err);
      alert("Hubo un problema al enviar el mensaje. Inténtalo de nuevo.");
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <HeadTags />

      {/* Script reCAPTCHA */}
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
        strategy="afterInteractive"
      />

      {/* HEADER */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo />
            <span className="font-semibold tracking-tight text-lg">Attempo Choir</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="/quienes-somos" className="hover:opacity-70">Quiénes somos</a>
            <a href="#servicios" className="hover:opacity-70">Servicios</a>
            <a href="#contacto" className="hover:opacity-70">Contacto</a>
          </nav>
          <a
            className="hidden md:inline-flex"
            href="https://wa.me/34660550452"
            target="_blank"
            rel="noreferrer"
          >
            <Button className="rounded-2xl">Contacta con nosotros</Button>
          </a>
        </div>
      </header>

      {/* ... resto del contenido igual que lo tienes ahora ... */}

      {/* CONTACTO */}
      <section id="contacto" className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Contacto & contratación</h2>
            <p className="mt-3 text-slate-600">
              Cuéntanos tu evento y te proponemos el mejor formato (cinco voces + piano, refuerzos,
              repertorio a medida).
            </p>
            <ul className="mt-6 space-y-2 text-sm text-slate-700">
              <li>WhatsApp: +34 660 550 452</li>
              <li>Email: attempochoir@gmail.com</li>
              <li>Base en Madrid · Actuaciones en toda España</li>
            </ul>
          </div>

          <Card className="rounded-2xl shadow-lg">
            <CardContent className="p-6">
              {sent ? (
                <div className="text-center py-10">
                  <h3 className="text-xl font-semibold">¡Gracias! 💜</h3>
                  <p className="text-slate-600 mt-2">Te contactaremos en breve.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input required name="user_name" placeholder="Nombre" />
                    <Input required type="email" name="user_email" placeholder="Email" />
                  </div>
                  <Input name="user_phone" placeholder="Teléfono" />
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input name="user_date" placeholder="Fecha del evento" />
                    <Input name="user_city" placeholder="Ciudad / lugar" />
                  </div>
                  <Textarea name="message" placeholder="Cuéntanos tu evento" rows={5} />
                  <Button type="submit" className="w-full rounded-2xl">
                    Solicitar propuesta
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <JsonLd />
    </div>
  );
}

function Logo() {
  return (
    <img src="/logo_attempo_positivo.png" alt="Attempo Choir" className="h-10 md:h-12 w-auto" />
  );
}

function HeadTags() {
  const SITE_URL = "https://attempochoir.com";
  const TITLE = "Attempo Choir · Grupo vocal versátil para bodas, eventos y conciertos";
  const DESC =
    "Attempo Choir es un grupo vocal profesional en Madrid. Versatilidad: gospel, soul, musicales y pop con piano en directo para bodas, ceremonias, eventos corporativos y conciertos en toda España.";
  const IMG = SITE_URL + "/logo_attempo_positivo.png";
  return (
    <>
      <title>{TITLE}</title>
      <meta name="description" content={DESC} />
      <link rel="canonical" href={SITE_URL} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESC} />
      <meta property="og:url" content={SITE_URL} />
      <meta property="og:site_name" content="Attempo Choir" />
      <meta property="og:image" content={IMG} />
      <meta property="og:locale" content="es_ES" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:description" content={DESC} />
      <meta name="twitter:image" content={IMG} />
      <meta name="twitter:site" content="@attempochoir" />
    </>
  );
}

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    name: "Attempo Choir",
    description:
      "Attempo Choir es un grupo vocal versátil en Madrid con piano en directo. Música para bodas, eventos corporativos y conciertos. Repertorio: gospel, soul, musicales y pop.",
    genre: ["Gospel", "Soul", "Musical", "Pop"],
    areaServed: "ES",
    email: "attempochoir@gmail.com",
    telephone: "+34 660 550 452",
    sameAs: [
      "https://www.instagram.com/attempochoir/",
      "https://www.facebook.com/profile.php?id=61574412730911",
      "https://www.tiktok.com/@attempo.choir",
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
