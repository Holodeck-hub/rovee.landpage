"use client"

interface IntegracoesCtaSectionProps {
  onOpenConsultant: (origem: string) => void
}

export function IntegracoesCtaSection({ onOpenConsultant }: IntegracoesCtaSectionProps) {
  return (
    <section aria-label="Comece agora" className="w-full bg-black py-20 px-5 text-white text-center flex flex-col items-center gap-5">
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium h-section text-balance max-w-[38rem]">
        Conecte suas contas e pare de digitar extrato.
      </h3>
      <p className="text-zinc-400 text-sm sm:text-base max-w-[32rem]">
        Fale com um consultor Rovee e veja quais das suas contas PJ já podem ser conectadas
        hoje via Open Finance.
      </p>
      <button
        type="button"
        onClick={() => onOpenConsultant("integracoes_cta_final")}
        className="h-11 px-8 mt-2 bg-primary hover:bg-primary-hover text-white text-sm font-medium rounded-lg transition-colors cursor-pointer"
      >
        Falar com um Consultor
      </button>
    </section>
  )
}
