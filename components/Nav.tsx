"use client";

import { useState } from "react";

const WA_LINK = "https://wa.me/5555996774203";

const links = [
  { label: "Grafomotricidade", href: "#grafomotricidade" },
  { label: "Método", href: "#metodo" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Pacotes", href: "#oferta" },
  { label: "Contato", href: "#contato" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#inicio" className="nav-logo">
          📚 Educakids<span>360</span>
        </a>

        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
          <li>
            <a href="#oferta" className="nav-cta">
              Garantir Acesso
            </a>
          </li>
        </ul>

        <button
          className="nav-hamburger"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      <div className={`nav-mobile${open ? " open" : ""}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#25D366", fontWeight: 900 }}
          onClick={() => setOpen(false)}
        >
          📲 Falar no WhatsApp
        </a>
      </div>
    </nav>
  );
}
