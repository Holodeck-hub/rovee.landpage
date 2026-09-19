"use client"

import { useState } from "react"
import { AnimatedWave } from "../../layout"
import { HeroScene } from "./hero-scene"
import { HeroProductShowcase } from "./hero-product-showcase"

interface HeroShowcaseSectionProps {
  onOpenConsultant: (origem?: string, emailInicial?: string) => void
}

export function HeroShowcaseSection({ onOpenConsultant }: HeroShowcaseSectionProps) {
  const [email, setEmail] = useState("")

  return (
    <div id="comecar" className="w-full flex flex-col justify-start items-center px-0.5">
      <div className="w-full grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] items-center gap-10 lg:gap-4">
        <div className="px-4 sm:px-6 md:px-10 lg:pl-16 xl:pl-24 2xl:pl-32 lg:pr-4 pt-16 sm:pt-24 md:pt-28 lg:pt-16 pb-4 lg:pb-16 flex flex-col justify-center items-start">
          <div className="w-full max-w-[38rem] xl:max-w-[42rem] flex flex-col justify-center items-start gap-6">
            <h1 className="text-secondary text-[32px] sm:text-[42px] md:text-[50px] lg:text-[58px] font-bold font-sans tracking-tight leading-[1.08] text-balance">
              Diagnóstico Fiscal e Financeiro.{" "}
              <span className="text-primary block sm:inline font-bold">Mais economia, menos impostos.</span>
            </h1>

            <p className="w-full max-w-[36rem] xl:max-w-[39rem] text-[#475467] text-base md:text-[1.125rem] leading-[1.6] font-sans font-medium text-pretty">
              Descubra pontos de melhoria na sua gestão com a{" "}
              <strong className="font-semibold text-secondary">Inteligência Fiscal</strong> que
              prepara você para tomar as melhores decisões do próximo ciclo.
            </p>

            <form
              onSubmit={(event) => {
                event.preventDefault()
                onOpenConsultant("hero", email.trim() || undefined)
              }}
              className="w-full max-w-[28rem] mt-1 z-20"
            >
              <label htmlFor="hero-email" className="sr-only">
                Seu e-mail de trabalho
              </label>
              <div className="flex items-center gap-1.5 p-1.5 bg-white border border-[rgba(55,50,47,0.16)] rounded-xl focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-colors shadow-xs">
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
                  className="flex-1 min-w-0 h-10 px-3 bg-transparent text-sm font-medium text-secondary placeholder-ink-faint focus:outline-none"
                />
                <button
                  type="submit"
                  className="h-10 px-5 shrink-0 bg-primary hover:bg-primary-hover text-white text-sm font-semibold rounded-lg flex items-center justify-center transition-colors cursor-pointer shadow-xs"
                >
                  Começar
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="relative w-full self-stretch lg:-mr-4 xl:-mr-8">
          <HeroScene />
        </div>
      </div>

      <div className="self-stretch -mx-4 md:-mx-8 lg:mx-0 w-[calc(100%+32px)] md:w-[calc(100%+64px)] lg:w-full h-12 sm:h-14 relative overflow-hidden flex items-center justify-center bg-[#F8FAFC]">
        <div className="w-full h-full opacity-40 pointer-events-none select-none">
          <AnimatedWave />
        </div>
      </div>

      <HeroProductShowcase />
    </div>
  )
}
