"use client"

import { Cell, Label, Pie, PieChart } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"

/**
 * Donut chart com total no centro — "Donut chart with center total" do
 * plano, mesmo padrão do exemplo c-chart-19 do reui (github.com/keenthemes/
 * reui), mas usando components/ui/chart.tsx que o projeto já tem (nenhum
 * arquivo novo em components/reui/ foi necessário) e a paleta de 3 séries
 * já validada no documento do plano (banda de luminosidade, piso de croma,
 * separação para daltonismo). Números de exemplo — sem conta real hoje.
 */
const DESTINOS = [
  { destino: "prolabore", label: "Pró-labore", valor: 8400, fill: "var(--color-prolabore)" },
  { destino: "impostos", label: "Impostos", valor: 3360, fill: "var(--color-impostos)" },
  { destino: "reserva", label: "Reserva", valor: 2240, fill: "var(--color-reserva)" },
]

const TOTAL = DESTINOS.reduce((soma, item) => soma + item.valor, 0)

const brl = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 })

const chartConfig = {
  valor: { label: "Valor" },
  prolabore: { label: "Pró-labore", color: "#4F46E5" },
  impostos: { label: "Impostos", color: "#0D9488" },
  reserva: { label: "Reserva", color: "#A16207" },
} satisfies ChartConfig

export function InteligenciaFiscalDestinosSection() {
  return (
    <section aria-label="Para onde vai cada real" className="w-full py-20 px-5 border-b border-[rgba(55,50,47,0.12)] bg-white">
      <div className="w-full max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
        <div>
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#605A57]">
            Cheque do Mês
          </span>
          <h2 className="text-secondary text-2xl sm:text-3xl md:text-4xl font-medium h-section text-balance mt-2">
            Cada real que entra já sai dividido em três
          </h2>
          <p className="text-ink-muted text-sm sm:text-base mt-3 max-w-[26rem] leading-relaxed">
            A Rovee separa automaticamente o que é seu para retirar, o que é imposto
            provisionado e o que fica de reserva na empresa — antes de qualquer
            transferência para a pessoa física.
          </p>

          <ul className="mt-6 flex flex-col gap-2.5">
            {DESTINOS.map((item) => (
              <li key={item.destino} className="flex items-center justify-between gap-3 text-sm">
                <span className="flex items-center gap-2 text-[#49423D]">
                  <i className="h-2.5 w-2.5 rounded-sm" style={{ background: item.fill }} aria-hidden="true" />
                  {item.label}
                </span>
                <span className="font-mono tabular-nums text-secondary">
                  {brl.format(item.valor)}{" "}
                  <span className="text-[#8B8D9B]">
                    ({Math.round((item.valor / TOTAL) * 100)}%)
                  </span>
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-5 text-xs text-[#8B8D9B] leading-relaxed">
            Cenário ilustrativo para um faturamento de {brl.format(TOTAL)} no mês — não
            representa nenhum cliente específico. A divisão real depende do seu Fator
            R, do seu Anexo e da meta de reserva que você definir.
          </p>
        </div>

        <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[260px] w-full">
          <PieChart>
            <ChartTooltip
              content={
                <ChartTooltipContent
                  hideLabel
                  formatter={(value, name) => (
                    <div className="flex w-full items-center justify-between gap-3">
                      <span className="text-muted-foreground">
                        {chartConfig[name as keyof typeof chartConfig]?.label ?? name}
                      </span>
                      <span className="text-foreground font-semibold tabular-nums">
                        {brl.format(Number(value))}
                      </span>
                    </div>
                  )}
                />
              }
            />
            <Pie
              data={DESTINOS}
              dataKey="valor"
              nameKey="destino"
              innerRadius={70}
              outerRadius={100}
              paddingAngle={2}
              stroke="var(--background)"
              strokeWidth={2}
            >
              {DESTINOS.map((item) => (
                <Cell key={item.destino} fill={item.fill} />
              ))}
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy ?? 0) - 8}
                          className="fill-[#8B8D9B] text-[10px] font-mono uppercase tracking-wider"
                        >
                          Total
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy ?? 0) + 16}
                          className="fill-secondary text-2xl font-semibold tabular-nums"
                        >
                          {brl.format(TOTAL)}
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </div>
    </section>
  )
}
