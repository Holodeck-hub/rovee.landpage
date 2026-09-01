"use client"

import { useState } from "react"
import { Check } from "lucide-react"

interface PricingSectionProps {
  onOpenConsultant?: () => void
}

export default function PricingSection({ onOpenConsultant }: PricingSectionProps) {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annually">("annually")

  return (
    <div id="planos" className="w-full flex flex-col justify-center items-center gap-2 border-b border-[rgba(55,50,47,0.12)]">
      {/* Header Section */}
      <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-0 w-full py-12 sm:py-16 md:py-20 border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-start items-center">
        <div className="w-full max-w-[680px] flex flex-col justify-start items-center gap-3 text-center">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#605A57]">
            Planos & Preços
          </span>

          <h2 className="text-secondary text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight font-sans tracking-tight">
            Investimento que se paga no primeiro DAS economizado
          </h2>

          <p className="text-[#605A57] text-sm sm:text-base md:text-lg leading-relaxed font-sans max-w-[580px]">
            Escolha o plano ideal para o faturamento da sua PJ. Todos os planos incluem segurança de padrão bancário e suporte dedicado.
          </p>
        </div>
      </div>

      {/* Billing Toggle (Monthly / Annually) */}
      <div className="flex justify-center items-center gap-2 my-6">
        <button
          onClick={() => setBillingPeriod("monthly")}
          className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${billingPeriod === "monthly"
            ? "bg-primary text-white shadow-xs"
            : "bg-white text-[#605A57] border border-[rgba(55,50,47,0.12)] hover:bg-[#F1F5F9]"
            }`}
        >
          Mensal
        </button>
        <button
          onClick={() => setBillingPeriod("annually")}
          className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${billingPeriod === "annually"
            ? "bg-primary text-white shadow-xs"
            : "bg-white text-[#605A57] border border-[rgba(55,50,47,0.12)] hover:bg-[#F1F5F9]"
            }`}
        >
          Anual (20% OFF)
        </button>
      </div>

      {/* Pricing Cards Grid */}
      <div className="w-full px-4 sm:px-6 md:px-8 pb-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Starter Plan */}
        <div className="bg-white rounded-2xl border border-[rgba(55,50,47,0.12)] p-6 sm:p-8 flex flex-col justify-between shadow-[0px_2px_8px_rgba(55,50,47,0.04)]">
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-xl font-semibold text-secondary mt-1">Starter PJ</h3>
              <p className="text-xs text-[#605A57] mt-1">Para quem quer organizar contas e ter clareza inicial do caixa.</p>
            </div>

            <div className="py-2">
              <span className="text-3xl sm:text-4xl font-semibold text-secondary">
                R$ {billingPeriod === "annually" ? "79,99" : "99,99"}
              </span>
              <span className="text-xs text-[#605A57] ml-1">/mês</span>
            </div>

            <div className="space-y-2.5 pt-4 border-t border-[rgba(55,50,47,0.08)] text-xs text-[#49423D]">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Importação manual de extratos (OFX / PDF)</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Gestão multi-contas bancárias</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Diagnóstico inicial de Fator R</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Cheque do Mês básico</span>
              </div>
            </div>
          </div>

          <a
            href="#comecar"
            className="w-full mt-6 py-2.5 px-4 bg-[#F1F5F9] hover:bg-gray-200 text-secondary text-xs font-semibold rounded-full text-center transition-colors border border-[rgba(55,50,47,0.1)]"
          >
            Assinar Starter
          </a>
        </div>

        {/* Pro Plan (Featured) */}
        <div className="bg-white rounded-2xl border-2 border-primary p-6 sm:p-8 flex flex-col justify-between shadow-[0px_8px_30px_rgba(55,50,47,0.12)] relative">
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-xl font-semibold text-secondary mt-1">Rovee Pro</h3>
              <p className="text-xs text-[#605A57] mt-1">Para devs, consultores e prestadores PJ que faturam acima de R$ 10k/mês.</p>
            </div>

            <div className="py-2">
              <span className="text-3xl sm:text-4xl font-semibold text-secondary">
                R$ {billingPeriod === "annually" ? "159,99" : "199,99"}
              </span>
              <span className="text-xs text-[#605A57] ml-1">/mês</span>
            </div>

            <div className="space-y-2.5 pt-4 border-t border-[rgba(55,50,47,0.08)] text-xs text-[#49423D]">
              <div className="flex items-center gap-2 font-medium">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Conexão automática de bancos via Open Finance</span>
              </div>
              <div className="flex items-center gap-2 font-medium">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Otimizador contínuo do Fator R (Anexo III)</span>
              </div>
              <div className="flex items-center gap-2 font-medium">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Sentinela Anti-Mistura PF × PJ (Art. 50 CC)</span>
              </div>
              <div className="flex items-center gap-2 font-medium">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Provisão de DAS em tempo real + ação 1 clique</span>
              </div>
              <div className="flex items-center gap-2 font-medium">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Inteligência Preditiva (Projeção de Caixa e Runway)</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Orçamentos, Metas e Gestão de Dívidas</span>
              </div>
            </div>
          </div>

          <a
            href="#comecar"
            className="w-full mt-6 py-2.5 px-4 bg-primary hover:bg-primary-hover text-white text-xs font-semibold rounded-full text-center transition-colors shadow-sm"
          >
            Assinar Rovee Pro
          </a>
        </div>

        {/* Enterprise / Multi-PJ */}
        <div className="bg-white rounded-2xl border border-[rgba(55,50,47,0.12)] p-6 sm:p-8 flex flex-col justify-between shadow-[0px_2px_8px_rgba(55,50,47,0.04)]">
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-xl font-semibold text-secondary mt-1">Escritório & Sócios</h3>
              <p className="text-xs text-[#605A57] mt-1">Para quem opera múltiplos CNPJs ou escritórios com clientes PJ.</p>
            </div>

            <div className="py-2">
              <span className="text-3xl sm:text-4xl font-semibold text-secondary">
                R$ {billingPeriod === "annually" ? "229,99" : "289,99"}
              </span>
              <span className="text-xs text-[#605A57] ml-1">/mês</span>
            </div>

            <div className="space-y-2.5 pt-4 border-t border-[rgba(55,50,47,0.08)] text-xs text-[#49423D]">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Tudo do plano Pro</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Multi-tenancy para até 5 CNPJs</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Controle de acessos e papéis (RBAC)</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Relatórios executivos e exportação PDF</span>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenConsultant}
            className="w-full mt-6 py-2.5 px-4 bg-[#F1F5F9] hover:bg-gray-200 text-secondary text-xs font-semibold rounded-full text-center transition-colors border border-[rgba(55,50,47,0.1)] cursor-pointer"
          >
            Falar com Consultor
          </button>
        </div>
      </div>
    </div>
  )
}
