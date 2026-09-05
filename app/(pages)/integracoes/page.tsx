import type { Metadata } from "next"
import { IntegracoesPage } from "@/components/pages/integracoes"


export const metadata: Metadata = {
  title: "Bancos & Open Finance",
  description:
    "Conecte todas as contas PJ da sua empresa via Open Finance regulado pelo Banco Central. Acesso somente-leitura, token revogável, extrato classificado sem digitar nada.",
  alternates: { canonical: "/integracoes" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Bancos & Open Finance",
    description:
      "Suas contas PJ conectadas automaticamente, alimentando o Cheque do Mês, o Fator R e a provisão do DAS.",
  },
  robots: { index: true, follow: true },
}

export default function Integracoes() {
  return <IntegracoesPage />
}
