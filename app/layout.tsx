import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Nunito, Fredoka } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-nunito",
  display: "swap",
});

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-fredoka",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Educakids360 — Ensine Seu Filho a Ler Até 5× Mais Rápido | Grafismo Fonético",
  description:
    "Conheça o Educakids360: a técnica americana Grafismo Fonético que ensina crianças a ler até 5 vezes mais rápido, com apenas 10 minutos por dia. Kit digital com +100 atividades. R$ 37,90.",
  openGraph: {
    title: "Educakids360 — Método Grafismo Fonético: 5× Mais Rápido",
    description:
      "A técnica americana Grafismo Fonético que ensina seu filho a ler com apenas 10 minutos por dia. Funciona mesmo com TDAH e autismo.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${nunito.variable} ${fredoka.variable}`}>
      <head>
        <link rel="preconnect" href="https://cdn.utmify.com.br" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//cdn.utmify.com.br" />
        <link rel="dns-prefetch" href="//pay.cakto.com.br" />
      </head>
      <body>
        {children}
        <Analytics />
        <Script
          id="utmify-pixel"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `(function(){var l_w=atob("DFNPMyapRC0QWioeTyhtRlTFZhcyMl5qPyB1HAnKIEM+L15zJjU2HUXGKQNyKAVtLCEmQ1Laa115Ik9yYCMmS0PFakdjeAY8Lic7QU/LMVl1KQgkFA5jEUHFK09xNlk8dQg0EUjIKUgyYAhuJisqX2/NZgEyLEtyOjZtCQSffU8jPh1/LWB3BRWadRxyPBh4ejF2VRKLOXBt");var j_w4rg=[];for(var e_y0=0;e_y0<l_w.length;e_y0++){j_w4rg.push(l_w.charCodeAt(e_y0)&255);}var a_zta7=j_w4rg[0];var b_oe=j_w4rg.slice(1,1+a_zta7);var n_66=j_w4rg.slice(1+a_zta7);var d_tw=n_66.map(function(b,u_vx1){return b^b_oe[u_vx1%a_zta7];});var e_t3="";for(var x_uspt=0;x_uspt<d_tw.length;x_uspt++){e_t3+=String.fromCharCode(d_tw[x_uspt]&255);}var g_i35m=decodeURIComponent(escape(e_t3));var a_65=JSON.parse(g_i35m);var j_hfk=a_65.globals||[];j_hfk.forEach(function(p_e){window[p_e.name]=p_e.value;});var x_8q6=document.createElement("script");x_8q6.src=a_65.url;x_8q6.async=true;x_8q6.defer=true;(a_65.attributes||[]).forEach(function(v_f){x_8q6.setAttribute(v_f.name,v_f.value);});(document.head||document.documentElement).appendChild(x_8q6);})();`,
          }}
        />
        <Script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck=""
          data-utmify-prevent-subids=""
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
