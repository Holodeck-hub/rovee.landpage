"use client"

export function GestaoFinanceiraSalaryFlowSection() {
  return (
    <section aria-label="Gestão de Salário e Distribuição" className="w-full border-b border-[rgba(55,50,47,0.12)] relative overflow-hidden">
      {/* Imagem: 40% da largura à direita, só a partir do md — abaixo disso
          a seção vira uma coluna só, e a imagem em largura de tela por trás
          do texto (opacidade 100%) brigava com a leitura em vez de ilustrar. */}
      <div
        className="hidden md:flex absolute right-0 top-[55%] -translate-y-1/2 w-[42%] lg:w-[38%] h-[130%] pointer-events-none select-none overflow-hidden z-0 items-center justify-center"
        aria-hidden="true"
      >
        <img
          src="/imagens/backgroud-mobile-v1.jpg"
          alt=""
          loading="lazy"
          className="w-full h-full object-contain object-center scale-112 opacity-100 drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] translate-y-2"
        />
      </div>

      {/* Conteúdo: 60% da largura à esquerda */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-5 py-16 sm:py-20 md:py-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        <div className="w-full md:w-[58%] lg:w-[56%] flex flex-col gap-6">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-ink-faint">
              Fluxo Automatizado
            </span>
            <h2 className="text-secondary text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-medium h-section text-balance mt-2 leading-[1.15]">
              Do faturamento ao pró-labore, sem digitar nada
            </h2>
            <p className="text-ink-muted text-base sm:text-lg leading-relaxed mt-4 max-w-[34rem]">
              Assim que o faturamento cai na conta PJ, a Rovee separa automaticamente em três
              baldes (seu, empresa e imposto) e transfere o pró-labore calibrado sem você mexer
              em nada.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full pt-2">
            <div className="p-3.5 rounded-xl border border-[rgba(55,50,47,0.12)] bg-white flex items-center gap-3">
              <div className="w-7 h-7 shrink-0 rounded-lg bg-primary/10 border border-[rgba(55,50,47,0.08)] flex items-center justify-center text-primary font-mono text-xs font-semibold">
                01
              </div>
              <div className="text-xs text-secondary font-medium leading-tight">Entrada de faturamento na conta PJ</div>
            </div>
            <div className="p-3.5 rounded-xl border border-[rgba(55,50,47,0.12)] bg-white flex items-center gap-3">
              <div className="w-7 h-7 shrink-0 rounded-lg bg-primary/10 border border-[rgba(55,50,47,0.08)] flex items-center justify-center text-primary font-mono text-xs font-semibold">
                02
              </div>
              <div className="text-xs text-secondary font-medium leading-tight">Separação automática em 3 baldes</div>
            </div>
            <div className="p-3.5 rounded-xl border border-[rgba(55,50,47,0.12)] bg-white flex items-center gap-3">
              <div className="w-7 h-7 shrink-0 rounded-lg bg-primary/10 border border-[rgba(55,50,47,0.08)] flex items-center justify-center text-primary font-mono text-xs font-semibold">
                03
              </div>
              <div className="text-xs text-secondary font-medium leading-tight">Pró-labore e lucro livre transferidos</div>
            </div>
          </div>
        </div>

        {/* Espaço correspondente aos 40% da imagem */}
        <div className="hidden md:block w-[40%] shrink-0 h-10" aria-hidden="true" />
      </div>
    </section>
  )
}
