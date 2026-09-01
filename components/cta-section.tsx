export default function CTASection() {
  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      <div className="self-stretch flex justify-center items-stretch relative">
        {/* Left vertical pattern */}
        <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden hidden sm:block">
          <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
            {Array.from({ length: 150 }).map((_, i) => (
              <div
                key={i}
                className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
              />
            ))}
          </div>
        </div>

        {/* Center Container */}
        <div className="flex-1 max-w-[1060px] border-l border-r border-[rgba(55,50,47,0.12)] px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-28 flex flex-col justify-center items-center text-center relative overflow-hidden bg-white">
          <div className="w-full max-w-[680px] flex flex-col justify-start items-center gap-6 relative z-10">
            <div className="self-stretch flex flex-col justify-start items-center gap-3">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#605A57]">
                Comece Hoje Mesmo
              </span>
              <h2 className="self-stretch text-center text-[#37322F] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight font-sans tracking-tight">
                Pronto para saber seu lucro real e pagar menos imposto?
              </h2>
              <p className="self-stretch text-center text-[#605A57] text-sm sm:text-base md:text-lg leading-relaxed font-sans max-w-[580px] mx-auto">
                Crie sua conta em 3 minutos, importe seu extrato e descubra seu Fator R ótimo, seu Cheque do Mês e a blindagem contra a mistura de contas.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <a
                href="#comecar"
                className="h-12 px-8 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded flex items-center justify-center shadow-sm transition-all"
              >
                Criar Conta Gratuita
              </a>
              <a
                href="#fiscal"
                className="h-12 px-6 bg-white hover:bg-[#F1F5F9] text-[#37322F] border border-[rgba(55,50,47,0.15)] text-sm font-medium rounded flex items-center justify-center transition-all"
              >
                Ver Demonstração
              </a>
            </div>

            <p className="text-[11px] text-[#82807c] font-sans">
              Sem necessidade de cartão de crédito • Totalmente compatível com Simples Nacional e Lucro Presumido
            </p>
          </div>
        </div>

        {/* Right vertical pattern */}
        <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden hidden sm:block">
          <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
            {Array.from({ length: 150 }).map((_, i) => (
              <div
                key={i}
                className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
