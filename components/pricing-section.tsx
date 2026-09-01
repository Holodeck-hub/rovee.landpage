"use client"

import { useState } from "react"
import { Check } from "lucide-react"

export default function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annually">("annually")

  return (
    <div id="planos" className="w-full flex flex-col justify-center items-center gap-2 border-b border-[rgba(55,50,47,0.12)]">
      {/* Header Section */}
      <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] py-12 sm:py-16 md:py-20 border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-start items-center">
        <div className="w-full max-w-[680px] flex flex-col justify-start items-center gap-3 text-center">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#605A57]">
            Planos & Preços
          </span>

          <h2 className="text--indigo-500 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight font-sans tracking-tight">
            Investimento que se paga no primeiro DAS economizado
          </h2>

          <p className="text-[#605A57] text-sm sm:text-base md:text-lg leading-relaxed font-sans max-w-[580px]">
            Comece gratuitamente e evolua conforme o faturamento da sua PJ cresce. Todos os planos incluem segurança de padrão bancário e suporte dedicado.
          </p>
        </div>
      </div>

      {/* Billing Toggle (Monthly / Annually) */}
      <div className="flex justify-center items-center gap-2 my-6">
        <button
          onClick={() => setBillingPeriod("monthly")}
          className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${billingPeriod === "monthly"
            ? "bg-indigo-500 text-white shadow-xs"
            : "bg-white text-[#605A57] border border-[rgba(55,50,47,0.12)] hover:bg-[#F1F5F9]"
            }`}
        >
          Mensal
        </button>
        <button
          onClick={() => setBillingPeriod("annually")}
          className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${billingPeriod === "annually"
            ? "bg-indigo-500 text-white shadow-xs"
            : "bg-white text-[#605A57] border border-[rgba(55,50,47,0.12)] hover:bg-[#F1F5F9]"
            }`}
        >
          Anual
          <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-bold rounded-full">
            20% OFF
          </span>
        </button>
      </div>

      {/* Pricing Cards Grid */}
      <div className="w-full max-w-[1060px] px-4 sm:px-6 md:px-8 pb-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Starter Plan */}
        <div className="bg-white rounded-2xl border border-[rgba(55,50,47,0.12)] p-6 sm:p-8 flex flex-col justify-between shadow-[0px_2px_8px_rgba(55,50,47,0.04)]">
          <div className="flex flex-col gap-4">
            <div>
              <span className="text-xs font-mono font-semibold uppercase text-[#82807c]">Gratuito</span>
              <h3 className="text-xl font-semibold text--indigo-500 mt-1">Starter PJ</h3>
              <p className="text-xs text-[#605A57] mt-1">Para quem quer organizar contas e testar o Cheque do Mês.</p>
            </div>

            <div className="py-2">
              <span className="text-3xl sm:text-4xl font-semibold text--indigo-500">R$ 0</span>
              <span className="text-xs text-[#605A57] ml-1">/mês</span>
            </div>

            <div className="space-y-2.5 pt-4 border-t border-[rgba(55,50,47,0.08)] text-xs text-[#49423D]">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Gestão multi-contas bancárias</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Importação de extratos (OFX/PDF)</span>
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
            className="w-full mt-6 py-2.5 px-4 bg-[#F1F5F9] hover:bg-gray-200 text--indigo-500 text-xs font-semibold rounded-full text-center transition-colors border border-[rgba(55,50,47,0.1)]"
          >
            Começar Grátis
          </a>
        </div>

        {/* Pro Plan (Featured) */}
        <div className="bg-white rounded-2xl border-2 border--indigo-500 p-6 sm:p-8 flex flex-col justify-between shadow-[0px_8px_30px_rgba(55,50,47,0.12)] relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-indigo-500 text-white text-[10px] font-mono font-bold uppercase rounded-full tracking-wider">
            MAIS POPULAR
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <span className="text-xs font-mono font-semibold uppercase text-emerald-700">Inteligência Completa</span>
              <h3 className="text-xl font-semibold text--indigo-500 mt-1">Pro Fintech Fiscal</h3>
              <p className="text-xs text-[#605A57] mt-1">Para devs, consultores e prestadores PJ que faturam acima de R$ 10k/mês.</p>
            </div>

            <div className="py-2">
              <span className="text-3xl sm:text-4xl font-semibold text--indigo-500">
                R$ {billingPeriod === "annually" ? "39" : "49"}
              </span>
              <span className="text-xs text-[#605A57] ml-1">/mês</span>
            </div>

            <div className="space-y-2.5 pt-4 border-t border-[rgba(55,50,47,0.08)] text-xs text-[#49423D]">
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
            className="w-full mt-6 py-2.5 px-4 bg-indigo-500 hover:bg-[#201d1b] text-white text-xs font-semibold rounded-full text-center transition-colors shadow-sm"
          >
            Assinar Pro
          </a>
        </div>

        {/* Enterprise / Multi-PJ */}
        <div className="bg-white rounded-2xl border border-[rgba(55,50,47,0.12)] p-6 sm:p-8 flex flex-col justify-between shadow-[0px_2px_8px_rgba(55,50,47,0.04)]">
          <div className="flex flex-col gap-4">
            <div>
              <span className="text-xs font-mono font-semibold uppercase text-[#82807c]">Multi-Empresas</span>
              <h3 className="text-xl font-semibold text--indigo-500 mt-1">Escritório & Sócios</h3>
              <p className="text-xs text-[#605A57] mt-1">Para quem opera múltiplos CNPJs ou escritórios com clientes PJ.</p>
            </div>

            <div className="py-2">
              <span className="text-3xl sm:text-4xl font-semibold text--indigo-500">
                R$ {billingPeriod === "annually" ? "119" : "149"}
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

          <a
            href="#comecar"
            className="w-full mt-6 py-2.5 px-4 bg-[#F1F5F9] hover:bg-gray-200 text--indigo-500 text-xs font-semibold rounded-full text-center transition-colors border border-[rgba(55,50,47,0.1)]"
          >
            Falar com Consultor
          </a>
        </div>
      </div>
    </div>
  )
}
