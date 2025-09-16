export default function Cookies() {
  return (
    <div className="min-h-screen bg-white text-slate-900 px-6 py-16 max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
        Política de Cookies
      </h1>
      <p className="text-slate-700 leading-relaxed mb-4">
        Este sitio web utiliza cookies para mejorar tu experiencia de navegación y
        analizar el tráfico. Al continuar navegando, aceptas el uso de cookies.
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">¿Qué son las cookies?</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Las cookies son pequeños archivos que se guardan en tu dispositivo y que permiten
        recordar tus preferencias y ofrecerte un servicio más personalizado.
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Tipos de cookies usadas</h2>
      <ul className="list-disc list-inside text-slate-700 mb-4">
        <li>Cookies técnicas: necesarias para el funcionamiento del sitio.</li>
        <li>Cookies de análisis: nos ayudan a entender cómo interactúan los usuarios.</li>
        <li>Cookies de personalización: recuerdan tus preferencias.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-8 mb-2">Gestión de cookies</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Puedes configurar tu navegador para aceptar, rechazar o eliminar cookies.
        Ten en cuenta que deshabilitar cookies puede afectar la funcionalidad de la web.
      </p>
      <p className="text-slate-500 mt-12">Última actualización: {new Date().getFullYear()}</p>
    </div>
  );
}
