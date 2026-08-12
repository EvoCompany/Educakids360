import Image from "next/image";

const depoimentos = [
  {
    texto: "Em apenas 2 semanas minha filha já conseguia identificar todas as letras e formar sílabas. Estou impressionada com a evolução! 🥹",
    nome: "Ana Paula M.",
    info: "Mãe de menina de 5 anos",
    avatar: "/images/avatar-ana-paula.png",
  },
  {
    texto: "Meu filho tem TDAH e eu não acreditava que fosse funcionar… Em menos de 1 mês ele já está lendo palavrinhas. Método incrível! 🙌",
    nome: "Fernanda L.",
    info: "Mãe de menino de 7 anos",
    avatar: "/images/avatar-fernanda.png",
  },
  {
    texto: "Minha filha adorou as atividades! É a primeira vez que ela pede para estudar sozinha. A metodologia é simples e os resultados aparecem rápido. 😊",
    nome: "Juliana R.",
    info: "Mãe de menina de 6 anos",
    avatar: "/images/avatar-juliana.png",
  },
  {
    texto: "Vale muito mais que o preço! Meu filho avançou um semestre em poucas semanas. A professora ficou surpresa com o progresso. 😄",
    nome: "Marcos T.",
    info: "Pai de menino de 8 anos",
    avatar: "/images/avatar-marcos.png",
  },
  {
    texto: "Sou professora e recomendo para todas as famílias. O método fonético é o mais eficaz que conheço e as atividades são muito bem elaboradas. 👏",
    nome: "Carla S.",
    info: "Professora e mãe de 2 filhos",
    avatar: "/images/avatar-carla.png",
  },
];

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
        <div className="depoimentos-grid">
          {depoimentos.map((d) => (
            <div className="depoimento-card" key={d.nome}>
              <div className="estrelas">★★★★★</div>
              <blockquote>&ldquo;{d.texto}&rdquo;</blockquote>
              <div className="depoimento-autor">
                <Image
                  src={d.avatar}
                  alt={d.nome}
                  width={48}
                  height={48}
                  sizes="48px"
                  loading="lazy"
                  className="autor-avatar-img"
                  style={{ borderRadius: "50%", objectFit: "cover" }}
                />
                <div>
                  <div className="autor-nome">{d.nome}</div>
                  <div className="autor-info">{d.info}</div>
                  <div className="autor-selo">✅ Compra verificada</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
