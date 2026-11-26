"use client"

interface InteligenciaFiscalCtaSectionProps {
  onOpenConsultant: (origem: string) => void
}

export function InteligenciaFiscalCtaSection({
  onOpenConsultant,
}: InteligenciaFiscalCtaSectionProps) {
  return (
    <section aria-label="Comece agora" className="w-full py-20 px-5 text-center flex flex-col items-center gap-5">
      <h2 className="text-secondary text-2xl sm:text-3xl md:text-4xl font-medium h-section text-balance max-w-[38rem]">
        Pare de pagar imposto a mais por falta de cálculo.
      </h2>
      <p className="text-ink-muted text-sm sm:text-base max-w-[32rem]">
        Receba seu diagnóstico do Fator R e a memória de cálculo pronta para o seu contador em minutos.
      </p>
      <button
        type="button"
        onClick={() => onOpenConsultant("fiscal_cta_final")}
        className="h-11 px-8 mt-2 bg-primary hover:bg-primary-hover text-white text-sm font-medium rounded-lg transition-colors cursor-pointer"
      >
        Falar com um Consultor Fiscal
      </button>
    </section>
  )
}
