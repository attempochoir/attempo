import Head from "next/head";

export default function QuienesSomos() {
  return (
    <>
      <Head>
        <title>Quiénes somos · Attempo Choir</title>
        <meta
          name="description"
          content="Conoce a los integrantes de Attempo Choir: voces versátiles con experiencia en gospel, soul, musicales y pop. Cinco cantantes y un pianista unidos por la emoción en directo."
        />
      </Head>

      {/* Hero */}
      <section className="relative h-72 flex items-center justify-center text-center bg-black bg-cover bg-center"
        style={{ backgroundImage: "url('/bg-hero-3.jpg')" }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold">Quiénes somos</h1>
          <p className="mt-3 text-lg md:text-xl">Seis músicos, una sola voz: la emoción de la música en directo</p>
        </div>
      </section>

      {/* Bios extendidas */}
      <section className="max-w-5xl mx-auto px-6 py-20 space-y-16">
        {[
          {
            name: "Lola Morales",
            rol: "Alto",
            foto: "/lola-morales.jpg",
            bio: "Timbre cálido que sostiene las armonías. Su trayectoria en gospel y soul la ha llevado a formar parte de Spirit to All, Touched Vocals, Laraland y All4Gospel."
          },
         {
            name: "Nat Sáez",
            rol: "Soprano",
            foto: "/nat-saez.jpg",
            bio: "Voz brillante y expresiva, aporta el color melódico al grupo. Con experiencia en gospel, pop y musicales, forma parte de Spirit to All y Touched Vocals, y dio sus primeros pasos en All4Gospel."
          },
          {
            name: "César Leal",
            rol: "Bajo",
            foto: "/cesar-leal.jpg",
            bio: "La base grave de Attempo. Ha participado en proyectos de gospel y sinfónicos, entre ellos Spirit to All, Touched Vocals y los Conciertos Participativos de Filarmonía."
          },
          {
            name: "Daniel Díaz",
            rol: "Tenor",
            foto: "/dani-diaz.jpg",
            bio: "Voz clara y potente, con gran expresividad escénica. Combina experiencia coral en Touched Vocals con teatro musical en la compañía No damos crédito."
          },
          {
            name: "Miguel Pérez",
            rol: "Tenor",
            foto: "/miguel-perez.jpg",
            bio: "Versátil en soul y musicales, aporta frescura y fuerza al conjunto. Miembro de All4Gospel y colabora en diferentes compañías teatrales."
          },
          {
            name: "Carlos Hernández",
            rol: "Pianista",
            foto: "/carlos-hernandez.jpg",
            bio: "Acompañante al piano y motor armónico de Attempo. Pianista en Laraland, donde aporta elegancia y versatilidad."
          }
        ].map((m, i) => (
          <div key={i} className="flex flex-col md:flex-row gap-6 items-center">
            <img src={m.foto} alt={m.name} className="w-40 h-40 object-cover rounded-full shadow-lg" />
            <div>
              <h3 className="text-2xl font-semibold">{m.name}</h3>
              <p className="text-slate-600 italic">{m.rol}</p>
              <p className="mt-3 text-slate-700">{m.bio}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Cierre */}
      <section className="text-center py-16 bg-slate-50">
        <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
          Cuando las voces se unen, nace la magia de Attempo.
        </p>
        <a href="/#contacto" className="mt-6 inline-block bg-[#6E3AFF] text-white px-6 py-3 rounded-2xl hover:bg-[#5a2ecc] transition">
          Contacta con nosotros
        </a>
      </section>
    </>
  );
}
