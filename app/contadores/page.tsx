import type { Metadata } from "next"
import { AccountantsPage } from "../../components/pages/contadores"

export const metadata: Metadata = {
  title: "Rovee para contadores: o cliente chega com o extrato limpo",
  description:
    "A Rovee calibra o pró-labore pelo Fator R e separa despesa pessoal da despesa da empresa durante o mês. O escritório recebe a memória de cálculo pronta, sem retrabalho no fechamento.",
  alternates: { canonical: "/contadores" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Rovee para contadores",
    description:
      "Seu cliente chega ao fechamento com o extrato já limpo e o pró-labore calibrado pelo Fator R.",
  },
  robots: { index: true, follow: true },
}

export default function Contadores() {
  return <AccountantsPage />
}
