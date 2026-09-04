"use client"

interface GestaoFinanceiraCtaSectionProps {
  onOpenConsultant: (origem: string) => void
}

export function GestaoFinanceiraCtaSection({
  onOpenConsultant,
}: GestaoFinanceiraCtaSectionProps) {
  return (
    <section aria-label="Comece agora" className="w-full bg-black py-20 px-5 text-white text-center flex flex-col items-center gap-5">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium h-section text-balance max-w-[38rem]">
        Pronto para ter clareza total do seu caixa?
      </h2>
      <p className="text-zinc-400 text-sm sm:text-base max-w-[32rem]">
        Descubra seu Cheque do Mês, proteja sua liquidez e nunca mais tenha dúvidas sobre o que você pode gastar.
      </p>
      <button
        type="button"
        onClick={() => onOpenConsultant("gestao_cta_final")}
        className="h-11 px-8 mt-2 bg-primary hover:bg-primary-hover text-white text-sm font-medium rounded-lg transition-colors cursor-pointer"
      >
        Falar com um Consultor
      </button>
    </section>
  )
}
