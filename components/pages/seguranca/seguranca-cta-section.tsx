"use client"

interface SegurancaCtaSectionProps {
  onOpenConsultant: (origem: string) => void
}

export function SegurancaCtaSection({
  onOpenConsultant,
}: SegurancaCtaSectionProps) {
  return (
    <section aria-label="Comece agora" className="w-full py-20 px-5 text-center flex flex-col items-center gap-5">
      <h2 className="text-secondary text-2xl sm:text-3xl md:text-4xl font-medium h-section text-balance max-w-[38rem]">
        Transparência absoluta e dados blindados.
      </h2>
      <p className="text-ink-muted text-sm sm:text-base max-w-[32rem]">
        Dúvidas sobre o tratamento de dados da sua PJ ou compliance tributário? Converse com nossos especialistas.
      </p>
      <button
        type="button"
        onClick={() => onOpenConsultant("seguranca_cta_final")}
        className="h-11 px-8 mt-2 bg-primary hover:bg-primary-hover text-white text-sm font-medium rounded-lg transition-colors cursor-pointer"
      >
        Tirar Dúvidas de Compliance
      </button>
    </section>
  )
}
