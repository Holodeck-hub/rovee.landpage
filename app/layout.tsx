import type React from "react"
import type { Metadata } from "next"
import { Inter, Instrument_Serif } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: ["400"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: "Rovee Finance — Inteligência Fiscal & Otimização de Pró-labore",
  description:
    "A Fintech que calcula seu pró-labore ótimo no Simples Nacional, separa o caixa pessoal da PJ e usa inteligência preditiva para antecipar seu faturamento sem surpresas fiscais.",
  icons: {
    icon: "/logo/logo-rovee-icon.PNG",
    shortcut: "/logo/logo-rovee-icon.PNG",
    apple: "/logo/logo-rovee-icon.PNG",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${instrumentSerif.variable} antialiased`}>
      <head>
        <link rel="icon" href="/logo/logo-rovee-icon.PNG" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400&display=swap" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
