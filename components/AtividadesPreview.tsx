"use client";

import { useState } from "react";
import Image from "next/image";

const atividades = [
  "/images/atividade-1.png",
  "/images/atividade-2.png",
  "/images/atividade-3.png",
  "/images/atividade-4.png",
  "/images/atividade-5.png",
];

export default function AtividadesPreview() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? atividades.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === atividades.length - 1 ? 0 : i + 1));

  return (
    <section className="section">
      <div className="container">
        <div className="text-center">
          <h2 className="titulo">Veja algumas atividades por dentro do material</h2>
        </div>

        <div className="atividades-carousel">
          <button
            className="atividades-seta atividades-seta--prev"
            onClick={prev}
            aria-label="Atividade anterior"
          >
            ‹
          </button>

          <div className="atividades-frame">
            <Image
              src={atividades[index]}
              alt={`Exemplo de atividade ${index + 1} do material Educakids360`}
              fill
              sizes="(max-width: 600px) 90vw, 520px"
              style={{ objectFit: "contain" }}
            />
          </div>

          <button
            className="atividades-seta atividades-seta--next"
            onClick={next}
            aria-label="Próxima atividade"
          >
            ›
          </button>
        </div>

        <div className="atividades-dots">
          {atividades.map((_, i) => (
            <button
              key={i}
              className={`atividades-dot${i === index ? " atividades-dot--ativo" : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Ir para atividade ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
