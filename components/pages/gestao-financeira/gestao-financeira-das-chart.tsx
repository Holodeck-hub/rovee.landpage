"use client"

import { Bar, BarChart, CartesianGrid, Cell, LabelList, XAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"

/**
 * "Diagonal stripe bar chart" do plano: DAS provisionado (listrado = ainda
 * não vencido) contra pago (sólido). A listra é o "estimado". Padrão de
 * pattern SVG portado do exemplo c-chart-3 do reui (github.com/keenthemes/
 * reui) — nenhuma dependência nova, só o desenho do <pattern>.
 * Cenário ilustrativo: nenhuma conta real por trás.
 */
const DAS_MESES = [
  { mes: "Mai", valor: 1850, status: "pago" as const },
  { mes: "Jun", valor: 1920, status: "pago" as const },
  { mes: "Jul", valor: 1780, status: "pago" as const },
  { mes: "Ago", valor: 2050, status: "provisionado" as const },
  { mes: "Set", valor: 1990, status: "provisionado" as const },
  { mes: "Out", valor: 2120, status: "provisionado" as const },
]

const brl = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 })

const chartConfig = {
  valor: { label: "DAS" },
  pago: { label: "Pago", color: "var(--primary)" },
  provisionado: { label: "Provisionado", color: "var(--primary)" },
} satisfies ChartConfig

export function GestaoFinanceiraDasChart() {
  return (
    <div className="w-full">
      <ChartContainer config={chartConfig} className="mx-auto aspect-[16/10] max-h-[220px] w-full">
        <BarChart data={DAS_MESES} margin={{ top: 24, right: 8, left: 8, bottom: 0 }}>
          <defs>
            <pattern id="das-provisionado-listra" patternUnits="userSpaceOnUse" width="7" height="7" patternTransform="rotate(45)">
              <rect width="7" height="7" fill="var(--primary)" opacity="0.15" />
              <line x1="0" y1="0" x2="0" y2="7" stroke="var(--primary)" strokeWidth="3" />
            </pattern>
          </defs>
          <CartesianGrid vertical={false} stroke="rgba(55,50,47,0.08)" />
          <XAxis dataKey="mes" tickLine={false} axisLine={false} tickMargin={8} />
          <ChartTooltip
            cursor={false}
            content={
              <ChartTooltipContent
                hideLabel
                formatter={(value, _name, item) => (
                  <div className="flex w-full items-center justify-between gap-3">
                    <span className="text-muted-foreground">
                      {item.payload.status === "pago" ? "Pago" : "Provisionado"}
                    </span>
                    <span className="text-foreground font-semibold tabular-nums">{brl.format(Number(value))}</span>
                  </div>
                )}
              />
            }
          />
          <Bar dataKey="valor" radius={[6, 6, 0, 0]} maxBarSize={48}>
            {DAS_MESES.map((item) => (
              <Cell
                key={item.mes}
                fill={item.status === "pago" ? "var(--primary)" : "url(#das-provisionado-listra)"}
                stroke="var(--primary)"
                strokeWidth={item.status === "provisionado" ? 1 : 0}
              />
            ))}
            <LabelList
              dataKey="valor"
              position="top"
              formatter={(value: number) => brl.format(value)}
              className="fill-secondary text-[11px] font-semibold"
            />
          </Bar>
        </BarChart>
      </ChartContainer>

      <div className="mt-3 flex items-center justify-center gap-5 text-xs text-ink-muted">
        <span className="flex items-center gap-1.5">
          <i className="h-2.5 w-2.5 rounded-xs bg-primary" aria-hidden="true" />
          Pago
        </span>
        <span className="flex items-center gap-1.5">
          <i
            className="h-2.5 w-2.5 rounded-xs border border-primary"
            style={{ background: "repeating-linear-gradient(45deg, var(--primary) 0 1.5px, transparent 1.5px 4px)" }}
            aria-hidden="true"
          />
          Provisionado
        </span>
      </div>

      <p className="mt-3 text-center text-xs text-[#8B8D9B] leading-relaxed">
        Cenário ilustrativo. O provisionado é carimbado no dia da nota, antes mesmo de o DAS
        vencer.
      </p>
    </div>
  )
}
