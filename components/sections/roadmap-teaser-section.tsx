"use client"

import { ArrowUpRight, BrainCircuit, FileSpreadsheet, Layers } from "lucide-react"

const ROADMAP_ITEMS = [
  {
    id: "scrum-153",
    tag: "SIMULAÇÃO DE DECISÃO",
    badge: "EM DESENVOLVIMENTO",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
    title: "Simulador de Decisão de 24 Meses",
    desc: "Projete cenários com inteligência preditiva: novas contratações, reajuste de pró-labore e novos contratos. A Rovee calcula o impacto fiscal e o runway de caixa para os próximos 2 anos antes de você assinar.",
    icon: BrainCircuit,
  },
  {
    id: "scrum-160",
    tag: "INTEGRAÇÃO PF × PJ",
    badge: "PRÓXIMO CICLO",
    badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
    title: "Prontidão de IRPF Integrada",
    desc: "A ponte automática entre o fechamento fiscal da empresa e a declaração de ajuste anual da Pessoa Física. Controle de lucros isentos distribuídos e carnê-leão sem surpresas com a Receita Federal.",
    icon: FileSpreadsheet,
  },
  {
    id: "scrum-189",
    tag: "AUTOMAÇÃO & IA",
    badge: "PLANEJADO",
    badgeColor: "bg-slate-100 text-[#605A57] border-slate-200",
    title: "Ingestão Inteligente Multicanal",
    desc: "Envie notas e comprovantes via WhatsApp, e-mail dedicado ou Google Drive. O motor de OCR extrai valores, categoriza despesas e alimenta a provisão do DAS em segundos.",
    icon: Layers,
  },
]

export function RoadmapTeaserSection() {
  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Section Header */}
      <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-0 w-full py-14 sm:py-18 md:py-24 border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-start items-center">
        <div className="w-full max-w-[680px] flex flex-col justify-start items-center gap-3 text-center">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#605A57]">
            Evolução Contínua & Roadmap
          </span>

          <h2 className="text-secondary text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium font-sans h-section">
            O futuro da gestão fiscal e patrimonial está sendo construído aqui
          </h2>

          <p className="text-[#605A57] text-sm sm:text-base md:text-lg leading-relaxed font-sans max-w-[580px]">
            Acompanhe com total transparência as inovações que nosso time de engenharia e inteligência tributária está preparando para o ecossistema Rovee.
          </p>
        </div>
      </div>

      {/* 3 Roadmap Cards Grid with Side Frame Patterns */}
      <div className="self-stretch flex justify-center items-start">
        {/* Left vertical pattern */}

        <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-r border-[rgba(55,50,47,0.12)]">
          {ROADMAP_ITEMS.map((item, idx) => {
            const Icon = item.icon
            const isLast = idx === ROADMAP_ITEMS.length - 1
            return (
              <div
                key={item.id}
                className={`p-6 sm:p-8 md:p-10 flex flex-col justify-between gap-6 bg-white/70 hover:bg-white transition-colors ${
                  isLast ? "border-b-0" : "border-b md:border-b-0 border-r-0 md:border-r border-[rgba(55,50,47,0.12)]"
                }`}
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <Icon className="w-5 h-5 text-secondary shrink-0" />
                    <h3 className="text-xl font-semibold text-secondary">{item.title}</h3>
                  </div>
                  <p className="text-sm text-[#605A57] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[rgba(55,50,47,0.08)] flex items-center text-xs font-mono text-[#605A57]">
                  <span className="text-[#6B6560] text-[11px] uppercase tracking-wider">{item.tag}</span>
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
