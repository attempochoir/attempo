import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import YouTubePlaylist from "@/components/YouTubePlaylist";
import { faqs } from "@/lib/seo";
import Script from "next/script";

const DOSSIER_URL = "https://dossier.attempochoir.com";


export default function AttempoLanding() {
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    let token = "not-verified";

    if (siteKey && typeof window !== "undefined" && window.grecaptcha) {
      try {
        token = await window.grecaptcha.execute(siteKey, { action: "contact" });
      } catch (err) {
        console.warn("reCAPTCHA falló, enviando sin validación:", err);
      }
    } else {
      console.warn("reCAPTCHA no cargado (posible Adblock). Se envía sin validación.");
    }

    data.recaptchaToken = token;

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

      {/* HEADER */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b">
        <div className="max-w-7xl mx-auto px-6 py-3 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo />
            <span className="font-semibold tracking-tight text-lg">Attempo Choir</span>
          </div>
          <nav aria-label="Navegación principal" className="order-last w-full flex flex-wrap justify-center items-center gap-x-5 gap-y-3 text-sm lg:order-none lg:w-auto">
            <a href="/quienes-somos" className="hover:opacity-70">Quiénes somos</a>
            <a href="/coro-para-eventos" className="hover:opacity-70">Eventos</a>
            <a href="/coro-para-bodas" className="hover:opacity-70">Bodas</a>
            <a href="/repertorio" className="hover:opacity-70">Repertorio</a>
            <a href={DOSSIER_URL} target="_blank" rel="noopener noreferrer" className="hover:opacity-70">Dossier</a>
            <a href="#contacto" className="hover:opacity-70">Contacto</a>
          </nav>
          <a className="hidden md:inline-flex" href="https://wa.me/34660550452" target="_blank" rel="noreferrer">
            <Button className="rounded-2xl">Contacta con nosotros</Button>
          </a>
        </div>
      </header>

      <main>
      {/* HÉROE */}
      <section
        className="relative min-h-[85dvh] md:min-h-screen w-full flex flex-col items-center justify-center bg-black bg-cover bg-center text-center px-6"
        style={{ backgroundImage: "url('/bg-hero-3.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="mt-8 text-slate-100 text-4xl md:text-4xl font-bold tracking-tight max-w-3xl">
            Coro para eventos y bodas en Madrid
          </h1>
          <p className="mt-4 text-slate-200 text-lg md:text-xl font-light max-w-2xl">
            Attempo Choir: cinco voces y piano en directo. Pop y musicales a cuatro voces para bodas, eventos corporativos y conciertos en toda España.
          </p>
          <a href="#contacto" className="mt-8 inline-block">
            <Button className="rounded-2xl">Solicita presupuesto</Button>
          </a>
          <a
            href={DOSSIER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center rounded-2xl border border-white/70 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Conoce nuestra música y repertorio
          </a>
        </div>
      </section>

      {/* QUIÉNES SOMOS */}
      <section id="quienes-somos" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Attempo Choir: cinco cantantes y un pianista</h2>
          <p className="mt-5 max-w-3xl text-slate-700 leading-relaxed">Somos un grupo vocal con base en Madrid. Interpretamos versiones de pop y musicales a cuatro voces y piano en directo para bodas, eventos corporativos y conciertos. También contamos con repertorio de soul, gospel y música religiosa, y podemos organizar una formación mayor si el evento lo requiere.</p>
          <a href="/quienes-somos" className="mt-4 inline-block text-violet-700 underline">Conoce la trayectoria de nuestros músicos</a>
          <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-6 gap-6 text-center">
            {[
              { name: "Lola Morales", rol: "Alto",  foto: "/lola-morales.jpg", bio: "Timbre cálido y profundo que sostiene las armonías." },
              { name: "Nat Sáez",     rol: "Soprano", foto: "/nat-saez.jpg",   bio: "Voz brillante y expresiva, aporta el color melódico al grupo." },
              { name: "César Leal",   rol: "Bajo",  foto: "/cesar-leal.jpg",   bio: "Base grave que aporta cuerpo y equilibrio al conjunto." },
              { name: "Daniel Díaz",  rol: "Tenor", foto: "/dani-diaz.jpg",    bio: "Voz clara y potente, con gran expresividad escénica." },
              { name: "Miguel Pérez", rol: "Tenor", foto: "/miguel-perez.jpg", bio: "Timbre versátil que complementa y refuerza las armonías." },
              { name: "Carlos Hernández", rol: "Pianista", bio: "Acompañante al piano, motor musical que da unidad al grupo." },
            ].map((m, i) => (
              <li key={i} className="p-6 rounded-xl bg-slate-50 shadow hover:shadow-md transition flex flex-col items-center">
                {m.foto ? (
                  <img src={m.foto} alt={m.name} loading="lazy" className="w-32 h-32 object-cover rounded-full shadow mb-4" />
                ) : (
                  <div className="w-32 h-32 rounded-full bg-slate-200 mb-4" />
                )}
                <div className="font-semibold text-lg">{m.name}</div>
                <div className="text-slate-600">{m.rol}</div>
                <p className="mt-2 text-sm text-slate-500">{m.bio}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">Música en directo para bodas y eventos</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative rounded-2xl overflow-hidden shadow-lg group h-80">
              <img loading="lazy" src="/servicio-bodas.jpg" alt="Bodas y ceremonias" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-[#6E3AFF]/70 group-hover:bg-[#6E3AFF]/50 transition-colors"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-6">
                <h3 className="text-2xl font-semibold">Coro para bodas y ceremonias</h3>
                <p className="mt-2 text-sm md:text-base">Música emotiva con voces y piano en directo. Para ceremonias civiles, religiosas y cócteles.</p>
                <a href="/coro-para-bodas" className="mt-4 underline font-medium">Música para vuestra boda</a>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-lg group h-80">
              <img loading="lazy" src="/servicio-eventos.jpg" alt="Eventos corporativos" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-[#6E3AFF]/70 group-hover:bg-[#6E3AFF]/50 transition-colors"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-6">
                <h3 className="text-2xl font-semibold">Coro para eventos corporativos</h3>
                <p className="mt-2 text-sm md:text-base">Cinco voces y piano en directo para aportar elegancia y energía en cócteles, galas y encuentros de empresa.</p>
                <a href="/coro-para-eventos" className="mt-4 underline font-medium">Organiza la música de tu evento</a>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-lg group h-80">
              <img loading="lazy" src="/servicio-conciertos.jpg" alt="Conciertos y festivales" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-[#6E3AFF]/70 group-hover:bg-[#6E3AFF]/50 transition-colors"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-6">
                <h3 className="text-2xl font-semibold">Conciertos y festivales</h3>
                <p className="mt-2 text-sm md:text-base">Pop y musicales a cuatro voces y piano, con temas de soul y gospel.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="repertorio" className="py-14 bg-violet-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Pop, musicales y canciones para cada celebración</h2>
          <p className="mt-5 text-slate-700 leading-relaxed">Desde A Thousand Years y Can’t Help Falling in Love hasta This Is Me, Seasons of Love y Ain’t No Mountain High Enough. Nuestro repertorio incluye pop, soul, musicales, gospel, música religiosa y piezas instrumentales a piano.</p>
          <a href="/repertorio" className="mt-6 inline-block rounded-2xl bg-[#6E3AFF] text-white px-6 py-3">Explora nuestro repertorio</a>
        </div>
      </section>

      {/* PLAYLIST YOUTUBE */}
      <YouTubePlaylist
        videos={[
          { id: "vykaoUixr14", title: "Attempo Choir - For Good (Wicked)" },
          { id: "JyUGYOlUGC0", title: "Attempo Choir - What a Wonderful World (Short)" },
          { id: "LEjvzQiMpA0", title: "Attempo Choir - For Good ensayo 2 voces (Wicked Broadway)" },
          { id: "lHZxGwcdGdQ", title: "Attempo Choir - Madre de Hakuna" },
        ]}
        heading="Escucha a Attempo Choir: voces y piano en directo"
      />

      {/* CONTACTO */}
      <section id="contacto" className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Contrata a Attempo Choir para tu evento</h2>
            <p className="mt-3 text-slate-600">
              Indícanos la fecha, la ciudad, el lugar y los momentos en los que queréis música. Prepararemos una propuesta sin compromiso según la duración, la formación y las necesidades de la actuación.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-slate-700">
              <li>WhatsApp: <a href="https://wa.me/34660550452" target="_blank" rel="noopener noreferrer" className="underline">+34 660 550 452</a></li>
              <li>Email: <a href="mailto:attempochoir@gmail.com" className="underline">attempochoir@gmail.com</a></li>
              <li>Base en Madrid. Actuaciones en toda España</li>
            </ul>
            <a
              href={DOSSIER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-2xl bg-[#6E3AFF] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#5925E6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6E3AFF]"
            >
              Conoce nuestra música y repertorio
            </a>
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


      <section className="py-14 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold">Lo que necesitas saber para contratar nuestro coro</h2>
          <dl className="mt-8 grid md:grid-cols-2 gap-8">{faqs.slice(0, 6).map(({ question, answer }) => <div key={question}><dt className="font-semibold text-lg">{question}</dt><dd className="mt-3 text-slate-700 leading-relaxed">{answer}</dd></div>)}</dl>
          <a href="/faq" className="mt-8 inline-block text-violet-700 underline">Todas las preguntas sobre contratación</a>
        </div>
      </section>
      </main>

      {/* reCAPTCHA al final */}
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
        strategy="afterInteractive"
      />
    </div>
  );
}

function Logo() {
  return <img src="/logo_attempo_positivo.png" alt="Attempo Choir" className="h-10 md:h-12 w-auto" />;
}
