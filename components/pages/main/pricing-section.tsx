"use client"

import { useEffect, useRef, useState } from "react"
import { Check } from "lucide-react"
import { AnimatedWave } from "../../layout"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { trackEvent } from "../../../lib/analytics"

interface PricingSectionProps {
  onOpenConsultant?: (origem?: string) => void
}

type BillingPeriod = "mensal" | "anual"

interface Plan {
  id: string
  name: string
  tagline: string
  monthly: number
  annualMonthly: number
  features: string[]
  featured?: boolean
  ctaLabel: string
}

const PLANS: Plan[] = [
  {
    id: "starter",
    name: "Starter PJ",
    tagline: "Para quem quer organizar contas e ter clareza inicial do caixa.",
    monthly: 99.99,
    annualMonthly: 79.99,
    ctaLabel: "Falar sobre o Starter",
    features: [
      "Importação manual de extratos (OFX / PDF)",
      "Gestão multi-contas bancárias",
      "Diagnóstico inicial de Fator R",
      "Cheque do Mês básico",
    ],
  },
  {
    id: "pro",
    name: "Rovee Pro",
    tagline: "Para devs, consultores e prestadores PJ que faturam acima de R$ 10 mil/mês.",
    monthly: 199.99,
    annualMonthly: 159.99,
    featured: true,
    ctaLabel: "Falar sobre o Rovee Pro",
    features: [
      "Conexão automática de bancos via Open Finance",
      "Otimizador contínuo do Fator R (Anexo III)",
      "Sentinela Anti-Mistura PF × PJ (art. 50 do Código Civil)",
      "Provisão de DAS em tempo real + ação em 1 clique",
      "Inteligência Preditiva (projeção de caixa e runway)",
      "Orçamentos, metas e gestão de dívidas",
    ],
  },
  {
    id: "escritorio",
    name: "Escritório & Sócios",
    tagline: "Para quem opera múltiplos CNPJs ou escritórios com clientes PJ.",
    monthly: 289.99,
    annualMonthly: 229.99,
    ctaLabel: "Falar sobre o Escritório",
    features: [
      "Tudo do plano Pro",
      "Multi-tenancy para até 5 CNPJs",
      "Controle de acessos e papéis (RBAC)",
      "Relatórios executivos e exportação em PDF",
    ],
  },
]

const brl = new Intl.NumberFormat("pt-BR", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

function formatBRL(value: number) {
  return `R$ ${brl.format(value)}`
}

export function PricingSection({ onOpenConsultant }: PricingSectionProps) {
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("mensal")
  const sectionRef = useRef<HTMLElement>(null)
  const hasTrackedScroll = useRef(false)

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTrackedScroll.current) {
          hasTrackedScroll.current = true
          trackEvent("scroll_planos")
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const handlePlanClick = (plan: Plan) => {
    trackEvent("clicou_plano", {
      plano: plan.name,
      periodo: billingPeriod,
      preco_mensal: billingPeriod === "anual" ? plan.annualMonthly : plan.monthly,
    })
    onOpenConsultant?.(`planos_${plan.id}`)
  }

  const toggleItemClass =
    "rounded-full first:rounded-full last:rounded-full px-4 py-2.5 min-h-[44px] text-xs sm:text-sm font-medium border border-[rgba(55,50,47,0.12)] bg-white text-[#605A57] hover:bg-[#F1F5F9] data-[state=on]:border-transparent data-[state=on]:bg-primary data-[state=on]:text-white data-[state=on]:shadow-xs data-[state=on]:hover:bg-primary-hover"

  return (
    <section
      ref={sectionRef}
      aria-labelledby="planos-titulo"
      className="w-full flex flex-col justify-center items-center gap-2 border-b border-[rgba(55,50,47,0.12)]"
    >
      {/* Header Section com AnimatedWave */}
      <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-0 w-full py-14 sm:py-18 md:py-24 border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-start items-center relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full opacity-40 sm:opacity-50 z-0 pointer-events-none">
          <AnimatedWave />
        </div>

        <div className="w-full max-w-[680px] flex flex-col justify-start items-center gap-3 text-center relative z-10">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#605A57]">
            Planos & Preços
          </span>

          <h1
            id="planos-titulo"
            className="text-secondary text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium font-sans h-section"
          >
            Investimento que se paga no primeiro DAS economizado
          </h1>

          <p className="text-[#605A57] text-sm sm:text-base md:text-lg leading-relaxed font-sans max-w-[580px]">
            Escolha o plano ideal para o faturamento da sua PJ. Todos os planos incluem
            segurança de padrão bancário e suporte dedicado.
          </p>
        </div>
      </div>

      {/* Alternador de periodicidade */}
      <ToggleGroup
        type="single"
        value={billingPeriod}
        onValueChange={(value) => {
          if (value) setBillingPeriod(value as BillingPeriod)
        }}
        aria-label="Periodicidade da cobrança"
        className="gap-2 bg-transparent my-6"
      >
        <ToggleGroupItem value="mensal" className={toggleItemClass}>
          Mensal
        </ToggleGroupItem>
        <ToggleGroupItem value="anual" className={`${toggleItemClass} flex items-center gap-2`}>
          Anual <span className="font-semibold">(20% OFF)</span>
        </ToggleGroupItem>
      </ToggleGroup>

      {/* Pricing Cards Grid */}
      <div className="w-full px-4 sm:px-6 md:px-8 pb-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        {PLANS.map((plan) => {
          const isAnnual = billingPeriod === "anual"
          const displayMonthly = isAnnual ? plan.annualMonthly : plan.monthly
          const annualTotal = plan.annualMonthly * 12
          const annualSaving = (plan.monthly - plan.annualMonthly) * 12

          return (
            <div
              key={plan.id}
              className={`bg-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between ${
                plan.featured
                  ? "border-2 border-primary shadow-[0px_8px_30px_rgba(55,50,47,0.12)] relative"
                  : "border border-[rgba(55,50,47,0.12)] shadow-[0px_2px_8px_rgba(55,50,47,0.04)]"
              }`}
            >
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-secondary mt-1">{plan.name}</h3>
                  <p className="text-xs text-[#605A57] mt-1">{plan.tagline}</p>
                </div>

                <div className="py-2">
                  <div className="flex items-baseline flex-wrap gap-x-1">
                    <span className="text-3xl sm:text-4xl font-semibold text-secondary">
                      {formatBRL(displayMonthly)}
                    </span>
                    <span className="text-xs text-[#6B6560]">/mês</span>
                  </div>

                  {isAnnual ? (
                    <p className="text-[11px] leading-relaxed text-[#6B6560] mt-1.5">
                      {formatBRL(annualTotal)} cobrados uma vez por ano.
                      <br />
                      <span className="text-emerald-700 font-medium">
                        Economia de {formatBRL(annualSaving)} por ano
                      </span>{" "}
                      em relação ao plano mensal ({formatBRL(plan.monthly)}/mês).
                    </p>
                  ) : (
                    <p className="text-[11px] leading-relaxed text-[#6B6560] mt-1.5">
                      Cobrança mensal, sem fidelidade.
                      <br />
                      No plano anual sai por {formatBRL(plan.annualMonthly)}/mês.
                    </p>
                  )}
                </div>

                <div className="space-y-2.5 pt-4 border-t border-[rgba(55,50,47,0.08)] text-xs text-[#49423D]">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className={`flex items-start gap-2 ${plan.featured ? "font-medium" : ""}`}
                    >
                      <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-px" aria-hidden="true" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => handlePlanClick(plan)}
                className={`w-full mt-6 py-3 px-4 min-h-[44px] text-xs font-semibold rounded-full text-center transition-colors cursor-pointer ${
                  plan.featured
                    ? "bg-primary hover:bg-primary-hover text-white shadow-sm"
                    : "bg-[#F1F5F9] hover:bg-gray-200 text-secondary border border-[rgba(55,50,47,0.1)]"
                }`}
              >
                {plan.ctaLabel}
              </button>
            </div>
          )
        })}
      </div>
    </section>
  )
}
export default PricingSection
