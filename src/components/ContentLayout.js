import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { DOSSIER_URL } from "@/lib/seo";

export default function ContentLayout({ title, description, path, heading, children, ...seo }) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Seo title={title} description={description} path={path} {...seo} />
      <header className="border-b bg-white">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-wrap items-center justify-between gap-4">
          <a href="/" className="font-semibold text-xl">Attempo Choir</a>
          <nav aria-label="Navegación principal" className="flex flex-wrap gap-x-5 gap-y-3 text-sm">
            <a href="/coro-para-eventos" className="hover:text-violet-700">Eventos</a>
            <a href="/coro-para-bodas" className="hover:text-violet-700">Bodas</a>
            <a href="/repertorio" className="hover:text-violet-700">Repertorio</a>
            <a href="/#contacto" className="hover:text-violet-700">Contacto</a>
          </nav>
        </div>
      </header>
      <main>
        <section className="bg-black text-white">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
            <nav aria-label="Ruta de navegación" className="text-sm text-violet-200 mb-6"><a href="/" className="underline">Inicio</a><span aria-hidden="true"> / </span><span>{heading}</span></nav>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight max-w-4xl">{heading}</h1>
            <p className="mt-6 text-lg text-slate-200 max-w-3xl">{description}</p>
            <a href="/#contacto" className="mt-8 inline-block rounded-2xl bg-[#6E3AFF] px-6 py-3 font-medium hover:bg-[#5925E6]">Consulta disponibilidad y presupuesto</a>
          </div>
        </section>
        <div className="max-w-5xl mx-auto px-6 py-14 space-y-12">{children}</div>
        <section className="bg-violet-50 text-center px-6 py-14">
          <h2 className="text-2xl font-bold">Escúchanos y cuéntanos tu evento</h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-700">Fecha, ciudad, tipo de evento y momentos musicales: con esos datos prepararemos una propuesta para vosotros.</p>
          <div className="mt-6 flex justify-center flex-wrap gap-4">
            <a href="/#contacto" className="rounded-2xl bg-[#6E3AFF] text-white px-6 py-3">Solicita presupuesto</a>
            <a href={DOSSIER_URL} target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-violet-700 text-violet-800 px-6 py-3">Ver dossier con fotos y vídeos</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
