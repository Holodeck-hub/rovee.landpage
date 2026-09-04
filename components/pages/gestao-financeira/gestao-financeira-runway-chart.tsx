"use client"

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"

/**
 * "Stacked area chart with dashed strokes" do plano: traço cheio no
 * realizado, tracejado no runway projetado. Aqui não é uma pilha de séries
 * diferentes (como o exemplo c-chart-14 do reui usa) — é a mesma série de
 * caixa cortada em dois trechos temporais que se encontram em "hoje", cada
 * um com um Area próprio. Cenário ilustrativo: nenhuma conta real por trás.
 */
const CAIXA_12_MESES = [
  { mes: "Jan", realizado: 18400, projetado: null },
  { mes: "Fev", realizado: 21200, projetado: null },
  { mes: "Mar", realizado: 24800, projetado: null },
  { mes: "Abr", realizado: 27100, projetado: null },
  { mes: "Mai", realizado: 30300, projetado: null },
  { mes: "Jun", realizado: 32600, projetado: 32600 },
  { mes: "Jul", realizado: null, projetado: 31800 },
  { mes: "Ago", realizado: null, projetado: 29500 },
  { mes: "Set", realizado: null, projetado: 27200 },
  { mes: "Out", realizado: null, projetado: 24100 },
  { mes: "Nov", realizado: null, projetado: 21800 },
  { mes: "Dez", realizado: null, projetado: 23600 },
]

const brl = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 })

const chartConfig = {
  realizado: { label: "Realizado", color: "var(--primary)" },
  projetado: { label: "Runway projetado", color: "var(--primary)" },
} satisfies ChartConfig

export function GestaoFinanceiraRunwayChart() {
  return (
    <div className="w-full">
      <ChartContainer config={chartConfig} className="mx-auto aspect-[16/9] max-h-[260px] w-full">
        <AreaChart data={CAIXA_12_MESES} margin={{ top: 12, right: 8, left: 8, bottom: 0 }}>
          <defs>
            <linearGradient id="runway-fill-realizado" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--color-realizado)" stopOpacity={0.35} />
              <stop offset="95%" stopColor="var(--color-realizado)" stopOpacity={0.03} />
            </linearGradient>
            <linearGradient id="runway-fill-projetado" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--color-projetado)" stopOpacity={0.18} />
              <stop offset="95%" stopColor="var(--color-projetado)" stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} stroke="rgba(55,50,47,0.08)" />
          <XAxis dataKey="mes" tickLine={false} axisLine={false} tickMargin={8} />
          <YAxis hide domain={[0, (max: number) => max * 1.15]} />
          <ChartTooltip
            content={
              <ChartTooltipContent
                labelFormatter={(value) => `${value}`}
                formatter={(value, name) => (
                  <div className="flex w-full items-center justify-between gap-3">
                    <span className="text-muted-foreground">
                      {chartConfig[name as keyof typeof chartConfig]?.label ?? name}
                    </span>
                    <span className="text-foreground font-semibold tabular-nums">{brl.format(Number(value))}</span>
                  </div>
                )}
              />
            }
          />
          <Area
            dataKey="realizado"
            type="monotone"
            connectNulls={false}
            fill="url(#runway-fill-realizado)"
            stroke="var(--color-realizado)"
            strokeWidth={2}
          />
          <Area
            dataKey="projetado"
            type="monotone"
            connectNulls
            fill="url(#runway-fill-projetado)"
            stroke="var(--color-projetado)"
            strokeWidth={1.5}
            strokeDasharray="5 4"
          />
        </AreaChart>
      </ChartContainer>

      <p className="mt-3 text-center text-xs text-[#8B8D9B] leading-relaxed">
        Cenário ilustrativo de caixa em 12 meses. Traço cheio: o que já aconteceu. Traço
        tracejado: projeção considerando a sazonalidade do faturamento.
      </p>
    </div>
  )
}
