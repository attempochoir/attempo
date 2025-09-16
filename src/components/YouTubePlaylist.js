import { useState, useEffect, useCallback } from "react";

const Thumb = ({ id, title, active, onClick }) => (
  <button
    onClick={onClick}
    aria-label={`Reproducir: ${title}`}
    className={`relative shrink-0 w-56 sm:w-64 aspect-video rounded-xl overflow-hidden border transition 
      ${active ? "border-[#6E3AFF] ring-2 ring-[#6E3AFF]/40" : "border-slate-200 hover:border-slate-400"}`}
  >
    <img
      src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
      alt={title}
      className="w-full h-full object-cover"
      loading="lazy"
    />
    {!active && <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition" />}
    <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs sm:text-sm p-2 line-clamp-2">
      {title}
    </div>
  </button>
);

export default function YouTubePlaylist({ videos, initial = 0, heading = "Vídeos" }) {
  const [current, setCurrent] = useState(initial);

  const next = useCallback(() => setCurrent((i) => (i + 1) % videos.length), [videos.length]);
  const prev = useCallback(() => setCurrent((i) => (i - 1 + videos.length) % videos.length), [videos.length]);

  // Accesibilidad: flechas para cambiar de vídeo cuando el foco está en el carrusel
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const active = videos[current];

  return (
    <section id="videos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">{heading}</h2>
        <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
          Disfruta de algunos de nuestros ensayos y actuaciones recientes.
        </p>

        {/* Player principal (solo 1 iframe) */}
        <div className="mt-10 aspect-video rounded-xl overflow-hidden shadow">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${active.id}`}
            title={active.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Carrusel horizontal de miniaturas */}
        <div
          className="mt-6 flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory"
          aria-label="Lista de vídeos"
        >
          {videos.map((v, i) => (
            <div key={v.id} className="snap-start">
              <Thumb
                id={v.id}
                title={v.title}
                active={i === current}
                onClick={() => setCurrent(i)}
              />
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="https://www.youtube.com/@AttempoChoir"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-[#6E3AFF] text-white font-semibold py-3 px-6 rounded-xl shadow hover:bg-[#5b2ecc] transition"
          >
            Ver más en nuestro canal de YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
