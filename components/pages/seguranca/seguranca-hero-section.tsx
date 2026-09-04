"use client"

import { ArrowRight } from "lucide-react"

interface SegurancaHeroSectionProps {
  onOpenConsultant: (origem: string) => void
}

export function SegurancaHeroSection({
  onOpenConsultant,
}: SegurancaHeroSectionProps) {
  return (
    <section aria-label="Segurança Rovee" className="w-full border-b border-[rgba(55,50,47,0.12)]">
      <div className="w-full max-w-[1100px] mx-auto px-5 pt-16 sm:pt-24 pb-16 sm:pb-20 flex flex-col items-center text-center gap-6">
        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#605A57]">
          Segurança de Nível Bancário e LGPD
        </span>

        <h1 className="text-secondary text-[34px] sm:text-[44px] md:text-[56px] font-medium h-display text-balance max-w-[48rem]">
          Acesso 100% somente-leitura. Criptografia de padrão bancário.
        </h1>

        <p className="text-ink-muted text-base sm:text-lg leading-relaxed max-w-[38rem]">
          Desenvolvido sob rígidos padrões internacionais de segurança da informação, criptografia de ponta a ponta e total conformidade com a LGPD.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
          <button
            type="button"
            onClick={() => onOpenConsultant("seguranca_hero")}
            className="h-11 px-6 bg-primary hover:bg-primary-hover text-white text-sm font-medium rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm"
          >
            <span>Falar com nosso time de segurança</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href="#pilares"
            className="h-11 px-5 bg-white hover:bg-gray-50 border border-[rgba(55,50,47,0.15)] text-secondary text-sm font-medium rounded-lg flex items-center justify-center transition-colors"
          >
            Ver os 4 pilares
          </a>
        </div>
      </div>
    </section>
  )
}
