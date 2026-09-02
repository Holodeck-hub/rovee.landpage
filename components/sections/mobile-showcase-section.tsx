"use client"

import { Check } from "lucide-react"
import { PhoneFrame } from "../shared/phone-frame"

interface MobileShowcaseSectionProps {
  onOpenConsultant?: (origem?: string) => void
}

/**
 * Primeira imagem de produto de verdade da página. Segue a densidade medida
 * nas páginas da Brex: ~35 palavras de corpo, uma ideia só, e o peso visual
 * vindo da imagem em vez de mais texto.
 */
export function MobileShowcaseSection({ onOpenConsultant }: MobileShowcaseSectionProps) {
  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      <div className="self-stretch flex justify-center items-stretch">
        <div className="flex-1 w-full border-l border-r border-[rgba(55,50,47,0.12)] px-4 sm:px-8 md:px-12 lg:px-16 py-16 sm:py-20 md:py-24">
          <div className="w-full max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="flex flex-col items-start gap-5 order-2 md:order-1">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-ink-faint">
                No seu bolso
              </span>

              <h2 className="text-secondary text-2xl sm:text-3xl md:text-4xl font-medium font-sans h-section text-balance">
                O cálculo inteiro cabe numa tela.
              </h2>

              <p className="text-ink-muted text-base leading-[1.58] font-sans max-w-[30rem]">
                Quanto separar de imposto, quanto dá para retirar e o quanto o
                pró‑labore ainda pode economizar — apurado a cada movimentação, sem
                planilha no meio.
              </p>

              <ul className="flex flex-col gap-2.5 text-sm text-ink-muted">
                {[
                  "Provisão do DAS separada antes de você gastar",
                  "Fator R recalculado a cada competência",
                  "Alerta de mistura entre conta pessoal e da empresa",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => onOpenConsultant?.("mobile_showcase")}
                className="h-10 px-4 mt-2 bg-primary hover:bg-primary-hover text-white text-sm font-normal rounded-lg flex items-center justify-center transition-colors cursor-pointer"
              >
                Ver no seu faturamento
              </button>
            </div>

            <div className="flex justify-center md:justify-end order-1 md:order-2">
              <PhoneFrame />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
