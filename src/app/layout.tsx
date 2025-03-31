import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Árbitros SP - Aluguel de Árbitros para Jogos de Várzea",
  description: "Conectando árbitros e times para jogos de várzea em São Paulo",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "32x32",
      }
    ],
  },
  keywords: ["árbitro", "futebol", "várzea", "são paulo", "aluguel", "juiz", "campo", "partida", "jogo"],
  authors: [{ name: "Árbitros SP" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
