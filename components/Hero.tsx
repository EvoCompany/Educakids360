import Image from "next/image";
import type { ReactNode } from "react";

export default function Hero({ titulo }: { titulo?: ReactNode }) {
  return (
    <section className="hero">
      <div className="container">
        {/* Mockup: respiro no topo, espaço reduzido até a headline */}
        <div style={{ paddingTop: "32px", marginBottom: "20px", lineHeight: 0 }}>
          <Image
            src="/images/mockup-principal-hero.webp"
            alt="Kit Educakids360 — Método Grafismo Fonético"
            width={1080}
            height={584}
            priority
            unoptimized
            style={{ width: "100%", height: "auto", display: "block", borderRadius: "12px" }}
          />
        </div>

        <span className="tag">✨ Educakids360 · Grafismo Fonético</span>
        <h1 className="hero-titulo">
          {titulo ?? (
            <>
              A técnica que ensina seu filho
              <br />a ler <em>até 5× mais rápido</em>,<br />
              sem pressão nem estresse!
            </>
          )}
        </h1>
        <p className="hero-sub">
          Funciona com apenas{" "}
          <strong style={{ color: "#FFD54F" }}>10 minutos por dia</strong>,
          para crianças de 2 a 12 anos
        </p>

        <div className="hero-badges">
          <span className="hero-badge-item">👧 2 a 12 anos</span>
          <span className="hero-badge-item">⏰ 10 min/dia</span>
          <span className="hero-badge-item">📲 Acesso imediato</span>
          <span className="hero-badge-item">♾️ Acesso vitalício</span>
        </div>

        <a href="#oferta" className="btn-cta">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
          Quero Meu Filho Lendo Rápido!
        </a>
        <p className="cta-abaixo">🔒 Compra 100% segura • Acesso imediato por e-mail</p>

        <div className="hero-social-proof">
          <span className="hero-stars">⭐⭐⭐⭐⭐</span>
          <span className="hero-social-texto">
            <strong>+2.400 famílias</strong> já transformaram a alfabetização dos seus filhos
          </span>
        </div>
      </div>
    </section>
  );
}
