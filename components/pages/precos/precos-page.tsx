"use client"

import { useConsultant, Reveal } from "../../layout"
import { PricingSection, FAQSection } from "../main"
import { PrecosComparisonSection } from "./precos-comparison-section"
import { PrecosCtaSection } from "./precos-cta-section"

export function PrecosPage() {
  const { openConsultant } = useConsultant()

  return (
    <>
      {/* ── 1. CARDS DE PRICING PRINCIPAL ── */}
      <Reveal asChild>
        <div className="w-full ">
          <PricingSection onOpenConsultant={openConsultant} />
        </div>
      </Reveal>

      {/* ── 2. MATRIZ COMPARATIVA DE RECURSOS ── */}
      <Reveal>
        <PrecosComparisonSection />
      </Reveal>

      {/* ── 3. FAQ ── */}
      <Reveal asChild>
        <section aria-label="Perguntas Frequentes" className="w-full band-tint">
          <FAQSection />
        </section>
      </Reveal>

      {/* ── 4. CTA FINAL ── */}
      <Reveal>
        <PrecosCtaSection onOpenConsultant={openConsultant} />
      </Reveal>
    </>
  )
}
export default PrecosPage
