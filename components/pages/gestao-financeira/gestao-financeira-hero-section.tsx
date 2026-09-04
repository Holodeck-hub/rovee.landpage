"use client"

import { ArrowRight } from "lucide-react"

interface GestaoFinanceiraHeroSectionProps {
  onOpenConsultant: (origem: string) => void
}

export function GestaoFinanceiraHeroSection({
  onOpenConsultant,
}: GestaoFinanceiraHeroSectionProps) {
  return (
    <section aria-label="Gestão Financeira" className="w-full border-b border-[rgba(55,50,47,0.12)]">
      <div className="w-full max-w-[1100px] mx-auto px-5 pt-16 sm:pt-24 pb-16 sm:pb-20 flex flex-col items-center text-center gap-6">
        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#605A57]">
          Gestão Financeira
        </span>

        <h1 className="text-secondary text-[34px] sm:text-[44px] md:text-[56px] font-medium h-display text-balance max-w-[48rem]">
          Cada real que entra já sai dividido
        </h1>

        <p className="text-ink-muted text-base sm:text-lg leading-relaxed max-w-[38rem]">
          Pró-labore, reserva da empresa e provisão de DAS calculados a cada entrada — para você
          nunca abrir uma planilha para saber quanto pode gastar ou quanto falta para o próximo
          imposto.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
          <button
            type="button"
            onClick={() => onOpenConsultant("gestao_hero")}
            className="h-11 px-6 bg-primary hover:bg-primary-hover text-white text-sm font-medium rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm"
          >
            <span>Falar com Consultor</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href="#pilares-gestao"
            className="h-11 px-5 bg-white hover:bg-gray-50 border border-[rgba(55,50,47,0.15)] text-secondary text-sm font-medium rounded-lg flex items-center justify-center transition-colors"
          >
            Ver detalhes
          </a>
        </div>
      </div>
    </section>
  )
}
