"use client"

import { useCallback, useEffect, useState } from "react"
import { StickyNavbar, TopNavbar, FooterSection, ConsultantModal } from "../components/layout"
import {
  HeroShowcaseSection,
  FiscalAgentsTeaserSection,
  LiveMetricsSection,
  TestimonialsSlider,
  RoadmapTeaserSection,
  AccountantsTeaserSection,
  CTASection,
} from "../components/pages/main"
import { trackEvent } from "../lib/analytics"

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isConsultantModalOpen, setIsConsultantModalOpen] = useState(false)
  const [emailInicial, setEmailInicial] = useState<string | undefined>()

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
  const handleOpenConsultant = useCallback((origem?: string, email?: string) => {
    trackEvent("abriu_modal", { origem: origem ?? "nao_identificada" })
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
        <StickyNavbar isScrolled={isScrolled} onOpenConsultant={handleOpenConsultant} />
      </header>

      {/* ── 2. CONTAINER MESTRE CENTRAL ── */}
      <div className="relative flex flex-col justify-start items-center w-full">
        <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1320px] lg:w-[1320px] relative flex flex-col justify-start items-start min-h-screen">
          {/* Linhas verticais que emolduram a página inteira */}
          <div className="w-[1px] h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0 pointer-events-none" />
          <div className="w-[1px] h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0 pointer-events-none" />

          <div className="self-stretch pt-[9px] overflow-visible border-b border-[rgba(55,50,47,0.06)] flex flex-col justify-center items-center relative z-10">
            {/* ── NAVBAR DO TOPO ── */}
            <header className="w-full">
              <TopNavbar onOpenConsultant={handleOpenConsultant} />
            </header>

            <main id="conteudo" className="w-full flex flex-col items-center">
              {/* ── SEÇÃO 1: HERO COM DASHBOARD SHOWCASE INTERATIVO ────── */}
              <section aria-label="Apresentação da Rovee" className="w-full">
                <HeroShowcaseSection onOpenConsultant={handleOpenConsultant} />
              </section>

              {/* ── SEÇÃO 2: INTELIGÊNCIA FISCAL, RESUMO (detalhe fica só em /inteligencia-fiscal#agentes) ── */}
              <section aria-label="Inteligência fiscal, resumo" className="w-full">
                <FiscalAgentsTeaserSection />
              </section>

              {/* ── SEÇÃO 3: LIVE METRICS EM TEMPO REAL ──────────────────── */}
              <section id="metricas" aria-label="Números da Rovee" className="w-full band-tint">
                <LiveMetricsSection />
              </section>

              {/* ── SEÇÃO 4: CASOS DE USO ───────────────────────────────── */}
              <section id="depoimentos" aria-label="Cenários de uso" className="w-full">
                <TestimonialsSlider />
              </section>

              {/* ── SEÇÃO 5: ROADMAP ROVEE (TRANSPARÊNCIA DE PRODUTO) ───── */}
              <section id="roadmap" aria-label="Roadmap do produto" className="w-full band-tint">
                <RoadmapTeaserSection />
              </section>

              {/* ── SEÇÃO 5.1: CANAL DO CONTADOR (ICP QUE NÃO APARECIA AQUI) ── */}
              <section aria-label="Parceria com escritórios contábeis" className="w-full">
                <AccountantsTeaserSection />
              </section>

              {/* ── SEÇÃO 6: CTA FINAL COM CONVERSÃO ────────────────────── */}
              <section aria-label="Comece agora" className="w-full">
                <CTASection onOpenConsultant={handleOpenConsultant} />
              </section>
            </main>

            {/* ── FOOTER ── */}
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
        emailInicial={emailInicial}
      />
    </div>
  )
}
