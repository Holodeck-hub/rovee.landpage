"use client"

import Link from "next/link"

/**
 * Resumo dos 4 agentes fiscais na home — a apresentação detalhada
 * (FiscalAgentsSection, com o showcase interativo e as 4 abas) fica
 * exclusiva em /inteligencia-fiscal#agentes. Regra: cada conteúdo tem um
 * único local principal; o Main descobre e direciona, a página de
 * Inteligência Fiscal detalha.
 */
export function FiscalAgentsTeaserSection() {
  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-0 w-full py-14 sm:py-18 md:py-20 flex flex-col justify-start items-center">
        <div className="w-full max-w-[640px] flex flex-col justify-start items-center gap-3 text-center">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#605A57]">
            Inteligência Fiscal
          </span>

          <h2 className="text-secondary text-2xl sm:text-3xl md:text-4xl font-medium font-sans h-section">
            Tenha uma visão inteligente dos seus impostos, caixa e riscos fiscais
          </h2>

          <p className="text-[#605A57] text-sm sm:text-base leading-relaxed font-sans max-w-[540px]">
            Quatro agentes autônomos monitoram o Fator R, o Cheque do Mês, a mistura entre
            conta pessoal e empresarial, e a provisão do DAS, o tempo todo.
          </p>

          <Link
            href="/inteligencia-fiscal#agentes"
            className="mt-2 h-11 px-6 inline-flex items-center justify-center bg-white hover:bg-[#F1F5F9] text-secondary border border-[rgba(55,50,47,0.15)] text-sm font-medium rounded transition-all"
          >
            Conheça seus agentes fiscais →
          </Link>
        </div>
      </div>
    </div>
  )
}
export default FiscalAgentsTeaserSection
