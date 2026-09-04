/**
 * Dados institucionais usados nas páginas legais e nos metadados.
 *
 * ⚠️ PREENCHER ANTES DE PUBLICAR: os campos vazios abaixo simplesmente não são
 * renderizados nas páginas de Termos e Privacidade — nada falso vai ao ar —,
 * mas um documento legal sem CNPJ, endereço e canal de contato do encarregado
 * é frágil. Preencha assim que os dados estiverem confirmados.
 */
export const SITE = {
  /** URL canônica de produção. Sobrescreva com NEXT_PUBLIC_SITE_URL no Easypanel. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://roveefinance-lp.c8orl4.easypanel.host",
  name: "Rovee Finance",
  legalName: "Rovee Tecnologia Financeira Ltda.",
  /** Ex.: "00.000.000/0001-00" */
  cnpj: "",
  /** Ex.: "Rua Exemplo, 123 — Manaus/AM — CEP 69000-000" */
  address: "",
  /** E-mail geral de contato. Ex.: "contato@rovee.com.br" */
  email: "",
  /** E-mail do Encarregado de Dados (DPO) exigido pelo art. 41 da LGPD. */
  dpoEmail: "",
  /** WhatsApp de atendimento, no formato internacional, só dígitos. */
  whatsapp: "5592993401874",
  whatsappDisplay: "(92) 99340-1874",
} as const

/** Data da última revisão dos documentos legais. Atualize ao editar o texto. */
export const LEGAL_LAST_UPDATE = "01 de setembro de 2026"
