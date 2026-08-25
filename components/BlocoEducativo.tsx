const transformacoes = [
  "Segurar o lápis com firmeza e autonomia",
  "Completar atividades sem frustração",
  "Desenvolver foco e concentração naturalmente",
  "Aprender a ler e escrever com prazer",
  "Ganhar autoestima e amor pela escola",
  "Progredir no próprio ritmo, sem pressão",
];

export default function BlocoEducativo() {
  return (
    <section className="section section--alt" id="grafomotricidade">
      <div className="container">
        <div className="text-center" style={{ marginBottom: "32px" }}>
          <span className="tag">Entenda o método</span>
          <h2 className="titulo">O que é o Grafismo Fonético e por que funciona?</h2>
        </div>

        <div className="educativo-grid">
          <div className="educativo-card educativo-card--o-que">
            <p className="educativo-label educativo-label--o-que">O QUE É?</p>
            <h3>Grafismo Fonético é o ensino da leitura pelo movimento e pelo som</h3>
            <p>
              Originário dos EUA, o método une o traçado de letras com sons e
              sílabas, criando conexões neurais que aceleram a alfabetização de
              forma natural. Vai muito além de "copiar letras" — ativa múltiplas
              áreas do cérebro ao mesmo tempo.
            </p>
          </div>

          <div className="educativo-card educativo-card--impacto">
            <p className="educativo-label educativo-label--impacto">COMO IMPACTA A VIDA DO SEU FILHO?</p>
            <h3>Sem estimulação certa, surgem bloqueios que vão além da escola</h3>
            <p>
              Letras que não saem, resistência para estudar, frustração na hora
              de ler — o que parece "dificuldade de aprendizado" muitas vezes é
              apenas falta de um estímulo adequado. Quanto mais tempo passa, mais
              difícil fica reverter.
            </p>
          </div>

          <div className="educativo-card educativo-card--caminho">
            <p className="educativo-label educativo-label--caminho">O CAMINHO PARA:</p>
            <ul className="educativo-lista">
              {transformacoes.map((item) => (
                <li key={item}>
                  <span className="educativo-check">✅</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="educativo-cta">
          <a href="#oferta">Quero meu filho lendo rápido →</a>
        </div>
      </div>
    </section>
  );
}
