"use client"

import { useEffect, useState } from "react"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"

/**
 * Showcase interativo dos 3 casos de uso (Clareza de Caixa, Otimizador de
 * Fator R, Inteligência Preditiva) — peça separada do hero com o celular.
 *
 * As 3 abas ficam empilhadas na MESMA célula de grid (col-start-1
 * row-start-1, como em fiscal-agents-section.tsx) o tempo todo, só a
 * ativa com opacidade 100%. Isso trava a altura do bloco no tamanho da
 * aba mais alta, sempre — trocar de aba nunca empurra o resto da página.
 * O painel de números é a Table (components/ui/table.tsx) que o site já
 * usa em outros lugares, não mais linhas soltas.
 */
interface ShowcaseTab {
  id: string
  title: string
  subtitle: string
  desc: string
  stats: { value: string; label: string }[]
  linhas: { item: string; nota: string; valor: string; destaque?: boolean }[]
  rodape?: string
}

const ALOCACAO_BALDES = [
  { rotulo: "Retirada Pessoal PF", valor: 24_200, tipo: "solido" as const },
  { rotulo: "Reserva Operacional PJ", valor: 9_800, tipo: "tinta" as const },
  { rotulo: "Provisão Guia DAS", valor: 4_450, tipo: "listrado" as const },
]
const TOTAL_ALOCACAO = ALOCACAO_BALDES.reduce((soma, item) => soma + item.valor, 0)

const TABS: ShowcaseTab[] = [
  {
    id: "cheque-do-mes",
    title: "Clareza de Caixa",
    subtitle: '"Cheque do Mês"',
    desc: "Decomposição matemática de R$ 38.450,00 de faturamento bruto do mês em 3 baldes: quanto é seu para retirar, da empresa e do imposto.",
    stats: [
      { value: "62,9%", label: "margem líquida" },
      { value: "100%", label: "conciliado" },
    ],
    linhas: [
      { item: "Retirada Pessoal PF", nota: "100% livre de IRPF", valor: "R$ 24.200,00", destaque: true },
      { item: "Reserva Operacional PJ", nota: "Custos fixos + giro seguro", valor: "R$ 9.800,00" },
      { item: "Provisão Guia DAS", nota: "Vencimento 20/06 · Anexo III 6,0%", valor: "R$ 4.450,00" },
    ],
  },
  {
    id: "fator-r",
    title: "Otimizador de Fator R",
    subtitle: "Anexo V → Anexo III",
    desc: "Calibragem da folha de pagamento para atingir os 28% do Fator R e migrar do Anexo V (15,5%) para o Anexo III (6%).",
    stats: [
      { value: "+R$ 34.200/ano", label: "economia prescrita" },
      { value: "6,00%", label: "alíquota com Rovee" },
    ],
    linhas: [
      { item: "Sem gestão (Anexo V)", nota: "Alíquota efetiva do DAS", valor: "15,50%" },
      { item: "Com Rovee (Anexo III)", nota: "Pró-labore calibrado em 28,2% da folha", valor: "6,00%", destaque: true },
      { item: "Imposto devido no ano", nota: "R$ 55.800 → R$ 21.600", valor: "-R$ 34.200", destaque: true },
    ],
    rodape: "Memória de cálculo pronta com o pró-labore exato para envio ao contador no fechamento.",
  },
  {
    id: "runway",
    title: "Inteligência Preditiva",
    subtitle: "Caixa & Runway",
    desc: "Projeção contínua dos próximos meses, considerando sazonalidade de faturamento e fôlego operacional real.",
    stats: [
      { value: "8,4 meses", label: "fôlego de reserva" },
      { value: "0%", label: "risco de liquidez" },
    ],
    linhas: [
      { item: "Maio/2026 · Realizado", nota: "Provisão de DAS: R$ 4.450,00", valor: "R$ 38.450,00" },
      { item: "Junho/2026 · Projetado (+12%)", nota: "Provisão de DAS: R$ 4.730,00", valor: "R$ 43.000,00" },
      { item: "Julho/2026 · Projetado (+18%)", nota: "Provisão de DAS: R$ 5.005,00", valor: "R$ 45.500,00", destaque: true },
    ],
    rodape: "Burn rate médio de R$ 4.580,00/mês, considerado na projeção de fôlego acima.",
  },
]

export function HeroProductShowcase() {
  const [activeTab, setActiveTab] = useState(0)
  const [progress, setProgress] = useState(0)
  const [pausado, setPausado] = useState(false)

  // Pausa em hover/foco: sem isso, o card trocava debaixo do usuário no meio da leitura.
  useEffect(() => {
    if (pausado) return

    const intervalTime = 100
    const step = (intervalTime / 5000) * 100 // 5s por aba

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveTab((current) => (current + 1) % TABS.length)
          return 0
        }
        return prev + step
      })
    }, intervalTime)

    return () => clearInterval(timer)
  }, [pausado])

  const handleTabClick = (index: number) => {
    setActiveTab(index)
    setProgress(0)
  }

  return (
    <div
      className="w-full flex flex-col justify-center items-center border-t border-[rgba(55,50,47,0.12)] bg-white"
      onMouseEnter={() => setPausado(true)}
      onMouseLeave={() => setPausado(false)}
      onFocusCapture={() => setPausado(true)}
      onBlurCapture={() => setPausado(false)}
    >
      <div className="w-full max-w-[1100px] px-4 sm:px-6 md:px-8 py-14 sm:py-16">
        {/* As 3 abas ficam na mesma célula de grid — a altura do bloco é
            sempre a da aba mais alta, então trocar de aba não move nada
            abaixo. */}
        <div className="grid grid-cols-1 grid-rows-1">
          {TABS.map((tab, idx) => (
            <div
              key={tab.id}
              className={`col-start-1 row-start-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch transition-opacity duration-300 ${
                activeTab === idx
                  ? "opacity-100 pointer-events-auto z-10"
                  : "opacity-0 pointer-events-none invisible z-0"
              }`}
            >
              {/* Coluna 1: título, descrição e stats do caso */}
              <div className="lg:col-span-7 flex flex-col justify-between gap-5">
                <div>
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#605A57]">
                    {tab.subtitle}
                  </span>
                  <h3 className="text-secondary text-xl sm:text-2xl font-semibold leading-tight font-sans mt-1">
                    {tab.title}
                  </h3>
                  <p className="text-[#605A57] text-sm leading-relaxed font-sans mt-3">{tab.desc}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 py-4 border-y border-[rgba(55,50,47,0.08)]">
                  {tab.stats.map((stat, i) => (
                    <div key={i}>
                      <div className="text-xl sm:text-2xl font-semibold text-secondary font-sans">{stat.value}</div>
                      <div className="text-xs text-[#605A57] font-medium font-sans">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Coluna 2: o caso em números, numa Table de verdade */}
              <div className="lg:col-span-5 bg-[#F8FAFC] rounded-xl border border-[rgba(55,50,47,0.08)] p-2 flex flex-col justify-between gap-2">
                <Table>
                  <TableBody>
                    {tab.linhas.map((linha) => (
                      <TableRow key={linha.item} className="border-[rgba(55,50,47,0.08)] hover:bg-transparent">
                        <TableCell className="py-3 whitespace-normal">
                          <div className="text-xs font-medium text-secondary">{linha.item}</div>
                          <div className="text-[11px] text-[#8B8D9B] mt-0.5">{linha.nota}</div>
                        </TableCell>
                        <TableCell
                          className={`py-3 text-right font-mono font-semibold whitespace-nowrap ${
                            linha.destaque ? "text-primary" : "text-secondary"
                          }`}
                        >
                          {linha.valor}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

                {tab.id === "cheque-do-mes" ? (
                  <div className="flex items-center gap-1 h-3 overflow-hidden rounded-[3px] px-2 pb-1">
                    {ALOCACAO_BALDES.map((item) => (
                      <div
                        key={item.rotulo}
                        style={{
                          width: `${(item.valor / TOTAL_ALOCACAO) * 100}%`,
                          background:
                            item.tipo === "listrado"
                              ? "repeating-linear-gradient(45deg, var(--primary) 0 1.5px, transparent 1.5px 4px)"
                              : undefined,
                        }}
                        className={`h-full rounded-[3px] ${
                          item.tipo === "solido" ? "bg-primary" : item.tipo === "tinta" ? "bg-primary/30" : "border border-primary/40"
                        }`}
                      />
                    ))}
                  </div>
                ) : (
                  tab.rodape && (
                    <p className="text-[11px] text-[#8B8D9B] leading-relaxed px-2 pb-1">{tab.rodape}</p>
                  )
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Seletor de casos de uso */}
        <div
          className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-[rgba(55,50,47,0.1)] pt-6"
          role="tablist"
          aria-label="Casos de uso do produto"
        >
          {TABS.map((item, idx) => {
            const isActive = activeTab === idx
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => handleTabClick(idx)}
                className={`text-left px-4 py-3.5 rounded-lg border relative overflow-hidden transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary ${
                  isActive
                    ? "border-primary/30 bg-primary/5"
                    : "border-[rgba(55,50,47,0.1)] hover:bg-[#F8FAFC]"
                }`}
              >
                {isActive && (
                  <div className="absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-100 ease-linear" style={{ width: `${progress}%` }} />
                )}
                <div className="text-sm font-semibold text-secondary">{item.title}</div>
                <div className="text-xs text-[#605A57] mt-0.5">{item.subtitle}</div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
