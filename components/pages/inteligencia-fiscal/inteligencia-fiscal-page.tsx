"use client"

import { useCallback, useEffect, useState } from "react"
import { TopNavbar, StickyNavbar, FooterSection, ConsultantModal } from "../../layout"
import { FiscalIntelligenceBentoSection, FiscalAgentsSection } from "../main"
import { InteligenciaFiscalHeroSection } from "./inteligencia-fiscal-hero-section"
import { InteligenciaFiscalCalculationSection } from "./inteligencia-fiscal-calculation-section"
import { InteligenciaFiscalDestinosSection } from "./inteligencia-fiscal-destinos-section"
import { InteligenciaFiscalCtaSection } from "./inteligencia-fiscal-cta-section"
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

      {/* ── 1. HEADER FLUTUANTE STICKY ── */}
      <header>
        <StickyNavbar
          isScrolled={isScrolled}
          onOpenConsultant={(origem) => handleOpenConsultant(origem ?? "fiscal_sticky")}
        />
      </header>

      {/* ── 2. CONTAINER MESTRE CENTRAL ── */}
      <div className="relative flex flex-col justify-start items-center w-full">
        <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1320px] lg:w-[1320px] relative flex flex-col justify-start items-start min-h-screen">
          {/* Linhas verticais de moldura */}
          <div className="w-[1px] h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0 pointer-events-none" />
          <div className="w-[1px] h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0 pointer-events-none" />

          <div className="self-stretch pt-[9px] overflow-visible border-b border-[rgba(55,50,47,0.06)] flex flex-col justify-center items-center relative z-10">
            {/* ── NAVBAR DO TOPO ── */}
            <header className="w-full">
              <TopNavbar onOpenConsultant={handleOpenConsultant} />
            </header>

            <main id="conteudo" className="w-full flex flex-col items-center">
              {/* ── 1. HERO INTELIGÊNCIA FISCAL ── */}
              <InteligenciaFiscalHeroSection onOpenConsultant={handleOpenConsultant} />

              {/* ── 2. BENTO GRID FISCAL ── */}
              <section id="fator-r" aria-label="Pilares fiscais" className="w-full">
                <FiscalIntelligenceBentoSection />
              </section>

              {/* ── 3. AGENTES AUTÔNOMOS FISCAIS ── */}
              <section aria-label="Agentes Proativos" className="w-full band-tint border-b border-[rgba(55,50,47,0.12)]">
                <FiscalAgentsSection />
              </section>

              {/* ── 4. MEMÓRIA DE CÁLCULO ── */}
              <InteligenciaFiscalCalculationSection />

              {/* ── 4.1. PARA ONDE VAI CADA REAL (3 DESTINOS) ── */}
              <InteligenciaFiscalDestinosSection />

              {/* ── 5. CTA FINAL ── */}
              <InteligenciaFiscalCtaSection onOpenConsultant={handleOpenConsultant} />
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
