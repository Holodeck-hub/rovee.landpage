"use client"

import { useState } from "react"
import { PixelIcon } from "./pixel-icon"
import { Calculator, Wallet, ShieldAlert, Sparkles, CheckCircle2, ArrowRight } from "lucide-react"

const FISCAL_AGENTS = [
  {
    id: "fator-r",
    tag: "OTIMIZAÇÃO TRIBUTÁRIA",
    title: "Agente Fator R",
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
    title: "Agente Clareza de Caixa",
    subtitle: "O Fim da Dúvida de Quanto Você Pode Retirar",
    desc: "Decompõe cada centavo que entra na empresa em 3 baldes matemáticos transparentes: Seu para Retirar (pró-labore + lucro isento), Reserva da Empresa (capital de giro) e Provisão do DAS. Responde diariamente quanto você pode gastar.",
    stats: [
      { value: "3 Baldes", label: "separação automática" },
      { value: "100%", label: "lucro isento protegido" },
    ],
    action: "Gera o \"Cheque do Mês\" em tempo real",
    pillColor: "bg-blue-50 text-blue-800 border-blue-200",
  },
  {
    id: "sentinela",
    tag: "BLINDAGEM PATRIMONIAL",
    title: "Agente Sentinela PF × PJ",
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
    title: "Agente de Provisão do DAS",
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
  const agent = FISCAL_AGENTS[selectedAgent]

  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Header com PixelIcons Lado a Lado (Mesma Direção, sem espelhamento) */}
      <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] py-14 sm:py-18 md:py-24 border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-start items-center relative overflow-hidden">
        {/* Fila Esquerda: 6 Agentes em Degrau Suave com novo agente no cantinho extremo (mb-20) */}
        <div className="absolute left-[-15px] sm:left-[-10px] md:left-[-5px] lg:left-0 bottom-[-45px] flex items-end -space-x-12 md:-space-x-14 pointer-events-none select-none hidden sm:flex opacity-35 md:opacity-45 z-0">
          <div className="mb-16">
            <PixelIcon type="agents" size={160} className="scale-y-[-1]" />
          </div>
          <div className="mb-12">
            <PixelIcon type="agents" size={160} className="scale-y-[-1]" />
          </div>
          <div className="mb-8">
            <PixelIcon type="agents" size={160} className="scale-y-[-1]" />
          </div>
          <div className="mb-4">
            <PixelIcon type="agents" size={160} className="scale-y-[-1]" />
          </div>
          <div className="mb-0">
            <PixelIcon type="agents" size={160} className="scale-y-[-1]" />
          </div>
        </div>

        {/* Fila Direita: 6 Agentes em Degrau Suave com novo agente no cantinho extremo (mb-20) */}
        <div className="absolute right-[-15px] sm:right-[-10px] md:right-[-5px] lg:right-0 bottom-[-45px] flex items-end -space-x-12 md:-space-x-14 pointer-events-none select-none hidden sm:flex opacity-35 md:opacity-45 z-0">
          <div className="mb-0">
            <PixelIcon type="agents" size={160} className="scale-y-[-1]" />
          </div>
          <div className="mb-4">
            <PixelIcon type="agents" size={160} className="scale-y-[-1]" />
          </div>
          <div className="mb-8">
            <PixelIcon type="agents" size={160} className="scale-y-[-1]" />
          </div>
          <div className="mb-12">
            <PixelIcon type="agents" size={160} className="scale-y-[-1]" />
          </div>
          <div className="mb-16">
            <PixelIcon type="agents" size={160} className="scale-y-[-1]" />
          </div>
          
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

      {/* Interactive Stacking Cards & Agent Selector */}
      <div className="self-stretch flex justify-center items-start">
        {/* Left vertical pattern with stationed pixel agent */}
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

        <div className="flex-1 max-w-[1060px] border-l border-r border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-12">
          {/* Agent Navigation Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
            {FISCAL_AGENTS.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setSelectedAgent(idx)}
                className={`p-3 sm:p-4 rounded-xl text-left transition-all flex flex-col gap-1 border ${selectedAgent === idx
                  ? "bg-white border-[#37322F] shadow-[0px_4px_12px_rgba(55,50,47,0.08)] ring-1 ring-[#37322F]"
                  : "bg-[#F1F5F9] border-[rgba(55,50,47,0.1)] hover:bg-white text-[#605A57]"
                  }`}
              >
                <span className="text-[10px] font-mono uppercase font-semibold text-[#82807c]">
                  0{idx + 1}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#37322F] leading-tight">
                  {item.title}
                </span>
              </button>
            ))}
          </div>

          {/* Active Agent Featured Showcase */}
          <div className="bg-white rounded-2xl border border-[rgba(55,50,47,0.12)] shadow-[0px_8px_24px_rgba(55,50,47,0.06)] p-6 sm:p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 flex flex-col gap-4">
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
            <div className="lg:col-span-5 bg-[#F1F5F9] p-6 rounded-xl border border-[rgba(55,50,47,0.08)] flex flex-col gap-4">
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
                    <div className="text-xs text-[#82807c] mt-1">Carga Anual: R$ 55.800/ano</div>
                  </div>

                  <div className="bg-white p-3.5 rounded-lg border-2 border-emerald-500/80 shadow-xs">
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
