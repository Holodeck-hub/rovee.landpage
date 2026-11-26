"use client"

import { useEffect, useRef, useState } from "react"
import { DollarSign, TrendingUp, ShieldAlert, Clock } from "lucide-react"
import { AnimatedWave } from "@/components/layout"

const CARDS = [
  {
    id: "clareza",
    icon: DollarSign,
    title: 'Clareza de Caixa ("Cheque do Mês")',
    desc: "Divide o dinheiro da empresa em 3 partes claras: o que você pode transferir para sua física sem pagar imposto de novo, a reserva da empresa e o imposto do próximo dia 20.",
    rotulo: "Decisão",
    valor: 'Responde todo dia: "Quanto posso gastar hoje?"',
    valorClass: "text-secondary",
  },
  {
    id: "fator-r",
    icon: TrendingUp,
    title: "Otimizador do Fator R",
    desc: "Calcula o pró-labore ideal para pagar 6% de Simples Nacional (Anexo III) em vez de 15,5% (Anexo V). Mostra exatamente quanto você economiza em reais por ano.",
    rotulo: "Impacto",
    valor: "Economia média de R$ 28k a R$ 60k/ano",
    valorClass: "text-emerald-700",
  },
  {
    id: "sentinela",
    icon: ShieldAlert,
    title: "Sentinela Anti-Mistura PF × PJ",
    desc: "Detecta despesas pessoais pagas na conta da empresa e avisa o custo tributário e os riscos do Art. 50 do Código Civil (desconsideração da personalidade jurídica).",
    rotulo: "Segurança",
    valor: "Blindagem patrimonial e extrato 100% limpo",
    valorClass: "text-secondary",
  },
  {
    id: "provisao",
    icon: Clock,
    title: "Provisão em Tempo Real do DAS",
    desc: "Conforme suas notas e recebimentos entram, a Rovee calcula e provisiona o imposto do mês. Botão de 1 clique para separar o valor e nunca ser pego de surpresa.",
    rotulo: "Pontualidade",
    valor: "Dinheiro do imposto sempre reservado no dia 20",
    valorClass: "text-secondary",
  },
]

/** Cada card entra com um leve fade + subida quando cruza a viewport, em cascata. */
function useRevealed() {
  const ref = useRef<HTMLDivElement>(null)
  const [visivel, setVisivel] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisivel(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return { ref, visivel }
}

function BentoCard({
  card,
  index,
  className,
}: {
  card: (typeof CARDS)[number]
  index: number
  className: string
}) {
  const { ref, visivel } = useRevealed()
  const Icon = card.icon

  return (
    <div
      ref={ref}
      style={{ transitionDelay: visivel ? `${index * 80}ms` : "0ms" }}
      className={`${className} group p-6 sm:p-8 md:p-10 flex flex-col justify-between gap-6 bg-white/70 hover:bg-white transition-all duration-500 ${
        visivel ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      }`}
    >
      <div>
        <div className="flex items-center gap-3 mb-2">
          <span className="flex items-center justify-center w-9 h-9 rounded-lg shrink-0 bg-[rgba(55,50,47,0.06)] text-secondary transition-colors duration-300 group-hover:bg-primary/10 group-hover:text-primary">
            <Icon className="w-4 h-4" />
          </span>
          <h3 className="text-xl font-semibold text-secondary">{card.title}</h3>
        </div>
        <p className="text-sm text-ink-muted leading-relaxed">{card.desc}</p>
      </div>
      <div className="pt-4 border-t border-[rgba(55,50,47,0.08)] flex items-center justify-between text-xs font-mono text-ink-muted">
        <span className="text-ink-faint text-[11px] uppercase tracking-wider">{card.rotulo}</span>
        <span className={`font-medium tabular-nums ${card.valorClass}`}>{card.valor}</span>
      </div>
    </div>
  )
}

export function FiscalIntelligenceBentoSection() {
  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center relative overflow-hidden">
      {/* Header com fundo claro */}
      <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-0 w-full py-12 sm:py-16 md:py-20 bg-ground-alt border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-start items-center relative">
        {/* Background Animated Wave para o header */}
        <div className="absolute inset-0 w-full h-full opacity-20 sm:opacity-25 z-0 pointer-events-none">
          <AnimatedWave />
        </div>
        <div className="w-full max-w-[680px] flex flex-col justify-start items-center gap-3 text-center relative z-10">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-ink-faint">
            Motor de Inteligência Fiscal
          </span>

          <h2 className="text-secondary text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium font-sans h-section text-balance">
            O fim das dúvidas sobre imposto e pró-labore
          </h2>

          <p className="text-ink-muted text-sm sm:text-base md:text-lg leading-relaxed font-sans max-w-[580px]">
            Não é apenas um gerenciador financeiro. A Rovee analisa os dados fiscais da sua PJ e entrega decisões que colocam mais dinheiro limpo no seu bolso.
          </p>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="self-stretch flex justify-center items-start bg-white">
        <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-r border-[rgba(55,50,47,0.12)]">
          <BentoCard
            card={CARDS[0]}
            index={0}
            className="border-b border-r-0 md:border-r border-[rgba(55,50,47,0.12)]"
          />
          <BentoCard card={CARDS[1]} index={1} className="border-b border-[rgba(55,50,47,0.12)]" />
          <BentoCard
            card={CARDS[2]}
            index={2}
            className="border-b md:border-b-0 border-r-0 md:border-r border-[rgba(55,50,47,0.12)]"
          />
          <BentoCard card={CARDS[3]} index={3} className="" />
        </div>
      </div>
    </div>
  )
}
