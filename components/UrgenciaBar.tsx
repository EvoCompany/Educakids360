"use client";

import { useEffect, useState } from "react";

export default function UrgenciaBar() {
  const [texto, setTexto] = useState("Aproveite antes que o preço suba!");

  useEffect(() => {
    const key = "gf_deadline";
    let deadline = localStorage.getItem(key);
    if (!deadline) {
      deadline = String(Date.now() + 24 * 60 * 60 * 1000);
      localStorage.setItem(key, deadline);
    }

    const update = () => {
      const diff = parseInt(deadline!) - Date.now();
      if (diff <= 0) {
        setTexto("Oferta encerrada — preço volta ao normal");
        return;
      }
      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      setTexto(`Termina em ${h}h ${String(m).padStart(2, "0")}min — garanta o preço atual`);
    };

    update();
    const interval = setInterval(update, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="urgencia-bar">
      <div>🔥 OFERTA POR TEMPO LIMITADO 🔥</div>
      <div>{texto}</div>
      <div>Acesso imediato após pagamento</div>
    </div>
  );
}
