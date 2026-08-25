import UrgenciaBar from "@/components/UrgenciaBar";
import Hero from "@/components/Hero";
import VideoDemo from "@/components/VideoDemo";
import Problema from "@/components/Problema";
import Solucao from "@/components/Solucao";
import Incluso from "@/components/Incluso";
import AtividadesPreview from "@/components/AtividadesPreview";
import Beneficios from "@/components/Beneficios";
import Depoimentos from "@/components/Depoimentos";
import Bonus from "@/components/Bonus";
import Oferta from "@/components/Oferta";
import Garantia from "@/components/Garantia";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";

// Carrega em chunk separado após hidratação inicial — não bloqueia LCP/TBT
const ExitPopup = dynamic(() => import("@/components/ExitPopup"), { ssr: false });
const PurchasePopup = dynamic(() => import("@/components/PurchasePopup"), { ssr: false });

export default function Home() {
  return (
    <>
      <UrgenciaBar />
      <main>
        <Hero />
        <VideoDemo />
        <Problema />
        <Solucao />
        <Incluso />
        <AtividadesPreview />
        <Beneficios />
        <Depoimentos />
        <Bonus />
        <Oferta />
        <Garantia />
        <FAQ />
      </main>
      <Footer />
      {/* <WhatsappFloat /> */}
      <PurchasePopup />
      <ExitPopup />
    </>
  );
}
