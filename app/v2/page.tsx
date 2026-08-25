import type { Metadata } from "next";
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
import OfertaV2 from "@/components/OfertaV2";
import Garantia from "@/components/Garantia";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";

const ExitPopup = dynamic(() => import("@/components/ExitPopup"), { ssr: false });
const PurchasePopup = dynamic(() => import("@/components/PurchasePopup"), { ssr: false });

// Página de prévia — não deve ser indexada nem divulgada nos menus do site
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function HomeV2() {
  return (
    <>
      <UrgenciaBar />
      <main>
        <Hero
          titulo={
            <>
              +500 Atividades de Grafismo Fonético
              <br />para seu filho ler <em>até 5× mais rápido</em>
            </>
          }
        />
        <VideoDemo />
        <Problema />
        <Solucao />
        <Incluso />
        <AtividadesPreview />
        <Beneficios />
        <Depoimentos />
        <Bonus />
        <OfertaV2 />
        <Garantia />
        <FAQ />
      </main>
      <Footer />
      <PurchasePopup />
      <ExitPopup />
    </>
  );
}
