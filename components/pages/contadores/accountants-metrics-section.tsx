"use client"

import { useState } from "react"

/** Minutos que o escritório gasta por cliente, por mês, nas três tarefas. */
const MINUTOS_POR_CLIENTE = 20

export function AccountantsMetricsSection() {
  const [clientes, setClientes] = useState(40)
  const horas = (clientes * MINUTOS_POR_CLIENTE) / 60

  return (
    <section aria-label="Números" className="w-full band-tint border-b border-[rgba(55,50,47,0.12)]">
      <div className="w-full max-w-[1000px] mx-auto px-5 py-20 sm:py-24">
        <h2 className="text-secondary text-2xl sm:text-3xl md:text-4xl font-medium h-section text-center text-balance max-w-[42rem] mx-auto">
          O trabalho que sai da conta do escritório.
        </h2>

        {/* Os três números vivem numa moldura só, como cards brancos sobre uma
            superfície, em vez de soltos lado a lado. */}
        <div className="mt-14 rounded-3xl border border-[rgba(55,50,47,0.08)] bg-[#F8FAFC] p-3 sm:p-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {/* Card 1 */}
            <div className="flex flex-col justify-between gap-6 rounded-2xl border border-[rgba(55,50,47,0.1)] bg-white p-6 sm:p-7">
              <p className="text-xs font-mono uppercase tracking-wider text-[#8B8D9B]">Por cliente, por mês</p>
              <div>
                <p className="text-secondary text-3xl sm:text-4xl font-semibold tracking-[-0.03em] leading-[1.05]">
                  3 idas e voltas
                </p>
                <p className="text-ink-muted text-sm leading-[1.55] mt-3">
                  Pedir o extrato, separar despesa pessoal e alinhar o pró-labore deixam de ser
                  tarefa do escritório.
                </p>
              </div>
            </div>

            {/* Card 2: calculadora, número em destaque no centro do bento */}
            <div className="flex flex-col justify-between gap-6 rounded-2xl border border-primary/20 bg-white p-6 sm:p-7">
              <label
                htmlFor="qtd-clientes"
                className="flex flex-wrap items-baseline gap-1.5 text-xs font-mono uppercase tracking-wider text-[#8B8D9B]"
              >
                Escritório com
                <input
                  id="qtd-clientes"
                  type="number"
                  min={1}
                  max={999}
                  value={clientes}
                  onChange={(event) => {
                    const n = Number(event.target.value)
                    setClientes(Number.isFinite(n) ? Math.min(999, Math.max(1, n)) : 1)
                  }}
                  className="w-[3.2rem] rounded-t border-b-2 border-primary/40 bg-[#F8FAFC] px-1 py-0.5 text-center font-mono text-sm normal-case tracking-normal text-secondary font-semibold tabular-nums focus:border-primary focus:outline-none"
                />
                clientes PJ
              </label>
              <div>
                <p className="text-primary text-5xl sm:text-6xl font-bold tracking-[-0.04em] leading-none tabular-nums">
                  {horas.toLocaleString("pt-BR", { minimumFractionDigits: 1, maximumFractionDigits: 1 })}
                  <span className="ml-1 text-2xl sm:text-3xl font-semibold">h/mês</span>
                </p>
                <p className="text-ink-muted text-sm leading-[1.55] mt-3">
                  Contando {MINUTOS_POR_CLIENTE} minutos por cliente. Troque o número e veja a
                  conta do seu escritório.
                </p>
              </div>
            </div>

            {/* Card 3: textura de pontos no canto, decorativa */}
            <div className="relative flex flex-col justify-between gap-6 overflow-hidden rounded-2xl border border-[rgba(55,50,47,0.1)] bg-white p-6 sm:p-7">
              <div
                className="pointer-events-none absolute -right-3 -top-3 grid grid-cols-6 gap-1.5 opacity-[0.14]"
                aria-hidden="true"
              >
                {Array.from({ length: 30 }).map((_, i) => (
                  <span key={i} className="h-1 w-1 rounded-full bg-secondary" />
                ))}
              </div>
              <p className="text-xs font-mono uppercase tracking-wider text-[#8B8D9B]">
                Poder de movimentação da Rovee
              </p>
              <div>
                <p className="text-secondary text-5xl sm:text-6xl font-bold tracking-[-0.04em] leading-none">
                  Zero
                </p>
                <p className="text-ink-muted text-sm leading-[1.55] mt-3">
                  Acesso somente-leitura: não transferimos, não pagamos e não emitimos nada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
