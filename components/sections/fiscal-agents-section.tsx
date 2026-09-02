"use client"

import { useState, useEffect } from "react"
import { PixelIcon } from "../shared/pixel-icon"
import { AnimatedWave } from "../shared/animated-wave"
import { CheckCircle2, ShieldAlert } from "lucide-react"

const FISCAL_AGENTS = [
  {
    id: "fator-r",
    tag: "OTIMIZAÇÃO TRIBUTÁRIA",
    title: "1. Agente Fator R",
    subtitle: "Redução Automática de Simples Nacional",
    desc: "Monitora continuamente a relação entre folha de pagamento (FS12) e receita bruta (RBT12). Calcula o pró-labore exato para migrar do Anexo V (15,5%+) para o Anexo III (6%+), economizando milhares de reais por ano.",
    stats: [
      { value: "R$ 48.000+", label: "economia anual média" },
      { value: "28,0%", label: "alvo ótimo de folha" },
    ],
    pillColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
  },
  {
    id: "clareza",
    tag: "GESTÃO DE CAIXA REAL",
    title: "2. Agente Clareza de Caixa",
    subtitle: "O Fim da Dúvida de Quanto Você Pode Retirar",
    desc: "Decompõe cada centavo que entra na empresa em 3 baldes matemáticos transparentes: Seu para Retirar (pró-labore + lucro isento), Reserva da Empresa (capital de giro) e Provisão do DAS. Responde diariamente quanto você pode gastar.",
    stats: [
      { value: "3 Baldes", label: "separação automática" },
      { value: "100%", label: "lucro isento protegido" },
    ],
    pillColor: "bg-blue-50 text-blue-800 border-blue-200",
  },
  {
    id: "sentinela",
    tag: "BLINDAGEM PATRIMONIAL",
    title: "3. Agente Sentinela PF × PJ",
    subtitle: "Detector de Confusão Patrimonial e Risco Fiscal",
    desc: "Escaneia as transações bancárias da conta jurídica e identifica pagamentos com perfil de pessoa física (delivery, assinaturas pessoais, mercado). Quantifica o custo tributário oculto e afasta o risco do Art. 50 do Código Civil.",
    stats: [
      { value: "Art. 50 CC", label: "mitigação jurídica" },
      { value: "0 risco", label: "de desconsideração" },
    ],
    pillColor: "bg-amber-50 text-amber-800 border-amber-200",
  },
  {
    id: "provisao",
    tag: "PROVISÃO AUTOMÁTICA",
    title: "4. Agente de Provisão do DAS",
    subtitle: "Zero Surpresas no Pagamento do Imposto",
    desc: "Rastreia cada nota fiscal e recebimento para provisionar o imposto devido no próximo dia 20. Permite separar o valor com 1 clique, garantindo que o dinheiro da guia esteja sempre garantido na conta.",
    stats: [
      { value: "Dia 20", label: "sempre provisionado" },
      { value: "1 Clique", label: "para reservar valor" },
    ],
    pillColor: "bg-purple-50 text-purple-800 border-purple-200",
  },
]

export function FiscalAgentsSection() {
  const [selectedAgent, setSelectedAgent] = useState(0)
  const [progress, setProgress] = useState(0)
  const agent = FISCAL_AGENTS[selectedAgent]

  // Auto-cycle through agents with smooth progress bar
  useEffect(() => {
    const duration = 8000 // 8s per agent
    const intervalTime = 50
    const step = (intervalTime / duration) * 100

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setSelectedAgent((curr) => (curr + 1) % FISCAL_AGENTS.length)
          return 0
        }
        return prev + step
      })
    }, intervalTime)

    return () => clearInterval(timer)
  }, [selectedAgent])

  const handleAgentClick = (idx: number) => {
    setSelectedAgent(idx)
    setProgress(0)
  }

  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Section Header */}
      <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-0 w-full py-14 sm:py-18 md:py-24 border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-start items-center relative overflow-hidden">
        {/* Background Animated Wave */}
        <div className="absolute inset-0 w-full h-full opacity-40 sm:opacity-50 z-0 pointer-events-none">
          <AnimatedWave />
        </div>

        {/* Conteúdo Central */}
        <div className="w-full max-w-[680px] flex flex-col justify-start items-center gap-3 text-center relative z-10">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#605A57]">
            Agentes Especializados
          </span>

          <h2 className="text-secondary text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium font-sans h-section">
            4 Agentes Autônomos trabalhando pelo seu caixa
          </h2>

          <p className="text-[#605A57] text-sm sm:text-base md:text-lg leading-relaxed font-sans max-w-[580px]">
            Cada agente opera uma especialidade crítica: otimização tributária do Fator R, blindagem patrimonial, provisão automática de impostos e inteligência preditiva contínua.
          </p>
        </div>
      </div>

      {/* ── TOP SHOWCASE WINDOW ── */}
      <div className="self-stretch flex justify-center items-start">
        {/* Left vertical pattern with stationed pixel agents */}

        {/* Center Container: Active Agent Showcase */}
        <div className="flex-1 w-full border-l border-r border-[rgba(55,50,47,0.12)] bg-white p-6 sm:p-8 lg:p-12">
          <div className="grid grid-cols-1 grid-rows-1 w-full">
            {FISCAL_AGENTS.map((item, idx) => (
              <div
                key={item.id}
                className={`col-start-1 row-start-1 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch text-left transition-opacity duration-300 ${
                  selectedAgent === idx ? "opacity-100 pointer-events-auto z-10" : "opacity-0 pointer-events-none invisible z-0"
                }`}
              >
                <div className="lg:col-span-7 flex flex-col justify-between gap-4 h-full">
                  <h3 className="text-secondary text-2xl sm:text-3xl font-semibold leading-tight font-sans">
                    {item.title}: {item.subtitle}
                  </h3>

                  <p className="text-[#605A57] text-sm sm:text-base leading-relaxed font-sans">
                    {item.desc}
                  </p>

                  {/* Stats Block */}
                  <div className="grid grid-cols-2 gap-4 py-4 border-y border-[rgba(55,50,47,0.08)] my-2">
                    {item.stats.map((stat, i) => (
                      <div key={i}>
                        <div className="text-xl sm:text-2xl font-semibold text-secondary font-sans">
                          {stat.value}
                        </div>
                        <div className="text-xs text-[#605A57] font-medium font-sans">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual Simulation Graphic */}
                <div className="lg:col-span-5 bg-[#F8FAFC] p-6 rounded-xl border border-[rgba(55,50,47,0.08)] flex flex-col justify-between min-h-[290px] h-full gap-4">
                  <div className="flex items-center justify-between text-xs font-mono text-[#605A57] pb-2 border-b border-[rgba(55,50,47,0.08)]">
                    <div className="flex items-center gap-2">
                      <PixelIcon type="agents" size={20} />
                      <span>ESTADO DO AGENTE</span>
                    </div>
                    <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      EM EXECUÇÃO
                    </span>
                  </div>

                  {idx === 0 && (
                    <div className="space-y-3">
                      <div className="bg-white p-3.5 rounded-lg border border-[rgba(55,50,47,0.08)]">
                        <div className="text-[11px] text-[#605A57]">Cenário Atual (Sem Otimização)</div>
                        <div className="text-sm font-semibold text-red-600">Anexo V · Alíquota 15,5%</div>
                        <div className="text-xs text-[#6B6560] mt-1">Carga Anual: R$ 55.800/ano</div>
                      </div>

                      <div className="bg-white p-3.5 rounded-lg border border-emerald-500/80 shadow-xs">
                        <div className="text-[11px] text-emerald-800 font-semibold">Prescrição do Agente Rovee</div>
                        <div className="text-sm font-semibold text-emerald-700">Anexo III · Alíquota a partir de 6,0%</div>
                        <div className="text-xs text-emerald-900 mt-1 font-mono font-semibold">
                          Economia Líquida: +R$ 28.400/ano
                        </div>
                      </div>
                    </div>
                  )}

                  {idx === 1 && (
                    <div className="space-y-2">
                      <div className="bg-white p-3 rounded-lg border border-[rgba(55,50,47,0.08)]">
                        <div className="text-[11px] text-[#605A57]">1. Seu para Retirar (Lucro Isento)</div>
                        <div className="text-base font-semibold text-secondary">R$ 18.450,00</div>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-[rgba(55,50,47,0.08)]">
                        <div className="text-[11px] text-[#605A57]">2. Reserva Operacional da Empresa</div>
                        <div className="text-base font-semibold text-secondary">R$ 8.200,00</div>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-emerald-300">
                        <div className="text-[11px] text-emerald-800 font-medium">3. Provisão do DAS (Imposto)</div>
                        <div className="text-base font-semibold text-emerald-700">R$ 2.850,00</div>
                      </div>
                    </div>
                  )}

                  {idx === 2 && (
                    <div className="space-y-3">
                      <div className="bg-white p-4 rounded-lg border border-amber-200 bg-amber-50/50">
                        <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 mb-1">
                          <ShieldAlert className="w-4 h-4 text-amber-600" />
                          Mistura Detectada no Extrato
                        </div>
                        <p className="text-xs text-amber-900 leading-snug">
                          3 gastos pessoais pagos na conta PJ totalizando R$ 420,00 este mês.
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-[rgba(55,50,47,0.08)] text-xs text-[#605A57]">
                        Orientação: Transfira via pró-labore antes de pagar despesas pessoais.
                      </div>
                    </div>
                  )}

                  {idx === 3 && (
                    <div className="space-y-3">
                      <div className="bg-white p-3.5 rounded-lg border border-[rgba(55,50,47,0.08)] flex justify-between items-center">
                        <div>
                          <div className="text-xs text-[#605A57]">DAS Competência Atual</div>
                          <div className="text-base font-semibold text-secondary">R$ 3.420,00</div>
                        </div>
                        <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 text-[11px] font-semibold rounded-full">
                          100% Coberto
                        </span>
                      </div>
                      <div className="text-xs text-center text-[#605A57]">
                        Vencimento: 20 do próximo mês · Valor já reservado em conta.
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right vertical pattern with stationed pixel agents */}
      </div>

      {/* ── BOTTOM FEATURE CARDS SELECTOR ── */}
      <div className="self-stretch flex justify-center items-stretch border-t border-[rgba(55,50,47,0.12)]">
        {/* Left vertical pattern */}

        {/* 4 FeatureCards Grid with Active Progress Bars and Dividers */}
        <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#E0DEDB] border-l border-r border-[#E0DEDB]">
          {FISCAL_AGENTS.map((item, idx) => {
            const isActive = selectedAgent === idx
            return (
              <div
                key={item.id}
                onClick={() => handleAgentClick(idx)}
                className={`w-full self-stretch px-5 py-4 sm:px-6 sm:py-5 overflow-hidden flex flex-col justify-start items-start gap-1.5 cursor-pointer relative transition-colors ${isActive ? "bg-white shadow-[0px_0px_0px_0.75px_#E0DEDB_inset]" : "bg-transparent hover:bg-white/40"
                  }`}
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
                  {item.title}
                </div>
                <div className="self-stretch text-[#605A57] text-xs font-normal leading-relaxed font-sans line-clamp-2">
                  {item.subtitle}
                </div>
              </div>
            )
          })}
        </div>

        {/* Right vertical pattern */}
      </div>
    </div>
  )
}
