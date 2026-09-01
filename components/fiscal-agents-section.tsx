"use client"

import { useState, useEffect } from "react"
import { PixelIcon } from "./pixel-icon"
import { AnimatedWave } from "./animated-wave"
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
    action: "Prescreve o Pró-Labore Ótimo (p*)",
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
    action: 'Gera o "Cheque do Mês" em tempo real',
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
    action: "Alerta antes de misturar despesas",
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
    action: "Executa a reserva proativa do DAS",
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
    <div id="agentes" className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Section Header */}
      <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] py-14 sm:py-18 md:py-24 border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-start items-center relative overflow-hidden">
        {/* Background Animated Wave */}
        <div className="absolute inset-0 w-full h-full opacity-40 sm:opacity-50 z-0 pointer-events-none">
          <AnimatedWave />
        </div>

        {/* Conteúdo Central */}
        <div className="w-full max-w-[680px] flex flex-col justify-start items-center gap-3 text-center relative z-10">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#605A57]">
            Agentes Especializados
          </span>

          <h2 className="text-[#37322F] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight font-sans tracking-tight">
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
        <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden hidden sm:block">
          <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
            {Array.from({ length: 150 }).map((_, i) => (
              <div
                key={i}
                className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
              />
            ))}
          </div>
          {/* Fila Esquerda: 6 Agentes em Degrau Suave */}
          <div className="absolute left-[-45px] sm:left-[-40px] md:left-[-35px] lg:left-[-30px] bottom-[-95px] z-20 flex flex-col items-center gap-5 pointer-events-none">
            <div className="translate-x-1 opacity-70 scale-90"><PixelIcon type="finance" size={20} /></div>
            <div className="-translate-x-2 opacity-80 scale-90"><PixelIcon type="tax" size={20} /></div>
            <div className="translate-x-3 opacity-90 scale-95"><PixelIcon type="security" size={22} /></div>
            <div className="-translate-x-1 scale-100"><PixelIcon type="growth" size={24} /></div>
            <div className="translate-x-2 scale-105"><PixelIcon type="accounting" size={26} /></div>
            <div className="-translate-x-3 scale-110 drop-shadow-md"><PixelIcon type="agents" size={28} /></div>
          </div>
        </div>

        {/* Center Container: Active Agent Showcase */}
        <div className="flex-1 max-w-[1060px] border-l border-r border-[rgba(55,50,47,0.12)] bg-white p-6 sm:p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch text-left h-[560px] sm:h-[500px] lg:h-[440px] overflow-hidden">
          <div className="lg:col-span-7 flex flex-col justify-between gap-4 h-full">
            <div className="flex items-center gap-2">
              <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase border ${agent.pillColor}`}>
                {agent.tag}
              </span>
            </div>

            <h3 className="text-[#37322F] text-2xl sm:text-3xl font-semibold leading-tight font-sans">
              {agent.title}: {agent.subtitle}
            </h3>

            <p className="text-[#605A57] text-sm sm:text-base leading-relaxed font-sans">
              {agent.desc}
            </p>

            {/* Stats Block */}
            <div className="grid grid-cols-2 gap-4 py-4 border-y border-[rgba(55,50,47,0.08)] my-2">
              {agent.stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-xl sm:text-2xl font-semibold text-[#37322F] font-sans">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#605A57] font-medium font-sans">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-2 rounded-lg border border-emerald-200/80">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{agent.action}</span>
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

            {selectedAgent === 0 && (
              <div className="space-y-3">
                <div className="bg-white p-3.5 rounded-lg border border-[rgba(55,50,47,0.08)]">
                  <div className="text-[11px] text-[#605A57]">Cenário Atual (Sem Otimização)</div>
                  <div className="text-sm font-semibold text-red-600">Anexo V · Alíquota 15,5%</div>
                  <div className="text-xs text-[#82807C] mt-1">Carga Anual: R$ 55.800/ano</div>
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

            {selectedAgent === 1 && (
              <div className="space-y-2">
                <div className="bg-white p-3 rounded-lg border border-[rgba(55,50,47,0.08)]">
                  <div className="text-[11px] text-[#605A57]">1. Seu para Retirar (Lucro Isento)</div>
                  <div className="text-base font-semibold text-[#37322F]">R$ 18.450,00</div>
                </div>
                <div className="bg-white p-3 rounded-lg border border-[rgba(55,50,47,0.08)]">
                  <div className="text-[11px] text-[#605A57]">2. Reserva Operacional da Empresa</div>
                  <div className="text-base font-semibold text-[#37322F]">R$ 8.200,00</div>
                </div>
                <div className="bg-white p-3 rounded-lg border border-emerald-300">
                  <div className="text-[11px] text-emerald-800 font-medium">3. Provisão do DAS (Imposto)</div>
                  <div className="text-base font-semibold text-emerald-700">R$ 2.850,00</div>
                </div>
              </div>
            )}

            {selectedAgent === 2 && (
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

            {selectedAgent === 3 && (
              <div className="space-y-3">
                <div className="bg-white p-3.5 rounded-lg border border-[rgba(55,50,47,0.08)] flex justify-between items-center">
                  <div>
                    <div className="text-xs text-[#605A57]">DAS Competência Atual</div>
                    <div className="text-base font-semibold text-[#37322F]">R$ 3.420,00</div>
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

        {/* Right vertical pattern with stationed pixel agents */}
        <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden hidden sm:block">
          <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
            {Array.from({ length: 150 }).map((_, i) => (
              <div
                key={i}
                className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
              />
            ))}
          </div>
          {/* Fila Direita: 6 Agentes em Degrau Suave */}
          <div className="absolute right-[-45px] sm:right-[-40px] md:right-[-35px] lg:right-[-30px] bottom-[-95px] z-20 flex flex-col items-center gap-5 pointer-events-none">
            <div className="-translate-x-1 opacity-70 scale-90"><PixelIcon type="growth" size={20} /></div>
            <div className="translate-x-2 opacity-80 scale-90"><PixelIcon type="security" size={20} /></div>
            <div className="-translate-x-3 opacity-90 scale-95"><PixelIcon type="tax" size={22} /></div>
            <div className="translate-x-1 scale-100"><PixelIcon type="finance" size={24} /></div>
            <div className="-translate-x-2 scale-105"><PixelIcon type="agents" size={26} /></div>
            <div className="translate-x-3 scale-110 drop-shadow-md"><PixelIcon type="accounting" size={28} /></div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM FEATURE CARDS SELECTOR ── */}
      <div className="self-stretch flex justify-center items-stretch border-t border-[rgba(55,50,47,0.12)]">
        {/* Left vertical pattern */}
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

        {/* 4 FeatureCards Grid with Active Progress Bars and Dividers */}
        <div className="flex-1 max-w-[1060px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#E0DEDB] border-l border-r border-[#E0DEDB]">
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
