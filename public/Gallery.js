import { useState, useEffect, useCallback } from "react";

const IMAGES = [
  { src: "/gallery/attempo-01.jpg", alt: "Boda · salida ceremonia" },
  { src: "/gallery/attempo-02.jpg", alt: "Concierto · luces moradas" },
  { src: "/gallery/attempo-03.jpg", alt: "Evento corporativo · cóctel" },
  { src: "/gallery/attempo-04.jpg", alt: "Detalle piano y partituras" },
  { src: "/gallery/attempo-05.jpg", alt: "Ceremonia civil · exterior" },
  { src: "/gallery/attempo-06.jpg", alt: "Escenario · prueba de sonido" },
  // añade más cuando quieras
];

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openAt = (i) => { setIndex(i); setOpen(true); };
  const close = () => setOpen(false);

  const prev = useCallback(() => setIndex((i) => (i - 1 + IMAGES.length) % IMAGES.length), []);
  const next = useCallback(() => setIndex((i) => (i + 1) % IMAGES.length), []);

  // teclado: Esc, ←, →
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, prev, next]);

  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">Galería</h2>
        <p className="mt-3 text-slate-600 text-center max-w-2xl mx-auto">
          Un vistazo a bodas, eventos y conciertos recientes.
        </p>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {IMAGES.map((img, i) => (
            <button
              key={i}
              className="relative group rounded-xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#6E3AFF]"
              onClick={() => openAt(i)}
            >
              <img src={img.src} alt={img.alt} className="h-40 sm:h-44 md:h-48 w-full object-cover" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={close}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={IMAGES[index].src}
              alt={IMAGES[index].alt}
              className="w-full h-auto rounded-xl shadow-lg"
            />
            {/* Controles */}
            <button
              onClick={prev}
              aria-label="Anterior"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2"
            >
              ←
            </button>
            <button
              onClick={next}
              aria-label="Siguiente"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2"
            >
              →
            </button>
            <button
              onClick={close}
              aria-label="Cerrar"
              className="absolute -top-3 -right-3 bg-white text-black rounded-full w-8 h-8 leading-none shadow"
              title="Cerrar (Esc)"
            >
              ✕
            </button>
            <div className="mt-3 text-center text-slate-200">{IMAGES[index].alt}</div>
          </div>
        </div>
      )}
    </section>
  );
}
