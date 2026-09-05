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
    <>
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
      <section aria-label="Comece agora" className="w-full">
        <CTASection onOpenConsultant={openConsultant} />
      </section>
    </>
  )
}
