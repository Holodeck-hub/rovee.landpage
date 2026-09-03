import type { Metadata } from "next"
import { InteligenciaFiscalPage } from "../../components/pages/inteligencia-fiscal"

export const metadata: Metadata = {
  title: "Inteligência Fiscal e Fator R | Rovee",
  description:
    "Calibre seu pró-labore pelo Fator R, saia do Anexo V (15,5%) para o Anexo III (6%) e provisione seu DAS automaticamente com total conformidade fiscal.",
  alternates: { canonical: "/inteligencia-fiscal" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Inteligência Fiscal e Fator R | Rovee",
    description:
      "Reduza até 9,5% do imposto da sua PJ no Simples Nacional com cálculo determinístico e blindagem patrimonial.",
  },
  robots: { index: true, follow: true },
}

export default function InteligenciaFiscal() {
  return <InteligenciaFiscalPage />
}
