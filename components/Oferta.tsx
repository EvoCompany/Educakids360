import dynamic from "next/dynamic";
const Countdown = dynamic(() => import("./Countdown"), { ssr: false });

const itensBasico = [
  { nome: "Atividades de Grafismo Fonético Nível 1", valor: "R$ 67,00" },
  { nome: "Atividades de Grafismo Fonético Nível 2", valor: "R$ 67,00" },
  { nome: "Atividades de Grafismo Fonético Nível 3", valor: "R$ 63,00" },
];

const itensCompleto = [
  { prefix: "",         nome: "Atividades de Grafismo Fonético Nível 1, 2 e 3", valor: "R$ 197,00" },
  { prefix: "Bônus 01:", nome: "Caderno do Alfabeto com Imagens",               valor: "R$ 37,00"  },
  { prefix: "Bônus 02:", nome: "Caderno Quebra-Cabeça do Alfabeto",             valor: "R$ 47,00"  },
  { prefix: "Bônus 03:", nome: "Caderno de Formação de Palavras",               valor: "R$ 57,00"  },
  { prefix: "Bônus 04:", nome: "Caderno Relógio do Alfabeto",                   valor: "R$ 39,00"  },
  { prefix: "Bônus 05:", nome: "Caderno de Pontilhado do Alfabeto",             valor: "R$ 27,00"  },
  { prefix: "Bônus 06:", nome: "Caderno Carinhas do Alfabeto",                  valor: "R$ 49,00"  },
];

export default function Oferta() {
  return (
    <section className="section" id="oferta">
      <div className="container">
        <div className="oferta-box">
          <span className="tag" style={{ background: "rgba(255,255,255,0.2)" }}>
            🔥 Oferta Especial
          </span>
          <h2
            className="titulo"
            style={{ color: "white", fontSize: "clamp(22px,4vw,36px)", marginBottom: "4px" }}
          >
            Escolha seu Kit Educakids360
          </h2>
          <p style={{ color: "rgba(255,255,255,0.78)", fontSize: "15px", marginBottom: "8px" }}>
            Método Grafismo Fonético. Aprenda a ler de forma natural e eficaz
          </p>

          <Countdown />

          <div className="oferta-cards-grid">
            {/* ── Plano Básico ── */}
            <div className="oferta-card">
              <span className="oferta-card-tag">Kit Básico</span>

              <ul className="oferta-itens-lista">
                {itensBasico.map((item) => (
                  <li className="oferta-item-row" key={item.nome}>
                    <span className="oferta-item-nome">
                      <span>✅</span>
                      <span>{item.nome}</span>
                    </span>
                    <span className="oferta-item-preco">De {item.valor}</span>
                  </li>
                ))}
              </ul>

              <ul className="oferta-extras">
                <li>🎧 Suporte Profissional</li>
                <li>🛡️ Garantia Incondicional</li>
              </ul>

              <div className="oferta-divider" />

              <p className="oferta-total-label">
                No total tudo deveria custar <strong>R$ 197,00</strong>
              </p>
              <p className="oferta-total-call">Mas hoje você vai ter acesso por</p>

              <div className="oferta-por" style={{ fontSize: "clamp(36px,7vw,56px)", marginBottom: "4px" }}>
                R$ 27,90
              </div>
              <div className="oferta-parcel">ou 4× de R$ 7,97 sem juros</div>

              <p className="oferta-access-info">ACESSO VITALÍCIO | ACESSO IMEDIATO</p>

              <a
                href="https://pay.cakto.com.br/3ep5uku"
                className="btn-cta btn-cta--static"
                style={{ width: "100%", fontSize: "clamp(13px,2.5vw,16px)", padding: "15px 20px" }}
              >
                QUERO O KIT BÁSICO
              </a>

              <div className="oferta-seguranca">
                <div className="oferta-seguranca-item"><span>🔒</span><span>Compra Segura</span></div>
                <div className="oferta-seguranca-item"><span>🛡️</span><span>Garantia</span></div>
                <div className="oferta-seguranca-item"><span>✅</span><span>Satisfação Protegida</span></div>
              </div>
              <p className="oferta-pagamento-seguro">
                🔐 Pagamento processado com segurança pela Cakto
              </p>
            </div>

            {/* ── Plano Completo ── */}
            <div className="oferta-card oferta-card--destaque">
              <span className="oferta-card-tag oferta-card-tag--destaque">⭐ Mais Completo</span>

              <ul className="oferta-itens-lista">
                {itensCompleto.map((item) => (
                  <li className="oferta-item-row" key={item.nome}>
                    <span className="oferta-item-nome">
                      <span>✅</span>
                      <span>
                        {item.prefix && <strong>{item.prefix} </strong>}
                        {item.nome}
                      </span>
                    </span>
                    <span className="oferta-item-preco">De {item.valor}</span>
                  </li>
                ))}
              </ul>

              <ul className="oferta-extras">
                <li>🎧 Suporte Profissional</li>
                <li>🛡️ Garantia Incondicional</li>
              </ul>

              <div className="oferta-divider" />

              <p className="oferta-total-label">
                No total tudo deveria custar <strong>R$ 465,00</strong>
              </p>
              <p className="oferta-total-call">Mas hoje você vai ter acesso completo por</p>

              <div className="oferta-por" style={{ fontSize: "clamp(40px,7vw,60px)", marginBottom: "4px" }}>
                R$ 37,90
              </div>
              <div className="oferta-parcel">5x de R$ 8,39 *</div>

              <p className="oferta-access-info">ACESSO VITALÍCIO | ACESSO IMEDIATO</p>

              <a
                href="https://pay.cakto.com.br/9sw8c9t_794481"
                className="btn-cta btn-cta--destaque"
                style={{ width: "100%", fontSize: "clamp(13px,2vw,15px)", padding: "15px 16px" }}
              >
                QUERO GARANTIR O MEU KIT AGORA!
              </a>

              <div className="oferta-seguranca">
                <div className="oferta-seguranca-item"><span>🔒</span><span>Compra Segura</span></div>
                <div className="oferta-seguranca-item"><span>🛡️</span><span>Garantia</span></div>
                <div className="oferta-seguranca-item"><span>✅</span><span>Satisfação Protegida</span></div>
              </div>
              <p className="oferta-pagamento-seguro">
                🔐 Pagamento processado com segurança pela Cakto
              </p>
            </div>
          </div>

          <div className="garantia-strip">
            <span className="garantia-icon">🛡️</span>
            <span>
              <strong>Garantia de 7 dias:</strong> Se não gostar, devolvemos
              100% do seu dinheiro. Sem perguntas, sem burocracia.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
