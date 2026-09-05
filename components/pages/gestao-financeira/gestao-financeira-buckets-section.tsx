"use client"

import { AnimatedWave } from "@/components/layout"

export function GestaoFinanceiraBucketsSection() {
  return (
    <section aria-label="Organização de Caixa" className="w-full py-20 px-5 border-y border-white/10 bg-black text-white relative overflow-hidden">
      {/* Background Animated Wave */}
      <div className="absolute inset-0 w-full h-full opacity-40 sm:opacity-50 z-0 pointer-events-none">
        <AnimatedWave />
      </div>

      <div className="w-full max-w-[1100px] mx-auto relative z-10">

        <div className="max-w-[42rem] mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400">
            Automação de Caixa
          </span>
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-medium h-section text-balance mt-2">
            Várias contas e destinos dentro do seu saldo
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mt-3">
            R$ 40 mil na conta da empresa não são R$ 40 mil livres. A Rovee divide cada entrada automaticamente em 3 destinos transparentes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Seu para Retirar */}
          <div className="p-6 sm:p-8 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 backdrop-blur-md transition-all flex flex-col justify-between gap-5">
            <div>
              <div className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider">Destino 1</div>
              <h3 className="text-lg font-semibold text-white mt-1">Seu para Retirar (PF)</h3>
              <p className="text-xs text-zinc-400 font-mono mt-1">
                Pró-labore calibrado e Lucro Isento
              </p>
              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mt-3">
                O valor exato que você pode transferir para a sua conta de pessoa física sem pagar imposto duplicado.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
              <span className="text-zinc-500 uppercase tracking-wider text-[11px]">Status</span>
              <span className="text-zinc-200 font-medium">Livre para transferir</span>
            </div>
          </div>

          {/* Card 2: Reserva da Empresa */}
          <div className="p-6 sm:p-8 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 backdrop-blur-md transition-all flex flex-col justify-between gap-5">
            <div>
              <div className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider">Destino 2</div>
              <h3 className="text-lg font-semibold text-white mt-1">Reserva da Empresa (PJ)</h3>
              <p className="text-xs text-zinc-400 font-mono mt-1">
                Capital de Giro e Custos Fixos
              </p>
              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mt-3">
                Garante o funcionamento da sua empresa, ferramentas de trabalho e infraestrutura sem sustos no fim do mês.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
              <span className="text-zinc-500 uppercase tracking-wider text-[11px]">Fôlego</span>
              <span className="text-zinc-200 font-medium">6 a 12 meses</span>
            </div>
          </div>

          {/* Card 3: Provisão do DAS */}
          <div className="p-6 sm:p-8 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 backdrop-blur-md transition-all flex flex-col justify-between gap-5">
            <div>
              <div className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider">Destino 3</div>
              <h3 className="text-lg font-semibold text-white mt-1">Provisão do DAS</h3>
              <p className="text-xs text-zinc-400 font-mono mt-1">
                Imposto do Simples Nacional
              </p>
              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mt-3">
                Calculado em tempo real conforme as notas entram. O valor do imposto já fica carimbado e protegido para o vencimento.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
              <span className="text-zinc-500 uppercase tracking-wider text-[11px]">Vencimento</span>
              <span className="text-zinc-200 font-medium">100% Coberto</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
