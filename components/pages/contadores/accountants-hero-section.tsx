"use client"

import { useState } from "react"

interface AccountantsHeroSectionProps {
  onOpenConsultant: (origem: string, email?: string) => void
}

export function AccountantsHeroSection({
  onOpenConsultant,
}: AccountantsHeroSectionProps) {
  const [email, setEmail] = useState("")

  return (
    <section aria-label="Rovee para escritórios contábeis" className="w-full">
      <div className="w-full max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-center gap-12 px-5 pt-16 sm:pt-24 pb-16 sm:pb-20">
        <div className="flex flex-col items-start gap-5">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-ink-faint">
            Para escritórios contábeis
          </span>

          <h1 className="text-secondary text-[32px] sm:text-[42px] md:text-[50px] font-medium h-display text-balance">
            Seu cliente chega ao fechamento com o extrato já limpo.
          </h1>

          <p className="text-ink-muted text-base md:text-[1.0625rem] leading-[1.58] max-w-[34rem]">
            A Rovee calibra o pró-labore pelo Fator R e separa despesa pessoal da
            despesa da empresa durante o mês. Você recebe a memória de cálculo pronta.
          </p>

          <form
            onSubmit={(event) => {
              event.preventDefault()
              onOpenConsultant("contadores_hero", email.trim() || undefined)
            }}
            className="w-full max-w-[26rem] mt-1"
          >
            <label htmlFor="contador-email" className="sr-only">
              E-mail do escritório
            </label>
            <div className="flex items-center gap-1.5 p-1.5 bg-white border border-[rgba(55,50,47,0.16)] rounded-xl focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-colors">
              <input
                id="contador-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                inputMode="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="E-mail do escritório"
                className="flex-1 min-w-0 h-9 px-3 bg-transparent text-sm text-secondary placeholder-ink-faint focus:outline-none"
              />
              <button
                type="submit"
                className="h-9 px-4 shrink-0 bg-primary hover:bg-primary-hover text-white text-sm font-normal rounded-lg transition-colors cursor-pointer"
              >
                Falar sobre parceria
              </button>
            </div>
          </form>
        </div>

        {/* Imagem coffe.jpg à direita */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[440px] aspect-[4/5] rounded-2xl overflow-hidden border border-[rgba(55,50,47,0.12)] shadow-sm">
            <img
              src="/imagens/coffe.jpg"
              alt="Ambiente de trabalho tranquilo com café e computador"
              className="w-full h-full object-cover select-none"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
