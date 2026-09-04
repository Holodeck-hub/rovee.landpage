"use client"

import { useEffect, useState } from "react"
import type { ReactNode } from "react"
import { PixelIcon } from "../../shared/pixel-icon"
import { AnimatedWave } from "../../layout"

interface FiscalAgent {
  id: string
  title: string
  subtitle: string
  desc: string
  stats: { value: string; label: string }[]
  visual: ReactNode
}

/** Uma linha de dado dentro do painel de simulação: rótulo + valor, sem cor semântica. */
function LinhaPainel({
  rotulo,
  valor,
  destaque,
}: {
  rotulo: string
  valor: string
  destaque?: boolean
}) {
  return (
    <div
      className={`bg-white p-3.5 rounded-lg border ${
        destaque ? "border-primary/30" : "border-[rgba(55,50,47,0.08)]"
      }`}
    >
      <div className="text-[11px] text-[#605A57]">{rotulo}</div>
      <div className={`text-sm font-semibold ${destaque ? "text-primary" : "text-secondary"}`}>{valor}</div>
    </div>
  )
}

const FISCAL_AGENTS: FiscalAgent[] = [
  {
    id: "fator-r",
    title: "1. Agente Fator R",
    subtitle: "Redução Automática de Simples Nacional",
    desc: "Monitora continuamente a relação entre folha de pagamento (FS12) e receita bruta (RBT12). Calcula o pró-labore exato para migrar do Anexo V (15,5%+) para o Anexo III (6%+), economizando milhares de reais por ano.",
    stats: [
      { value: "R$ 48.000+", label: "economia anual média" },
      { value: "28,0%", label: "alvo ótimo de folha" },
    ],
    visual: (
      <div className="space-y-3">
        <LinhaPainel rotulo="Sem otimização" valor="Anexo V · Alíquota 15,5%" />
        <LinhaPainel rotulo="Prescrição do agente" valor="Anexo III · Alíquota a partir de 6,0%" destaque />
        <div className="pt-1 flex items-baseline justify-between text-xs font-mono text-[#605A57]">
          <span>Economia líquida</span>
          <span className="text-primary font-semibold">+R$ 28.400/ano</span>
        </div>
      </div>
    ),
  },
  {
    id: "clareza",
    title: "2. Agente Clareza de Caixa",
    subtitle: "O Fim da Dúvida de Quanto Você Pode Retirar",
    desc: "Decompõe cada centavo que entra na empresa em 3 baldes matemáticos transparentes: Seu para Retirar (pró-labore + lucro isento), Reserva da Empresa (capital de giro) e Provisão do DAS. Responde diariamente quanto você pode gastar.",
    stats: [
      { value: "3 Baldes", label: "separação automática" },
      { value: "100%", label: "lucro isento protegido" },
    ],
    visual: (
      <div className="space-y-2">
        <LinhaPainel rotulo="1. Seu para retirar (lucro isento)" valor="R$ 18.450,00" />
        <LinhaPainel rotulo="2. Reserva operacional da empresa" valor="R$ 8.200,00" />
        <LinhaPainel rotulo="3. Provisão do DAS (imposto)" valor="R$ 2.850,00" destaque />
      </div>
    ),
  },
  {
    id: "sentinela",
    title: "3. Agente Sentinela PF × PJ",
    subtitle: "Detector de Confusão Patrimonial e Risco Fiscal",
    desc: "Escaneia as transações bancárias da conta jurídica e identifica pagamentos com perfil de pessoa física (delivery, assinaturas pessoais, mercado). Quantifica o custo tributário oculto e afasta o risco do Art. 50 do Código Civil.",
    stats: [
      { value: "Art. 50 CC", label: "mitigação jurídica" },
      { value: "0 risco", label: "de desconsideração" },
    ],
    visual: (
      <div className="space-y-3">
        <div className="bg-white p-4 rounded-lg border border-primary/30">
          <div className="text-xs font-semibold text-secondary mb-1">Mistura detectada no extrato</div>
          <p className="text-xs text-[#605A57] leading-snug">
            3 gastos pessoais pagos na conta PJ totalizando R$ 420,00 este mês.
          </p>
        </div>
        <LinhaPainel
          rotulo="Orientação do agente"
          valor="Transferir via pró-labore antes de pagar despesas pessoais"
        />
      </div>
    ),
  },
  {
    id: "provisao",
    title: "4. Agente de Provisão do DAS",
    subtitle: "Zero Surpresas no Pagamento do Imposto",
    desc: "Rastreia cada nota fiscal e recebimento para provisionar o imposto devido no próximo dia 20. Permite separar o valor com 1 clique, garantindo que o dinheiro da guia esteja sempre garantido na conta.",
    stats: [
      { value: "Dia 20", label: "sempre provisionado" },
      { value: "1 Clique", label: "para reservar valor" },
    ],
    visual: (
      <div className="space-y-3">
        <div className="bg-white p-3.5 rounded-lg border border-primary/30 flex justify-between items-center">
          <div>
            <div className="text-xs text-[#605A57]">DAS competência atual</div>
            <div className="text-base font-semibold text-secondary">R$ 3.420,00</div>
          </div>
          <span className="text-xs font-mono font-semibold text-primary">100% coberto</span>
        </div>
        <div className="text-xs text-center text-[#605A57]">
          Vencimento: 20 do próximo mês · Valor já reservado em conta.
        </div>
      </div>
    ),
  },
]

export function FiscalAgentsSection() {
  const [selectedAgent, setSelectedAgent] = useState(0)
  const [progress, setProgress] = useState(0)
  const [pausado, setPausado] = useState(false)

  // Auto-cycle through agents with smooth progress bar. Pausa em hover/foco:
  // sem isso, o card trocava debaixo do usuário no meio da leitura.
  useEffect(() => {
    if (pausado) return

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
  }, [selectedAgent, pausado])

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
      <div
        className="self-stretch flex justify-center items-start"
        onMouseEnter={() => setPausado(true)}
        onMouseLeave={() => setPausado(false)}
        onFocusCapture={() => setPausado(true)}
        onBlurCapture={() => setPausado(false)}
      >
        {/* Center Container: Active Agent Showcase */}
        <div className="flex-1 w-full border-l border-r border-[rgba(55,50,47,0.12)] bg-white p-6 sm:p-8 lg:p-12">
          <div className="grid grid-cols-1 grid-rows-1 w-full">
            {FISCAL_AGENTS.map((item, idx) => (
              <div
                key={item.id}
                className={`col-start-1 row-start-1 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch text-left transition-all duration-300 ${
                  selectedAgent === idx
                    ? "opacity-100 translate-y-0 pointer-events-auto z-10"
                    : "opacity-0 translate-y-1.5 pointer-events-none invisible z-0"
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
                    <span className="flex items-center gap-1.5 text-secondary font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      EM EXECUÇÃO
                    </span>
                  </div>

                  {item.visual}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── BOTTOM FEATURE CARDS SELECTOR ── */}
      <div
        className="self-stretch flex justify-center items-stretch border-t border-[rgba(55,50,47,0.12)]"
        role="tablist"
        aria-label="Agentes autônomos"
        onMouseEnter={() => setPausado(true)}
        onMouseLeave={() => setPausado(false)}
        onFocusCapture={() => setPausado(true)}
        onBlurCapture={() => setPausado(false)}
      >
        <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#E0DEDB] border-l border-r border-[#E0DEDB]">
          {FISCAL_AGENTS.map((item, idx) => {
            const isActive = selectedAgent === idx
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => handleAgentClick(idx)}
                className={`w-full self-stretch px-5 py-4 sm:px-6 sm:py-5 overflow-hidden flex flex-col justify-start items-start gap-1.5 text-left cursor-pointer relative transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary ${
                  isActive ? "bg-white shadow-[0px_0px_0px_0.75px_#E0DEDB_inset]" : "bg-transparent hover:bg-white/40"
                }`}
              >
                {isActive && (
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-[rgba(50,45,43,0.08)]">
                    <div
                      className="h-full bg-primary transition-all duration-100 ease-linear"
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
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
