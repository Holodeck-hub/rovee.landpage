"use client"

import { GestaoFinanceiraRunwayChart } from "./gestao-financeira-runway-chart"
import { GestaoFinanceiraDasChart } from "./gestao-financeira-das-chart"

/**
 * Preenche o buraco deixado pela seção de bancos removida: em vez de
 * conexão bancária, mostra o que a automação de caixa produz — runway
 * projetado e DAS provisionado x pago. Os dois gráficos que faltavam do
 * plano ("Stacked area chart with dashed strokes" e "Diagonal stripe bar
 * chart"), com o mesmo aviso de cenário ilustrativo do resto do site.
 */
export function GestaoFinanceiraCashflowSection() {
  return (
    <section id="predicao" aria-label="Caixa e provisão ao longo do ano" className="w-full band-tint border-b border-[rgba(55,50,47,0.12)]">
      <div className="w-full max-w-[1100px] mx-auto px-5 py-20 sm:py-24">
        <div className="text-center mb-12 max-w-[38rem] mx-auto">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#605A57]">
            Automação de Caixa
          </span>
          <h2 className="text-secondary text-2xl sm:text-3xl md:text-4xl font-medium h-section text-balance mt-2">
            O que a Rovee projeta enquanto você trabalha
          </h2>
          <p className="text-ink-muted text-sm sm:text-base mt-2 leading-relaxed">
            Runway de caixa nos próximos meses e o DAS provisionado antes mesmo do vencimento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 items-start">
          <div className="p-6 sm:p-8 rounded-xl border border-[rgba(55,50,47,0.12)] bg-white shadow-xs">
            <h3 className="text-sm font-semibold text-secondary mb-1">Runway de caixa em 12 meses</h3>
            <GestaoFinanceiraRunwayChart />
          </div>

          <div className="p-6 sm:p-8 rounded-xl border border-[rgba(55,50,47,0.12)] bg-white shadow-xs">
            <h3 className="text-sm font-semibold text-secondary mb-1">DAS provisionado × pago</h3>
            <GestaoFinanceiraDasChart />
          </div>
        </div>
      </div>
    </section>
  )
}
