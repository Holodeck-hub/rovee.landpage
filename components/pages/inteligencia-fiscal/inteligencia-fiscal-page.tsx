"use client"

import { useCallback, useEffect, useState } from "react"
import { TopNavbar, StickyNavbar, FooterSection, ConsultantModal } from "../../layout"
import { FiscalIntelligenceBentoSection } from "../main/fiscal-intelligence-bento-section"
import { FiscalAgentsSection } from "../main/fiscal-agents-section"
import { ArrowRight } from "lucide-react"
import { trackEvent } from "../../../lib/analytics"

export function InteligenciaFiscalPage() {
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
    trackEvent("abriu_modal", { origem: origem ?? "inteligencia_fiscal" })
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
              {/* ── HERO INTELIGÊNCIA FISCAL ── */}
              <section aria-label="Inteligência Fiscal Rovee" className="w-full border-b border-[rgba(55,50,47,0.12)]">
                <div className="w-full max-w-[1100px] mx-auto px-5 pt-16 sm:pt-24 pb-16 sm:pb-20 flex flex-col items-center text-center gap-6">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#605A57]">
                    Economia Tributária Legal e Simples Nacional
                  </span>

                  <h1 className="text-secondary text-[34px] sm:text-[44px] md:text-[56px] font-medium h-display text-balance max-w-[48rem]">
                    Reduza até 9,5% de imposto no Simples Nacional com precisão matemática.
                  </h1>

                  <p className="text-ink-muted text-base sm:text-lg leading-relaxed max-w-[38rem]">
                    A Rovee calibra seu pró-labore pelo Fator R, separa despesas pessoais da conta da empresa e provisiona o DAS automaticamente a cada nota emitida.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
                    <button
                      type="button"
                      onClick={() => handleOpenConsultant("fiscal_hero")}
                      className="h-11 px-6 bg-primary hover:bg-primary-hover text-white text-sm font-medium rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm"
                    >
                      <span>Calcular economia para meu CNPJ</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <a
                      href="#fator-r"
                      className="h-11 px-5 bg-white hover:bg-gray-50 border border-[rgba(55,50,47,0.15)] text-secondary text-sm font-medium rounded-lg flex items-center justify-center transition-colors"
                    >
                      Ver os pilares fiscais
                    </a>
                  </div>
                </div>
              </section>

              {/* ── SEÇÃO: BENTO GRID FISCAL ── */}
              <section id="fator-r" aria-label="Pilares fiscais" className="w-full">
                <FiscalIntelligenceBentoSection />
              </section>

              {/* ── SEÇÃO: AGENTES AUTÔNOMOS FISCAIS ── */}
              <section aria-label="Agentes Proativos" className="w-full band-tint border-b border-[rgba(55,50,47,0.12)]">
                <FiscalAgentsSection />
              </section>

              {/* ── SEÇÃO: MEMÓRIA DE CÁLCULO (CARDS LIMPOS E NÃO COLORIDOS) ── */}
              <section aria-label="Comparativo de Anexos" className="w-full py-20 px-5 border-b border-[rgba(55,50,47,0.12)] bg-white">
                <div className="w-full max-w-[900px] mx-auto">
                  <div className="text-center mb-12">
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#605A57]">
                      Memória de Cálculo
                    </span>
                    <h2 className="text-secondary text-2xl sm:text-3xl md:text-4xl font-medium h-section text-balance mt-2">
                      A diferença entre pagar 15,5% ou 6% de imposto
                    </h2>
                    <p className="text-ink-muted text-sm sm:text-base mt-2 max-w-[34rem] mx-auto">
                      Para prestadores de serviços de TI, engenharia e consultoria no Simples Nacional.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Card 1: Limpo, padrão Rovee */}
                    <div className="p-6 sm:p-8 rounded-xl border border-[rgba(55,50,47,0.12)] bg-white flex flex-col justify-between gap-5 shadow-xs">
                      <div>
                        <div className="text-xs font-mono font-semibold text-[#605A57] uppercase">
                          Sem calibração (Anexo V)
                        </div>
                        <div className="text-2xl font-bold text-secondary mt-2">
                          Alíquota a partir de 15,5%
                        </div>
                        <p className="text-xs sm:text-sm text-ink-muted mt-3 leading-relaxed">
                          Se o pró-labore não alcançar 28% do faturamento dos últimos 12 meses (RBT12), sua empresa cai no Anexo V e recolhe uma das alíquotas mais altas do Simples Nacional.
                        </p>
                      </div>
                      <div className="pt-4 border-t border-[rgba(55,50,47,0.08)] text-xs font-mono text-[#605A57]">
                        Custo fiscal elevado sem otimização
                      </div>
                    </div>

                    {/* Card 2: Limpo, padrão Rovee */}
                    <div className="p-6 sm:p-8 rounded-xl border border-[rgba(55,50,47,0.12)] bg-white flex flex-col justify-between gap-5 shadow-xs">
                      <div>
                        <div className="text-xs font-mono font-semibold text-[#605A57] uppercase">
                          Calibrado com a Rovee (Anexo III)
                        </div>
                        <div className="text-2xl font-bold text-secondary mt-2">
                          Alíquota a partir de 6,0%
                        </div>
                        <p className="text-xs sm:text-sm text-ink-muted mt-3 leading-relaxed">
                          A Rovee calcula exatamente o pró-labore que cruza a régua dos 28%, minimizando a soma de DAS, INSS e IRPF com memória de cálculo pronta para o contador.
                        </p>
                      </div>
                      <div className="pt-4 border-t border-[rgba(55,50,47,0.08)] text-xs font-mono text-secondary font-semibold">
                        Economia média de R$ 2.400 por mês
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* ── CTA FINAL FISCAL ── */}
              <section aria-label="Comece agora" className="w-full bg-black py-20 px-5 text-white text-center flex flex-col items-center gap-5">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium h-section text-balance max-w-[38rem]">
                  Pare de pagar imposto a mais por falta de cálculo.
                </h2>
                <p className="text-zinc-400 text-sm sm:text-base max-w-[32rem]">
                  Receba seu diagnóstico do Fator R e a memória de cálculo pronta para o seu contador em minutos.
                </p>
                <button
                  type="button"
                  onClick={() => handleOpenConsultant("fiscal_cta_final")}
                  className="h-11 px-8 mt-2 bg-primary hover:bg-primary-hover text-white text-sm font-medium rounded-lg transition-colors cursor-pointer"
                >
                  Falar com um Consultor Fiscal
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
export default InteligenciaFiscalPage
