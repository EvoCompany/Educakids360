const credenciais = [
  { icon: "🏆", texto: "Especialista em Grafismo Fonético" },
  { icon: "📚", texto: "20+ anos em educação infantil" },
  { icon: "👨‍👩‍👧‍👦", texto: "+2.400 famílias impactadas" },
  { icon: "🧠", texto: "Especialista em TDAH e autismo" },
];

export default function Sobre() {
  return (
    <section className="section" id="sobre">
      <div className="container">
        <div className="text-center" style={{ marginBottom: "32px" }}>
          <span className="tag">Quem criou o método</span>
          <h2 className="titulo">Conheça um pouco sobre mim</h2>
        </div>

        <div className="sobre-wrap">
          {/* Substitua por <Image> quando tiver a foto real */}
          <div className="sobre-foto-placeholder" aria-hidden="true">MA</div>

          <div>
            <h3
              style={{
                fontFamily: "var(--font-fredoka), cursive",
                fontSize: "clamp(22px, 4vw, 32px)",
                color: "var(--azul-escuro)",
                marginBottom: "12px",
              }}
            >
              Maria Alcilene
            </h3>

            <p className="subtitulo" style={{ marginBottom: "16px" }}>
              Especialista em educação infantil e ensino de Grafismo Fonético há
              mais de 20 anos.
            </p>

            <p style={{ fontSize: "15px", color: "var(--texto-suave)", lineHeight: 1.7, marginBottom: "14px" }}>
              Dediquei minha vida a entender como cada criança aprende a ler e a
              escrever — e a criar um caminho mais leve e eficaz para isso. Ao
              longo da minha trajetória, trabalhei com centenas de crianças de
              diferentes idades, incluindo aquelas com TDAH, autismo e
              dificuldades de foco.
            </p>

            <p style={{ fontSize: "15px", color: "var(--texto-suave)", lineHeight: 1.7, marginBottom: "24px" }}>
              Foi essa experiência que me levou a criar o Educakids360 — um
              método progressivo e lúdico que qualquer família pode aplicar em
              casa, em apenas 10 minutos por dia, com resultados visíveis em
              semanas.
            </p>

            <div className="sobre-credenciais">
              {credenciais.map((c) => (
                <div className="sobre-credencial" key={c.texto}>
                  <span className="sobre-credencial-icon">{c.icon}</span>
                  <p>{c.texto}</p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "24px" }}>
              <a href="#oferta" className="btn-cta btn-cta--static" style={{ fontSize: "15px", padding: "14px 32px" }}>
                Conhecer o Método
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
