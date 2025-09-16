export default function FAQ() {
  const faqs = [
    {
      question: "¿Cómo puedo contratar a Attempo Choir?",
      answer:
        "Puedes ponerte en contacto con nosotros a través del formulario de la página de Contacto, por WhatsApp en el +34 660 550 452 o enviando un email a attempochoir@gmail.com. Te responderemos con una propuesta adaptada a tu evento.",
    },
    {
      question: "¿En qué tipo de eventos actuáis?",
      answer:
        "Ofrecemos actuaciones para bodas, ceremonias civiles o religiosas, eventos corporativos, cócteles, galas, conciertos y festivales. Adaptamos nuestro repertorio a cada ocasión.",
    },
    {
      question: "¿Viajáis fuera de Madrid?",
      answer:
        "Sí, nos desplazamos a cualquier punto de España. El coste del desplazamiento se ajustará en función de la ubicación del evento.",
    },
    {
      question: "¿Podemos elegir el repertorio?",
      answer:
        "Tenemos un repertorio base de gospel, soul, pop y musicales, pero siempre escuchamos vuestras sugerencias para personalizar las piezas del evento.",
    },
    {
      question: "¿Ofrecéis formación musical o talleres?",
      answer:
        "Sí, también impartimos talleres y masterclasses de canto coral, técnica vocal y repertorio gospel/pop para coros y grupos reducidos.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 px-6 py-16 max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
        Preguntas frecuentes
      </h1>
      <p className="text-slate-700 mb-8">
        Aquí encontrarás respuesta a las dudas más habituales sobre Attempo Choir.
        Si tienes cualquier otra consulta, no dudes en{" "}
        <a href="/#contacto" className="text-violet-600 hover:underline">
          escribirnos
        </a>.
      </p>

      <dl className="space-y-8">
        {faqs.map((faq, i) => (
          <div key={i}>
            <dt className="text-lg font-semibold text-slate-900 mb-2">
              {faq.question}
            </dt>
            <dd className="text-slate-700 leading-relaxed">{faq.answer}</dd>
          </div>
        ))}
      </dl>

      <p className="text-slate-500 mt-12">
        Última actualización: {new Date().getFullYear()}
      </p>
    </div>
  );
}
