import Seo from "@/components/Seo";
import AttempoLanding from "@/components/AttempoLanding";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Seo title="Coro para eventos y bodas en Madrid | Attempo Choir" description="Cinco voces y piano en directo para eventos corporativos, bodas y conciertos. Pop y musicales a cuatro voces. Base en Madrid; actuaciones en toda España." />
      <AttempoLanding />
      <Footer />
    </>
  );
}
