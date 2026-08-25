import UrgenciaBar from "@/components/UrgenciaBar";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import VideoDemo from "@/components/VideoDemo";
import BlocoEducativo from "@/components/BlocoEducativo";
import Incluso from "@/components/Incluso";
import Problema from "@/components/Problema";
import Solucao from "@/components/Solucao";
import Beneficios from "@/components/Beneficios";
import Sobre from "@/components/Sobre";
import Abordagem from "@/components/Abordagem";
import Depoimentos from "@/components/Depoimentos";
import Bonus from "@/components/Bonus";
import Oferta from "@/components/Oferta";
import Garantia from "@/components/Garantia";
import FAQ from "@/components/FAQ";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import ClientPopups from "@/components/ClientPopups";

export default function Home() {
  return (
    <>
      <UrgenciaBar />
      <Nav />
      <main>
        <div id="inicio">
          <Hero />
        </div>
        <VideoDemo />
        <BlocoEducativo />
        <div id="servicos">
          <Incluso />
        </div>
        <div id="dores">
          <Problema />
        </div>
        <Solucao />
        <Beneficios />
        <Sobre />
        <Abordagem />
        <div id="depoimentos">
          <Depoimentos />
        </div>
        <Bonus />
        <Oferta />
        <Garantia />
        <FAQ />
        <Contato />
      </main>
      <Footer />
      <ClientPopups />
    </>
  );
}
