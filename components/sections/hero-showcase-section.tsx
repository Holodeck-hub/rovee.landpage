"use client"

import { useState, useEffect } from "react"
import { ArrowUpRight } from "lucide-react"
import { HeroStatsMarquee } from "../shared/hero-stats-marquee"
import { AnimatedWave } from "../shared/animated-wave"

interface HeroShowcaseSectionProps {
  onOpenConsultant?: (origem?: string) => void
}

export function HeroShowcaseSection({ onOpenConsultant }: HeroShowcaseSectionProps) {
  const [activeCard, setActiveCard] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveCard((current) => (current + 1) % 3)
          return 0
        }
        return prev + 2 // 5 seconds per slide (100 / 2 * 100ms = 5000ms)
      })
    }, 100)

    return () => {
      clearInterval(progressInterval)
    }
  }, [])

  const handleCardClick = (index: number) => {
    setActiveCard(index)
    setProgress(0)
  }

  return (
    <div id="comecar" className="w-full flex flex-col justify-start items-center px-0.5 text-center">
      {/* Main Headline & Actions Container com altura e respiro generosos */}
      <div className="w-full min-h-[460px] sm:min-h-[500px] md:min-h-[540px] py-16 sm:py-20 md:py-24 flex flex-col justify-center items-center">
        {/* Main Headline */}
        <div className="w-full max-w-[920px] flex flex-col justify-center items-center gap-5">
          <h1 className="text-secondary text-[26px] xs:text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-semibold leading-[1.12] font-sans tracking-tight">
            A contabilidade entrega números. <span className="text-primary block sm:inline">A Rovee entrega economia.</span>
          </h1>

          <p className="w-full max-w-[660px] text-[rgba(55,50,47,0.85)] text-sm sm:text-base md:text-lg leading-relaxed font-sans font-normal mt-2">
            Não é mais um app de finanças: é o <strong>cálculo</strong> que decide quanto você tira, quanto separa e quanto paga de imposto.
          </p>
        </div>

        {/* Primary Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mt-10 z-20">
          <button
            type="button"
            onClick={() => onOpenConsultant?.("hero")}
            className="h-12 px-8 bg-primary hover:bg-primary-hover text-white text-sm font-semibold rounded flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
          >
            <span>Falar com Consultor</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <a
            href="#fiscal"
            className="h-12 px-6 bg-white hover:bg-[#F1F5F9] text-secondary border border-[rgba(55,50,47,0.15)] text-sm font-medium rounded flex items-center justify-center transition-all"
          >
            Ver como funciona
          </a>
        </div>
      </div>

      {/* ── HERO STATS MARQUEE ───────────── */}
      <div className="w-full mt-10">
        <HeroStatsMarquee />
      </div>

      {/* ── DIVISOR DE TRANSIÇÃO COM ANIMATED WAVE ── */}
      <div className="self-stretch -mx-4 md:-mx-8 lg:mx-0 w-[calc(100%+32px)] md:w-[calc(100%+64px)] lg:w-full h-12 sm:h-14 relative overflow-hidden flex items-center justify-center bg-[#F8FAFC]">
        <div className="w-full h-full opacity-40 pointer-events-none select-none">
          <AnimatedWave />
        </div>
      </div>

      {/* ── PRODUCT SHOWCASE INTERACTIVE DASHBOARD (FULL WIDTH) ─────────────── */}
      <div className="self-stretch -mx-4 md:-mx-8 lg:mx-0 w-[calc(100%+32px)] md:w-[calc(100%+64px)] lg:w-full border-t border-[rgba(55,50,47,0.12)] bg-white flex flex-col text-left relative z-10">
        {/* Dashboard Content per Active Card Tab */}
        <div className="px-4 sm:px-6 md:px-8 py-6 sm:py-8 bg-white flex flex-col gap-6">
          <div className="grid grid-cols-1 grid-rows-1 w-full">
            {/* ── TAB 0: O SEU CHEQUE DO MÊS (TABELA FINANCEIRA) ── */}
            <div className={`col-start-1 row-start-1 w-full flex flex-col gap-5 justify-between transition-opacity duration-300 ${activeCard === 0 ? "opacity-100 pointer-events-auto z-10" : "opacity-0 pointer-events-none invisible z-0"}`}>
              {/* Header Summary */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-[rgba(55,50,47,0.12)]">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-secondary">
                    Demonstrativo de Clareza de Caixa
                  </h3>
                  <p className="text-xs text-[#605A57] mt-0.5">
                    Decomposição matemática de R$ 38.450,00 de faturamento bruto do mês.
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-[#6B6560] font-mono">Margem Líquida</span>
                  <div className="text-lg font-semibold text-emerald-700 font-mono">62,9%</div>
                </div>
              </div>

              {/* Minimalist Financial Table */}
              <div className="w-full border border-[rgba(55,50,47,0.12)] rounded-lg overflow-hidden">
                {/* Table Header */}
                <div className="grid grid-cols-12 gap-2 px-4 py-2.5 bg-[#F8FAFC] border-b border-[rgba(55,50,47,0.12)] text-[11px] font-mono font-semibold text-[#605A57] uppercase">
                  <div className="col-span-4">Destinação / Balde</div>
                  <div className="col-span-3">Status Fiscal</div>
                  <div className="col-span-3 hidden sm:block">Composição</div>
                  <div className="col-span-5 sm:col-span-2 text-right">Valor Líquido</div>
                </div>

                {/* Row 1: Seu para Retirar */}
                <div className="grid grid-cols-12 gap-2 px-4 py-3.5 border-b border-[rgba(55,50,47,0.12)] items-center text-xs hover:bg-[#F8FAFC]/60 transition-colors">
                  <div className="col-span-4 font-medium text-secondary">
                    1. Retirada Pessoal PF
                  </div>
                  <div className="col-span-3">
                    <span className="px-2 py-0.5 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded text-[10px] font-mono font-medium">
                      100% Livre de IRPF
                    </span>
                  </div>
                  <div className="col-span-3 hidden sm:block text-[#605A57] text-[11px]">
                    Pró-labore R$ 8.5k + Isento R$ 15.7k
                  </div>
                  <div className="col-span-5 sm:col-span-2 text-right font-mono font-semibold text-secondary">
                    R$ 24.200,00
                  </div>
                </div>

                {/* Row 2: Reserva da Empresa */}
                <div className="grid grid-cols-12 gap-2 px-4 py-3.5 border-b border-[rgba(55,50,47,0.12)] items-center text-xs hover:bg-[#F8FAFC]/60 transition-colors">
                  <div className="col-span-4 font-medium text-secondary">
                    2. Reserva Operacional PJ
                  </div>
                  <div className="col-span-3">
                    <span className="px-2 py-0.5 bg-slate-100 text-[#605A57] border border-slate-200 rounded text-[10px] font-mono font-medium">
                      Capital Protegido
                    </span>
                  </div>
                  <div className="col-span-3 hidden sm:block text-[#605A57] text-[11px]">
                    Custos Fixos + Giro Seguro
                  </div>
                  <div className="col-span-5 sm:col-span-2 text-right font-mono font-semibold text-secondary">
                    R$ 9.800,00
                  </div>
                </div>

                {/* Row 3: Provisão DAS */}
                <div className="grid grid-cols-12 gap-2 px-4 py-3.5 items-center text-xs hover:bg-[#F8FAFC]/60 transition-colors">
                  <div className="col-span-4 font-medium text-secondary">
                    3. Provisão Guia DAS
                  </div>
                  <div className="col-span-3">
                    <span className="px-2 py-0.5 bg-amber-50 text-amber-900 border border-amber-200 rounded text-[10px] font-mono font-medium">
                      Vencimento 20/06
                    </span>
                  </div>
                  <div className="col-span-3 hidden sm:block text-[#605A57] text-[11px]">
                    Alíquota 6,0% (Anexo III)
                  </div>
                  <div className="col-span-5 sm:col-span-2 text-right font-mono font-semibold text-secondary">
                    R$ 4.450,00
                  </div>
                </div>
              </div>

              {/* Segmented Pill Allocation Bar (Estilo Ticks idêntico à imagem) */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
                <div className="flex items-center gap-2 text-[11px] font-mono text-[#6B6560] shrink-0">
                  <span>Alocação do Caixa:</span>
                </div>

                <div className="flex-1 flex items-center gap-[3px] sm:gap-1 px-1 overflow-hidden">
                  {Array.from({ length: 48 }).map((_, i) => {
                    let bg = "bg-[#248259]"

                    if (i === 6) bg = "bg-[#7cb99d]"
                    else if (i === 9 || i === 11) bg = "bg-[#c8681b]"
                    else if (i === 28) bg = "bg-[#c8681b]"
                    else if (i === 45) bg = "bg-[#c8681b]"
                    else if (i >= 42) bg = "bg-[#c8681b]"

                    return (
                      <div
                        key={i}
                        className={`h-4.5 flex-1 min-w-[3px] rounded-[3px] ${bg} transition-all hover:opacity-80`}
                      />
                    )
                  })}
                </div>

                <div className="text-[11px] font-mono text-emerald-800 font-semibold shrink-0">
                  100% Conciliado
                </div>
              </div>
            </div>

            {/* ── TAB 1: OTIMIZADOR DE FATOR R ── */}
            <div className={`col-start-1 row-start-1 w-full flex flex-col gap-5 justify-between transition-opacity duration-300 ${activeCard === 1 ? "opacity-100 pointer-events-auto z-10" : "opacity-0 pointer-events-none invisible z-0"}`}>
              {/* Header Summary */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-[rgba(55,50,47,0.12)]">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-secondary">
                    Diagnóstico Comparativo de Enquadramento
                  </h3>
                  <p className="text-xs text-[#605A57] mt-0.5">
                    Calibragem da folha de pagamento para atingir os 28% do Fator R.
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-[#6B6560] font-mono">Economia Prescrita</span>
                  <div className="text-lg font-semibold text-emerald-700 font-mono">+R$ 34.200/ano</div>
                </div>
              </div>

              {/* Comparison Matrix Table */}
              <div className="w-full border border-[rgba(55,50,47,0.12)] rounded-lg overflow-hidden">
                <div className="grid grid-cols-12 gap-2 px-4 py-2.5 bg-[#F8FAFC] border-b border-[rgba(55,50,47,0.12)] text-[11px] font-mono font-semibold text-[#605A57] uppercase">
                  <div className="col-span-4">Variável Tributária</div>
                  <div className="col-span-4">Sem Gestão (Anexo V)</div>
                  <div className="col-span-4 text-right">Com Rovee (Anexo III)</div>
                </div>

                <div className="grid grid-cols-12 gap-2 px-4 py-3 border-b border-[rgba(55,50,47,0.12)] items-center text-xs">
                  <div className="col-span-4 text-[#605A57]">Alíquota Efetiva do DAS</div>
                  <div className="col-span-4 font-mono font-medium text-red-700">15,50%</div>
                  <div className="col-span-4 text-right font-mono font-semibold text-emerald-700">6,00% (-9,5%)</div>
                </div>

                <div className="grid grid-cols-12 gap-2 px-4 py-3 border-b border-[rgba(55,50,47,0.12)] items-center text-xs">
                  <div className="col-span-4 text-[#605A57]">Pró-labore / Folha Mensal</div>
                  <div className="col-span-4 font-mono text-[#605A57]">R$ 1.518,00 (3,9%)</div>
                  <div className="col-span-4 text-right font-mono font-semibold text-secondary">R$ 8.500,00 (28,2%)</div>
                </div>

                <div className="grid grid-cols-12 gap-2 px-4 py-3 items-center text-xs bg-emerald-50/30">
                  <div className="col-span-4 font-semibold text-secondary">Imposto Devido Estimado/Ano</div>
                  <div className="col-span-4 font-mono text-red-700">R$ 55.800,00</div>
                  <div className="col-span-4 text-right font-mono font-bold text-emerald-700">R$ 21.600,00</div>
                </div>
              </div>

              <div className="p-3 bg-[#F8FAFC] border border-[rgba(55,50,47,0.12)] rounded-md text-xs text-[#605A57]">
                ✓ Memória de cálculo pronta com o valor exato de pró-labore para envio ao contador no fechamento.
              </div>
            </div>

            {/* ── TAB 2: PREVISÃO & RUNWAY ── */}
            <div className={`col-start-1 row-start-1 w-full flex flex-col gap-5 justify-between transition-opacity duration-300 ${activeCard === 2 ? "opacity-100 pointer-events-auto z-10" : "opacity-0 pointer-events-none invisible z-0"}`}>
              {/* Header Summary */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-[rgba(55,50,47,0.12)]">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-secondary">
                    Previsibilidade de Caixa & Runway
                  </h3>
                  <p className="text-xs text-[#605A57] mt-0.5">
                    Projeção contínua dos próximos meses com análise de fôlego operacional.
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-[#6B6560] font-mono">Fôlego de Reserva</span>
                  <div className="text-lg font-semibold text-emerald-700 font-mono">8.4 meses</div>
                </div>
              </div>

              {/* Forecast Schedule Table */}
              <div className="w-full border border-[rgba(55,50,47,0.12)] rounded-lg overflow-hidden">
                <div className="grid grid-cols-12 gap-2 px-4 py-2.5 bg-[#F8FAFC] border-b border-[rgba(55,50,47,0.12)] text-[11px] font-mono font-semibold text-[#605A57] uppercase">
                  <div className="col-span-3">Competência</div>
                  <div className="col-span-3">Tipo</div>
                  <div className="col-span-3">Receita Prevista</div>
                  <div className="col-span-3 text-right">Provisão DAS</div>
                </div>

                <div className="grid grid-cols-12 gap-2 px-4 py-3 border-b border-[rgba(55,50,47,0.12)] items-center text-xs">
                  <div className="col-span-3 font-medium text-secondary">Maio/2026</div>
                  <div className="col-span-3 text-xs text-[#605A57]">Realizado</div>
                  <div className="col-span-3 font-mono font-semibold text-secondary">R$ 38.450,00</div>
                  <div className="col-span-3 text-right font-mono text-[#605A57]">R$ 4.450,00</div>
                </div>

                <div className="grid grid-cols-12 gap-2 px-4 py-3 border-b border-[rgba(55,50,47,0.12)] items-center text-xs">
                  <div className="col-span-3 font-medium text-secondary">Junho/2026</div>
                  <div className="col-span-3 text-xs text-emerald-700 font-medium">Projetado (+12%)</div>
                  <div className="col-span-3 font-mono font-semibold text-secondary">R$ 43.000,00</div>
                  <div className="col-span-3 text-right font-mono text-[#605A57]">R$ 4.730,00</div>
                </div>

                <div className="grid grid-cols-12 gap-2 px-4 py-3 items-center text-xs">
                  <div className="col-span-3 font-medium text-secondary">Julho/2026</div>
                  <div className="col-span-3 text-xs text-emerald-700 font-medium">Projetado (+18%)</div>
                  <div className="col-span-3 font-mono font-semibold text-secondary">R$ 45.500,00</div>
                  <div className="col-span-3 text-right font-mono text-[#605A57]">R$ 5.005,00</div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-[#F8FAFC] border border-[rgba(55,50,47,0.12)] rounded-md flex justify-between">
                  <span className="text-[#605A57]">Burn Rate Médio:</span>
                  <span className="font-mono font-semibold text-secondary">R$ 4.580,00/mês</span>
                </div>
                <div className="p-3 bg-[#F8FAFC] border border-[rgba(55,50,47,0.12)] rounded-md flex justify-between">
                  <span className="text-[#605A57]">Alerta de Liquidez:</span>
                  <span className="font-mono font-semibold text-emerald-700">0% de Risco</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Showcase Tab Selector Controls */}
      <div className="self-stretch -mx-4 md:-mx-8 lg:mx-0 w-[calc(100%+32px)] md:w-[calc(100%+64px)] lg:w-full border-t border-b border-[#E0DEDB] flex justify-center items-stretch">
        <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden hidden sm:block">
          <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
            {Array.from({ length: 150 }).map((_, i) => (
              <div
                key={i}
                className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
              />
            ))}
          </div>
        </div>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E0DEDB] border-l border-r border-[#E0DEDB]">
          <FeatureCard
            title={'1. Clareza de Caixa ("Cheque do Mês")'}
            description="Decomposição matemática em 3 baldes: quanto é seu para retirar, da empresa e do imposto."
            isActive={activeCard === 0}
            progress={activeCard === 0 ? progress : 0}
            onClick={() => handleCardClick(0)}
          />
          <FeatureCard
            title="2. Otimizador de Fator R"
            description="Prescrição do pró-labore ótimo para migrar do Anexo V (15,5%) para o Anexo III (6%)."
            isActive={activeCard === 1}
            progress={activeCard === 1 ? progress : 0}
            onClick={() => handleCardClick(1)}
          />
          <FeatureCard
            title="3. Inteligência Preditiva de Caixa"
            description="Projeção automática de faturamento futuro, sazonalidade e fôlego financeiro real."
            isActive={activeCard === 2}
            progress={activeCard === 2 ? progress : 0}
            onClick={() => handleCardClick(2)}
          />
        </div>

        <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden hidden sm:block">
          <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
            {Array.from({ length: 150 }).map((_, i) => (
              <div
                key={i}
                className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureCard({
  title,
  description,
  isActive,
  progress,
  onClick,
}: {
  title: string
  description: string
  isActive: boolean
  progress: number
  onClick: () => void
}) {
  return (
    <div
      className={`w-full self-stretch px-6 py-5 overflow-hidden flex flex-col justify-start items-start gap-2 cursor-pointer relative transition-colors ${
        isActive
          ? "bg-white shadow-[0px_0px_0px_0.75px_#E0DEDB_inset]"
          : "bg-transparent hover:bg-white/40"
      }`}
      onClick={onClick}
    >
      {isActive && (
        <div className="absolute top-0 left-0 w-full h-0.5 bg-[rgba(50,45,43,0.08)]">
          <div
            className="h-full bg-emerald-700 transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      <div className="self-stretch flex justify-center flex-col text-secondary text-sm font-semibold leading-5 font-sans">
        {title}
      </div>
      <div className="self-stretch text-[#605A57] text-xs font-normal leading-relaxed font-sans">
        {description}
      </div>
    </div>
  )
}
