"use client"

import { Bar, BarChart, CartesianGrid, Cell, LabelList, XAxis, YAxis } from "recharts"
import { ChartContainer, type ChartConfig } from "@/components/ui/chart"

/**
 * "Basic bar chart" do plano: DAS no Anexo V contra o Anexo III, mesmo
 * faturamento. Duas barras, um eixo. As alíquotas e parcelas a deduzir são
 * reais (tabela oficial do Simples Nacional, 2ª faixa: 180.000,01 a
 * 360.000,00 de RBT12) — só o faturamento de exemplo é hipotético.
 */
const FATURAMENTO_MES = 25_000
const RBT12 = FATURAMENTO_MES * 12 // 300.000 — dentro da 2ª faixa nos dois anexos

// (RBT12 × alíquota nominal − parcela a deduzir) / RBT12 = alíquota efetiva
const aliquotaEfetiva = (aliquotaNominal: number, parcelaDeduzir: number) =>
  (RBT12 * aliquotaNominal - parcelaDeduzir) / RBT12

const DAS_ANEXO_V = FATURAMENTO_MES * aliquotaEfetiva(0.18, 4_500)
const DAS_ANEXO_III = FATURAMENTO_MES * aliquotaEfetiva(0.112, 9_360)

const brl = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 })

const COMPARATIVO = [
  { anexo: "anexoV", label: "Anexo V", das: Math.round(DAS_ANEXO_V), fill: "var(--color-anexoV)" },
  { anexo: "anexoIII", label: "Anexo III", das: Math.round(DAS_ANEXO_III), fill: "var(--color-anexoIII)" },
]

const chartConfig = {
  das: { label: "DAS mensal" },
  anexoV: { label: "Anexo V", color: "var(--muted-foreground)" },
  anexoIII: { label: "Anexo III", color: "var(--primary)" },
} satisfies ChartConfig

export function InteligenciaFiscalAnexosChart() {
  return (
    <div className="w-full">
      <ChartContainer config={chartConfig} className="mx-auto aspect-[16/10] max-h-[220px] w-full">
        <BarChart data={COMPARATIVO} margin={{ top: 24, right: 8, left: 8, bottom: 0 }}>
          <CartesianGrid vertical={false} stroke="rgba(55,50,47,0.08)" />
          <XAxis dataKey="label" tickLine={false} axisLine={false} tickMargin={8} />
          <YAxis hide domain={[0, (max: number) => max * 1.2]} />
          <Bar dataKey="das" radius={[6, 6, 0, 0]} maxBarSize={96}>
            {COMPARATIVO.map((item) => (
              <Cell key={item.anexo} fill={item.fill} />
            ))}
            <LabelList
              dataKey="das"
              position="top"
              formatter={(value: number) => brl.format(value)}
              className="fill-secondary text-xs font-semibold"
            />
          </Bar>
        </BarChart>
      </ChartContainer>

      <p className="mt-3 text-center text-xs text-[#8B8D9B] leading-relaxed">
        Exemplo para PJ com R$ {brl.format(FATURAMENTO_MES).replace("R$", "").trim()}/mês de faturamento
        (2ª faixa do Simples Nacional). Alíquotas oficiais; o faturamento é hipotético.
      </p>
    </div>
  )
}
