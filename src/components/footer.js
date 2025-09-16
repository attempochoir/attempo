import { FaInstagram, FaFacebookF, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 text-center font-sans">
      <p className="m-0 mb-4 text-lg font-medium">Attempo Choir</p>

      {/* Redes sociales */}
      <div className="flex justify-center flex-wrap gap-4 mb-6 text-2xl">
        <a
          href="https://www.instagram.com/attempochoir/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          title="Instagram"
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#6E3AFF] transition-colors hover:bg-[#E4405F]"
        >
          <FaInstagram />
        </a>

        <a
          href="https://www.facebook.com/profile.php?id=61574412730911"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          title="Facebook"
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#6E3AFF] transition-colors hover:bg-[#1877F2]"
        >
          <FaFacebookF />
        </a>

        <a
          href="https://www.tiktok.com/@attempo.choir"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
          title="TikTok"
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#6E3AFF] transition-colors hover:bg-[#010101]"
        >
          <SiTiktok />
        </a>

        <a
          href="https://wa.me/34660550452"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          title="WhatsApp"
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#6E3AFF] transition-colors hover:bg-[#25D366]"
        >
          <FaWhatsapp />
        </a>

        <a
          href="mailto:attempochoir@gmail.com"
          aria-label="Email"
          title="Email"
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#6E3AFF] transition-colors hover:bg-[#888888]"
        >
          <FaEnvelope />
        </a>
      </div>

      {/* Enlaces de texto (segunda fila) */}
      <div className="flex justify-center flex-wrap gap-6 mb-6 text-sm text-gray-400">
        <a href="/faq" className="hover:text-violet-400 transition-colors">Preguntas frecuentes</a>
        <a href="/privacidad" className="hover:text-violet-400 transition-colors">Privacidad</a>
        <a href="/cookies" className="hover:text-violet-400 transition-colors">Cookies</a>
      </div>

      {/* Copy final */}
      <p className="m-0 text-sm text-gray-500">
        © {new Date().getFullYear()} Attempo Choir. Todos los derechos reservados.
      </p>
    </footer>
  );
}

