import type { Metadata } from "next"
import { InteligenciaFiscalPage } from "@/components/pages/inteligencia-fiscal"


export const metadata: Metadata = {
  title: "Inteligência Fiscal e Fator R",
  description:
    "Inteligência fiscal para a sua PJ: otimize a carga tributária pelo Fator R, enquadre-se no anexo mais vantajoso e provisione seu DAS automaticamente com total conformidade fiscal.",
  alternates: { canonical: "/inteligencia-fiscal" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Inteligência Fiscal e Fator R",
    description:
      "Reduza até 9,5% do imposto da sua PJ no Simples Nacional com cálculo determinístico e blindagem patrimonial.",
  },
  robots: { index: true, follow: true },
}

export default function InteligenciaFiscal() {
  return <InteligenciaFiscalPage />
}
