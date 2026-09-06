"use client"

import { useConsultant, Reveal } from "../../layout"
import { FiscalIntelligenceBentoSection, FiscalAgentsSection } from "../main"
import { InteligenciaFiscalHeroSection } from "./inteligencia-fiscal-hero-section"
import { InteligenciaFiscalCalculationSection } from "./inteligencia-fiscal-calculation-section"
import { InteligenciaFiscalDestinosSection } from "./inteligencia-fiscal-destinos-section"
import { InteligenciaFiscalCtaSection } from "./inteligencia-fiscal-cta-section"

export function InteligenciaFiscalPage() {
  const { openConsultant } = useConsultant()

  return (
    <>
      {/* ── 1. HERO INTELIGÊNCIA FISCAL ── */}
      <Reveal>
        <InteligenciaFiscalHeroSection onOpenConsultant={openConsultant} />
      </Reveal>

      {/* ── 2. BENTO GRID FISCAL ── */}
      <Reveal asChild>
        <section id="fator-r" aria-label="Pilares fiscais" className="w-full">
          <FiscalIntelligenceBentoSection />
        </section>
      </Reveal>

      {/* ── 3. AGENTES AUTÔNOMOS FISCAIS ── */}
      <Reveal asChild>
        <section id="agentes" aria-label="Agentes Proativos" className="w-full band-tint border-b border-[rgba(55,50,47,0.12)]">
          <FiscalAgentsSection />
        </section>
      </Reveal>

      {/* ── 4. MEMÓRIA DE CÁLCULO ── */}
      <Reveal>
        <InteligenciaFiscalCalculationSection />
      </Reveal>

      {/* ── 4.1. PARA ONDE VAI CADA REAL (3 DESTINOS) ── */}
      <Reveal>
        <InteligenciaFiscalDestinosSection />
      </Reveal>

      {/* ── 5. CTA FINAL ── */}
      <Reveal>
        <InteligenciaFiscalCtaSection onOpenConsultant={openConsultant} />
      </Reveal>
    </>
  )
}
export default InteligenciaFiscalPage
