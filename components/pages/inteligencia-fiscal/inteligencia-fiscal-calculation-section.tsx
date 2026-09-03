"use client"

export function InteligenciaFiscalCalculationSection() {
  return (
    <section aria-label="Comparativo de Anexos" className="w-full py-20 px-5 border-b border-[rgba(55,50,47,0.12)] bg-white">
      <div className="w-full max-w-[900px] mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#605A57]">
            Memória de Cálculo
          </span>
          <h2 className="text-secondary text-2xl sm:text-3xl md:text-4xl font-medium h-section text-balance mt-2">
            A diferença entre pagar 15,5% ou 6% de imposto
          </h2>
          <p className="text-ink-muted text-sm sm:text-base mt-2 max-w-[34rem] mx-auto">
            Para prestadores de serviços de TI, engenharia e consultoria no Simples Nacional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Limpo, padrão Rovee */}
          <div className="p-6 sm:p-8 rounded-xl border border-[rgba(55,50,47,0.12)] bg-white flex flex-col justify-between gap-5 shadow-xs">
            <div>
              <div className="text-xs font-mono font-semibold text-[#605A57] uppercase">
                Sem calibração (Anexo V)
              </div>
              <div className="text-2xl font-bold text-secondary mt-2">
                Alíquota a partir de 15,5%
              </div>
              <p className="text-xs sm:text-sm text-ink-muted mt-3 leading-relaxed">
                Se o pró-labore não alcançar 28% do faturamento dos últimos 12 meses (RBT12), sua empresa cai no Anexo V e recolhe uma das alíquotas mais altas do Simples Nacional.
              </p>
            </div>
            <div className="pt-4 border-t border-[rgba(55,50,47,0.08)] text-xs font-mono text-[#605A57]">
              Custo fiscal elevado sem otimização
            </div>
          </div>

          {/* Card 2: Limpo, padrão Rovee */}
          <div className="p-6 sm:p-8 rounded-xl border border-[rgba(55,50,47,0.12)] bg-white flex flex-col justify-between gap-5 shadow-xs">
            <div>
              <div className="text-xs font-mono font-semibold text-[#605A57] uppercase">
                Calibrado com a Rovee (Anexo III)
              </div>
              <div className="text-2xl font-bold text-secondary mt-2">
                Alíquota a partir de 6,0%
              </div>
              <p className="text-xs sm:text-sm text-ink-muted mt-3 leading-relaxed">
                A Rovee calcula exatamente o pró-labore que cruza a régua dos 28%, minimizando a soma de DAS, INSS e IRPF com memória de cálculo pronta para o contador.
              </p>
            </div>
            <div className="pt-4 border-t border-[rgba(55,50,47,0.08)] text-xs font-mono text-secondary font-semibold">
              Economia média de R$ 2.400 por mês
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
