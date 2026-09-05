import type { Metadata } from "next"
import { PrecosPage } from "@/components/pages/precos"


export const metadata: Metadata = {
  title: "Planos e Preços",
  description:
    "Escolha o plano ideal para sua empresa (Starter PJ, Rovee Pro ou Escritório e Sócios). Investimento que se paga no primeiro DAS economizado.",
  alternates: { canonical: "/precos" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Planos e Preços",
    description:
      "Tabela comparativa de planos da Rovee: otimização de Fator R, provisão de DAS e gestão de caixa.",
  },
  robots: { index: true, follow: true },
}

export default function Precos() {
  return <PrecosPage />
}
