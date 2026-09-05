"use client"

import { useConsultant } from "@/components/layout"
import {
  HeroShowcaseSection,
  FiscalAgentsTeaserSection,
  LiveMetricsSection,
  TestimonialsSlider,
  RoadmapTeaserSection,
  AccountantsTeaserSection,
  CTASection,
} from "@/components/pages/main"

export default function LandingPage() {
  const { openConsultant } = useConsultant()

  return (
<div className="w-full relative flex flex-col items-center">
      {/* ── BORDAS LATERAIS (delimitam a página) ── */}
      <div className="w-[1px] h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0 pointer-events-none" />
      <div className="w-[1px] h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0 pointer-events-none" />

      {/* ── SEÇÃO 1: HERO COM DASHBOARD SHOWCASE INTERATIVO ────── */}
      <section aria-label="Apresentação da Rovee" className="w-full">
        <HeroShowcaseSection onOpenConsultant={openConsultant} />
      </section>

      {/* ── SEÇÃO 2: INTELIGÊNCIA FISCAL, RESUMO ── */}
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
      <section aria-label="Comece agora" className="w-full band-tint">
        <CTASection onOpenConsultant={openConsultant} />
      </section>
    </div>
  )
}
