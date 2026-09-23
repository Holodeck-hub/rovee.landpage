"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import Link from "next/link"
import {
  Store,
  CreditCard,
  ShieldCheck,
  FileText,
  TrendingUp,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react"

/**
 * Showcase de funcionalidades da Rovee:
 * Headline à esquerda e carrossel de cartões à direita com passagem infinita
 * e efeito de blur (frosted glass) nítido e proeminente no lado direito.
 */

interface ShowcaseItem {
  id: string
  title: string
  desc: string
  icon: React.ComponentType<{ className?: string }>
  href: string
}

const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    id: "cheque-do-mes",
    title: "Cheque do Mês",
    desc: "Separe automaticamente o faturamento em 3 baldes: retirada pessoal livre de IRPF, reserva de giro da PJ e provisão do imposto.",
    icon: Store,
    href: "/inteligencia-fiscal",
  },
  {
    id: "fator-r",
    title: "Otimizador de Fator R",
    desc: "Calibre a folha de pagamento para atingir os 28% e migre do Anexo V (15,5%) para o Anexo III (6,0%), economizando até R$ 34.200 ao ano.",
    icon: CreditCard,
    href: "/inteligencia-fiscal",
  },
  {
    id: "blindagem",
    title: "Blindagem Patrimonial",
    desc: "Detector contínuo de despesas pessoais na conta jurídica. Proteja seu patrimônio pessoal contra o risco do Art. 50 do Código Civil.",
    icon: ShieldCheck,
    href: "/inteligencia-fiscal",
  },
  {
    id: "provisao-das",
    title: "Provisão Contínua do DAS",
    desc: "A cada nota emitida, o imposto do dia 20 é calculado e provisionado com 1 clique. Tenha zero surpresas no fechamento mensal.",
    icon: FileText,
    href: "/inteligencia-fiscal",
  },
  {
    id: "preditiva",
    title: "Inteligência Preditiva",
    desc: "Projeção contínua de fluxo de caixa e fôlego de reserva para você tomar decisões seguras de tributação, contratações e expansão.",
    icon: TrendingUp,
    href: "/inteligencia-fiscal",
  },
]

export function HeroProductShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current
    if (!el) return

    const { scrollLeft, scrollWidth, clientWidth } = el
    setCanScrollLeft(scrollLeft > 10)
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 15)

    const cardWidth = 330 + 20
    const index = Math.round(scrollLeft / cardWidth)
    setActiveIndex(Math.max(0, Math.min(SHOWCASE_ITEMS.length - 1, index)))
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    updateScrollState()
    el.addEventListener("scroll", updateScrollState, { passive: true })
    window.addEventListener("resize", updateScrollState)

    return () => {
      el.removeEventListener("scroll", updateScrollState)
      window.removeEventListener("resize", updateScrollState)
    }
  }, [updateScrollState])

  const scrollToIndex = (index: number) => {
    const el = scrollRef.current
    if (!el) return

    const cardWidth = 330 + 20
    el.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    })
  }

  const handlePrev = () => {
    const el = scrollRef.current
    if (!el) return

    const cardWidth = 330 + 20
    el.scrollBy({ left: -cardWidth, behavior: "smooth" })
  }

  const handleNext = () => {
    const el = scrollRef.current
    if (!el) return

    const cardWidth = 330 + 20
    el.scrollBy({ left: cardWidth, behavior: "smooth" })
  }

  return (
    <section
      aria-label="Funcionalidades da Inteligência Fiscal"
      className="w-full flex flex-col justify-center items-start bg-[#E9EDF2] py-2 sm:py-8 md:py-12 overflow-hidden relative"
    >
      {/* Container principal alinhado à esquerda e estendendo até a borda da tela */}
      <div className="w-full flex flex-col lg:flex-row items-start gap-8 lg:gap-12 pl-4 sm:pl-6 md:pl-10 lg:pl-16 xl:pl-24 2xl:pl-32 pr-0">
        {/* Coluna Esquerda: Título Fixo */}
        <div className="w-full lg:w-[320px] xl:w-[360px] shrink-0 pt-2 sm:pt-4 pr-4 sm:pr-6 lg:pr-0">
          <h2 className="text-[#101828] text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-bold font-sans tracking-tight leading-[1.18] text-balance">
            Uma inteligência fiscal equipada com tudo que sua empresa precisa
          </h2>
        </div>

        {/* Coluna Direita: Passagem Infinita com Blur Real (Frosted Glass) */}
        <div className="w-full flex-1 min-w-0 relative overflow-hidden">
          {/* Trilho de Scroll dos Cartões (sem máscara de transparência para o blur agir sobre os cartões) */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 pl-1 pr-24 sm:pr-40 md:pr-56 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {SHOWCASE_ITEMS.map((item) => {
              const IconComponent = item.icon
              return (
                <div
                  key={item.id}
                  className="w-[290px] sm:w-[320px] md:w-[340px] shrink-0 snap-start bg-white rounded-[20px] border border-[#EAECF0] hover:border-[#D0D5DD] hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between h-[360px] sm:h-[380px]"
                >
                  {/* Topo do Card: Ícone em Círculo + Título + Descrição */}
                  <div>
                    {/* Ícone Circular Minimalista */}
                    <div className="w-11 h-11 rounded-full bg-[#F2F4F7] text-[#344054] flex items-center justify-center mb-6">
                      <IconComponent className="w-5 h-5 stroke-[1.8]" />
                    </div>

                    {/* Título do Card */}
                    <h3 className="text-[1.125rem] sm:text-xl font-bold text-[#101828] leading-snug mb-3">
                      {item.title}
                    </h3>

                    {/* Descrição Concisa (3-4 linhas) */}
                    <p className="text-sm text-[#475467] leading-relaxed line-clamp-4">
                      {item.desc}
                    </p>
                  </div>

                  {/* Rodapé do Card: Linha Divisória + Link "Saiba mais ↗" */}
                  <div className="border-t border-[#F2F4F7] pt-4 mt-auto">
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-hover hover:underline transition-colors"
                    >
                      <span>Saiba mais</span>
                      <ArrowUpRight className="w-4 h-4 stroke-[2]" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Efeito Visível de Blur (Frosted Glass) & Fade Gradual na Borda Direita em #E9EDF2 */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 right-0 bottom-0 w-40 sm:w-60 md:w-80 lg:w-96 z-20"
            style={{
              background:
                "linear-gradient(to right, rgba(233, 237, 242, 0) 0%, rgba(233, 237, 242, 0.45) 25%, rgba(233, 237, 242, 0.85) 65%, #E9EDF2 100%)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              maskImage:
                "linear-gradient(to right, transparent 0%, black 30%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 30%)",
            }}
          />
        </div>
      </div>

      {/* Controles de Navegação (Setas + Indicador de Paginação) */}
      <div className="w-full flex items-center justify-center gap-4 mt-6 sm:mt-8 pr-4 sm:pr-6 md:pr-10 lg:pr-16 xl:pr-24">
        {/* Seta Esquerda */}
        <button
          type="button"
          onClick={handlePrev}
          disabled={!canScrollLeft}
          aria-label="Cartão anterior"
          className="w-9 h-9 rounded-full flex items-center justify-center text-[#667085] hover:text-[#101828] hover:bg-[#F2F4F7] disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-5 h-5 stroke-[1.8]" />
        </button>

        {/* Indicadores de Paginação (Pill Ativa + Pontos) */}
        <div
          className="flex items-center gap-1.5"
          role="tablist"
          aria-label="Indicadores do carrossel"
        >
          {SHOWCASE_ITEMS.map((item, idx) => {
            const isActive = activeIndex === idx
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Ir para ${item.title}`}
                onClick={() => scrollToIndex(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  isActive
                    ? "w-6 h-1.5 bg-primary"
                    : "w-1.5 h-1.5 bg-[#D0D5DD] hover:bg-[#98A2B3]"
                }`}
              />
            )
          })}
        </div>

        {/* Seta Direita */}
        <button
          type="button"
          onClick={handleNext}
          disabled={!canScrollRight}
          aria-label="Próximo cartão"
          className="w-9 h-9 rounded-full flex items-center justify-center text-[#667085] hover:text-[#101828] hover:bg-[#F2F4F7] disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
        >
          <ArrowRight className="w-5 h-5 stroke-[1.8]" />
        </button>
      </div>
    </section>
  )
}
