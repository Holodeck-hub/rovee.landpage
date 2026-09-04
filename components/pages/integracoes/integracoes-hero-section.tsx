"use client"

import { ArrowRight } from "lucide-react"

interface IntegracoesHeroSectionProps {
  onOpenConsultant: (origem: string) => void
}

export function IntegracoesHeroSection({ onOpenConsultant }: IntegracoesHeroSectionProps) {
  return (
    <section aria-label="Bancos e Open Finance" className="w-full border-b border-[rgba(55,50,47,0.12)]">
      <div className="w-full max-w-[1100px] mx-auto px-5 pt-16 sm:pt-24 pb-16 sm:pb-20 flex flex-col items-center text-center gap-6">
        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#605A57]">
          Bancos & Open Finance
        </span>

        <h1 className="text-secondary text-[34px] sm:text-[44px] md:text-[56px] font-medium h-display text-balance max-w-[48rem]">
          Suas contas PJ conectadas, sem digitar um extrato
        </h1>

        <p className="text-ink-muted text-base sm:text-lg leading-relaxed max-w-[38rem]">
          A Rovee lê seus bancos direto pelo Open Finance regulado pelo Banco Central. Assim
          que a nota entra, o Cheque do Mês, o Fator R e o DAS já se atualizam sozinhos.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
          <button
            type="button"
            onClick={() => onOpenConsultant("integracoes_hero")}
            className="h-11 px-6 bg-primary hover:bg-primary-hover text-white text-sm font-medium rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm"
          >
            <span>Falar com Consultor</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href="#como-funciona"
            className="h-11 px-5 bg-white hover:bg-gray-50 border border-[rgba(55,50,47,0.15)] text-secondary text-sm font-medium rounded-lg flex items-center justify-center transition-colors"
          >
            Ver como funciona
          </a>
        </div>
      </div>
    </section>
  )
}
