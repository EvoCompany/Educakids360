const itens = [
  { emoji: "📖", titulo: "+100 Atividades em PDF", desc: "Atividades de grafismo fonético completas e prontas para usar" },
  { emoji: "🔤", titulo: "Palavras com 2 Sílabas", desc: "Nível inicial para crianças que estão começando o processo" },
  { emoji: "📝", titulo: "Palavras com 3 Sílabas", desc: "Nível intermediário para consolidar o aprendizado" },
  { emoji: "✏️", titulo: "Palavras com 4 Sílabas", desc: "Nível avançado para crianças em progresso acelerado" },
  { emoji: "🖊️", titulo: "Letra Cursiva e Bastão", desc: "Versões em cursiva e bastão para adaptação ao estilo da escola" },
  { emoji: "♾️", titulo: "Acesso Vitalício", desc: "Baixe, imprima e reutilize quantas vezes precisar" },
];

export default function Incluso() {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center">
          <span className="tag">O Kit Completo</span>
          <h2 className="titulo">
            Tudo que vem no
            <br />
            Kit Educakids360
          </h2>
          <p className="subtitulo mx-auto">
            Mais de 100 atividades de Grafismo Fonético organizadas por nível de
            dificuldade, em PDF pronto para imprimir quantas vezes quiser.
          </p>
        </div>
        <div className="incluso-grid">
          {itens.map((item) => (
            <div className="incluso-card" key={item.titulo}>
              <div className="incluso-emoji">{item.emoji}</div>
              <h3>{item.titulo}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <a href="#oferta" className="btn-cta">
            🚀 Quero o Kit Completo — R$&nbsp;37,90
          </a>
          <p className="cta-abaixo dark" style={{ marginTop: "12px" }}>
            🔒 30 dias de garantia • Acesso imediato • Sem risco
          </p>
        </div>
      </div>
    </section>
  );
}
