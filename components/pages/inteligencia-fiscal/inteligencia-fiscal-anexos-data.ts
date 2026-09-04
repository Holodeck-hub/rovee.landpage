/**
 * Números da comparação Anexo V × Anexo III, compartilhados pelo gráfico de
 * barras e pela tabela de memória de cálculo — um só lugar para as
 * alíquotas oficiais, para as duas peças nunca divergirem entre si.
 *
 * Alíquotas e parcelas a deduzir são reais (tabela oficial do Simples
 * Nacional, 2ª faixa: RBT12 de 180.000,01 a 360.000,00). Só o faturamento
 * de exemplo é hipotético.
 */
export const FATURAMENTO_MES = 25_000
export const RBT12 = FATURAMENTO_MES * 12 // 300.000, dentro da 2ª faixa nos dois anexos

export const ANEXO_V = { nominal: 0.18, parcelaDeduzir: 4_500 }
export const ANEXO_III = { nominal: 0.112, parcelaDeduzir: 9_360 }

// (RBT12 × alíquota nominal − parcela a deduzir) / RBT12 = alíquota efetiva
function aliquotaEfetiva(nominal: number, parcelaDeduzir: number) {
  return (RBT12 * nominal - parcelaDeduzir) / RBT12
}

export const ALIQUOTA_EFETIVA_ANEXO_V = aliquotaEfetiva(ANEXO_V.nominal, ANEXO_V.parcelaDeduzir)
export const ALIQUOTA_EFETIVA_ANEXO_III = aliquotaEfetiva(ANEXO_III.nominal, ANEXO_III.parcelaDeduzir)

export const DAS_ANEXO_V = FATURAMENTO_MES * ALIQUOTA_EFETIVA_ANEXO_V
export const DAS_ANEXO_III = FATURAMENTO_MES * ALIQUOTA_EFETIVA_ANEXO_III

export const ECONOMIA_MENSAL = DAS_ANEXO_V - DAS_ANEXO_III

export const brl = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 })
export const pct = (valor: number) => `${(valor * 100).toFixed(2).replace(".", ",")}%`
