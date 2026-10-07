import ContentLayout from "@/components/ContentLayout";

export default function Bodas() {
  return (
    <ContentLayout title="Coro para bodas en Madrid: voces y piano | Attempo Choir" description="Música para bodas civiles, religiosas y cócteles. Cinco voces y piano en directo, con pop, musicales y música religiosa. Madrid y toda España." path="/coro-para-bodas" heading="Coro para bodas en Madrid: voces y piano en directo" service="Coro para bodas y ceremonias">
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">La música de vuestra boda, cantada en directo</h2>
        <p className="text-slate-700 leading-relaxed">Attempo Choir reúne a cinco cantantes y un pianista con base en Madrid. Interpretamos versiones a cuatro voces y piano para acompañar bodas civiles, ceremonias religiosas y cócteles, y nos desplazamos por toda España.</p>
        <p className="text-slate-700 leading-relaxed">Os ayudamos a elegir las canciones para cada momento de la boda: la entrada, un momento especial de la ceremonia o la salida. Si la celebración necesita una formación mayor, podemos valorar esa opción con vosotros.</p>
      </section>
      <section className="grid md:grid-cols-2 gap-6">
        <article className="rounded-2xl bg-slate-50 p-6"><h2 className="text-2xl font-bold">Ceremonias civiles</h2><p className="mt-4 text-slate-700 leading-relaxed">Pop, soul y musicales para una ceremonia que os represente. Entre las canciones del repertorio están A Thousand Years, Can’t Help Falling in Love, Make You Feel My Love y Somewhere Over the Rainbow. Consultadnos por vuestros temas favoritos y prepararemos la selección con vosotros.</p></article>
        <article className="rounded-2xl bg-slate-50 p-6"><h2 className="text-2xl font-bold">Ceremonias religiosas</h2><p className="mt-4 text-slate-700 leading-relaxed">Nuestro repertorio incluye Cara a Cara, En mi Getsemaní, Nada te turbe y Madre de Hakuna. Os ayudamos a organizar los momentos musicales; la selección debe acordarse con la persona que oficie la ceremonia y con las condiciones del lugar.</p></article>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Voces y piano para el cóctel</h2>
        <p className="text-slate-700 leading-relaxed">Durante el cóctel podéis optar por una selección de canciones de pop y soul con voces y piano. Nuestro repertorio también incluye piezas instrumentales a piano como Forrest Gump y River Flows in You. Comentadnos el ambiente que queréis y os orientaremos sobre el formato musical.</p>
        <a href="/repertorio" className="inline-block text-violet-700 underline">Ver canciones para bodas y cócteles</a>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">¿Cuánto cuesta contratar un coro para vuestra boda?</h2>
        <p className="text-slate-700 leading-relaxed">Cada propuesta se calcula según la fecha, el lugar, la duración, la formación y las necesidades de la actuación. Para consultar disponibilidad y presupuesto, enviadnos la fecha de la boda, la ciudad y el espacio donde se celebra, y decidnos si queréis música en la ceremonia, el cóctel o ambos.</p>
        <p className="text-slate-700 leading-relaxed">Podéis elegir temas de nuestro repertorio o proponernos una canción especial para valorar su preparación. Encontraréis vídeos y fotografías en el dossier digital para escuchar cómo suenan las voces y el piano antes de pedir vuestra propuesta sin compromiso.</p>
        <p className="text-slate-700">Para encuentros de empresa, visitad nuestra página de <a href="/coro-para-eventos" className="text-violet-700 underline">coro para eventos corporativos</a>.</p>
      </section>
    </ContentLayout>
  );
}
