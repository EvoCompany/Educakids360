import Image from "next/image";

export default function Garantia() {
  return (
    <section className="section section--alt">
      <div className="container">
        <div className="garantia-box">
          <div className="garantia-icone">
            <Image
              src="/images/garantia-30-dias.jpg"
              alt="Selo de garantia de 30 dias"
              width={110}
              height={110}
              sizes="(max-width: 560px) 80px, 110px"
            />
          </div>
          <div>
            <h2>Garantia Total de 30 Dias</h2>
            <p>
              Você tem <strong>30 dias completos</strong> para testar o Kit
              Educakids360 sem nenhum risco. Se por qualquer motivo não
              ficar satisfeita, basta enviar um e-mail e devolvemos 100% do seu
              investimento, sem perguntas, sem letras miúdas, sem complicação.
            </p>
            <br />
            <p style={{ fontSize: "14px" }}>
              <strong>Editora Inove</strong>, comprometida com a transformação
              real no aprendizado das crianças.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
