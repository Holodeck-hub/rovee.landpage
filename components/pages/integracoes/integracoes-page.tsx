"use client"

import { useConsultant } from "../../layout"
import { IntegracoesHeroSection } from "./integracoes-hero-section"
import { IntegracoesComoFuncionaSection } from "./integracoes-como-funciona-section"
import { IntegracoesBancosSection } from "./integracoes-bancos-section"
import { IntegracoesCtaSection } from "./integracoes-cta-section"

export function IntegracoesPage() {
  const { openConsultant } = useConsultant()

  return (
    <>
      {/* ── 1. HERO INTEGRAÇÕES ── */}
      <IntegracoesHeroSection onOpenConsultant={openConsultant} />

      {/* ── 2. COMO FUNCIONA O OPEN FINANCE ── */}
      <IntegracoesComoFuncionaSection />

      {/* ── 3. BANCOS HOMOLOGADOS ── */}
      <IntegracoesBancosSection />

      {/* ── 4. CTA FINAL ── */}
      <IntegracoesCtaSection onOpenConsultant={openConsultant} />
    </>
  )
}
export default IntegracoesPage
