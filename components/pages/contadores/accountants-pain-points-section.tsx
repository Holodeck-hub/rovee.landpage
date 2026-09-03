"use client"

const DORES = [
  {
    titulo: "Extrato despoluído.",
    texto:
      "O Sentinela PF × PJ marca a despesa pessoal paga pela empresa no dia em que ela acontece. O que chega na conciliação já vem separado.",
  },
  {
    titulo: "Pró-labore calibrado.",
    texto:
      "A memória de cálculo do Fator R vem com FS12, RBT12 e o valor exato para cruzar os 28%. Sem a reunião de alinhamento todo mês.",
  },
  {
    titulo: "Menos pergunta fora de hora.",
    texto:
      "O cliente enxerga sozinho quanto pode retirar e quanto é imposto a vencer. A dúvida morre no app, não no seu WhatsApp de domingo.",
  },
]

export function AccountantsPainPointsSection() {
  return (
    <section aria-label="O que muda no fechamento" className="w-full band-tint border-y border-[rgba(55,50,47,0.12)]">
      <div className="w-full max-w-[1100px] mx-auto px-5 py-20 sm:py-24">
        <h2 className="text-secondary text-2xl sm:text-3xl md:text-4xl font-medium h-section text-balance max-w-[38rem]">
          O trabalho que some do seu mês.
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {DORES.map((d) => (
            <div key={d.titulo} className="flex flex-col items-start gap-2.5">
              <h3 className="text-secondary text-base font-medium tracking-[-0.018em]">
                {d.titulo}
              </h3>
              <p className="text-ink-muted text-sm leading-[1.6]">{d.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
