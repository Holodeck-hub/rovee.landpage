"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

const FISCAL_PILLARS_TEASER = [
  {
    step: "01",
    title: "Otimizador do Fator R",
    subtitle: "Calibração da Folha",
    desc: "Alíquota a partir de 6% no Anexo III em vez de 15,5% no Anexo V.",
  },
  {
    step: "02",
    title: "Cheque do Mês",
    subtitle: "Separação em 3 Baldes",
    desc: "Retirada pessoal PF, reserva de giro PJ e imposto do próximo dia 20.",
  },
  {
    step: "03",
    title: "Sentinela Anti-Mistura",
    subtitle: "Blindagem Patrimonial",
    desc: "Detecta mistura de gastos e mitiga riscos do Art. 50 do Código Civil.",
  },
  {
    step: "04",
    title: "Provisão Contínua do DAS",
    subtitle: "Imposto em Tempo Real",
    desc: "Cada nota emitida calcula e provisiona o imposto com 1 clique.",
  },
]

export function FiscalAgentsTeaserSection() {
  return (
    <section aria-label="Inteligência fiscal, resumo" className="w-full bg-black text-white border-b border-white/10 flex flex-col justify-center items-center">
      <div className="self-stretch px-5 sm:px-6 md:px-8 w-full max-w-[1100px] mx-auto py-16 sm:py-20 md:py-24 flex flex-col justify-start items-center text-center gap-8">
        <div className="w-full max-w-[680px] flex flex-col justify-start items-center gap-3">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400">
            Inteligência Fiscal
          </span>

          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-medium font-sans h-section text-balance leading-[1.2]">
            Tenha uma visão inteligente dos seus impostos, caixa e riscos fiscais
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed font-sans max-w-[540px]">
            Quatro agentes autônomos monitoram o Fator R, o Cheque do Mês, a mistura entre
            conta pessoal e empresarial, e a provisão do DAS, o tempo todo.
          </p>
        </div>

        {/* 4 Cards de Pilares Padronizados com Efeito Translúcido */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {FISCAL_PILLARS_TEASER.map((item) => (
            <div
              key={item.step}
              className="p-5 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all flex flex-col justify-between text-left gap-3"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider">
                    Pilar {item.step}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-white leading-snug">
                  {item.title}
                </h3>
                <div className="text-xs text-zinc-300 font-mono mt-0.5">
                  {item.subtitle}
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed mt-2.5">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Botão de Ação */}
        <div className="pt-2">
          <Link
            href="/inteligencia-fiscal"
            className="h-11 px-7 inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white text-sm font-medium rounded-lg transition-colors cursor-pointer shadow-sm"
          >
            <span>Conhecer a Inteligência Fiscal</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
export default FiscalAgentsTeaserSection
