"use client"

import { useCallback, useEffect, useState } from "react"
import { StickyNavbar, TopNavbar } from "../components/layout/navbar"
import { HeroShowcaseSection } from "../components/sections/hero-showcase-section"
import { FiscalIntelligenceBentoSection } from "../components/sections/fiscal-intelligence-bento-section"
import { PredictiveIntelligenceSection } from "../components/sections/predictive-intelligence-section"
import { FiscalAgentsSection } from "../components/sections/fiscal-agents-section"
import { AccountantChannelSection } from "../components/sections/accountant-channel-section"
import { BanksIntegrationSection } from "../components/sections/banks-integration-section"
import { LiveMetricsSection } from "../components/sections/live-metrics-section"
import { TestimonialsSlider } from "../components/sections/testimonials-slider"
import { RoadmapTeaserSection } from "../components/sections/roadmap-teaser-section"
import { SecuritySection } from "../components/sections/security-section"
import PricingSection from "../components/sections/pricing-section"
import FAQSection from "../components/sections/faq-section"
import CTASection from "../components/sections/cta-section"
import FooterSection from "../components/layout/footer-section"
import { ConsultantModal } from "../components/shared/consultant-modal"
import { trackEvent } from "../lib/analytics"

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isConsultantModalOpen, setIsConsultantModalOpen] = useState(false)

  // Scroll listener for sticky floating header motion
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  /**
   * Ponto único de abertura do modal: todo CTA da página passa por aqui, então
   * o evento `abriu_modal` é disparado uma vez só, sempre com a origem do clique.
   */
  const handleOpenConsultant = useCallback((origem?: string) => {
    trackEvent("abriu_modal", { origem: origem ?? "nao_identificada" })
    setIsConsultantModalOpen(true)
  }, [])

  const handleCloseConsultant = useCallback(() => {
    setIsConsultantModalOpen(false)
  }, [])

  return (
    <div className="w-full min-h-screen relative bg-[#F8FAFC] overflow-x-hidden flex flex-col justify-start items-center">
      {/* ── SKIP LINK: primeiro elemento focável da página ── */}
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2.5 focus:bg-primary focus:text-white focus:text-sm focus:font-semibold focus:rounded-lg focus:shadow-lg"
      >
        Pular para o conteúdo
      </a>

      {/* ── 1. HEADER FLUTUANTE STICKY (QUANDO SCROLLA) ── */}
      <header>
        <StickyNavbar isScrolled={isScrolled} onOpenConsultant={handleOpenConsultant} />
      </header>

      {/* ── 2. CONTAINER MESTRE CENTRAL (CONTROLE GLOBAL DE LARGURA) ── */}
      <div className="relative flex flex-col justify-start items-center w-full">
        {/* Main container with framing vertical lines */}
        <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1320px] lg:w-[1320px] relative flex flex-col justify-start items-start min-h-screen">
          {/* Left vertical framing line */}
          <div className="w-[1px] h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0 pointer-events-none"></div>

          {/* Right vertical framing line */}
          <div className="w-[1px] h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0 pointer-events-none"></div>

          <div className="self-stretch pt-[9px] overflow-visible border-b border-[rgba(55,50,47,0.06)] flex flex-col justify-center items-center relative z-10">

            {/* ── NAVBAR DO TOPO (DENTRO DA GRADE ORIGINAL DO HERO) ── */}
            <header className="w-full">
              <TopNavbar onOpenConsultant={handleOpenConsultant} />
            </header>

            <main id="conteudo" className="w-full flex flex-col items-center">
              {/* ── SEÇÃO 1: HERO COM DASHBOARD SHOWCASE INTERATIVO ────── */}
              <section aria-label="Apresentação da Rovee" className="w-full">
                <HeroShowcaseSection onOpenConsultant={handleOpenConsultant} />
              </section>

              {/* ── SEÇÃO 2: BENTO GRID - MOTOR DE INTELIGÊNCIA FISCAL ──── */}
              <section id="fiscal" aria-label="Motor de inteligência fiscal" className="w-full">
                <FiscalIntelligenceBentoSection />
              </section>

              {/* ── SEÇÃO 3: INTELIGÊNCIA PREDITIVA EM 3 CAMADAS ─────────── */}
              <section id="predicao" aria-label="Inteligência preditiva" className="w-full">
                <PredictiveIntelligenceSection />
              </section>

              {/* ── SEÇÃO 4: AGENTES FISCAIS & PREDITIVOS ────────────────── */}
              <section id="agentes" aria-label="Agentes fiscais e preditivos" className="w-full">
                <FiscalAgentsSection />
              </section>

              {/* ── SEÇÃO 5: CANAL DO CONTADOR & HARMONIA ────────────────── */}
              <section id="contador" aria-label="Canal do contador" className="w-full">
                <AccountantChannelSection />
              </section>

              {/* ── SEÇÃO 6: BANCOS & CONTAS INTEGRADAS (OPEN FINANCE) ───── */}
              <section id="integracoes" aria-label="Bancos e contas integradas" className="w-full">
                <BanksIntegrationSection onOpenConsultant={handleOpenConsultant} />
              </section>

              {/* ── SEÇÃO 7: LIVE METRICS EM TEMPO REAL ──────────────────── */}
              <section id="metricas" aria-label="Números da Rovee" className="w-full">
                <LiveMetricsSection />
              </section>

              {/* ── SEÇÃO 8: CASOS DE USO ───────────────────────────────── */}
              <section id="depoimentos" aria-label="Cenários de uso" className="w-full">
                <TestimonialsSlider />
              </section>

              {/* ── SEÇÃO 9: ROADMAP ROVEE (TRANSPARÊNCIA DE PRODUTO) ───── */}
              <section id="roadmap" aria-label="Roadmap do produto" className="w-full">
                <RoadmapTeaserSection />
              </section>

              {/* ── SEÇÃO 10: SEGURANÇA DE NÍVEL BANCÁRIO & LGPD ─────────── */}
              <section id="seguranca" aria-label="Segurança e conformidade" className="w-full">
                <SecuritySection />
              </section>

              {/* ── SEÇÃO 11: PLANOS & PRICING (a própria seção já é <section>) ── */}
              <div id="planos" className="w-full">
                <PricingSection onOpenConsultant={handleOpenConsultant} />
              </div>

              {/* ── SEÇÃO 12: FAQ (DÚVIDAS FREQUENTES) ───────────────────── */}
              <section id="faq" aria-label="Dúvidas frequentes" className="w-full">
                <FAQSection />
              </section>

              {/* ── SEÇÃO 13: CTA FINAL COM CONVERSÃO ────────────────────── */}
              <section aria-label="Comece agora" className="w-full">
                <CTASection onOpenConsultant={handleOpenConsultant} />
              </section>
            </main>

            {/* ── SEÇÃO 14: FOOTER ─────────────────────────────────────── */}
            <div className="w-full">
              <FooterSection />
            </div>

          </div>
        </div>
      </div>

      {/* ── MODAL DE ATENDIMENTO COM CONSULTOR VIA WHATSAPP ── */}
      <ConsultantModal isOpen={isConsultantModalOpen} onClose={handleCloseConsultant} />
    </div>
  )
}
