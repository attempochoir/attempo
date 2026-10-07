import ContentLayout from "@/components/ContentLayout";
import { faqs } from "@/lib/seo";

export default function FAQ() {
  return (
    <ContentLayout title="Contratar un coro: preguntas frecuentes | Attempo Choir" description="Resolvemos dudas sobre formación, repertorio, desplazamientos y presupuesto de Attempo Choir para bodas y eventos en Madrid y toda España." path="/faq" heading="Preguntas frecuentes sobre contratar a Attempo Choir" type="FAQPage" questions={faqs}>
      <dl className="space-y-8">{faqs.map(({ question, answer }) => <div key={question}><dt className="text-xl font-semibold mb-3">{question}</dt><dd className="text-slate-700 leading-relaxed">{answer}</dd></div>)}</dl>
      <div className="flex flex-wrap gap-5"><a href="/repertorio" className="text-violet-700 underline">Consultar el repertorio</a><a href="/quienes-somos" className="text-violet-700 underline">Conocer a los músicos</a></div>
    </ContentLayout>
  );
}
