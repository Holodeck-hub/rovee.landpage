"use client"

export function GestaoFinanceiraFeaturesSection() {
  return (
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
  )
}
