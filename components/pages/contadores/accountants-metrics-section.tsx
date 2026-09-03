"use client"

import { useState } from "react"

/** Minutos que o escritório gasta por cliente, por mês, nas três tarefas. */
const MINUTOS_POR_CLIENTE = 20

const NUMEROS_FIXOS = {
  esquerda: {
    rotulo: "Por cliente, por mês",
    valor: "3 idas e voltas",
    texto:
      "Pedir o extrato, separar despesa pessoal e alinhar o pró-labore deixam de ser tarefa do escritório",
  },
  direita: {
    rotulo: "Poder de movimentação da Rovee",
    valor: "Zero",
    texto: "Acesso somente-leitura: não transferimos, não pagamos e não emitimos nada",
  },
}

export function AccountantsMetricsSection() {
  const [clientes, setClientes] = useState(40)

  return (
    <section aria-label="Números" className="w-full band-tint border-b border-[rgba(55,50,47,0.12)]">
      <div className="w-full max-w-[1000px] mx-auto px-5 py-20 sm:py-24">
        <h2 className="text-secondary text-2xl sm:text-3xl md:text-4xl font-medium h-section text-center text-balance max-w-[42rem] mx-auto">
          O trabalho que sai da conta do escritório.
        </h2>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 md:gap-12">
          <div className="flex flex-col items-start">
            <p className="text-secondary text-base font-medium tracking-[-0.015em]">
              {NUMEROS_FIXOS.esquerda.rotulo}
            </p>
            <p className="text-primary text-[2rem] sm:text-[2.25rem] md:text-[2.5rem] font-medium tracking-[-0.03em] leading-[1.1] mt-1.5">
              {NUMEROS_FIXOS.esquerda.valor}
            </p>
            <p className="text-ink-muted text-sm leading-[1.55] mt-3 max-w-[19rem]">
              {NUMEROS_FIXOS.esquerda.texto}
            </p>
          </div>

          {/* Calculadora dinâmica baseada no número de clientes */}
          <div className="flex flex-col items-start">
            <label
              htmlFor="qtd-clientes"
              className="text-secondary text-base font-medium tracking-[-0.015em] flex items-baseline gap-1.5 flex-wrap"
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
                className="w-[3.6rem] px-1.5 py-0.5 text-center bg-white border-b-2 border-primary/40 focus:border-primary rounded-t text-secondary font-medium focus:outline-none tabular-nums"
              />
              clientes PJ
            </label>
            <p className="text-primary text-[2rem] sm:text-[2.25rem] md:text-[2.5rem] font-medium tracking-[-0.03em] leading-[1.1] mt-1.5 tabular-nums">
              {((clientes * MINUTOS_POR_CLIENTE) / 60).toLocaleString("pt-BR", {
                minimumFractionDigits: 1,
                maximumFractionDigits: 1,
              })}{" "}
              h/mês
            </p>
            <p className="text-ink-muted text-sm leading-[1.55] mt-3 max-w-[19rem]">
              Contando {MINUTOS_POR_CLIENTE} minutos por cliente somados nas três
              tarefas. Troque o número e veja a conta do seu escritório.
            </p>
          </div>

          <div className="flex flex-col items-start">
            <p className="text-secondary text-base font-medium tracking-[-0.015em]">
              {NUMEROS_FIXOS.direita.rotulo}
            </p>
            <p className="text-primary text-[2rem] sm:text-[2.25rem] md:text-[2.5rem] font-medium tracking-[-0.03em] leading-[1.1] mt-1.5">
              {NUMEROS_FIXOS.direita.valor}
            </p>
            <p className="text-ink-muted text-sm leading-[1.55] mt-3 max-w-[19rem]">
              {NUMEROS_FIXOS.direita.texto}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
