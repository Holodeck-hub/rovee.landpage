"use client"

import { useConsultant, Reveal } from "@/components/layout"
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
      {/* ── SEÇÃO 1: HERO COM DASHBOARD SHOWCASE INTERATIVO ────── */}
      <Reveal asChild>
        <section aria-label="Apresentação da Rovee" className="w-full">
          <HeroShowcaseSection onOpenConsultant={openConsultant} />
        </section>
      </Reveal>

      {/* ── SEÇÃO 2: INTELIGÊNCIA FISCAL, RESUMO ── */}
      <Reveal asChild>
        <section aria-label="Inteligência fiscal, resumo" className="w-full">
          <FiscalAgentsTeaserSection />
        </section>
      </Reveal>

      {/* ── SEÇÃO 3: LIVE METRICS EM TEMPO REAL ──────────────────── */}
      <Reveal asChild>
        <section id="metricas" aria-label="Números da Rovee" className="w-full band-tint">
          <LiveMetricsSection />
        </section>
      </Reveal>

      {/* ── SEÇÃO 4: CASOS DE USO ───────────────────────────────── */}
      <Reveal asChild>
        <section id="depoimentos" aria-label="Cenários de uso" className="w-full">
          <TestimonialsSlider />
        </section>
      </Reveal>

      {/* ── SEÇÃO 5: ROADMAP ROVEE (TRANSPARÊNCIA DE PRODUTO) ───── */}
      <Reveal asChild>
        <section id="roadmap" aria-label="Roadmap do produto" className="w-full band-tint">
          <RoadmapTeaserSection />
        </section>
      </Reveal>

      {/* ── SEÇÃO 5.1: CANAL DO CONTADOR (ICP QUE NÃO APARECIA AQUI) ── */}
      <Reveal asChild>
        <section aria-label="Parceria com escritórios contábeis" className="w-full">
          <AccountantsTeaserSection />
        </section>
      </Reveal>

      {/* ── SEÇÃO 6: CTA FINAL COM CONVERSÃO ────────────────────── */}
      <Reveal asChild>
        <section aria-label="Comece agora" className="w-full band-tint">
          <CTASection onOpenConsultant={openConsultant} />
        </section>
      </Reveal>
    </div>
  )
}
