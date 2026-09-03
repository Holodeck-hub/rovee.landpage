"use client"

import { useCallback, useEffect, useState } from "react"
import { TopNavbar, StickyNavbar, FooterSection, ConsultantModal } from "../../layout"
import { SecuritySection } from "../main/security-section"
import { ArrowRight, CheckCircle2, Lock, ShieldCheck, EyeOff, FileCheck, Server, Key } from "lucide-react"
import { trackEvent } from "../../../lib/analytics"

export function SegurancaPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isConsultantModalOpen, setIsConsultantModalOpen] = useState(false)
  const [emailInicial, setEmailInicial] = useState<string | undefined>()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleOpenConsultant = useCallback((origem?: string, email?: string) => {
    trackEvent("abriu_modal", { origem: origem ?? "seguranca" })
    setEmailInicial(email)
    setIsConsultantModalOpen(true)
  }, [])

  const handleCloseConsultant = useCallback(() => {
    setIsConsultantModalOpen(false)
  }, [])

  return (
    <div className="w-full min-h-screen relative bg-white overflow-x-hidden flex flex-col justify-start items-center">
      {/* ── SKIP LINK ── */}
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2.5 focus:bg-primary focus:text-white focus:text-sm focus:font-semibold focus:rounded-lg focus:shadow-lg"
      >
        Pular para o conteúdo
      </a>

      {/* ── HEADER FLUTUANTE STICKY ── */}
      <header>
        <StickyNavbar isScrolled={isScrolled} onOpenConsultant={handleOpenConsultant} />
      </header>

      {/* ── CONTAINER MESTRE CENTRAL ── */}
      <div className="relative flex flex-col justify-start items-center w-full">
        <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1320px] lg:w-[1320px] relative flex flex-col justify-start items-start min-h-screen">
          <div className="w-[1px] h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0 pointer-events-none" />
          <div className="w-[1px] h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0 pointer-events-none" />

          <div className="self-stretch pt-[9px] overflow-visible border-b border-[rgba(55,50,47,0.06)] flex flex-col justify-center items-center relative z-10">
            <header className="w-full">
              <TopNavbar onOpenConsultant={handleOpenConsultant} />
            </header>

            <main id="conteudo" className="w-full flex flex-col items-center">
              {/* ── HERO SEGURANÇA ── */}
              <section aria-label="Segurança Rovee" className="w-full border-b border-[rgba(55,50,47,0.12)]">
                <div className="w-full max-w-[1100px] mx-auto px-5 pt-16 sm:pt-24 pb-16 sm:pb-20 flex flex-col items-center text-center gap-6">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#605A57]">
                    Segurança de Nível Bancário e LGPD
                  </span>

                  <h1 className="text-secondary text-[34px] sm:text-[44px] md:text-[56px] font-medium h-display text-balance max-w-[48rem]">
                    Seus dados fiscais e bancários protegidos com rigor militar.
                  </h1>

                  <p className="text-ink-muted text-base sm:text-lg leading-relaxed max-w-[38rem]">
                    Desenvolvido sob rígidos padrões internacionais de segurança da informação, criptografia de ponta a ponta e total conformidade com a LGPD.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
                    <button
                      type="button"
                      onClick={() => handleOpenConsultant("seguranca_hero")}
                      className="h-11 px-6 bg-primary hover:bg-primary-hover text-white text-sm font-medium rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm"
                    >
                      <span>Falar com nosso time de segurança</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <a
                      href="#pilares"
                      className="h-11 px-5 bg-white hover:bg-gray-50 border border-[rgba(55,50,47,0.15)] text-secondary text-sm font-medium rounded-lg flex items-center justify-center transition-colors"
                    >
                      Ver os 4 pilares
                    </a>
                  </div>
                </div>
              </section>

              {/* ── SEÇÃO: 4 PILARES DE SEGURANÇA ── */}
              <section id="pilares" aria-label="Pilares de segurança" className="w-full">
                <SecuritySection />
              </section>

              {/* ── SEÇÃO: DETALHAMENTO TÉCNICO DE PRIVACIDADE ── */}
              <section aria-label="Privacidade e Dados" className="w-full band-tint py-20 px-5 border-b border-[rgba(55,50,47,0.12)]">
                <div className="w-full max-w-[1000px] mx-auto">
                  <div className="max-w-[40rem] mb-12">
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#605A57]">
                      Compromisso de Privacidade
                    </span>
                    <h2 className="text-secondary text-2xl sm:text-3xl md:text-4xl font-medium h-section text-balance mt-2">
                      Como tratamos cada byte da sua empresa
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-6 bg-white rounded-xl border border-[rgba(55,50,47,0.12)] shadow-xs">
                      <div className="w-10 h-10 rounded-lg bg-indigo-50 text-primary flex items-center justify-center mb-4">
                        <Key className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-semibold text-secondary mb-2">Zero Acesso a Credenciais</h3>
                      <p className="text-ink-muted text-sm leading-relaxed">
                        A conexão via Open Finance utiliza tokens temporários e consentimento revogável do Banco Central. A Rovee jamais armazena suas senhas de banco.
                      </p>
                    </div>

                    <div className="p-6 bg-white rounded-xl border border-[rgba(55,50,47,0.12)] shadow-xs">
                      <div className="w-10 h-10 rounded-lg bg-indigo-50 text-primary flex items-center justify-center mb-4">
                        <Server className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-semibold text-secondary mb-2">Isolamento Multi-Tenant (RBAC)</h3>
                      <p className="text-ink-muted text-sm leading-relaxed">
                        Seus dados contábeis residem em ambientes isolados logicamente com controle de acesso baseado em funções (Owner, Admin, Viewer para o contador).
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ── CTA FINAL SEGURANÇA ── */}
              <section aria-label="Comece agora" className="w-full bg-black py-20 px-5 text-white text-center flex flex-col items-center gap-5">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium h-section text-balance max-w-[38rem]">
                  Transparência absoluta e dados blindados.
                </h2>
                <p className="text-zinc-400 text-sm sm:text-base max-w-[32rem]">
                  Dúvidas sobre o tratamento de dados da sua PJ ou compliance tributário? Converse com nossos especialistas.
                </p>
                <button
                  type="button"
                  onClick={() => handleOpenConsultant("seguranca_cta_final")}
                  className="h-11 px-8 mt-2 bg-primary hover:bg-primary-hover text-white text-sm font-medium rounded-lg transition-colors cursor-pointer"
                >
                  Tirar Dúvidas de Compliance
                </button>
              </section>
            </main>

            <div className="w-full">
              <FooterSection />
            </div>
          </div>
        </div>
      </div>

      <ConsultantModal
        isOpen={isConsultantModalOpen}
        onClose={handleCloseConsultant}
        emailInicial={emailInicial}
      />
    </div>
  )
}
export default SegurancaPage
