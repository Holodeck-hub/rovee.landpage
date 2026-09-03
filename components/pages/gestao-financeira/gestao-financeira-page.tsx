"use client"

import { useCallback, useEffect, useState } from "react"
import { TopNavbar, StickyNavbar, FooterSection, ConsultantModal } from "../../layout"
import { BanksIntegrationSection } from "../main/banks-integration-section"
import { ArrowRight } from "lucide-react"
import { trackEvent } from "../../../lib/analytics"

export function GestaoFinanceiraPage() {
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
    trackEvent("abriu_modal", { origem: origem ?? "gestao_financeira" })
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
          {/* Linhas verticais de moldura */}
          <div className="w-[1px] h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0 pointer-events-none" />
          <div className="w-[1px] h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0 pointer-events-none" />

          <div className="self-stretch pt-[9px] overflow-visible border-b border-[rgba(55,50,47,0.06)] flex flex-col justify-center items-center relative z-10">
            {/* ── NAVBAR DO TOPO ── */}
            <header className="w-full">
              <TopNavbar onOpenConsultant={handleOpenConsultant} />
            </header>

            <main id="conteudo" className="w-full flex flex-col items-center">
              {/* ── HERO: GESTÃO FINANCEIRA ── */}
              <section aria-label="Gestão Financeira" className="w-full border-b border-[rgba(55,50,47,0.12)]">
                <div className="w-full max-w-[1100px] mx-auto px-5 pt-16 sm:pt-24 pb-16 sm:pb-20 flex flex-col items-center text-center gap-6">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#605A57]">
                    Gestão Financeira
                  </span>

                  <h1 className="text-secondary text-[34px] sm:text-[44px] md:text-[56px] font-medium h-display text-balance max-w-[48rem]">
                    Planeje com precisão
                  </h1>

                  <p className="text-ink-muted text-base sm:text-lg leading-relaxed max-w-[38rem]">
                    Seu dinheiro, do seu jeito. Organize tudo em um só lugar, desde gastos do dia a dia e planejamentos mensais até a gestão do seu patrimônio e seus objetivos futuros.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
                    <button
                      type="button"
                      onClick={() => handleOpenConsultant("gestao_hero")}
                      className="h-11 px-6 bg-primary hover:bg-primary-hover text-white text-sm font-medium rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm"
                    >
                      <span>Falar com Consultor</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <a
                      href="#pilares-gestao"
                      className="h-11 px-5 bg-white hover:bg-gray-50 border border-[rgba(55,50,47,0.15)] text-secondary text-sm font-medium rounded-lg flex items-center justify-center transition-colors"
                    >
                      Ver detalhes
                    </a>
                  </div>
                </div>
              </section>

              {/* ── SEÇÃO: SIMPLIFIQUE A GESTÃO DO SEU SALÁRIO (60% CONTEÚDO PRETO / 40% IMAGEM) ── */}
              <section aria-label="Gestão de Salário e Distribuição" className="w-full bg-black border-b border-white/10 text-white relative overflow-hidden">
                {/* Imagem: 40% da largura à direita, limpa e sem filtros de blur */}
                <div
                  className="absolute right-0 md:right-[2%] lg:right-[4%] top-[53%] sm:top-[54%] md:top-[55%] -translate-y-1/2 w-full sm:w-[48%] md:w-[42%] lg:w-[38%] h-[120%] md:h-[130%] pointer-events-none select-none overflow-hidden z-0 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <img
                    src="/openfinance/backgroud-mobile-v1.jpg"
                    alt=""
                    className="w-full h-full object-contain object-center scale-100 sm:scale-105 md:scale-112 opacity-100 drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)] translate-y-0 sm:translate-y-1 md:translate-y-2"
                  />
                </div>

                {/* Conteúdo: 60% da largura à esquerda */}
                <div className="relative z-10 w-full max-w-[1200px] mx-auto px-5 py-16 sm:py-20 md:py-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
                  <div className="w-full md:w-[58%] lg:w-[56%] flex flex-col gap-6">
                    <div>
                      <span className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400">
                        Fluxo Automatizado
                      </span>
                      <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-medium h-section text-balance mt-2 leading-[1.15]">
                        Simplifique a gestão do seu salário automaticamente
                      </h2>
                      <p className="text-zinc-400 text-base sm:text-lg leading-relaxed mt-4 max-w-[34rem]">
                        Distribua seu salário entre despesas, contas remuneradas, gastos e mais. Depois, automatize tudo assim que o dinheiro cair na conta. Um jeito simples de deixar o dia de pagamento ainda mais tranquilo.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full pt-2">
                      <div className="p-3.5 rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-sm flex items-center gap-3">
                        <div className="w-7 h-7 shrink-0 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center text-white font-mono text-xs font-semibold">
                          01
                        </div>
                        <div className="text-xs text-zinc-200 font-medium leading-tight">Entrada de faturamento na conta PJ</div>
                      </div>
                      <div className="p-3.5 rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-sm flex items-center gap-3">
                        <div className="w-7 h-7 shrink-0 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center text-white font-mono text-xs font-semibold">
                          02
                        </div>
                        <div className="text-xs text-zinc-200 font-medium leading-tight">Separação automática em 3 baldes</div>
                      </div>
                      <div className="p-3.5 rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-sm flex items-center gap-3">
                        <div className="w-7 h-7 shrink-0 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center text-white font-mono text-xs font-semibold">
                          03
                        </div>
                        <div className="text-xs text-zinc-200 font-medium leading-tight">Pró-labore e lucro livre transferidos</div>
                      </div>
                    </div>
                  </div>

                  {/* Espaço correspondente aos 40% da imagem */}
                  <div className="hidden md:block w-[40%] shrink-0 h-10" aria-hidden="true" />
                </div>
              </section>

              {/* ── CARDS PRINCIPAIS: VISÃO DO MICRO AO MACRO ── */}
              <section id="pilares-gestao" aria-label="Recursos de Gestão Financeira" className="w-full band-tint border-b border-[rgba(55,50,47,0.12)]">
                <div className="w-full max-w-[1100px] mx-auto px-5 py-20 sm:py-24">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="bg-white p-6 sm:p-8 rounded-xl border border-[rgba(55,50,47,0.14)] flex flex-col justify-between gap-5 shadow-xs">
                      <div>
                        <div className="flex items-start gap-3.5 mb-1">
                          <h2 className="text-base sm:text-lg font-semibold text-secondary leading-snug">
                            Do micro ao macro: sua visão financeira
                          </h2>
                        </div>
                        <p className="text-ink-muted text-xs sm:text-sm leading-relaxed mt-3">
                          Gerencie seu dinheiro com análises que oferecem tanto um panorama rápido quanto detalhes aprofundados.
                        </p>
                        <p className="text-ink-muted text-xs sm:text-sm leading-relaxed mt-3">
                          Acompanhe seus hábitos de consumo e conecte contas externas para uma visão completa das suas finanças.
                        </p>
                      </div>
                      <div className="pt-4 border-t border-[rgba(55,50,47,0.08)] text-xs font-mono text-[#605A57]">
                        Visão consolidada
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-6 sm:p-8 rounded-xl border border-[rgba(55,50,47,0.14)] flex flex-col justify-between gap-5 shadow-xs">
                      <div>
                        <div className="flex items-start gap-3.5 mb-1">
                          <h2 className="text-base sm:text-lg font-semibold text-secondary leading-snug">
                            Notificações sob medida para você
                          </h2>
                        </div>
                        <p className="text-ink-muted text-xs sm:text-sm leading-relaxed mt-3">
                          Receba notificações em tempo real sobre a atividade da sua conta e saiba quando estiver perto do limite do seu planejamento.
                        </p>
                      </div>
                      <div className="pt-4 border-t border-[rgba(55,50,47,0.08)] text-xs font-mono text-[#605A57]">
                        Alertas em tempo real
                      </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-6 sm:p-8 rounded-xl border border-[rgba(55,50,47,0.14)] flex flex-col justify-between gap-5 shadow-xs">
                      <div>
                        <div className="flex items-start gap-3.5 mb-1">
                          <h2 className="text-base sm:text-lg font-semibold text-secondary leading-snug">
                            Mantenha seu futuro em foco
                          </h2>
                        </div>
                        <p className="text-ink-muted text-xs sm:text-sm leading-relaxed mt-3">
                          Uma visão completa do seu dinheiro. Saldo, seu patrimônio líquido em um só lugar e siga firme rumo às suas metas de longo prazo.
                        </p>
                      </div>
                      <div className="pt-4 border-t border-[rgba(55,50,47,0.08)] text-xs font-mono text-[#605A57]">
                        Metas de longo prazo
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* ── SEÇÃO: OS 3 BALDES DE CAIXA ── */}
              <section aria-label="Organização de Caixa" className="w-full py-20 px-5 border-y border-[rgba(55,50,47,0.12)] bg-white">
                <div className="w-full max-w-[1100px] mx-auto">
                  <div className="max-w-[42rem] mb-12">
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#605A57]">
                      Automação de Caixa
                    </span>
                    <h2 className="text-secondary text-2xl sm:text-3xl md:text-4xl font-medium h-section text-balance mt-2">
                      Várias contas e destinos dentro do seu saldo
                    </h2>
                    <p className="text-ink-muted text-sm sm:text-base leading-relaxed mt-3">
                      R$ 40 mil na conta da empresa não são R$ 40 mil livres. A Rovee divide cada entrada automaticamente em 3 destinos transparentes.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 sm:p-8 rounded-xl border border-[rgba(55,50,47,0.18)] bg-white shadow-xs flex flex-col justify-between gap-5 hover:border-[rgba(55,50,47,0.28)] transition-colors">
                      <div>
                        <div className="text-xs font-mono font-semibold text-[#605A57] uppercase">Destino 1</div>
                        <h3 className="text-lg font-semibold text-secondary mt-1">Seu para Retirar (PF)</h3>
                        <p className="text-xs text-[#605A57] font-mono mt-1">
                          Pró-labore calibrado e Lucro Isento
                        </p>
                        <p className="text-ink-muted text-xs sm:text-sm leading-relaxed mt-3">
                          O valor exato que você pode transferir para a sua conta de pessoa física sem pagar imposto duplicado.
                        </p>
                      </div>
                      <div className="pt-4 border-t border-[rgba(55,50,47,0.12)] flex items-center justify-between text-xs font-mono">
                        <span className="text-[#605A57]">Status:</span>
                        <span className="text-secondary font-semibold">Livre para transferir</span>
                      </div>
                    </div>

                    <div className="p-6 sm:p-8 rounded-xl border border-[rgba(55,50,47,0.18)] bg-white shadow-xs flex flex-col justify-between gap-5 hover:border-[rgba(55,50,47,0.28)] transition-colors">
                      <div>
                        <div className="text-xs font-mono font-semibold text-[#605A57] uppercase">Destino 2</div>
                        <h3 className="text-lg font-semibold text-secondary mt-1">Reserva da Empresa (PJ)</h3>
                        <p className="text-xs text-[#605A57] font-mono mt-1">
                          Capital de Giro e Custos Fixos
                        </p>
                        <p className="text-ink-muted text-xs sm:text-sm leading-relaxed mt-3">
                          Garante o funcionamento da sua empresa, ferramentas de trabalho e infraestrutura sem sustos no fim do mês.
                        </p>
                      </div>
                      <div className="pt-4 border-t border-[rgba(55,50,47,0.12)] flex items-center justify-between text-xs font-mono">
                        <span className="text-[#605A57]">Fôlego:</span>
                        <span className="text-secondary font-semibold">6 a 12 meses</span>
                      </div>
                    </div>

                    <div className="p-6 sm:p-8 rounded-xl border border-[rgba(55,50,47,0.18)] bg-white shadow-xs flex flex-col justify-between gap-5 hover:border-[rgba(55,50,47,0.28)] transition-colors">
                      <div>
                        <div className="text-xs font-mono font-semibold text-[#605A57] uppercase">Destino 3</div>
                        <h3 className="text-lg font-semibold text-secondary mt-1">Provisão do DAS</h3>
                        <p className="text-xs text-[#605A57] font-mono mt-1">
                          Imposto do Simples Nacional
                        </p>
                        <p className="text-ink-muted text-xs sm:text-sm leading-relaxed mt-3">
                          Calculado em tempo real conforme as notas entram. O valor do imposto já fica carimbado e protegido para o vencimento.
                        </p>
                      </div>
                      <div className="pt-4 border-t border-[rgba(55,50,47,0.12)] flex items-center justify-between text-xs font-mono">
                        <span className="text-[#605A57]">Vencimento:</span>
                        <span className="text-secondary font-semibold">100% Coberto</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* ── SEÇÃO: BANCOS CONECTADOS ── */}
              <section aria-label="Conexão Bancária" className="w-full band-tint border-b border-[rgba(55,50,47,0.12)]">
                <BanksIntegrationSection onOpenConsultant={handleOpenConsultant} />
              </section>

              {/* ── CTA FINAL ── */}
              <section aria-label="Comece agora" className="w-full bg-black py-20 px-5 text-white text-center flex flex-col items-center gap-5">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium h-section text-balance max-w-[38rem]">
                  Pronto para ter clareza total do seu caixa?
                </h2>
                <p className="text-zinc-400 text-sm sm:text-base max-w-[32rem]">
                  Descubra seu Cheque do Mês, proteja sua liquidez e nunca mais tenha dúvidas sobre o que você pode gastar.
                </p>
                <button
                  type="button"
                  onClick={() => handleOpenConsultant("gestao_cta_final")}
                  className="h-11 px-8 mt-2 bg-primary hover:bg-primary-hover text-white text-sm font-medium rounded-lg transition-colors cursor-pointer"
                >
                  Falar com um Consultor
                </button>
              </section>
            </main>

            {/* ── FOOTER ── */}
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
export default GestaoFinanceiraPage
