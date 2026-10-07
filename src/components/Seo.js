import Head from "next/head";
import { SITE_URL, group } from "@/lib/seo";

export default function Seo({ title, description, path = "/", type = "WebPage", service, questions }) {
  const url = `${SITE_URL}${path}`;
  const graph = [
    group,
    { "@type": "WebSite", "@id": `${SITE_URL}/#website`, url: `${SITE_URL}/`, name: "Attempo Choir", inLanguage: "es", publisher: { "@id": group["@id"] } },
    { "@type": type, "@id": `${url}#webpage`, url, name: title, description, inLanguage: "es", isPartOf: { "@id": `${SITE_URL}/#website` }, about: { "@id": group["@id"] }, ...(questions ? { mainEntity: questions.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) } : {}) },
  ];
  if (service) graph.push({ "@type": "Service", "@id": `${url}#service`, url, name: service, serviceType: service, provider: { "@id": group["@id"] }, areaServed: { "@type": "Country", name: "España" }, description });
  if (path !== "/") graph.push({ "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Inicio", item: `${SITE_URL}/` }, { "@type": "ListItem", position: 2, name: service || title.split(" | ")[0], item: url }] });
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} key="description" />
      <link rel="canonical" href={url} key="canonical" />
      <meta property="og:type" content="website" key="og:type" />
      <meta property="og:site_name" content="Attempo Choir" key="og:site_name" />
      <meta property="og:title" content={title} key="og:title" />
      <meta property="og:description" content={description} key="og:description" />
      <meta property="og:url" content={url} key="og:url" />
      <meta property="og:image" content={`${SITE_URL}/og.jpg`} key="og:image" />
      <meta property="og:image:alt" content="Attempo Choir, voces y piano en directo" key="og:image:alt" />
      <meta property="og:locale" content="es_ES" key="og:locale" />
      <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
      <meta name="twitter:title" content={title} key="twitter:title" />
      <meta name="twitter:description" content={description} key="twitter:description" />
      <meta name="twitter:image" content={`${SITE_URL}/og.jpg`} key="twitter:image" />
      <script type="application/ld+json" key="structured-data" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c") }} />
    </Head>
  );
}
