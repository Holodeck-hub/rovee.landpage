"use client"

const LIMITES = [
  "Não faz escrituração contábil",
  "Não emite guia, DAS nem obrigação acessória",
  "Não movimenta dinheiro: o acesso bancário é somente-leitura",
  "Não condiciona o cadastro do cliente ao aval de ninguém",
]

export function AccountantsBoundariesSection() {
  return (
    <section aria-label="Limites da Rovee" className="w-full border-b border-[rgba(55,50,47,0.12)]">
      <div className="w-full max-w-[1100px] mx-auto px-5 py-20 sm:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
        <div className="flex flex-col items-start gap-5">
          <h2 className="text-secondary text-2xl sm:text-3xl md:text-4xl font-medium h-section text-balance">
            A Rovee não faz a sua parte.
          </h2>
          <p className="text-ink-muted text-base leading-[1.58] max-w-[32rem]">
            Escrituração, guias e obrigações acessórias continuam com você — é a sua
            responsabilidade legal, e a Rovee não encosta nisso. O que ela faz é
            entregar o mês organizado antes de chegar na sua mesa.
          </p>
        </div>

        <ul className="flex flex-col divide-y divide-[rgba(55,50,47,0.1)] border-y border-[rgba(55,50,47,0.1)]">
          {LIMITES.map((item) => (
            <li key={item} className="py-4 text-sm text-secondary">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
