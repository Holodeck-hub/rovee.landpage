import type { Metadata } from "next"
import { GestaoFinanceiraPage } from "../../components/pages/gestao-financeira"

export const metadata: Metadata = {
  title: "Gestão Financeira PJ e Pockets de Caixa",
  description:
    "Do micro ao macro: divida seu faturamento automaticamente em 3 baldes (PF, Reserva PJ e DAS), tenha projeção de fluxo de caixa e saiba quanto pode gastar sem risco.",
  alternates: { canonical: "/gestao-financeira" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Gestão Financeira PJ",
    description:
      "Organize o caixa da sua empresa com inteligência preditiva e divisão automática em 3 baldes.",
  },
  robots: { index: true, follow: true },
}

export default function GestaoFinanceira() {
  return <GestaoFinanceiraPage />
}
