"use client"

interface CTASectionProps {
  onOpenConsultant?: (origem?: string) => void
}

export function CTASection({ onOpenConsultant }: CTASectionProps) {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="self-stretch flex justify-center items-stretch relative">
        <div className="flex-1 w-full px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-28 flex flex-col justify-center items-center text-center relative overflow-hidden">
          <div className="w-full max-w-[680px] flex flex-col justify-start items-center gap-6 relative z-10">
            <div className="self-stretch flex flex-col justify-start items-center gap-3">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-ink-muted">
                Comece Hoje Mesmo
              </span>
              <h2 className="self-stretch text-center text-secondary text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium font-sans h-section">
                Pronto para saber seu lucro real e pagar menos imposto?
              </h2>
              <p className="self-stretch text-center text-ink-muted text-sm sm:text-base md:text-lg leading-relaxed font-sans max-w-[580px] mx-auto">
                Crie sua conta em 3 minutos, importe seu extrato e descubra seu Fator R ótimo, seu Cheque do Mês e a blindagem contra a mistura de contas.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => onOpenConsultant?.("cta_final")}
                className="h-12 px-8 bg-primary hover:bg-primary-hover text-white text-sm font-medium rounded flex items-center justify-center shadow-sm transition-all cursor-pointer"
              >
                Fale com Consultor
              </button>
              <a
                href="#fiscal"
                className="h-12 px-6 bg-white hover:bg-ground-alt text-secondary border border-[rgba(55,50,47,0.15)] text-sm font-medium rounded flex items-center justify-center transition-all"
              >
                Ver como funciona
              </a>
            </div>

            <p className="text-[11px] text-ink-faint font-sans">
              Sem necessidade de cartão de crédito • Totalmente compatível com Simples Nacional e Lucro Presumido
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CTASection
