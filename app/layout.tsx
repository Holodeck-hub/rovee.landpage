import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Instrument_Serif } from "next/font/google"
import "./globals.css"
import { AnalyticsNoScript, AnalyticsScripts } from "../components/analytics/analytics-scripts"
import { SITE } from "../lib/site-config"

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

const TITLE = "Rovee Finance: Inteligência Fiscal"
const DESCRIPTION =
  "Inteligência fiscal e gerenciamento financeiro na palma da mão. Transforme dados financeiros reais em decisões tributárias corretas, antecipadas e acionáveis."

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: TITLE,
    template: "%s | Rovee Finance",
  },
  description: DESCRIPTION,
  applicationName: SITE.name,
  keywords: [
    "Fator R",
    "Simples Nacional",
    "Anexo III",
    "Anexo V",
    "DAS",
    "gestão financeira PJ",
    "Open Finance",
    "contabilidade para PJ",
  ],
  authors: [{ name: SITE.legalName }],
  creator: SITE.legalName,
  publisher: SITE.legalName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE.url,
    siteName: SITE.name,
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  formatDetection: {
    telephone: false,
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#4F46E5",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${instrumentSerif.variable} antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400&display=swap" />
      </head>
      <body className="font-sans antialiased">
        <AnalyticsNoScript />
        {children}
        <AnalyticsScripts />
      </body>
    </html>
  )
}
