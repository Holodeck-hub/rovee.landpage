"use client"

import { useCallback, useEffect, useState } from "react"
import { TopNavbar, StickyNavbar, FooterSection, ConsultantModal, VideoLightbox } from "../../layout"
import { AccountantsHeroSection } from "./accountants-hero-section"
import { AccountantsPainPointsSection } from "./accountants-pain-points-section"
import { AccountantsBoundariesSection } from "./accountants-boundaries-section"
import { AccountantsMetricsSection } from "./accountants-metrics-section"
import { AccountantsExtractsSection } from "./accountants-extracts-section"
import { AccountantsPortalSection } from "./accountants-portal-section"
import { AccountantsFaqSection } from "./accountants-faq-section"
import { trackEvent } from "../../../lib/analytics"

export function AccountantsPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [modalAberto, setModalAberto] = useState(false)
  const [videoAberto, setVideoAberto] = useState(false)
  const [emailInicial, setEmailInicial] = useState<string | undefined>()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const abrirModal = useCallback((origem: string, emailDigitado?: string) => {
    trackEvent("abriu_modal", { origem, perfil: "contabilidade" })
    setEmailInicial(emailDigitado)
    setModalAberto(true)
  }, [])

  return (
    <div className="w-full min-h-screen relative bg-white overflow-x-hidden flex flex-col justify-start items-center">
      {/* ── SKIP LINK: primeiro elemento focável da página ── */}
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2.5 focus:bg-primary focus:text-white focus:text-sm focus:font-semibold focus:rounded-lg focus:shadow-lg"
      >
        Pular para o conteúdo
      </a>

      {/* ── 1. HEADER FLUTUANTE STICKY (QUANDO SCROLLA) ── */}
      <header>
        <StickyNavbar isScrolled={isScrolled} onOpenConsultant={(origem) => abrirModal(origem ?? "contadores_sticky")} />
      </header>

      {/* ── 2. CONTAINER MESTRE CENTRAL (CONTROLE GLOBAL DE LARGURA) ── */}
      <div className="relative flex flex-col justify-start items-center w-full">
        {/* Container principal com linhas verticais de moldura */}
        <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1320px] lg:w-[1320px] relative flex flex-col justify-start items-start min-h-screen">
          {/* Linhas verticais que emolduram a página */}
          <div className="w-[1px] h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0 pointer-events-none" />
          <div className="w-[1px] h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0 pointer-events-none" />

          <div className="self-stretch pt-[9px] overflow-visible border-b border-[rgba(55,50,47,0.06)] flex flex-col justify-center items-center relative z-10">
            {/* ── NAVBAR DO TOPO ── */}
            <header className="w-full">
              <TopNavbar onOpenConsultant={(origem) => abrirModal(origem ?? "contadores_top")} />
            </header>

            <main id="conteudo" className="w-full flex flex-col items-center">
              {/* ── SEÇÃO 1: HERO COM FORMULÁRIO E FRAME DE CELULAR ── */}
              <AccountantsHeroSection
                onOpenConsultant={abrirModal}
                onOpenVideo={() => setVideoAberto(true)}
              />

              {/* ── SEÇÃO 2: O QUE MUDA NO FECHAMENTO (DORES RESOLVIDAS) ── */}
              <AccountantsPainPointsSection />

              {/* ── SEÇÃO 3: A FRONTEIRA / LIMITES DA ROVEE ── */}
              <AccountantsBoundariesSection />

              {/* ── SEÇÃO 4: NÚMEROS E CALCULADORA DINÂMICA ── */}
              <AccountantsMetricsSection />

              {/* ── SEÇÃO 5: DE ONDE VÊM OS EXTRATOS (INTEGRAÇÃO BANCÁRIA) ── */}
              <AccountantsExtractsSection onOpenConsultant={abrirModal} />

              {/* ── SEÇÃO 6: PORTAL DO ESCRITÓRIO (ROADMAP E PARCERIA) ── */}
              <AccountantsPortalSection onOpenConsultant={abrirModal} />

              {/* ── SEÇÃO 7: PERGUNTAS FREQUENTES (FAQ) ── */}
              <AccountantsFaqSection />
            </main>

            {/* ── FOOTER COMPARTILHADO ── */}
            <div className="w-full">
              <FooterSection />
            </div>
          </div>
        </div>
      </div>

      {/* ── MODAIS DE SUPORTE E VÍDEO ── */}
      <ConsultantModal
        isOpen={modalAberto}
        onClose={() => setModalAberto(false)}
        emailInicial={emailInicial}
      />
      <VideoLightbox isOpen={videoAberto} onClose={() => setVideoAberto(false)} />
    </div>
  )
}
export default AccountantsPage
