"use client";

export default function UpsellBasicoPopup({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  const recusar = () => {
    onClose();
    window.location.href = "https://pay.cakto.com.br/397qpdk";
  };

  return (
    <div className="exit-overlay" onClick={onClose}>
      <div className="exit-popup" onClick={(e) => e.stopPropagation()}>
        <button className="exit-close" onClick={onClose} aria-label="Fechar">✕</button>

        <div className="exit-badge">🔥 UPGRADE ESPECIAL</div>

        <h2 className="exit-titulo">Espera! Leve o Kit Completo</h2>
        <p className="exit-sub">
          Por pouco a mais que o Básico, você recebe
          <strong> todos os níveis + os 6 bônus exclusivos.</strong>
        </p>

        <div className="exit-produto">
          <div className="exit-produto-titulo">🎁 Kit Completo Educakids360</div>
          <ul className="exit-itens">
            <li>✅ Atividades de Grafismo Fonético Nível 1, 2 e 3</li>
            <li>✅ <strong>Bônus 01:</strong> Caderno do Alfabeto com Imagens</li>
            <li>✅ <strong>Bônus 02:</strong> Caderno Quebra-Cabeça do Alfabeto</li>
            <li>✅ <strong>Bônus 03:</strong> Caderno de Formação de Palavras</li>
            <li>✅ <strong>Bônus 04:</strong> Caderno Relógio do Alfabeto</li>
            <li>✅ <strong>Bônus 05:</strong> Caderno de Pontilhado do Alfabeto</li>
            <li>✅ <strong>Bônus 06:</strong> Caderno Carinhas do Alfabeto</li>
          </ul>
        </div>

        <div className="exit-preco-wrap">
          <span className="exit-preco-de">De R$ 27,90</span>
          <div className="exit-preco-por">R$ 17,90</div>
        </div>

        <a
          href="https://pay.cakto.com.br/3f5hzdx"
          className="btn-cta exit-btn"
        >
          🔥 SIM! QUERO O KIT COMPLETO POR R$17,90
        </a>

        <button className="exit-recusar" onClick={recusar}>
          Não, quero continuar só com o Básico por R$10,00
        </button>

        <p className="exit-seguranca">🔒 Compra 100% segura · Acesso imediato · Garantia de 30 dias</p>
      </div>
    </div>
  );
}
