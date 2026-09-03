"use client"

const FAQ = [
  {
    p: "A Rovee substitui a contabilidade?",
    r: "Não. O contador é o profissional legalmente responsável pela escrituração, pela emissão de guias e pelas obrigações acessórias perante o Fisco. A Rovee atua no dia a dia da empresa — calcula a calibragem do pró-labore, separa o que pode ser gasto e entrega as memórias de cálculo prontas para você validar.",
  },
  {
    p: "Meu cliente me dá acesso aos relatórios?",
    r: "Sim, por convite dele, num perfil exclusivo de visualização. Você acessa faturamento, memórias de cálculo do Fator R e demonstrativos de conciliação sem pedir extrato por e-mail no fechamento. O convite parte sempre do cliente: a Rovee não condiciona o cadastro dele ao aval de ninguém.",
  },
  {
    p: "Existe um painel para gerir todos os meus clientes?",
    r: "Ainda não. Hoje o acesso é por empresa, a convite do cliente. O painel de carteira está em desenvolvimento e é justamente o que queremos desenhar junto com escritórios parceiros — é para isso que serve a conversa.",
  },
]

export function AccountantsFaqSection() {
  return (
    <section aria-label="Dúvidas frequentes" className="w-full band-tint">
      <div className="w-full max-w-[760px] mx-auto px-5 py-20 sm:py-24">
        <h2 className="text-secondary text-2xl sm:text-3xl md:text-4xl font-medium h-section text-balance">
          As três perguntas que sempre chegam.
        </h2>
        <div className="mt-10 flex flex-col divide-y divide-[rgba(55,50,47,0.12)] border-y border-[rgba(55,50,47,0.12)]">
          {FAQ.map((item) => (
            <div key={item.p} className="py-6 flex flex-col gap-2.5">
              <h3 className="text-secondary text-base font-medium tracking-[-0.018em]">
                {item.p}
              </h3>
              <p className="text-ink-muted text-sm leading-[1.6]">{item.r}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
