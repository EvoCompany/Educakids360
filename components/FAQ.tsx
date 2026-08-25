"use client";

import { useState } from "react";

const perguntas = [
  {
    q: "Para qual idade é indicado o Kit Educakids360?",
    a: "O kit é indicado para crianças de 2 a 12 anos. Os materiais são organizados por nível de dificuldade (2, 3 e 4 sílabas), então você pode começar pelo nível adequado para a idade e o desenvolvimento do seu filho.",
  },
  {
    q: "Funciona para crianças com TDAH ou autismo?",
    a: "Sim! O método Grafismo Fonético multissensorial é especialmente eficaz para crianças com TDAH, autismo e outras dificuldades de aprendizagem. A combinação de estímulos visuais, motores e auditivos facilita o foco e a retenção.",
  },
  {
    q: "Como vou receber o material após a compra?",
    a: "O acesso é 100% digital e enviado imediatamente para o seu e-mail após a confirmação do pagamento. Você recebe os arquivos em PDF prontos para baixar e imprimir quantas vezes quiser. O acesso é vitalício.",
  },
  {
    q: "Preciso de muito tempo para aplicar o método?",
    a: "Não! O Kit Educakids360 foi desenvolvido para funcionar com apenas 10 minutos por dia. Essa consistência é mais eficaz do que longas sessões de estudo ocasionais.",
  },
  {
    q: "E se eu não gostar? Existe garantia?",
    a: "Sim! Você tem 30 dias de garantia total. Se por qualquer motivo não ficar satisfeita, basta enviar um e-mail para nosso suporte e devolvemos 100% do valor pago, sem perguntas e sem burocracia.",
  },
  {
    q: "Posso imprimir o material mais de uma vez?",
    a: "Sim! Como o acesso é vitalício e os arquivos ficam com você, pode imprimir quantas vezes quiser: para vários filhos, em diferentes tamanhos, ou para refazer atividades que a criança gostou.",
  },
  {
    q: "E se meu filho for muito pequeno, de 2 ou 3 anos?",
    a: "O kit é totalmente indicado para essa faixa etária! As atividades do Nível 1 foram especialmente pensadas para crianças pequenas, com traçados simples, imagens coloridas e exercícios curtos de até 5 minutos. Quanto mais cedo a criança começa o contato com letras e sons de forma lúdica, mais natural e rápida é a alfabetização quando chegar o momento.",
  },
  {
    q: "Preciso ter impressora em casa?",
    a: "Não necessariamente. Você pode imprimir em qualquer gráfica, papelaria ou lan house perto de você por um custo muito baixo. Os arquivos são em PDF de alta resolução, prontos para impressão em qualquer lugar. Muitas mães imprimem apenas as atividades da semana para não desperdiçar papel.",
  },
  {
    q: "O método substitui acompanhamento fonoaudiológico?",
    a: "Não e nunca afirmamos isso. O Grafismo Fonético é um material de apoio pedagógico para estimular a alfabetização de forma natural e lúdica em casa. Crianças com diagnóstico de dislexia, atraso de fala ou outras condições específicas devem continuar com acompanhamento profissional. O kit pode inclusive ser usado como complemento às orientações do fonoaudiólogo.",
  },
  {
    q: "Meu filho já está na escola. Ainda assim o kit funciona?",
    a: "Com certeza! A maioria das nossas clientes tem filhos que já frequentam a escola mas ainda apresentam dificuldades com leitura, escrita ou concentração. O kit funciona como reforço em casa, acelerando o que é visto em sala de aula. Muitas mães relatam que a professora notou a melhora em poucas semanas.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section">
      <div className="container">
        <div className="text-center">
          <span className="tag">Dúvidas Frequentes</span>
          <h2 className="titulo">Perguntas que as mães fazem</h2>
        </div>
        <div className="faq-lista">
          {perguntas.map((p, i) => (
            <div className="faq-item" key={i}>
              <button
                className="faq-pergunta"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span>{p.q}</span>
                <span className={`faq-chevron${open === i ? " open" : ""}`}>+</span>
              </button>
              <div className={`faq-resposta${open === i ? " open" : ""}`}>
                <div className="faq-resposta-inner">{p.a}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <p style={{ fontSize: "16px", fontWeight: 700, color: "var(--texto-suave)", marginBottom: "20px" }}>
            Ainda tem dúvidas? Fale com a gente!
          </p>
          <a href="#oferta" className="btn-cta">
            🚀 Garantir meu Kit Educakids360 Agora!
          </a>
          <p className="cta-abaixo dark" style={{ marginTop: "12px" }}>
            🔒 30 dias de garantia • Acesso imediato • Sem risco
          </p>
        </div>
      </div>
    </section>
  );
}
