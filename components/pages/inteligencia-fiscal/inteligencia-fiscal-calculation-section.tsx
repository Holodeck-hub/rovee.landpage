"use client"

import { InteligenciaFiscalAnexosChart } from "./inteligencia-fiscal-anexos-chart"
import { InteligenciaFiscalMemoriaTabela } from "./inteligencia-fiscal-memoria-tabela"

export function InteligenciaFiscalCalculationSection() {
  return (
    <section aria-label="Comparativo de Anexos" className="w-full py-20 px-5 border-b border-[rgba(55,50,47,0.12)] bg-white">
      <div className="w-full max-w-[900px] mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-ink-muted">
            Memória de Cálculo
          </span>
          <h2 className="text-secondary text-2xl sm:text-3xl md:text-4xl font-medium h-section text-balance mt-2">
            A diferença entre pagar 15,5% ou 6% de imposto
          </h2>
          <p className="text-ink-muted text-sm sm:text-base mt-2 max-w-[34rem] mx-auto">
            Para prestadores de serviços de TI, engenharia e consultoria no Simples Nacional.
          </p>
        </div>

        <div className="mb-10 max-w-[420px] mx-auto">
          <InteligenciaFiscalAnexosChart />
        </div>

        <InteligenciaFiscalMemoriaTabela />

        <p className="mt-6 text-center text-xs sm:text-sm text-ink-muted max-w-[38rem] mx-auto leading-relaxed">
          Se o pró-labore não alcançar 28% do faturamento dos últimos 12 meses (Fator R), a
          empresa cai no Anexo V. A Rovee calcula o pró-labore que cruza essa régua e minimiza a
          soma de DAS, INSS e IRPF, com a memória de cálculo pronta para o contador.
        </p>
      </div>
    </section>
  )
}
