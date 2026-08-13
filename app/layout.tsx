import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Nunito, Fredoka } from "next/font/google";
import DeferredScripts from "@/components/DeferredScripts";
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
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(i,n){i._plt=i._plt||(n&&n.timeOrigin?n.timeOrigin+n.now():Date.now())}(window,performance);`,
          }}
        />
        <link rel="preload" href="https://scripts.converteai.net/c0564650-e449-46b9-a4c6-f4651667540c/players/6a7d79ba6ee5cbf584dfec03/v4/player.js" as="script" />
        <link rel="preload" href="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/smartplayer.js" as="script" />
        <link rel="preload" href="https://cdn.converteai.net/c0564650-e449-46b9-a4c6-f4651667540c/6a7d79b6aa7b9d4e857f2351/main.m3u8" as="fetch" />
        <link rel="dns-prefetch" href="https://cdn.converteai.net" />
        <link rel="dns-prefetch" href="https://scripts.converteai.net" />
        <link rel="dns-prefetch" href="https://images.converteai.net" />
        <link rel="dns-prefetch" href="https://license.vturb.com" />
        <link rel="preconnect" href="https://cdn.utmify.com.br" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//cdn.utmify.com.br" />
        <link rel="dns-prefetch" href="//pay.cakto.com.br" />
      </head>
      <body>
        {children}
        <Analytics />
        <DeferredScripts />
      </body>
    </html>
  );
}
