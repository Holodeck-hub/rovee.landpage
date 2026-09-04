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
                  Conecte todas as suas contas PJ
                </h2>
              </div>
              <p className="text-ink-muted text-xs sm:text-sm leading-relaxed mt-3">
                Bancos, contas e cartões da empresa em um só lugar via Open Finance, sem
                depender de planilha paralela ou exportar extrato à mão.
              </p>
              <p className="text-ink-muted text-xs sm:text-sm leading-relaxed mt-3">
                Acompanhe o Cheque do Mês num relance ou abra a memória de cálculo completa do
                Fator R e do DAS provisionado.
              </p>
            </div>
            <div className="pt-4 border-t border-[rgba(55,50,47,0.08)] text-xs font-mono text-[#605A57]">
              Contas conectadas automaticamente
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-[rgba(55,50,47,0.14)] flex flex-col justify-between gap-5 shadow-xs">
            <div>
              <div className="flex items-start gap-3.5 mb-1">
                <h2 className="text-base sm:text-lg font-semibold text-secondary leading-snug">
                  Alertas antes do imposto vencer
                </h2>
              </div>
              <p className="text-ink-muted text-xs sm:text-sm leading-relaxed mt-3">
                Seja avisado quando o DAS estiver perto do vencimento, quando o Fator R sair de
                faixa ou quando um gasto pessoal cair na conta errada.
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
                  Runway de caixa sempre visível
                </h2>
              </div>
              <p className="text-ink-muted text-xs sm:text-sm leading-relaxed mt-3">
                Projeção de quanto caixa sua PJ tem para os próximos meses, considerando
                sazonalidade de faturamento e a reserva já provisionada.
              </p>
            </div>
            <div className="pt-4 border-t border-[rgba(55,50,47,0.08)] text-xs font-mono text-[#605A57]">
              Runway projetado
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
