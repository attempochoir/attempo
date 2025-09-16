import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function AttempoLanding() {
  const [sent, setSent] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <HeadTags />

      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo />
            <span className="font-semibold tracking-tight text-lg">Attempo Choir</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#quienes-somos" className="hover:opacity-70">
              Quiénes somos
            </a>
            <a href="#servicios" className="hover:opacity-70">
              Servicios
            </a>
            <a href="#contacto" className="hover:opacity-70">
              Contacto
            </a>
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

      {/* Banner de entrada con logo + H1 */}
      <section
        className="relative h-screen w-full flex flex-col items-center justify-center bg-black bg-cover bg-center text-center px-6"
        style={{ backgroundImage: "url('/bg-hero-3.jpg')" }}
      >
        {/* capa oscura para contraste */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="mt-8 text-slate-100 text-4xl md:text-4xl font-bold tracking-tight max-w-3xl">
            Attempo Choir. Grupo vocal versátil con piano en directo.[work]
          </h1>
          <p className="mt-4 text-slate-200 text-lg md:text-xl font-light max-w-2xl">
            Música para bodas, eventos corporativos y conciertos en toda España.
          </p>
          <a href="#contacto" className="mt-8 inline-block">
            <Button className="rounded-2xl">Solicita presupuesto</Button>
          </a>
        </div>
      </section>

      {/* QUIÉNES SOMOS */}
      <section id="quienes-somos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Quiénes somos</h2>
          <p className="mt-4 text-slate-600 max-w-prose">
            Attempo Choir es un grupo vocal versátil en Madrid compuesto por cinco cantantes y un
            pianista acompañante en directo. Experiencia en gospel, soul, musicales y pop.
          </p>
          <div className="mt-8">
            <img
              src="/attempo-grupo.jpg"
              alt="Attempo Choir. Coro versátil en Madrid"
              className="shadow-lg w-full max-w-4xl mx-auto"
            />
          </div>

          <ul className="mt-8 grid sm:grid-cols-2 lg:grid-cols-6 gap-6 text-center">
            {[
              { name: "Lola Morales", rol: "Alto", foto: "/lola-morales.jpg" },
              { name: "Nat Sáez", rol: "Soprano", foto: "/nat-saez.jpg" },
              { name: "César Leal", rol: "Bajo", foto: "/cesar-leal.jpg" },
              { name: "Daniel Díaz", rol: "Tenor", foto: "/dani-diaz.jpg" },
              { name: "Miguel Pérez", rol: "Tenor", foto: "/miguel-perez.jpg" },
              { name: "Carlos Hernández", rol: "Pianista" },
            ].map((m, i) => (
              <li
                key={i}
                className="p-6 rounded-xl bg-slate-50 shadow hover:shadow-md transition flex flex-col items-center"
              >
                {m.foto ? (
                  <img
                    src={m.foto}
                    alt={m.name}
                    className="w-32 h-32 object-cover rounded-full shadow mb-4"
                  />
                ) : (
                  <div className="w-32 h-32 rounded-full bg-slate-200 mb-4" />
                )}
                <div className="font-semibold text-lg">{m.name}</div>
                <div className="text-slate-600">{m.rol}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Servicios</h2>
          <p className="mt-3 text-slate-600 max-w-prose">
            Grupo vocal con cinco voces y <strong>piano en directo</strong>. Repertorio versátil para
            bodas, eventos corporativos y conciertos.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 shadow">
              <h3 className="font-semibold text-lg">Bodas y ceremonias con voces y piano en directo</h3>
              <p className="mt-2 text-slate-600">
                Desde piezas emotivas hasta adaptaciones pop y musicales. Ideal para ceremonia y
                cóctel.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 shadow">
              <h3 className="font-semibold text-lg">Eventos corporativos y galas</h3>
              <p className="mt-2 text-slate-600">
                Cinco voces y piano en directo para aportar distinción y energía con un sonido
                elegante.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 shadow">
              <h3 className="font-semibold text-lg">Conciertos y festivales</h3>
              <p className="mt-2 text-slate-600">
                Propuesta escénica con voces + piano, fusionando gospel, soul, pop y musicales.
              </p>
            </div>
          </div>
        </div>
      </section>

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
              <li>WhatsApp: +34 645 693 821</li>
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
                    <Input required placeholder="Nombre" />
                    <Input required type="email" placeholder="Email" />
                  </div>
                  <Input placeholder="Teléfono" />
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="Fecha del evento" />
                    <Input placeholder="Ciudad / lugar" />
                  </div>
                  <Textarea placeholder="Cuéntanos tu evento" rows={5} />
                  <Button type="submit" className="w-full rounded-2xl">
                    Solicitar propuesta
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer antiguo eliminado */}
      <JsonLd />
    </div>
  );
}

function Logo() {
  return (
    <img
      src="/logo_attempo_positivo.png"
      alt="Attempo Choir"
      className="h-10 md:h-12 w-auto"
    />
  );
}

function HeadTags() {
  const SITE_URL = "https://attempochoir.com";
  const TITLE =
    "Attempo Choir · Grupo vocal versátil para bodas, eventos y conciertos";
  const DESC =
    "Attempo Choir es un grupo vocal profesional en Madrid. Versatilidad: gospel, soul, musicales y pop con piano en directo para bodas, ceremonias, eventos corporativos y conciertos en toda España.";
  const IMG = SITE_URL + "/logo_attempo_positivo.png";
  return (
    <>
      <title>{TITLE}</title>
      <meta name="description" content={DESC} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
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
    member: [
      { "@type": "Person", name: "Natacha Sáez", alternateName: "Nat Sáez", jobTitle: "Soprano" },
      { "@type": "Person", name: "Lola Morales", jobTitle: "Alto" },
      { "@type": "Person", name: "César Leal", jobTitle: "Bajo" },
      { "@type": "Person", name: "Daniel Díaz", jobTitle: "Tenor" },
      { "@type": "Person", name: "Miguel Pérez", jobTitle: "Tenor" },
      { "@type": "Person", name: "Carlos Hernández García", jobTitle: "Pianista" },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "booking",
        email: "attempochoir@gmail.com",
        telephone: "+34 645 693 821",
        areaServed: "ES",
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
