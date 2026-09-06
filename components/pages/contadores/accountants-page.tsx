"use client"

import { useConsultant, Reveal } from "../../layout"
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
      <Reveal>
        <AccountantsHeroSection onOpenConsultant={openConsultant} />
      </Reveal>

      {/* ── SEÇÃO 2: O QUE MUDA NO FECHAMENTO (DORES RESOLVIDAS) ── */}
      <Reveal>
        <AccountantsPainPointsSection />
      </Reveal>

      {/* ── SEÇÃO 3: A FRONTEIRA / LIMITES DA ROVEE ── */}
      <Reveal>
        <AccountantsBoundariesSection />
      </Reveal>

      {/* ── SEÇÃO 4: NÚMEROS E CALCULADORA DINÂMICA ── */}
      <Reveal>
        <AccountantsMetricsSection />
      </Reveal>

      {/* ── SEÇÃO 5: DE ONDE VÊM OS EXTRATOS (INTEGRAÇÃO BANCÁRIA) ── */}
      <Reveal>
        <AccountantsExtractsSection onOpenConsultant={openConsultant} />
      </Reveal>

      {/* ── SEÇÃO 6: PORTAL DO ESCRITÓRIO (ROADMAP E PARCERIA) ── */}
      <Reveal>
        <AccountantsPortalSection onOpenConsultant={openConsultant} />
      </Reveal>

      {/* ── SEÇÃO 7: PERGUNTAS FREQUENTES (FAQ) ── */}
      <Reveal>
        <AccountantsFaqSection />
      </Reveal>
    </>
  )
}
export default AccountantsPage
