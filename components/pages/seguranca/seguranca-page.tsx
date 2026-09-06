"use client"

import { useConsultant, Reveal } from "../../layout"
import { SecuritySection } from "../main"
import { SegurancaHeroSection } from "./seguranca-hero-section"
import { SegurancaPrivacySection } from "./seguranca-privacy-section"
import { SegurancaCtaSection } from "./seguranca-cta-section"

export function SegurancaPage() {
  const { openConsultant } = useConsultant()

  return (
    <>
      {/* ── 1. HERO SEGURANÇA ── */}
      <Reveal>
        <SegurancaHeroSection onOpenConsultant={openConsultant} />
      </Reveal>

      {/* ── 2. 4 PILARES DE SEGURANÇA ── */}
      <Reveal asChild>
        <section id="pilares" aria-label="Pilares de segurança" className="w-full">
          <SecuritySection />
        </section>
      </Reveal>

      {/* ── 3. DETALHAMENTO TÉCNICO DE PRIVACIDADE ── */}
      <Reveal>
        <SegurancaPrivacySection />
      </Reveal>

      {/* ── 4. CTA FINAL ── */}
      <Reveal>
        <SegurancaCtaSection onOpenConsultant={openConsultant} />
      </Reveal>
    </>
  )
}
export default SegurancaPage
