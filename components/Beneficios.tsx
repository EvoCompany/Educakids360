const beneficios = [
  { num: "01", titulo: "Coordenação motora fina", desc: "O traçado das letras desenvolve os músculos das mãos e prepara para a escrita fluida." },
  { num: "02", titulo: "Criatividade e atenção", desc: "Atividades visuais e coloridas estimulam o foco de crianças com dificuldade de concentração." },
  { num: "03", titulo: "Conexões neurais para leitura", desc: "Combinar grafismo e fonética cria novas vias neurais que aceleram a decodificação de palavras." },
  { num: "04", titulo: "Amor pelas palavras", desc: "A criança desperta curiosidade pelos sons e significados, virando uma leitora natural." },
  { num: "05", titulo: "Sem pressão nem choro", desc: "O método lúdico elimina o estresse da alfabetização tradicional. É divertido para a criança." },
  { num: "06", titulo: "Funciona com TDAH e autismo", desc: "O estímulo multissensorial é especialmente eficaz para crianças com necessidades especiais." },
];

export default function Beneficios() {
  return (
    <section className="section section--alt">
      <div className="container">
        <div className="text-center">
          <span className="tag">Por que funciona?</span>
          <h2 className="titulo">
            6 benefícios que transformam
            <br />a vida do seu filho
          </h2>
        </div>
        <div className="beneficios-grid">
          {beneficios.map((b) => (
            <div className="beneficio-card" key={b.num}>
              <div className="beneficio-num">{b.num}</div>
              <h3>{b.titulo}</h3>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <a href="#oferta" className="btn-cta">
            ✅ Quero esses benefícios para meu filho!
          </a>
          <p className="cta-abaixo dark" style={{ marginTop: "12px" }}>
            🔒 30 dias de garantia • Acesso imediato • Sem risco
          </p>
        </div>
      </div>
    </section>
  );
}
