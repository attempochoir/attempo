import ContentLayout from "@/components/ContentLayout";
import { repertoire } from "@/lib/seo";

export default function Repertorio() {
  return (
    <ContentLayout title="Repertorio para bodas y eventos | Attempo Choir" description="Descubre nuestro repertorio de pop, soul, musicales, gospel, música religiosa y piano para bodas y eventos. Versiones a cuatro voces y piano en directo." path="/repertorio" heading="Nuestro repertorio para bodas y eventos">
      <section className="space-y-4"><h2 className="text-2xl font-bold">Canciones para elegir la música de vuestro evento</h2><p className="text-slate-700 leading-relaxed">Nuestra formación habitual es de cinco cantantes y un pianista. El repertorio combina versiones de pop y musicales a cuatro voces y piano, junto a temas de soul, gospel y música religiosa. También ofrecemos piezas instrumentales a piano.</p><p className="text-slate-700 leading-relaxed">La selección se adapta a los momentos de cada celebración. Si buscáis una canción que no aparece en esta lista, consultadnos para valorar su preparación.</p></section>
      <div className="grid md:grid-cols-2 gap-8">{repertoire.map(({ category, songs }) => <section key={category} className="rounded-2xl bg-slate-50 p-6"><h2 className="text-2xl font-bold">{category}</h2><ul className="mt-5 list-disc pl-5 space-y-2 text-slate-700">{songs.map(song => <li key={song}>{song}</li>)}</ul></section>)}</div>
      <section className="space-y-4"><h2 className="text-2xl font-bold">¿Qué canciones encajan en vuestra celebración?</h2><p className="text-slate-700 leading-relaxed">Para una ceremonia os ayudaremos a elegir las canciones de entrada, los momentos especiales y la salida. En un cóctel o una gala podemos preparar una selección acorde al público y al ambiente que queráis crear.</p><div className="flex flex-wrap gap-5"><a href="/coro-para-bodas" className="text-violet-700 underline">Música para bodas y ceremonias</a><a href="/coro-para-eventos" className="text-violet-700 underline">Música para eventos corporativos</a><a href="/#videos" className="text-violet-700 underline">Escucha nuestros vídeos</a></div></section>
    </ContentLayout>
  );
}
