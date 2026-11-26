"use client"

import { BankConstellation } from "../../shared/bank-constellation"

const BANCOS = [
  "Banco do Brasil",
  "Bradesco",
  "C6",
  "Cora",
  "Inter",
  "Itaú",
  "Nubank",
  "PagBank",
  "Santander",
  "Sicoob",
  "Sicredi",
  "XP",
]

export function IntegracoesBancosSection() {
  return (
    <section aria-label="Bancos suportados" className="w-full border-b border-[rgba(55,50,47,0.12)]">
      <div className="w-full max-w-[1100px] mx-auto px-5 py-20 sm:py-24 grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-16 items-center">
        <div>
          <BankConstellation />
        </div>

        <div className="flex flex-col items-start gap-5">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-ink-faint">
            Cobertura
          </span>

          <h2 className="text-secondary text-2xl sm:text-3xl md:text-4xl font-medium h-section text-balance">
            Os bancos que a sua PJ já usa
          </h2>

          <p className="text-ink-muted text-base leading-[1.58] max-w-[32rem]">
            Conecte quantas contas PJ precisar, de bancos diferentes, e veja o caixa
            consolidado num só lugar, sem depender de planilha paralela.
          </p>

          <ul className="flex flex-wrap gap-2 max-w-[32rem]">
            {BANCOS.map((banco) => (
              <li
                key={banco}
                className="px-3 py-1.5 rounded-full border border-[rgba(55,50,47,0.14)] text-xs font-medium text-secondary"
              >
                {banco}
              </li>
            ))}
          </ul>

          <p className="text-ink-faint text-xs leading-relaxed max-w-[32rem]">
            Acesso 100% somente-leitura: a Rovee lê seus extratos e nunca movimenta, transfere
            ou paga nada nas suas contas.
          </p>
        </div>
      </div>
    </section>
  )
}
