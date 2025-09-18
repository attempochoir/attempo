import { useEffect, useRef, useState } from "react";

export default function Preloader() {
  const [ready, setReady] = useState(false);      // cuando la página está lista
  const [hidden, setHidden] = useState(false);    // cuando terminamos el fade y desmontamos
  const overlayRef = useRef(null);

  useEffect(() => {
    let done = false;

    const minDelay = new Promise((resolve) => setTimeout(resolve, 800)); // mínimo 0.8s
    const onLoad = new Promise((resolve) => {
      if (document.readyState === "complete") return resolve();
      window.addEventListener("load", resolve, { once: true });
    });

    Promise.all([minDelay, onLoad]).then(() => {
      if (done) return;
      setReady(true); // dispara el fade-out
    });

    return () => {
      done = true;
    };
  }, []);

  // Cuando termina la transición de opacidad, desmontamos
  const onTransitionEnd = (e) => {
    if (e.target === overlayRef.current && ready) setHidden(true);
  };

  if (hidden) return null;

  // Si el usuario prefiere menos movimiento, quitamos animaciones
  const prefersReduced = typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <div
      ref={overlayRef}
      onTransitionEnd={onTransitionEnd}
      className={[
        "fixed inset-0 z-[100] flex items-center justify-center",
        "bg-black text-white",
        "transition-opacity duration-500",     // fade-out
        ready ? "opacity-0 pointer-events-none" : "opacity-100",
      ].join(" ")}
      aria-hidden={ready}
      aria-label="Cargando Attempo Choir"
    >
      <div className="flex flex-col items-center gap-4">
        <img
          src="/logo_attempo_positivo.png"
          alt="Attempo Choir"
          className={[
            "h-16 w-auto select-none",
            prefersReduced ? "" : "animate-pulse",
          ].join(" ")}
          draggable="false"
        />
        <p className="text-sm text-slate-200 tracking-wide">
          Cargando…
        </p>
      </div>
    </div>
  );
}
