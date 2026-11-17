import { useState } from "react";
import Seo from "@/components/Seo";
import Footer from "@/components/Footer";

const root = "/press-kit/";
const photos = {
  choir: [
    ["choir-ceremonia-horizontal.jpg", "Ceremonia · grupo completo"],
    ["choir-ceremonia-vertical.jpg", "Ceremonia · vertical"],
    ["choir-corporativo-horizontal.jpg", "Retrato contemporáneo"],
    ["choir-corporativo-vertical.jpg", "Retrato · vertical"],
    ["choir-escalera.jpg", "Retrato en escalera"],
  ],
  friends: [
    ["friends-escenario.jpg", "Attempo & Friends · escenario"],
    ["friends-evento.jpg", "Attempo & Friends · evento"],
    ["friends-gala.png", "Attempo & Friends · gala"],
  ],
};
const videos = [
  ["You're the Reason", "ZRpvZjIA3v8"],
  ["Over the Rainbow", "DKJLdV6UOlk"],
  ["En mi Getsemaní", "9Q7lGXl5_B8"],
  ["Hallelujah · Fragmento 1", "-m9y-MBM7iE"],
  ["Hallelujah · Fragmento 2", "LotGnFJwgQ4"],
  ["A Thousand Years", "lSqXH1CpZi0"],
];
const bioShort = "Attempo Choir es una formación vocal especializada en música en directo para bodas y eventos. Su propuesta combina armonías vocales, acompañamiento de piano y un repertorio de musicales, pop internacional y gospel, con interpretaciones pensadas para emocionar y acompañar momentos únicos.";
const bioLong = "Attempo Choir ofrece una experiencia musical cercana y emocionante para bodas, celebraciones y eventos. Su identidad artística se construye alrededor de las armonías vocales y de una cuidada selección de canciones procedentes de los grandes musicales, el pop internacional y el gospel. En su formato habitual, las voces se acompañan de piano para crear interpretaciones expresivas que se adaptan a cada ocasión. Desde la intimidad de una ceremonia hasta la energía de un evento, Attempo Choir busca que cada canción conecte con quienes la escuchan y se convierta en parte del recuerdo de ese día.";
const bioFriends = "En Attempo Choir creemos que cada evento es único y que la música debe adaptarse a él. Por eso nace Attempo & Friends, una propuesta artística flexible que nos permite ampliar o adaptar nuestra formación gracias a la colaboración con otros cantantes y músicos profesionales. Desde formaciones vocales reducidas hasta propuestas con un mayor número de artistas, mantenemos siempre nuestra esencia: la calidad vocal, la armonía y la emoción de la música en directo. Diferentes voces, una misma pasión por la música.";
function CopyText({ text }) {
  const [copied, setCopied] = useState(false);
  async function copy() { try { await navigator.clipboard.writeText(text); setCopied(true); window.setTimeout(() => setCopied(false), 2000); } catch { /* Browser may block clipboard. */ } }
  return <button type="button" onClick={copy} className="mt-4 text-sm text-violet-300 border border-violet-400 rounded-lg px-4 py-2 hover:bg-violet-900">{copied ? "¡Copiado!" : "Copiar texto"}</button>;
}
export default function PressKit() {
  const [formation, setFormation] = useState("choir");
  return <div className="min-h-screen bg-[#101014] text-white">
    <Seo title="Press Kit oficial | Attempo Choir" description="Fotografías oficiales, biografías, logotipos y vídeos de Attempo Choir y Attempo & Friends para organizadores y medios." path="/press-kit" />
    <header className="border-b border-white/10"><div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between flex-wrap gap-4"><a href="/" aria-label="Volver a Attempo Choir"><img src={root+"assets/logo-blanco.png"} alt="Attempo Choir" className="w-36" /></a><nav aria-label="Secciones del press kit" className="flex gap-4 flex-wrap text-sm text-gray-300"><a href="#presentacion">Presentación</a><a href="#fotografias">Fotografías</a><a href="#videos">Vídeos</a><a href="#descargas">Descargas</a></nav></div></header>
    <section className="relative overflow-hidden bg-[#15111d]">
      <div className="absolute inset-0 pointer-events-none opacity-60" style={{background:"radial-gradient(ellipse at 0% 100%, rgba(110,58,255,.24), transparent 52%)"}} />
      <div className="relative max-w-[1600px] mx-auto grid md:grid-cols-[48%_52%] md:min-h-[570px]">
        <div className="relative z-10 flex items-center px-6 sm:px-10 lg:px-16 py-14 md:py-20">
          <div className="max-w-xl">
            <p className="text-violet-300 uppercase tracking-[.18em] text-xs sm:text-sm font-bold">Material promocional oficial</p>
            <div className="w-12 h-[2px] bg-violet-400 mt-5" />
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mt-7 leading-[1.05]">ATTEMPO<br/>CHOIR</h1>
            <p className="mt-7 text-lg sm:text-xl max-w-lg text-gray-100 leading-relaxed">Voces que emocionan. Música en directo para momentos que merecen ser recordados.</p>
            <a className="inline-flex items-center mt-8 px-6 py-3 rounded-lg bg-[#6E3AFF] hover:bg-[#5925E6] font-semibold" href="#descargas">Descargar Press Kit</a>
          </div>
        </div>
        <div className="relative min-h-[420px] sm:min-h-[520px] md:min-h-0 overflow-hidden">
          <img src={root + "assets/choir-cabecera-iglesia.jpg"} alt="Attempo Choir, seis integrantes ante el altar de una iglesia" className="absolute inset-0 w-full h-full object-cover object-[center_42%]" />
          <div className="hidden md:block absolute inset-y-0 left-0 w-36 lg:w-52 pointer-events-none" style={{background:"linear-gradient(90deg,#15111d,transparent)"}} />
        </div>
      </div>
    </section>
    <main className="max-w-6xl mx-auto px-6">
      <section id="presentacion" className="py-16 border-b border-white/10"><p className="text-violet-300 uppercase tracking-widest text-xs">01 / Quiénes somos</p><h2 className="text-4xl md:text-5xl font-bold mt-3 mb-8">Nuestra esencia</h2><div className="grid md:grid-cols-2 gap-8"><div><h3 className="text-xl font-semibold mb-3">Presentación breve</h3><p className="text-gray-300 leading-relaxed">{bioShort}</p><CopyText text={bioShort}/></div><div><h3 className="text-xl font-semibold mb-3">Presentación ampliada</h3><p className="text-gray-300 leading-relaxed">{bioLong}</p><CopyText text={bioLong}/></div></div><div className="mt-10 p-7 bg-[#1b1b21] rounded-xl border border-white/10"><p className="text-violet-300 text-xs uppercase tracking-widest">Una propuesta adaptable</p><h3 className="text-2xl font-bold mt-2">Attempo &amp; Friends</h3><p className="mt-3 font-semibold">La misma esencia, nuevas posibilidades.</p><p className="text-gray-300 leading-relaxed mt-3">{bioFriends}</p><CopyText text={bioFriends}/></div></section>
      <section id="fotografias" className="py-16 border-b border-white/10"><p className="text-violet-300 uppercase tracking-widest text-xs">02 / Material fotográfico</p><h2 className="text-4xl md:text-5xl font-bold mt-3">Fotografías oficiales</h2><p className="text-gray-300 mt-4">Selecciona la formación correspondiente al evento. Puedes descargar cada fotografía en su resolución original.</p><div className="flex flex-wrap gap-3 mt-8" role="group" aria-label="Seleccionar formación">{[["choir","Attempo Choir"],["friends","Attempo & Friends"]].map(([id,label])=><button type="button" key={id} aria-pressed={formation===id} onClick={()=>setFormation(id)} className={`rounded-lg px-5 py-3 border ${formation===id ? "bg-[#6E3AFF] border-[#6E3AFF]" : "border-white/30 hover:border-violet-400"}`}>{label}</button>)}</div><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">{photos[formation].map(([filename,label])=><article key={filename} className="bg-[#1b1b21] rounded-xl overflow-hidden border border-white/10"><a href={root+"assets/"+filename} download><img src={root+"assets/"+filename.replace(/\.(jpg|png)$/,'.webp')} alt={label} loading="lazy" className="w-full h-64 object-cover" /></a><div className="p-4 flex flex-wrap justify-between gap-2 text-sm"><span>{label}</span><a className="text-violet-300 underline" href={root+"assets/"+filename} download>Descargar</a></div></article>)}</div><p className="text-gray-400 text-sm mt-5">Para anunciar una actuación, utiliza únicamente las fotografías de la formación confirmada.</p></section>
      <section id="videos" className="py-16 border-b border-white/10"><p className="text-violet-300 uppercase tracking-widest text-xs">03 / Escúchanos</p><h2 className="text-4xl md:text-5xl font-bold mt-3">Attempo en directo</h2><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">{videos.map(([title,id])=><article key={id} className="bg-[#1b1b21] border border-white/10 rounded-xl overflow-hidden"><a href={`https://www.youtube.com/watch?v=${id}`} target="_blank" rel="noopener noreferrer"><img src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`} alt={`Vídeo: ${title}`} loading="lazy" className="w-full aspect-video object-cover" /></a><div className="p-5"><h3 className="font-semibold text-lg">{title}</h3><a className="text-violet-300 underline text-sm mt-3 inline-block" href={`https://www.youtube.com/watch?v=${id}`} target="_blank" rel="noopener noreferrer">Ver en YouTube</a></div></article>)}</div></section>
      <section className="py-16 border-b border-white/10"><p className="text-violet-300 uppercase tracking-widest text-xs">04 / Recursos de marca</p><h2 className="text-4xl md:text-5xl font-bold mt-3 mb-8">Logotipos oficiales</h2><div className="grid md:grid-cols-2 gap-6">{[["logo-blanco.png","Logo blanco","#050505"],["logo-negro.png","Logo negro","#ffffff"]].map(([file,label,bg])=><div key={file} className="bg-[#1b1b21] p-5 rounded-xl border border-white/10"><h3 className="font-semibold mb-3">{label}</h3><div className="h-48 flex items-center justify-center rounded-lg p-5" style={{background:bg}}><img className="max-w-full max-h-full object-contain" src={root+"assets/"+file} alt={label}/></div><a href={root+"assets/"+file} download className="text-violet-300 underline text-sm mt-4 inline-block">Descargar PNG</a></div>)}</div><p className="text-gray-400 text-sm mt-5">Utiliza los logotipos sin deformaciones ni modificaciones de color.</p></section>
      <section id="descargas" className="py-20 text-center"><p className="text-violet-300 uppercase tracking-widest text-xs">05 / Recursos para organizadores</p><h2 className="text-4xl md:text-5xl font-bold mt-3">Todo en un solo archivo</h2><p className="text-gray-300 mt-5 max-w-2xl mx-auto">Biografías oficiales, fotografías originales de ambas formaciones, logotipos e indicaciones de uso.</p><a href={root+"Attempo_Choir_Press_Kit.zip"} download className="inline-block mt-8 bg-[#6E3AFF] hover:bg-[#5925E6] rounded-lg px-8 py-4 font-semibold">Descargar Press Kit completo</a><p className="text-gray-400 mt-6 text-sm">¿Necesitas otro formato? Escríbenos a <a className="underline text-violet-300" href="mailto:attempochoir@gmail.com">attempochoir@gmail.com</a>.</p></section>
    </main><Footer />
  </div>;
}
