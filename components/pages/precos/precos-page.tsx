"use client"

import { useConsultant } from "../../layout"
import { PricingSection, FAQSection } from "../main"
import { PrecosComparisonSection } from "./precos-comparison-section"
import { PrecosCtaSection } from "./precos-cta-section"

export function PrecosPage() {
  const { openConsultant } = useConsultant()

  return (
    <>
      {/* ── 1. CARDS DE PRICING PRINCIPAL ── */}
      <div className="w-full">
        <PricingSection onOpenConsultant={openConsultant} />
      </div>

      {/* ── 2. MATRIZ COMPARATIVA DE RECURSOS ── */}
      <PrecosComparisonSection />

      {/* ── 3. FAQ ── */}
      <section aria-label="Perguntas Frequentes" className="w-full band-tint">
        <FAQSection />
      </section>

      {/* ── 4. CTA FINAL ── */}
      <PrecosCtaSection onOpenConsultant={openConsultant} />
    </>
  )
}
export default PrecosPage
