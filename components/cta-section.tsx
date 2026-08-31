"use client"

import { AnimatedWave } from "./animated-wave"

export default function CTASection() {
  return (
    <div className="w-full relative overflow-hidden flex flex-col justify-center items-center">
      {/* Background Animated Wave */}
      <div className="absolute inset-0 w-full h-full opacity-60 z-0 pointer-events-none">
        <AnimatedWave />
      </div>

      {/* Content */}
      <div className="self-stretch px-6 md:px-24 py-16 md:py-24 border-t border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6 relative z-10 bg-white/40 backdrop-blur-[2px]">
        <div className="w-full max-w-[620px] px-6 py-6 md:py-10 overflow-hidden rounded-2xl flex flex-col justify-start items-center gap-6 relative z-20 text-center bg-white/80 shadow-[0px_8px_32px_rgba(55,50,47,0.08)] border border-[rgba(55,50,47,0.12)]">
          <div className="self-stretch flex flex-col justify-start items-center gap-3">
            <span className="px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-mono font-semibold rounded-full uppercase">
              ⚡ Destrave sua Inteligência Fiscal Hoje
            </span>
            <h2 className="self-stretch text-center text-[#37322F] text-3xl md:text-5xl font-semibold leading-tight font-sans tracking-tight">
              Pronto para saber seu lucro real e pagar menos imposto?
            </h2>
            <p className="self-stretch text-center text-[#605A57] text-sm sm:text-base leading-relaxed font-sans font-medium">
              Crie sua conta em 3 minutos, importe seu extrato e descubra seu Fator R ótimo, seu Cheque do Mês e a blindagem contra a mistura de contas.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <a
              href="#comecar"
              className="h-12 px-8 relative bg-[#37322F] hover:bg-[#262320] text-white text-sm font-medium rounded-full flex items-center justify-center shadow-md transition-all"
            >
              Criar Conta Gratuita
            </a>
            <a
              href="#fiscal"
              className="h-12 px-6 bg-white hover:bg-[#F1F5F9] text-[#37322F] border border-[rgba(55,50,47,0.16)] text-sm font-medium rounded-full flex items-center justify-center transition-all"
            >
              Ver Demonstração
            </a>
          </div>

          <p className="text-[11px] text-[#82807c] font-sans">
            Sem necessidade de cartão de crédito • Totalmente compatível com Simples Nacional e Lucro Presumido
          </p>
        </div>
      </div>
    </div>
  )
}
