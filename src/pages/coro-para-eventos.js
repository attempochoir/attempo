import ContentLayout from "@/components/ContentLayout";

export default function Eventos() {
  return (
    <ContentLayout title="Coro para eventos corporativos en Madrid | Attempo Choir" description="Grupo vocal para eventos corporativos, cócteles y galas: cinco cantantes y piano en directo. Pop y musicales desde Madrid para eventos en toda España." path="/coro-para-eventos" heading="Coro para eventos corporativos en Madrid y toda España" service="Coro para eventos corporativos">
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Cinco voces y un pianista para vuestro evento</h2>
        <p className="text-slate-700 leading-relaxed">Attempo Choir es un grupo vocal con base en Madrid. Nuestra formación habitual reúne a cinco cantantes y un pianista para interpretar versiones de pop y musicales a cuatro voces, con acompañamiento de piano en directo. También contamos con repertorio de soul y gospel.</p>
        <p className="text-slate-700 leading-relaxed">Si buscáis un coro para un evento de empresa, os ayudamos a elegir la música y el formato según el público, el espacio y los momentos de la celebración. Podemos organizar una formación mayor cuando la actuación lo requiera.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-6">Música para cócteles, galas y encuentros de empresa</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            ["Cócteles y recepciones", "Voces y piano para acompañar la bienvenida o un momento de encuentro, con una selección de canciones acorde al ambiente que queráis crear."],
            ["Galas y celebraciones", "Una intervención musical para abrir, cerrar o dar protagonismo a un momento de vuestra gala. Elegimos el repertorio según el carácter del evento."],
            ["Actuaciones y conciertos", "Un programa de canciones en directo para quienes buscan una actuación con protagonismo propio dentro del encuentro de empresa."],
          ].map(([title, text]) => <article key={title} className="rounded-2xl bg-slate-50 p-6"><h3 className="text-xl font-semibold">{title}</h3><p className="mt-3 text-slate-700 leading-relaxed">{text}</p></article>)}
        </div>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Un repertorio de canciones que vuestro público conoce</h2>
        <p className="text-slate-700 leading-relaxed">Nuestro repertorio incluye canciones como Ain’t No Mountain High Enough, Stand by Me, Rolling in the Deep y Proud Mary, junto a temas de musicales como This Is Me y Seasons of Love. Son ejemplos de nuestra propuesta: os orientaremos para elegir las canciones que mejor encajen en vuestro evento.</p>
        <a href="/repertorio" className="inline-block text-violet-700 underline">Consulta el repertorio de Attempo Choir</a>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Cómo solicitar un presupuesto</h2>
        <p className="text-slate-700 leading-relaxed">Enviadnos la fecha, la ciudad y el lugar de celebración, una duración aproximada y los momentos en los que queréis música. Comentaremos el formato, el repertorio y las necesidades técnicas con la persona que coordine el evento.</p>
        <p className="text-slate-700 leading-relaxed">El presupuesto depende de la formación, la duración, el desplazamiento y las necesidades de la actuación. Tenemos nuestra base en Madrid y actuamos en toda España. Os prepararemos una propuesta sin compromiso.</p>
        <p className="text-slate-700">¿Se trata de una boda? <a href="/coro-para-bodas" className="text-violet-700 underline">Conoce nuestra música para bodas y ceremonias</a>.</p>
      </section>
    </ContentLayout>
  );
}
