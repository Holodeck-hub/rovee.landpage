"use client"

import { useState, useEffect } from "react"
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

  const handleOpenConsultant = () => {
    setIsConsultantModalOpen(true)
  }

  const handleCloseConsultant = () => {
    setIsConsultantModalOpen(false)
  }

  return (
    <div className="w-full min-h-screen relative bg-[#F8FAFC] overflow-x-hidden flex flex-col justify-start items-center">
      {/* ── 1. HEADER FLUTUANTE STICKY (QUANDO SCROLLA) ── */}
      <StickyNavbar
        isScrolled={isScrolled}
        onOpenConsultant={handleOpenConsultant}
      />

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
            <TopNavbar onOpenConsultant={handleOpenConsultant} />

            {/* ── SEÇÃO 1: HERO COM DASHBOARD SHOWCASE INTERATIVO ────── */}
            <div className="w-full">
              <HeroShowcaseSection onOpenConsultant={handleOpenConsultant} />
            </div>

            {/* ── SEÇÃO 2: BENTO GRID - MOTOR DE INTELIGÊNCIA FISCAL ──── */}
            <div id="fiscal" className="w-full">
              <FiscalIntelligenceBentoSection />
            </div>

            {/* ── SEÇÃO 3: INTELIGÊNCIA PREDITIVA EM 3 CAMADAS ─────────── */}
            <div id="predicao" className="w-full">
              <PredictiveIntelligenceSection />
            </div>

            {/* ── SEÇÃO 4: AGENTES FISCAIS & PREDITIVOS ────────────────── */}
            <div id="agentes" className="w-full">
              <FiscalAgentsSection />
            </div>

            {/* ── SEÇÃO 5: CANAL DO CONTADOR & HARMONIA ────────────────── */}
            <div id="contador" className="w-full">
              <AccountantChannelSection />
            </div>

            {/* ── SEÇÃO 6: BANCOS & CONTAS INTEGRADAS (OPEN FINANCE) ───── */}
            <div id="integracoes" className="w-full">
              <BanksIntegrationSection onOpenConsultant={handleOpenConsultant} />
            </div>

            {/* ── SEÇÃO 7: LIVE METRICS EM TEMPO REAL ──────────────────── */}
            <div id="metricas" className="w-full">
              <LiveMetricsSection />
            </div>

            {/* ── SEÇÃO 8: DEPOIMENTOS REAIS ──────────────────────────── */}
            <div id="depoimentos" className="w-full">
              <TestimonialsSlider />
            </div>

            {/* ── SEÇÃO 9: ROADMAP ROVEE (TRANSPARÊNCIA DE PRODUTO) ───── */}
            <div id="roadmap" className="w-full">
              <RoadmapTeaserSection />
            </div>

            {/* ── SEÇÃO 10: SEGURANÇA DE NÍVEL BANCÁRIO & LGPD ─────────── */}
            <div id="seguranca" className="w-full">
              <SecuritySection />
            </div>

            {/* ── SEÇÃO 11: PLANOS & PRICING ──────────────────────────── */}
            <div id="planos" className="w-full">
              <PricingSection onOpenConsultant={handleOpenConsultant} />
            </div>

            {/* ── SEÇÃO 12: FAQ (DÚVIDAS FREQUENTES) ───────────────────── */}
            <div className="w-full">
              <FAQSection />
            </div>

            {/* ── SEÇÃO 13: CTA FINAL COM CONVERSÃO ────────────────────── */}
            <div className="w-full">
              <CTASection onOpenConsultant={handleOpenConsultant} />
            </div>

            {/* ── SEÇÃO 14: FOOTER ─────────────────────────────────────── */}
            <div className="w-full">
              <FooterSection />
            </div>

          </div>
        </div>
      </div>

      {/* ── MODAL DE ATENDIMENTO COM CONSULTOR VIA WHATSAPP ── */}
      <ConsultantModal
        isOpen={isConsultantModalOpen}
        onClose={handleCloseConsultant}
      />
    </div>
  )
}
