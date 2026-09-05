"use client"

import { useConsultant } from "../../layout"
import { SecuritySection } from "../main"
import { SegurancaHeroSection } from "./seguranca-hero-section"
import { SegurancaPrivacySection } from "./seguranca-privacy-section"
import { SegurancaCtaSection } from "./seguranca-cta-section"

export function SegurancaPage() {
  const { openConsultant } = useConsultant()

  return (
    <>
      {/* ── 1. HERO SEGURANÇA ── */}
      <SegurancaHeroSection onOpenConsultant={openConsultant} />

      {/* ── 2. 4 PILARES DE SEGURANÇA ── */}
      <section id="pilares" aria-label="Pilares de segurança" className="w-full">
        <SecuritySection />
      </section>

      {/* ── 3. DETALHAMENTO TÉCNICO DE PRIVACIDADE ── */}
      <SegurancaPrivacySection />

      {/* ── 4. CTA FINAL ── */}
      <SegurancaCtaSection onOpenConsultant={openConsultant} />
    </>
  )
}
export default SegurancaPage
