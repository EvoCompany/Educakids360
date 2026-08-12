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
