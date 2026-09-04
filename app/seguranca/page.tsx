import type { Metadata } from "next"
import { SegurancaPage } from "../../components/pages/seguranca"

export const metadata: Metadata = {
  title: "Segurança de Nível Bancário e Conformidade LGPD",
  description:
    "Acesso 100% somente-leitura, criptografia AES-256 / TLS 1.3, conformidade integral com a LGPD e blindagem contra desconsideração da personalidade jurídica (Art. 50 CC).",
  alternates: { canonical: "/seguranca" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Segurança & Conformidade",
    description:
      "Proteção de padrão bancário para blindar as informações fiscais e financeiras do seu negócio.",
  },
  robots: { index: true, follow: true },
}

export default function Seguranca() {
  return <SegurancaPage />
}
