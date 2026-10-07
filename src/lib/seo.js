export const SITE_URL = "https://www.attempochoir.com";
export const DOSSIER_URL = "https://dossier.attempochoir.com";
export const CONTACT_URL = "/#contacto";
export const group = {
  "@type": "MusicGroup",
  "@id": `${SITE_URL}/#attempo`,
  name: "Attempo Choir",
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/logo_attempo_positivo.png`,
  image: `${SITE_URL}/bg-hero-3.jpg`,
  description: "Grupo vocal con base en Madrid: cinco cantantes y un pianista. Versiones de pop y musicales a cuatro voces y piano para bodas, eventos corporativos y conciertos en toda España, con repertorio de soul, gospel y música religiosa.",
  genre: ["Pop", "Musical", "Soul", "Gospel"],
  location: { "@type": "Place", name: "Madrid, España" },
  areaServed: { "@type": "Country", name: "España" },
  email: "attempochoir@gmail.com",
  telephone: "+34 660 550 452",
  sameAs: [
    "https://www.instagram.com/attempochoir/",
    "https://www.facebook.com/profile.php?id=61574412730911",
    "https://www.tiktok.com/@attempo.choir",
  ],
  contactPoint: [{ "@type": "ContactPoint", contactType: "Contratación", email: "attempochoir@gmail.com", telephone: "+34 660 550 452", availableLanguage: "es", areaServed: "ES" }],
  member: [
    { "@type": "Person", name: "Lola Morales", jobTitle: "Alto" },
    { "@type": "Person", name: "Nat Sáez", alternateName: "Natacha Sáez", jobTitle: "Soprano" },
    { "@type": "Person", name: "César Leal", jobTitle: "Bajo" },
    { "@type": "Person", name: "Daniel Díaz", jobTitle: "Tenor" },
    { "@type": "Person", name: "Miguel Pérez", jobTitle: "Tenor" },
    { "@type": "Person", name: "Carlos Hernández", jobTitle: "Pianista" },
  ],
};

export const faqs = [
  { question: "¿Cuántos músicos forman Attempo Choir?", answer: "Nuestra formación habitual es de cinco cantantes y un pianista. Interpretamos versiones a cuatro voces con piano en directo y podemos organizar una formación mayor si el evento lo requiere." },
  { question: "¿Qué tipo de música cantáis?", answer: "Nuestro repertorio se centra en pop y musicales, con versiones a cuatro voces y piano. También incluye soul, gospel, música religiosa y piezas instrumentales a piano. Puedes consultar las canciones en la página de repertorio y en nuestro dossier digital." },
  { question: "¿En qué eventos puede actuar vuestro coro?", answer: "Actuamos en bodas, ceremonias civiles y religiosas, cócteles, eventos corporativos, galas, conciertos y festivales. Adaptamos la selección musical al tipo de evento y a los momentos en los que queráis música en directo." },
  { question: "¿Solo actuáis en Madrid?", answer: "Tenemos nuestra base en Madrid y nos desplazamos para actuar en toda España. Indícanos dónde se celebra el evento para incluir el desplazamiento en la propuesta." },
  { question: "¿Cuánto cuesta contratar a Attempo Choir?", answer: "El presupuesto se prepara para cada evento según la fecha, el lugar, la duración, la formación y las necesidades de la actuación. Envíanos esos datos y te haremos una propuesta sin compromiso." },
  { question: "¿Podemos elegir las canciones para nuestra boda o evento?", answer: "Sí, podéis elegir canciones de nuestro repertorio. Si tenéis una petición especial, consultadnos para valorar su preparación y encaje en la actuación." },
  { question: "¿Cómo solicitamos disponibilidad y presupuesto?", answer: "Escribidnos mediante el formulario de contacto, por WhatsApp en el +34 660 550 452 o por email a attempochoir@gmail.com. Indicad fecha, ciudad, tipo de evento y los momentos que os gustaría acompañar con música." },
];

export const repertoire = [
  { category: "Musicales", songs: ["He Lives in You / Él vive en ti", "Zero to Hero", "Out There", "For Good", "Somewhere Over the Rainbow", "When You Believe", "This Is Me", "Seasons of Love", "Maybe This Time (Cabaret)", "On My Own", "One Night Only"] },
  { category: "Pop y soul", songs: ["Ain’t No Mountain High Enough", "Proud Mary", "A Thousand Years", "You're the Reason", "Hallelujah", "What a Wonderful World", "Rolling in the Deep", "Can’t Help Falling in Love", "Natural Woman", "Make You Feel My Love", "Hymne à l’amour", "Stand by Me", "I’m Feeling Good"] },
  { category: "Gospel", songs: ["Amazing Grace", "Oh Happy Day!", "Total Praise", "Love Theory", "When the Saints Go Marching In", "Souled Out", "His Eye Is on the Sparrow"] },
  { category: "Música religiosa", songs: ["Cara a Cara", "En mi Getsemaní", "Nada te turbe", "Madre de Hakuna", "Ave María (Beyoncé)"] },
  { category: "Instrumental a piano", songs: ["Forrest Gump", "River Flows in You"] },
];
