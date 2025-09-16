export default function Privacidad() {
  return (
    <div className="min-h-screen bg-white text-slate-900 px-6 py-16 max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
        Política de Privacidad
      </h1>
      <p className="text-slate-700 leading-relaxed mb-4">
        En Attempo Choir nos tomamos muy en serio la protección de tus datos personales.
        Esta Política de Privacidad explica qué información recopilamos, cómo la usamos
        y cuáles son tus derechos.
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Datos recopilados</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Podemos recopilar información como tu nombre, correo electrónico, número de teléfono
        y detalles de tu evento al rellenar nuestro formulario de contacto.
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Finalidad</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Utilizamos estos datos únicamente para responder a tus solicitudes y gestionar
        contrataciones relacionadas con nuestros servicios.
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Tus derechos</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Tienes derecho a acceder, rectificar o eliminar tus datos, así como a oponerte
        a su tratamiento. Para ejercer estos derechos, puedes escribirnos a{" "}
        <a href="mailto:attempochoir@gmail.com" className="text-violet-600 hover:underline">
          attempochoir@gmail.com
        </a>.
      </p>
      <p className="text-slate-500 mt-12">Última actualización: {new Date().getFullYear()}</p>
    </div>
  );
}
