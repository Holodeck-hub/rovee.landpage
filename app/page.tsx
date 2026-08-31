"use client"

import { useState, useEffect, useRef } from "react"
import { HeroStatsMarquee } from "../components/hero-stats-marquee"
import { PredictiveIntelligenceSection } from "../components/predictive-intelligence-section"
import { FiscalAgentsSection } from "../components/fiscal-agents-section"
import { LiveMetricsSection } from "../components/live-metrics-section"
import { TestimonialsSlider } from "../components/testimonials-slider"
import PricingSection from "../components/pricing-section"
import FAQSection from "../components/faq-section"
import CTASection from "../components/cta-section"
import FooterSection from "../components/footer-section"
import {
  ArrowUpRight,
  CheckCircle2,
  DollarSign,
  TrendingUp,
  ShieldAlert,
  Layers,
  FileText,
  Clock,
} from "lucide-react"

export default function LandingPage() {
  const [activeCard, setActiveCard] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveCard((current) => (current + 1) % 3)
          return 0
        }
        return prev + 1.2
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
    <div className="w-full min-h-screen relative bg-[#F8FAFC] overflow-x-hidden flex flex-col justify-start items-center">
      <div className="relative flex flex-col justify-start items-center w-full">
        {/* Main container with framing vertical lines */}
        <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] relative flex flex-col justify-start items-start min-h-screen">
          {/* Left vertical line */}
          <div className="w-[1px] h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>

          {/* Right vertical line */}
          <div className="w-[1px] h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>

          <div className="self-stretch pt-[9px] overflow-hidden border-b border-[rgba(55,50,47,0.06)] flex flex-col justify-center items-center relative z-10">

            {/* ── 1. NAVIGATION BAR ────────────────────────────────────── */}
            <div className="w-full h-12 sm:h-14 md:h-16 lg:h-[84px] sticky top-0 flex justify-center items-center z-50 px-6 sm:px-8 md:px-12 lg:px-0">
              <div className="w-full h-0 absolute left-0 top-6 sm:top-7 md:top-8 lg:top-[42px] border-t border-[rgba(55,50,47,0.12)] shadow-[0px_1px_0px_white]"></div>

              <div className="w-full max-w-[calc(100%-32px)] sm:max-w-[calc(100%-48px)] md:max-w-[calc(100%-64px)] lg:max-w-[760px] lg:w-[760px] h-11 sm:h-12 py-1.5 px-4 bg-[#F8FAFC]/90 backdrop-blur-md shadow-[0px_0px_0px_2px_white] overflow-hidden rounded flex justify-between items-center relative z-30 border border-[rgba(55,50,47,0.1)]">
                <div className="flex justify-center items-center gap-6">
                  <a href="#" className="flex items-center">
                    <span className="text-[#37322F] text-lg sm:text-xl font-bold font-sans tracking-tight hover:opacity-80 transition-opacity">
                      Rovee
                    </span>
                  </a>

                  <nav className="hidden md:flex items-center gap-4 pl-2 text-xs font-medium text-[rgba(49,45,43,0.80)] font-sans">
                    <a href="#fiscal" className="hover:text-[#37322F] transition-colors">
                      Inteligência Fiscal
                    </a>
                    <a href="#predicao" className="hover:text-[#37322F] transition-colors">
                      Predição
                    </a>
                    <a href="#agentes" className="hover:text-[#37322F] transition-colors">
                      Agentes
                    </a>
                    <a href="#metricas" className="hover:text-[#37322F] transition-colors">
                      Métricas
                    </a>
                    <a href="#planos" className="hover:text-[#37322F] transition-colors">
                      Planos
                    </a>
                  </nav>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href="#comecar"
                    className="px-3 sm:px-4 py-1.5 bg-white hover:bg-gray-100 text-[#37322F] text-xs font-semibold rounded shadow-[0px_1px_2px_rgba(55,50,47,0.12)] border border-[rgba(55,50,47,0.08)] transition-all"
                  >
                    Entrar
                  </a>
                  <a
                    href="#comecar"
                    className="px-3.5 sm:px-4 py-1.5 bg-[#37322F] hover:bg-[#201d1b] text-white text-xs font-semibold rounded transition-all shadow-xs"
                  >
                    Criar Conta
                  </a>
                </div>
              </div>
            </div>

            {/* ── 2. HERO SECTION ──────────────────────────────────────── */}
            <div id="comecar" className="pt-15 sm:pt-16 md:pt-20 lg:pt-[70px] pb-6 sm:pb-8 flex flex-col justify-start items-center px-0.5 w-full text-center">

              {/* Main Headline */}
              <div className="w-full max-w-[840px] flex flex-col justify-center items-center gap-4">
                <h1 className="text-[#37322F] text-[28px] xs:text-[34px] sm:text-[46px] md:text-[58px] lg:text-[72px] font-semibold leading-[1.08] font-sans tracking-tight">
                  Saiba quanto do seu faturamento é seu de verdade.
                </h1>

                <p className="w-full max-w-[620px] text-[rgba(55,50,47,0.85)] text-sm sm:text-base md:text-lg leading-relaxed font-sans font-normal mt-2">
                  A Fintech que calcula seu <strong>pró-labore ótimo no Simples Nacional</strong>, separa o caixa pessoal da PJ e usa <strong>machine learning preditivo</strong> para antecipar seu faturamento sem alucinações.
                </p>
              </div>

              {/* Primary Actions */}
              <div className="flex flex-col sm:flex-row items-center gap-3 mt-8 z-20">
                <a
                  href="#comecar"
                  className="h-12 px-8 bg-[#37322F] hover:bg-[#201d1b] text-white text-sm font-semibold rounded flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                >
                  Começar Gratuitamente
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href="#fiscal"
                  className="h-12 px-6 bg-white hover:bg-[#F1F5F9] text-[#37322F] border border-[rgba(55,50,47,0.15)] text-sm font-medium rounded flex items-center justify-center transition-all"
                >
                  Ver Demonstração
                </a>
              </div>

              {/* ── 3. HERO STATS MARQUEE (Optimus Component) ───────────── */}
              <div className="w-full mt-10">
                <HeroStatsMarquee />
              </div>

              {/* ── 4. PRODUCT SHOWCASE INTERACTIVE DASHBOARD ─────────────── */}
              <div className="w-full max-w-[960px] pt-4 pb-2 px-2 sm:px-4 md:px-6 lg:px-8 flex flex-col justify-center items-center relative z-10 mt-4">

                {/* Showcase Screen Frame - Estilo Brillance Minimalista Branco Gelo */}
                <div className="w-full bg-white shadow-none overflow-hidden rounded-xl border border-[rgba(55,50,47,0.12)] flex flex-col text-left">

                  {/* Mockup Top Window Bar */}
                  <div className="w-full px-5 py-3.5 bg-[#F1F5F9] border-b border-[rgba(55,50,47,0.12)] flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
                      </div>
                      <span className="text-xs font-mono text-[#605A57] font-medium">app.rovee.com.br / fiscal-console</span>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-mono text-[#605A57]">
                      <span className="hidden sm:inline">Simples Nacional · Anexo III</span>
                      <span className="px-2 py-0.5 bg-white text-emerald-800 border border-[rgba(55,50,47,0.14)] rounded text-[11px] font-semibold">
                        Extrato Conciliado
                      </span>
                    </div>
                  </div>

                  {/* Dashboard Content per Active Card Tab */}
                  <div className="p-6 sm:p-8 bg-white flex flex-col gap-6">

                    {/* ── TAB 0: O SEU CHEQUE DO MÊS (TABELA FINANCEIRA) ── */}
                    {activeCard === 0 && (
                      <div className="flex flex-col gap-5 animate-fadeIn">
                        {/* Header Summary */}
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-[rgba(55,50,47,0.12)]">
                          <div>
                            <h3 className="text-lg sm:text-xl font-semibold text-[#37322F]">
                              Demonstrativo de Clareza de Caixa
                            </h3>
                            <p className="text-xs text-[#605A57] mt-0.5">
                              Decomposição matemática de R$ 38.450,00 de faturamento bruto do mês.
                            </p>
                          </div>
                          <div className="text-right">
                            <span className="text-xs text-[#82807c] font-mono">Margem Líquida</span>
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
                            <div className="col-span-4 font-medium text-[#37322F]">
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
                            <div className="col-span-5 sm:col-span-2 text-right font-mono font-semibold text-[#37322F]">
                              R$ 24.200,00
                            </div>
                          </div>

                          {/* Row 2: Reserva da Empresa */}
                          <div className="grid grid-cols-12 gap-2 px-4 py-3.5 border-b border-[rgba(55,50,47,0.12)] items-center text-xs hover:bg-[#F8FAFC]/60 transition-colors">
                            <div className="col-span-4 font-medium text-[#37322F]">
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
                            <div className="col-span-5 sm:col-span-2 text-right font-mono font-semibold text-[#37322F]">
                              R$ 9.800,00
                            </div>
                          </div>

                          {/* Row 3: Provisão DAS */}
                          <div className="grid grid-cols-12 gap-2 px-4 py-3.5 items-center text-xs hover:bg-[#F8FAFC]/60 transition-colors">
                            <div className="col-span-4 font-medium text-[#37322F]">
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
                            <div className="col-span-5 sm:col-span-2 text-right font-mono font-semibold text-[#37322F]">
                              R$ 4.450,00
                            </div>
                          </div>
                        </div>

                        {/* Segmented Pill Allocation Bar (Estilo Ticks idêntico à imagem) */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
                          <div className="flex items-center gap-2 text-[11px] font-mono text-[#82807c] shrink-0">
                            <span>Alocação do Caixa:</span>
                          </div>

                          <div className="flex-1 flex items-center gap-[3px] sm:gap-1 px-1 overflow-hidden">
                            {Array.from({ length: 48 }).map((_, i) => {
                              // Paleta exata da imagem do usuário:
                              // Verde principal: #248259
                              // Verde claro/menta: #7cb99d
                              // Âmbar / Laranja: #c8681b
                              let bg = "bg-[#248259]"

                              if (i === 6) bg = "bg-[#7cb99d]"
                              else if (i === 9 || i === 11) bg = "bg-[#c8681b]"
                              else if (i === 28) bg = "bg-[#c8681b]"
                              else if (i === 45) bg = "bg-[#c8681b]"
                              else if (i >= 42) bg = "bg-[#c8681b]" // Provisão DAS

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
                    )}

                    {/* ── TAB 1: OTIMIZADOR DE FATOR R ── */}
                    {activeCard === 1 && (
                      <div className="flex flex-col gap-5 animate-fadeIn">
                        {/* Header Summary */}
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-[rgba(55,50,47,0.12)]">
                          <div>
                            <h3 className="text-lg sm:text-xl font-semibold text-[#37322F]">
                              Diagnóstico Comparativo de Enquadramento
                            </h3>
                            <p className="text-xs text-[#605A57] mt-0.5">
                              Calibragem da folha de pagamento para atingir os 28% do Fator R.
                            </p>
                          </div>
                          <div className="text-right">
                            <span className="text-xs text-[#82807c] font-mono">Economia Prescrita</span>
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
                            <div className="col-span-4 text-right font-mono font-semibold text-[#37322F]">R$ 8.500,00 (28,2%)</div>
                          </div>

                          <div className="grid grid-cols-12 gap-2 px-4 py-3 items-center text-xs bg-emerald-50/30">
                            <div className="col-span-4 font-semibold text-[#37322F]">Imposto Devido Estimado/Ano</div>
                            <div className="col-span-4 font-mono text-red-700">R$ 55.800,00</div>
                            <div className="col-span-4 text-right font-mono font-bold text-emerald-700">R$ 21.600,00</div>
                          </div>
                        </div>

                        <div className="p-3 bg-[#F8FAFC] border border-[rgba(55,50,47,0.12)] rounded-md text-xs text-[#605A57]">
                          ✓ Memória de cálculo pronta com o valor exato de pró-labore para envio ao contador no fechamento.
                        </div>
                      </div>
                    )}

                    {/* ── TAB 2: PREVISÃO & RUNWAY ── */}
                    {activeCard === 2 && (
                      <div className="flex flex-col gap-5 animate-fadeIn">
                        {/* Header Summary */}
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-[rgba(55,50,47,0.12)]">
                          <div>
                            <h3 className="text-lg sm:text-xl font-semibold text-[#37322F]">
                              Previsibilidade de Caixa & Runway
                            </h3>
                            <p className="text-xs text-[#605A57] mt-0.5">
                              Projeção contínua dos próximos meses com análise de fôlego operacional.
                            </p>
                          </div>
                          <div className="text-right">
                            <span className="text-xs text-[#82807c] font-mono">Fôlego de Reserva</span>
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
                            <div className="col-span-3 font-medium text-[#37322F]">Maio/2026</div>
                            <div className="col-span-3 text-xs text-[#605A57]">Realizado</div>
                            <div className="col-span-3 font-mono font-semibold text-[#37322F]">R$ 38.450,00</div>
                            <div className="col-span-3 text-right font-mono text-[#605A57]">R$ 4.450,00</div>
                          </div>

                          <div className="grid grid-cols-12 gap-2 px-4 py-3 border-b border-[rgba(55,50,47,0.12)] items-center text-xs">
                            <div className="col-span-3 font-medium text-[#37322F]">Junho/2026</div>
                            <div className="col-span-3 text-xs text-emerald-700 font-medium">Projetado (+12%)</div>
                            <div className="col-span-3 font-mono font-semibold text-[#37322F]">R$ 43.000,00</div>
                            <div className="col-span-3 text-right font-mono text-[#605A57]">R$ 4.730,00</div>
                          </div>

                          <div className="grid grid-cols-12 gap-2 px-4 py-3 items-center text-xs">
                            <div className="col-span-3 font-medium text-[#37322F]">Julho/2026</div>
                            <div className="col-span-3 text-xs text-emerald-700 font-medium">Projetado (+18%)</div>
                            <div className="col-span-3 font-mono font-semibold text-[#37322F]">R$ 45.500,00</div>
                            <div className="col-span-3 text-right font-mono text-[#605A57]">R$ 5.005,00</div>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                          <div className="p-3 bg-[#F8FAFC] border border-[rgba(55,50,47,0.12)] rounded-md flex justify-between">
                            <span className="text-[#605A57]">Burn Rate Médio:</span>
                            <span className="font-mono font-semibold text-[#37322F]">R$ 4.580,00/mês</span>
                          </div>
                          <div className="p-3 bg-[#F8FAFC] border border-[rgba(55,50,47,0.12)] rounded-md flex justify-between">
                            <span className="text-[#605A57]">Alerta de Liquidez:</span>
                            <span className="font-mono font-semibold text-emerald-700">0% de Risco</span>
                          </div>
                        </div>
                      </div>
                    )}

                  </div>
                </div>
              </div>

              {/* Showcase Tab Selector Controls */}
              <div className="self-stretch -mx-4 md:-mx-8 lg:mx-0 w-[calc(100%+32px)] md:w-[calc(100%+64px)] lg:w-full border-t border-b border-[#E0DEDB] flex justify-center items-stretch mt-6">
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

            {/* ── 5. SEÇÃO BENTO GRID: INTELIGÊNCIA FISCAL ────────────── */}
            <div id="fiscal" className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">

              {/* Header */}
              <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] py-12 sm:py-16 md:py-20 border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-start items-center relative">
                {/* Badge no canto superior esquerdo */}
                <div className="w-full flex justify-start mb-6 px-4 sm:px-6 lg:px-8">
                  <span className="px-3 py-1 rounded-none text-xs font-mono font-bold uppercase tracking-wider bg-white text-[#37322F] border border-[rgba(55,50,47,0.18)] shadow-xs">
                    Motor de Inteligência Fiscal
                  </span>
                </div>

                <div className="w-full max-w-[680px] flex flex-col justify-start items-center gap-4 text-center">
                  <h2 className="text-[#37322F] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight font-sans tracking-tight">
                    O fim das dúvidas sobre imposto e pró-labore
                  </h2>

                  <p className="text-[#605A57] text-sm sm:text-base md:text-lg leading-relaxed font-sans max-w-[580px]">
                    Não é apenas um gerenciador financeiro. A Rovee analisa os dados fiscais da sua PJ e entrega decisões que colocam mais dinheiro limpo no seu bolso.
                  </p>
                </div>
              </div>

              {/* Bento Grid 4 Cards (Com ícones inline sem background) */}
              <div className="self-stretch flex justify-center items-start">
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

                <div className="flex-1 max-w-[1060px] grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-r border-[rgba(55,50,47,0.12)]">

                  {/* Card 1: Clareza de Caixa */}
                  <div className="border-b border-r-0 md:border-r border-[rgba(55,50,47,0.12)] p-6 sm:p-8 md:p-10 flex flex-col justify-between gap-4 bg-white/70 hover:bg-white transition-colors">
                    <div>
                      <div className="flex items-center gap-2.5 mb-2">
                        <DollarSign className="w-5 h-5 text-[#37322F] shrink-0" />
                        <h3 className="text-xl font-semibold text-[#37322F]">Clareza de Caixa (&quot;Cheque do Mês&quot;)</h3>
                      </div>
                      <p className="text-sm text-[#605A57] leading-relaxed">
                        Divide o dinheiro da empresa em 3 partes claras: o que você pode transferir para sua física sem pagar imposto de novo, a reserva da empresa e o imposto do próximo dia 20.
                      </p>
                    </div>
                    <div className="p-3 bg-emerald-50 rounded-lg text-xs text-emerald-800 font-mono font-medium">
                      ✓ Responde todo dia: &quot;Quanto posso gastar hoje?&quot;
                    </div>
                  </div>

                  {/* Card 2: Fator R */}
                  <div className="border-b border-[rgba(55,50,47,0.12)] p-6 sm:p-8 md:p-10 flex flex-col justify-between gap-4 bg-white/70 hover:bg-white transition-colors">
                    <div>
                      <div className="flex items-center gap-2.5 mb-2">
                        <TrendingUp className="w-5 h-5 text-[#37322F] shrink-0" />
                        <h3 className="text-xl font-semibold text-[#37322F]">Otimizador do Fator R</h3>
                      </div>
                      <p className="text-sm text-[#605A57] leading-relaxed">
                        Calcula o pró-labore ideal para pagar 6% de Simples Nacional (Anexo III) em vez de 15,5% (Anexo V). Mostra exatamente quanto você economiza em reais por ano.
                      </p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg text-xs text-blue-800 font-mono font-medium">
                      ✓ Economia média comprovada de R$ 28k a R$ 60k/ano
                    </div>
                  </div>

                  {/* Card 3: Sentinela PF x PJ */}
                  <div className="border-b md:border-b-0 border-r-0 md:border-r border-[rgba(55,50,47,0.12)] p-6 sm:p-8 md:p-10 flex flex-col justify-between gap-4 bg-white/70 hover:bg-white transition-colors">
                    <div>
                      <div className="flex items-center gap-2.5 mb-2">
                        <ShieldAlert className="w-5 h-5 text-[#37322F] shrink-0" />
                        <h3 className="text-xl font-semibold text-[#37322F]">Sentinela Anti-Mistura PF × PJ</h3>
                      </div>
                      <p className="text-sm text-[#605A57] leading-relaxed">
                        Detecta despesas pessoais pagas na conta da empresa e avisa o custo tributário e os riscos do Art. 50 do Código Civil (desconsideração da personalidade jurídica).
                      </p>
                    </div>
                    <div className="p-3 bg-amber-50 rounded-lg text-xs text-amber-800 font-mono font-medium">
                      ✓ Blindagem patrimonial e extratos 100% limpos
                    </div>
                  </div>

                  {/* Card 4: Provisão DAS */}
                  <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-between gap-4 bg-white/70 hover:bg-white transition-colors">
                    <div>
                      <div className="flex items-center gap-2.5 mb-2">
                        <Clock className="w-5 h-5 text-[#37322F] shrink-0" />
                        <h3 className="text-xl font-semibold text-[#37322F]">Provisão em Tempo Real do DAS</h3>
                      </div>
                      <p className="text-sm text-[#605A57] leading-relaxed">
                        Conforme suas notas e recebimentos entram, a Rovee calcula e provisiona o imposto do mês. Botão de 1 clique para separar o valor e nunca ser pego de surpresa.
                      </p>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-lg text-xs text-purple-800 font-mono font-medium">
                      ✓ O dinheiro do imposto sempre reservado no dia 20
                    </div>
                  </div>

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

            {/* ── 6. SEÇÃO: PREDICTIVE INTELLIGENCE (Machine Learning) ── */}
            <div id="predicao" className="w-full">
              <PredictiveIntelligenceSection />
            </div>

            {/* ── 7. SEÇÃO: AGENTES FISCAIS & PREDITIVOS (Agentic Base) ── */}
            <div id="agentes" className="w-full">
              <FiscalAgentsSection />
            </div>

            {/* ── 8. SEÇÃO: LIVE METRICS (Optimus Base) ────────────────── */}
            <div id="metricas" className="w-full">
              <LiveMetricsSection />
            </div>

            {/* ── 9. SEÇÃO: DEPOIMENTOS (Optimus Base) ─────────────────── */}
            <div id="depoimentos" className="w-full">
              <TestimonialsSlider />
            </div>

            {/* ── 10. SEÇÃO: PLANOS & PRICING ─────────────────────────── */}
            <div className="w-full">
              <PricingSection />
            </div>

            {/* ── 11. SEÇÃO: FAQ ───────────────────────────────────────── */}
            <div className="w-full">
              <FAQSection />
            </div>

            {/* ── 12. SEÇÃO: CTA FINAL COM ANIMATED WAVE ───────────────── */}
            <div className="w-full">
              <CTASection />
            </div>

            {/* ── 13. SEÇÃO: FOOTER ────────────────────────────────────── */}
            <div className="w-full">
              <FooterSection />
            </div>

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

      <div className="self-stretch flex justify-center flex-col text-[#37322F] text-sm font-semibold leading-5 font-sans">
        {title}
      </div>
      <div className="self-stretch text-[#605A57] text-xs font-normal leading-relaxed font-sans">
        {description}
      </div>
    </div>
  )
}
