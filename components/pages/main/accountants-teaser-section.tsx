"use client"

import Link from "next/link"

/**
 * Bloco curto que devolve o escritório contábil à home. Substitui o
 * AccountantChannelSection (466 palavras, dashboard com 3 abas simuladas):
 * a promessa central sobrevive, o mockup de produto não — a densidade aqui
 * segue as ~35 palavras por bloco do resto da página.
 */
export function AccountantsTeaserSection() {
  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-0 w-full py-14 sm:py-18 md:py-20 flex flex-col justify-start items-center">
        <div className="w-full max-w-[640px] flex flex-col justify-start items-center gap-3 text-center">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#605A57]">
            Parceria & Harmonia Contábil
          </span>

          <h2 className="text-secondary text-2xl sm:text-3xl md:text-4xl font-medium font-sans h-section">
            A inteligência que o seu contador sempre quis que você tivesse
          </h2>

          <p className="text-[#605A57] text-sm sm:text-base leading-relaxed font-sans max-w-[540px]">
            A Rovee não substitui a sua contabilidade, nós a potencializamos: memória de cálculo do
            Fator R pronta, extrato PJ despoluído e acesso viewer para o seu escritório, sem
            digitação manual.
          </p>

          <Link
            href="/contadores"
            className="mt-2 h-11 px-6 inline-flex items-center justify-center bg-white hover:bg-[#F1F5F9] text-secondary border border-[rgba(55,50,47,0.15)] text-sm font-medium rounded transition-all"
          >
            Ver para escritórios e contadores
          </Link>
        </div>
      </div>
    </div>
  )
}
export default AccountantsTeaserSection
