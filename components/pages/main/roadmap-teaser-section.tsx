"use client"

import {
  Timeline,
  TimelineContent,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/reui/timeline"

const ROADMAP_ITEMS = [
  {
    step: 1,
    id: "scrum-153",
    tag: "Em desenvolvimento · Simulação de decisão",
    title: "Simulador de Decisão de 24 Meses",
    desc: "Projete cenários com inteligência preditiva: novas contratações, reajuste de pró-labore e novos contratos. A Rovee calcula o impacto fiscal e o runway de caixa para os próximos 2 anos antes de você assinar.",
  },
  {
    step: 2,
    id: "scrum-160",
    tag: "Próximo ciclo · Integração PF × PJ",
    title: "Prontidão de IRPF Integrada",
    desc: "A ponte automática entre o fechamento fiscal da empresa e a declaração de ajuste anual da Pessoa Física. Controle de lucros isentos distribuídos e carnê-leão sem surpresas com a Receita Federal.",
  },
  {
    step: 3,
    id: "scrum-189",
    tag: "Planejado · Automação & IA",
    title: "Ingestão Inteligente Multicanal",
    desc: "Envie notas e comprovantes via WhatsApp, e-mail dedicado ou Google Drive. O motor de OCR extrai valores, categoriza despesas e alimenta a provisão do DAS em segundos.",
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

      {/* Roadmap como linha do tempo: a ordem dos passos já é o roadmap */}
      <div className="self-stretch flex justify-center items-start">
        <div className="flex-1 w-full border-l border-r border-[rgba(55,50,47,0.12)] px-6 sm:px-10 md:px-16 py-14 sm:py-16">
          <Timeline defaultValue={1} className="mx-auto w-full max-w-[640px]">
            {ROADMAP_ITEMS.map((item) => (
              <TimelineItem key={item.id} step={item.step}>
                <TimelineHeader>
                  <TimelineSeparator />
                  <TimelineTitle className="text-lg font-semibold text-secondary">{item.title}</TimelineTitle>
                  <TimelineIndicator />
                </TimelineHeader>
                <TimelineContent className="mt-1.5">
                  <span className="mb-2 block text-[11px] font-mono uppercase tracking-wider text-[#8B8D9B]">
                    {item.tag}
                  </span>
                  <p className="text-sm text-[#605A57] leading-relaxed">{item.desc}</p>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
    </div>
  )
}
