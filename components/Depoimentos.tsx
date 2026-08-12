import Image from "next/image";

const depoimentos = [
  "/images/depoimento-whats-01.png",
  "/images/depoimento-whats-02.png",
  "/images/depoimento-whats-03.png",
  "/images/depoimento-whats-04.png",
  "/images/depoimento-whats-05.png",
];

const trilha = [...depoimentos, ...depoimentos];

export default function Depoimentos() {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center">
          <span className="tag tag--verde">Resultados Reais</span>
          <h2 className="titulo">O que mães e pais estão dizendo</h2>
          <p className="subtitulo mx-auto">
            Mais de 2.400 famílias já transformaram o aprendizado dos seus
            filhos com o Educakids360, pelo Método Grafismo Fonético.
          </p>
        </div>
      </div>
      <div className="depoimentos-marquee">
        <div className="depoimentos-track">
          {trilha.map((src, i) => (
            <div className="depoimento-print" key={i} aria-hidden={i >= depoimentos.length}>
              <Image
                src={src}
                alt="Print de conversa no WhatsApp de mãe agradecendo pelos resultados do Educakids360"
                width={730}
                height={1352}
                sizes="(max-width: 640px) 200px, 260px"
                loading="lazy"
                className="depoimento-print-img"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
