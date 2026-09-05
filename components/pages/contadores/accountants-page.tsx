"use client"

import { useConsultant } from "../../layout"
import { AccountantsHeroSection } from "./accountants-hero-section"
import { AccountantsPainPointsSection } from "./accountants-pain-points-section"
import { AccountantsBoundariesSection } from "./accountants-boundaries-section"
import { AccountantsMetricsSection } from "./accountants-metrics-section"
import { AccountantsExtractsSection } from "./accountants-extracts-section"
import { AccountantsPortalSection } from "./accountants-portal-section"
import { AccountantsFaqSection } from "./accountants-faq-section"

export function AccountantsPage() {
  const { openConsultant } = useConsultant()

  return (
    <>
      {/* ── SEÇÃO 1: HERO COM FORMULÁRIO ── */}
      <AccountantsHeroSection onOpenConsultant={openConsultant} />

      {/* ── SEÇÃO 2: O QUE MUDA NO FECHAMENTO (DORES RESOLVIDAS) ── */}
      <AccountantsPainPointsSection />

      {/* ── SEÇÃO 3: A FRONTEIRA / LIMITES DA ROVEE ── */}
      <AccountantsBoundariesSection />

      {/* ── SEÇÃO 4: NÚMEROS E CALCULADORA DINÂMICA ── */}
      <AccountantsMetricsSection />

      {/* ── SEÇÃO 5: DE ONDE VÊM OS EXTRATOS (INTEGRAÇÃO BANCÁRIA) ── */}
      <AccountantsExtractsSection onOpenConsultant={openConsultant} />

      {/* ── SEÇÃO 6: PORTAL DO ESCRITÓRIO (ROADMAP E PARCERIA) ── */}
      <AccountantsPortalSection onOpenConsultant={openConsultant} />

      {/* ── SEÇÃO 7: PERGUNTAS FREQUENTES (FAQ) ── */}
      <AccountantsFaqSection />
    </>
  )
}
export default AccountantsPage
