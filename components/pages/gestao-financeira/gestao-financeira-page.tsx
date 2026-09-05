"use client"

import { useConsultant } from "../../layout"
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
      <GestaoFinanceiraHeroSection onOpenConsultant={openConsultant} />

      {/* ── 2. FLUXO AUTOMATIZADO DE SALÁRIO ── */}
      <GestaoFinanceiraSalaryFlowSection />

      {/* ── 3. RECURSOS DO MICRO AO MACRO ── */}
      <GestaoFinanceiraFeaturesSection />

      {/* ── 4. AUTOMAÇÃO DE CAIXA: 3 DESTINOS ── */}
      <GestaoFinanceiraBucketsSection />

      {/* ── 5. RUNWAY E DAS PROVISIONADO ── */}
      <GestaoFinanceiraCashflowSection />

      {/* ── 6. CTA FINAL ── */}
      <GestaoFinanceiraCtaSection onOpenConsultant={openConsultant} />
    </>
  )
}
export default GestaoFinanceiraPage
