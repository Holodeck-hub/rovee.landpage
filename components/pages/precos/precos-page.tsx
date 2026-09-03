"use client"

import { useCallback, useEffect, useState } from "react"
import { TopNavbar, StickyNavbar, FooterSection, ConsultantModal } from "../../layout"
import { PricingSection } from "../main/pricing-section"
import { FAQSection } from "../main/faq-section"
import { Check, ArrowRight, Sparkles, HelpCircle } from "lucide-react"
import { trackEvent } from "../../../lib/analytics"

const COMPARISON_FEATURES = [
  { name: "Importação manual de OFX / PDF", starter: true, pro: true, escritorio: true },
  { name: "Gestão multi-contas bancárias", starter: true, pro: true, escritorio: true },
  { name: "Diagnóstico inicial de Fator R", starter: true, pro: true, escritorio: true },
  { name: "Cheque do Mês básico", starter: true, pro: true, escritorio: true },
  { name: "Conexão Open Finance automática", starter: false, pro: true, escritorio: true },
  { name: "Otimizador contínuo do Fator R (Anexo III)", starter: false, pro: true, escritorio: true },
  { name: "Sentinela Anti-Mistura PF × PJ", starter: false, pro: true, escritorio: true },
  { name: "Provisão de DAS em tempo real", starter: false, pro: true, escritorio: true },
  { name: "Inteligência Preditiva (runway de 6 meses)", starter: false, pro: true, escritorio: true },
  { name: "4 Agentes Fiscais Proativos", starter: false, pro: true, escritorio: true },
  { name: "Multi-tenancy (até 5 CNPJs)", starter: false, false: false, escritorio: true },
  { name: "Controle de acessos com RBAC", starter: false, false: false, escritorio: true },
  { name: "Exportação de relatórios executivos em PDF", starter: false, false: false, escritorio: true },
]

export function PrecosPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isConsultantModalOpen, setIsConsultantModalOpen] = useState(false)
  const [emailInicial, setEmailInicial] = useState<string | undefined>()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleOpenConsultant = useCallback((origem?: string, email?: string) => {
    trackEvent("abriu_modal", { origem: origem ?? "precos" })
    setEmailInicial(email)
    setIsConsultantModalOpen(true)
  }, [])

  const handleCloseConsultant = useCallback(() => {
    setIsConsultantModalOpen(false)
  }, [])

  return (
    <div className="w-full min-h-screen relative bg-white overflow-x-hidden flex flex-col justify-start items-center">
      {/* ── SKIP LINK ── */}
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2.5 focus:bg-primary focus:text-white focus:text-sm focus:font-semibold focus:rounded-lg focus:shadow-lg"
      >
        Pular para o conteúdo
      </a>

      {/* ── HEADER FLUTUANTE STICKY ── */}
      <header>
        <StickyNavbar isScrolled={isScrolled} onOpenConsultant={handleOpenConsultant} />
      </header>

      {/* ── CONTAINER MESTRE CENTRAL ── */}
      <div className="relative flex flex-col justify-start items-center w-full">
        <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1320px] lg:w-[1320px] relative flex flex-col justify-start items-start min-h-screen">
          <div className="w-[1px] h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0 pointer-events-none" />
          <div className="w-[1px] h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0 pointer-events-none" />

          <div className="self-stretch pt-[9px] overflow-visible border-b border-[rgba(55,50,47,0.06)] flex flex-col justify-center items-center relative z-10">
            <header className="w-full">
              <TopNavbar onOpenConsultant={handleOpenConsultant} />
            </header>

            <main id="conteudo" className="w-full flex flex-col items-center">
              {/* ── SEÇÃO DE PRICING PRINCIPAL ── */}
              <div className="w-full">
                <PricingSection onOpenConsultant={handleOpenConsultant} />
              </div>

              {/* ── MATRIZ COMPARATIVA DE RECURSOS ── */}
              <section aria-label="Comparativo de Planos" className="w-full py-20 px-5 border-b border-[rgba(55,50,47,0.12)] bg-white">
                <div className="w-full max-w-[1000px] mx-auto">
                  <div className="text-center mb-12">
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#605A57]">
                      Comparativo Detalhado
                    </span>
                    <h2 className="text-secondary text-2xl sm:text-3xl md:text-4xl font-medium h-section text-balance mt-2">
                      Compare cada funcionalidade lado a lado
                    </h2>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-xs sm:text-sm">
                      <thead>
                        <tr className="border-b-2 border-[rgba(55,50,47,0.12)]">
                          <th className="py-4 px-4 font-semibold text-secondary">Recurso</th>
                          <th className="py-4 px-4 font-semibold text-secondary text-center">Starter PJ</th>
                          <th className="py-4 px-4 font-semibold text-primary text-center">Rovee Pro</th>
                          <th className="py-4 px-4 font-semibold text-secondary text-center">Escritório & Sócios</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[rgba(55,50,47,0.08)]">
                        {COMPARISON_FEATURES.map((feat, idx) => (
                          <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                            <td className="py-3.5 px-4 text-[#49423D] font-medium">{feat.name}</td>
                            <td className="py-3.5 px-4 text-center">
                              {feat.starter ? (
                                <Check className="w-4 h-4 text-emerald-700 mx-auto" />
                              ) : (
                                <span className="inline-block w-2.5 h-0.5 bg-zinc-200" aria-label="Não incluso" />
                              )}
                            </td>
                            <td className="py-3.5 px-4 text-center bg-indigo-50/30">
                              {feat.pro ? (
                                <Check className="w-4 h-4 text-emerald-700 mx-auto" />
                              ) : (
                                <span className="inline-block w-2.5 h-0.5 bg-zinc-200" aria-label="Não incluso" />
                              )}
                            </td>
                            <td className="py-3.5 px-4 text-center">
                              {feat.escritorio ? (
                                <Check className="w-4 h-4 text-emerald-700 mx-auto" />
                              ) : (
                                <span className="inline-block w-2.5 h-0.5 bg-zinc-200" aria-label="Não incluso" />
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* ── FAQ ── */}
              <section aria-label="Perguntas Frequentes" className="w-full band-tint">
                <FAQSection />
              </section>

              {/* ── CTA FINAL DE PREÇOS ── */}
              <section aria-label="Comece agora" className="w-full bg-black py-20 px-5 text-white text-center flex flex-col items-center gap-5">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium h-section text-balance max-w-[38rem]">
                  Comece a economizar no próximo DAS.
                </h2>
                <p className="text-zinc-400 text-sm sm:text-base max-w-[32rem]">
                  Fale com um consultor Rovee e descubra qual plano se encaixa exatamente no faturamento do seu negócio.
                </p>
                <button
                  type="button"
                  onClick={() => handleOpenConsultant("precos_cta_final")}
                  className="h-11 px-8 mt-2 bg-primary hover:bg-primary-hover text-white text-sm font-medium rounded-lg transition-colors cursor-pointer"
                >
                  Falar com um Consultor
                </button>
              </section>
            </main>

            <div className="w-full">
              <FooterSection />
            </div>
          </div>
        </div>
      </div>

      <ConsultantModal
        isOpen={isConsultantModalOpen}
        onClose={handleCloseConsultant}
        emailInicial={emailInicial}
      />
    </div>
  )
}
export default PrecosPage
