"use client"

import { useState } from "react"
import { AnimatedWave } from "../../layout"
import { HeroScene } from "./hero-scene"
import { HeroProductShowcase } from "./hero-product-showcase"

/**
 * onOpenConsultant era opcional (`?:`) embora só exista um único ponto de
 * uso (app/page.tsx) e sempre passado — a opcionalidade só forçava
 * `?.()` em toda chamada interna sem nenhum caso real de omissão. Alinhado
 * com o resto das seções de hero do site (todas exigem a prop).
 *
 * O showcase dos 3 casos de uso (Clareza de Caixa, Fator R, Runway) é uma
 * peça separada — hero-product-showcase.tsx — renderizada abaixo, sem
 * compartilhar estado com o hero em si.
 */
interface HeroShowcaseSectionProps {
  onOpenConsultant: (origem?: string, emailInicial?: string) => void
}

export function HeroShowcaseSection({ onOpenConsultant }: HeroShowcaseSectionProps) {
  const [email, setEmail] = useState("")

  return (
    <div id="comecar" className="w-full flex flex-col justify-start items-center px-0.5">
      {/* Hero em duas colunas: texto à esquerda, cena com o aparelho à direita */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] items-center gap-10 lg:gap-4">
        <div className="px-4 sm:px-6 md:px-10 lg:px-14 pt-16 sm:pt-24 md:pt-28 lg:pt-16 pb-4 lg:pb-16 flex flex-col justify-center items-start">
          <div className="w-full max-w-[34rem] flex flex-col justify-center items-start gap-5">
            <h1 className="text-secondary text-[32px] sm:text-[42px] md:text-[52px] lg:text-[60px] font-medium font-sans h-display text-balance">
              A contabilidade entrega números.{" "}
              <span className="text-primary block sm:inline">A Rovee entrega economia.</span>
            </h1>

            <p className="w-full max-w-[34rem] text-ink-muted text-base md:text-[1.0625rem] leading-[1.58] font-sans font-normal">
              Não é mais um app de finanças: é o <strong className="font-medium text-secondary">cálculo</strong> que
              decide quanto você tira, quanto separa e quanto paga de imposto.
            </p>

            {/* Captura de e-mail no próprio hero */}
            <form
              onSubmit={(event) => {
                event.preventDefault()
                onOpenConsultant("hero", email.trim() || undefined)
              }}
              className="w-full max-w-[26rem] mt-1 z-20"
            >
              <label htmlFor="hero-email" className="sr-only">
                Seu e-mail de trabalho
              </label>
              <div className="flex items-center gap-1.5 p-1.5 bg-white border border-[rgba(55,50,47,0.16)] rounded-xl focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-colors">
                <input
                  id="hero-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  inputMode="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Seu e-mail de trabalho"
                  className="flex-1 min-w-0 h-9 px-3 bg-transparent text-sm text-secondary placeholder-ink-faint focus:outline-none"
                />
                <button
                  type="submit"
                  className="h-9 px-4 shrink-0 bg-primary hover:bg-primary-hover text-white text-sm font-normal rounded-lg flex items-center justify-center transition-colors cursor-pointer"
                >
                  Começar
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Cena: sangra até a borda direita */}
        <div className="relative w-full self-stretch lg:-mr-4 xl:-mr-8">
          <HeroScene />
        </div>
      </div>

      {/* ── DIVISOR DE TRANSIÇÃO COM ANIMATED WAVE ── */}
      <div className="self-stretch -mx-4 md:-mx-8 lg:mx-0 w-[calc(100%+32px)] md:w-[calc(100%+64px)] lg:w-full h-12 sm:h-14 relative overflow-hidden flex items-center justify-center bg-[#F8FAFC]">
        <div className="w-full h-full opacity-40 pointer-events-none select-none">
          <AnimatedWave />
        </div>
      </div>

      <HeroProductShowcase />
    </div>
  )
}
