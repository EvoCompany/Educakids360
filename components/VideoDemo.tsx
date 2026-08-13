import Script from "next/script";

export default function VideoDemo() {
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
          style={{ marginTop: "36px" }}
          dangerouslySetInnerHTML={{
            __html:
              '<vturb-smartplayer id="vid-6a7d79ba6ee5cbf584dfec03" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"><div class="vturb-player-placeholder" style="position: relative; width: 100%; padding: 177.3399014778325% 0 0; z-index: 0; background-color: black;"></div></vturb-smartplayer>',
          }}
        />
      </div>
      <Script
        id="vturb-player-6a7d79ba6ee5cbf584dfec03"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `var s=document.createElement("script"); s.src="https://scripts.converteai.net/c0564650-e449-46b9-a4c6-f4651667540c/players/6a7d79ba6ee5cbf584dfec03/v4/player.js", s.async=!0,document.head.appendChild(s);`,
        }}
      />
    </section>
  );
}
