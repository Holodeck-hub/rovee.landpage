"use client"

import { ArrowRight } from "lucide-react"

interface InteligenciaFiscalHeroSectionProps {
  onOpenConsultant: (origem: string) => void
}

export function InteligenciaFiscalHeroSection({
  onOpenConsultant,
}: InteligenciaFiscalHeroSectionProps) {
  return (
    <section aria-label="Inteligência Fiscal Rovee" className="w-full border-b border-[rgba(55,50,47,0.12)]">
      <div className="w-full max-w-[1100px] mx-auto px-5 pt-16 sm:pt-24 pb-16 sm:pb-20 flex flex-col items-center text-center gap-6">
        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-ink-muted">
          Economia Tributária Legal e Simples Nacional
        </span>

        <h1 className="text-secondary text-[34px] sm:text-[44px] md:text-[56px] font-medium h-display text-balance max-w-[48rem]">
          Reduza até 9,5% de imposto no Simples Nacional com precisão matemática.
        </h1>

        <p className="text-ink-muted text-base sm:text-lg leading-relaxed max-w-[38rem]">
          A Rovee calibra seu pró-labore pelo Fator R, separa despesas pessoais da conta da empresa e provisiona o DAS automaticamente a cada nota emitida.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
          <button
            type="button"
            onClick={() => onOpenConsultant("fiscal_hero")}
            className="h-11 px-6 bg-primary hover:bg-primary-hover text-white text-sm font-medium rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm"
          >
            <span>Falar sobre minha economia fiscal</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href="#fator-r"
            className="h-11 px-5 bg-white hover:bg-gray-50 border border-[rgba(55,50,47,0.15)] text-secondary text-sm font-medium rounded-lg flex items-center justify-center transition-colors"
          >
            Ver os pilares fiscais
          </a>
        </div>
      </div>
    </section>
  )
}
