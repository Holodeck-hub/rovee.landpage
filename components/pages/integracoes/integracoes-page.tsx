"use client"

import { useConsultant, Reveal } from "../../layout"
import { IntegracoesHeroSection } from "./integracoes-hero-section"
import { IntegracoesComoFuncionaSection } from "./integracoes-como-funciona-section"
import { IntegracoesBancosSection } from "./integracoes-bancos-section"
import { IntegracoesCtaSection } from "./integracoes-cta-section"

export function IntegracoesPage() {
  const { openConsultant } = useConsultant()

  return (
    <>
      {/* ── 1. HERO INTEGRAÇÕES ── */}
      <Reveal>
        <IntegracoesHeroSection onOpenConsultant={openConsultant} />
      </Reveal>

      {/* ── 2. COMO FUNCIONA O OPEN FINANCE ── */}
      <Reveal>
        <IntegracoesComoFuncionaSection />
      </Reveal>

      {/* ── 3. BANCOS HOMOLOGADOS ── */}
      <Reveal>
        <IntegracoesBancosSection />
      </Reveal>

      {/* ── 4. CTA FINAL ── */}
      <Reveal>
        <IntegracoesCtaSection onOpenConsultant={openConsultant} />
      </Reveal>
    </>
  )
}
export default IntegracoesPage
