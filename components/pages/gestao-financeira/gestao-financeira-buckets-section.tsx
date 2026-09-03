"use client"

export function GestaoFinanceiraBucketsSection() {
  return (
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
  )
}
