const problemas = [
  {
    icon: "😰",
    titulo: "Resistência e desmotivação",
    desc: "A criança chora, recusa e odeia a hora de estudar com métodos que forçam memorização.",
  },
  {
    icon: "⏳",
    titulo: "Atraso no processo",
    desc: "Outras crianças da mesma idade já leem e isso gera ansiedade em toda a família.",
  },
  {
    icon: "🧠",
    titulo: "Dificuldades específicas",
    desc: "TDAH, autismo ou baixa concentração tornam o aprendizado ainda mais desafiador.",
  },
  {
    icon: "💸",
    titulo: "Custos com fonoaudiologia",
    desc: "Sessões particulares são caras e nem sempre acessíveis para todas as famílias.",
  },
];

export default function Problema() {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center">
          <span className="tag tag--laranja">Você reconhece isso?</span>
          <h2 className="titulo">Seu filho tem dificuldade para aprender a ler?</h2>
          <p className="subtitulo mx-auto">
            Muitas crianças sofrem com métodos tradicionais que não respeitam o
            ritmo e a forma como o cérebro infantil aprende.
          </p>
        </div>
        <div className="problema-grid">
          {problemas.map((p) => (
            <div className="problema-card" key={p.titulo}>
              <span className="problema-icon">{p.icon}</span>
              <div>
                <h3>{p.titulo}</h3>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <a href="#oferta" className="btn-cta">
            Quero resolver isso agora — R$&nbsp;27,90
          </a>
          <p className="cta-abaixo dark" style={{ marginTop: "12px" }}>
            🔒 30 dias de garantia • Acesso imediato • Sem risco
          </p>
        </div>
      </div>
    </section>
  );
}
