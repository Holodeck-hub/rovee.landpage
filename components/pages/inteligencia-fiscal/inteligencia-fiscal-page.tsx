"use client"

import { useConsultant } from "../../layout"
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
      <InteligenciaFiscalHeroSection onOpenConsultant={openConsultant} />

      {/* ── 2. BENTO GRID FISCAL ── */}
      <section id="fator-r" aria-label="Pilares fiscais" className="w-full">
        <FiscalIntelligenceBentoSection />
      </section>

      {/* ── 3. AGENTES AUTÔNOMOS FISCAIS ── */}
      <section id="agentes" aria-label="Agentes Proativos" className="w-full band-tint border-b border-[rgba(55,50,47,0.12)]">
        <FiscalAgentsSection />
      </section>

      {/* ── 4. MEMÓRIA DE CÁLCULO ── */}
      <InteligenciaFiscalCalculationSection />

      {/* ── 4.1. PARA ONDE VAI CADA REAL (3 DESTINOS) ── */}
      <InteligenciaFiscalDestinosSection />

      {/* ── 5. CTA FINAL ── */}
      <InteligenciaFiscalCtaSection onOpenConsultant={openConsultant} />
    </>
  )
}
export default InteligenciaFiscalPage
