"use client"

const PASSOS = [
  {
    numero: "01",
    titulo: "Autorize a conexão",
    desc: "Você escolhe o banco e autoriza pelo próprio app dele. A Rovee recebe um token temporário e revogável do Banco Central — nunca a sua senha.",
  },
  {
    numero: "02",
    titulo: "Leitura automática",
    desc: "Extratos, notas e recebimentos entram sozinhos, todos os dias, sem upload manual de OFX, PDF ou CSV.",
  },
  {
    numero: "03",
    titulo: "Classificação e provisão",
    desc: "Cada transação é categorizada assim que chega, e o Cheque do Mês, o Fator R e o DAS provisionado se atualizam em tempo real.",
  },
]

export function IntegracoesComoFuncionaSection() {
  return (
    <section id="como-funciona" aria-label="Como funciona a conexão" className="w-full band-tint border-b border-[rgba(55,50,47,0.12)]">
      <div className="w-full max-w-[1100px] mx-auto px-5 py-20 sm:py-24">
        <div className="text-center mb-12 max-w-[38rem] mx-auto">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#605A57]">
            Como funciona
          </span>
          <h2 className="text-secondary text-2xl sm:text-3xl md:text-4xl font-medium h-section text-balance mt-2">
            Três passos, e o resto é automático
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PASSOS.map((passo) => (
            <div
              key={passo.numero}
              className="bg-white p-6 sm:p-8 rounded-xl border border-[rgba(55,50,47,0.14)] flex flex-col gap-3 shadow-xs"
            >
              <span className="font-mono text-xs font-semibold text-primary tracking-wider">{passo.numero}</span>
              <h3 className="text-base sm:text-lg font-semibold text-secondary leading-snug">{passo.titulo}</h3>
              <p className="text-ink-muted text-xs sm:text-sm leading-relaxed">{passo.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
