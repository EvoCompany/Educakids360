const etapas = [
  {
    titulo: "O que é o Grafismo Fonético",
    texto:
      "Desenvolvido originalmente nos EUA, o Grafismo Fonético é uma técnica que combina o traçado visual das letras com os sons que elas representam. A criança aprende a forma, o movimento e o som ao mesmo tempo — ativando memória visual, auditiva e motora simultaneamente.",
  },
  {
    titulo: "Por que aprende mais rápido e com menos esforço",
    texto:
      "Métodos tradicionais pedem que a criança memorize letras isoladas. O Grafismo Fonético segue o caminho natural do cérebro infantil: associar símbolo, som e gesto. Isso cria conexões neurais mais fortes e duradouras, sem pressão e sem repetição mecânica.",
  },
  {
    titulo: "Como aplicar no dia a dia da sua família",
    texto:
      "São atividades progressivas de 10 minutos por dia, organizadas por nível de dificuldade. Você não precisa ser professora: o material guia cada passo. Em semanas, você já vai perceber mudanças no traçado, na fluência e — principalmente — na confiança do seu filho.",
  },
];

export default function Abordagem() {
  return (
    <section className="section section--alt" id="metodo">
      <div className="container">
        <div className="text-center">
          <span className="tag">Como funciona</span>
          <h2 className="titulo">A abordagem por trás do método</h2>
          <p className="subtitulo mx-auto">
            Entenda a ciência que faz o Grafismo Fonético funcionar onde outros
            métodos falham.
          </p>
        </div>

        <div className="abordagem-lista">
          {etapas.map((etapa, i) => (
            <div className="abordagem-item" key={etapa.titulo}>
              <span className="abordagem-num">0{i + 1}</span>
              <div>
                <h3>{etapa.titulo}</h3>
                <p>{etapa.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
