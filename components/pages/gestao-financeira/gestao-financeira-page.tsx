"use client"

import { useConsultant, Reveal } from "../../layout"
import { GestaoFinanceiraHeroSection } from "./gestao-financeira-hero-section"
import { GestaoFinanceiraSalaryFlowSection } from "./gestao-financeira-salary-flow-section"
import { GestaoFinanceiraFeaturesSection } from "./gestao-financeira-features-section"
import { GestaoFinanceiraBucketsSection } from "./gestao-financeira-buckets-section"
import { GestaoFinanceiraCashflowSection } from "./gestao-financeira-cashflow-section"
import { GestaoFinanceiraCtaSection } from "./gestao-financeira-cta-section"

export function GestaoFinanceiraPage() {
  const { openConsultant } = useConsultant()

  return (
    <>
      {/* ── 1. HERO GESTÃO FINANCEIRA ── */}
      <Reveal>
        <GestaoFinanceiraHeroSection onOpenConsultant={openConsultant} />
      </Reveal>

      {/* ── 2. FLUXO AUTOMATIZADO DE SALÁRIO ── */}
      <Reveal>
        <GestaoFinanceiraSalaryFlowSection />
      </Reveal>

      {/* ── 3. RECURSOS DO MICRO AO MACRO ── */}
      <Reveal>
        <GestaoFinanceiraFeaturesSection />
      </Reveal>

      {/* ── 4. AUTOMAÇÃO DE CAIXA: 3 DESTINOS ── */}
      <Reveal>
        <GestaoFinanceiraBucketsSection />
      </Reveal>

      {/* ── 5. RUNWAY E DAS PROVISIONADO ── */}
      <Reveal>
        <GestaoFinanceiraCashflowSection />
      </Reveal>

      {/* ── 6. CTA FINAL ── */}
      <Reveal>
        <GestaoFinanceiraCtaSection onOpenConsultant={openConsultant} />
      </Reveal>
    </>
  )
}
export default GestaoFinanceiraPage
