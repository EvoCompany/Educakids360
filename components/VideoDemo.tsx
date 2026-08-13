"use client";

import { useEffect, useRef } from "react";

const PLAYER_ID = "vid-6a7d79ba6ee5cbf584dfec03";
const PLAYER_SRC =
  "https://scripts.converteai.net/c0564650-e449-46b9-a4c6-f4651667540c/players/6a7d79ba6ee5cbf584dfec03/v4/player.js";

export default function VideoDemo() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    let loaded = false;
    const loadPlayer = () => {
      if (loaded) return;
      loaded = true;
      const s = document.createElement("script");
      s.src = PLAYER_SRC;
      s.async = true;
      document.head.appendChild(s);
    };

    // Só carrega o player (e os megabytes de segmentos de video que ele
    // baixa) quando a secao estiver perto de entrar na tela — evita que
    // o video dispute banda com a imagem do Hero logo no carregamento.
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadPlayer();
          io.disconnect();
        }
      },
      { rootMargin: "0px" }
    );
    io.observe(el);

    return () => io.disconnect();
  }, []);

  return (
    <section className="section">
      <div className="container">
        <div className="text-center">
          <h2 className="titulo">
            Veja como é fácil ensinar seu filho a<br />
            ler com o Grafismo Fonético...
          </h2>
        </div>
        <div
          ref={wrapRef}
          style={{ marginTop: "36px" }}
          dangerouslySetInnerHTML={{
            __html: `<vturb-smartplayer id="${PLAYER_ID}" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"><div class="vturb-player-placeholder" style="position: relative; width: 100%; padding: 177.3399014778325% 0 0; z-index: 0; background-color: black;"></div></vturb-smartplayer>`,
          }}
        />
      </div>
    </section>
  );
}
