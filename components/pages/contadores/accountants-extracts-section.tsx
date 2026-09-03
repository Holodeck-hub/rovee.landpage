"use client"

import { BankConstellation } from "./bank-constellation"

interface AccountantsExtractsSectionProps {
  onOpenConsultant: (origem: string) => void
}

export function AccountantsExtractsSection({
  onOpenConsultant,
}: AccountantsExtractsSectionProps) {
  return (
    <section aria-label="De onde vêm os extratos" className="w-full border-b border-[rgba(55,50,47,0.12)]">
      <div className="w-full max-w-[1100px] mx-auto px-5 py-20 sm:py-24 grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-16 items-center">
        <div className="order-2 md:order-1">
          <BankConstellation />
        </div>

        <div className="order-1 md:order-2 flex flex-col items-start gap-5">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-ink-faint">
            De onde vêm os números
          </span>

          <h2 className="text-secondary text-2xl sm:text-3xl md:text-4xl font-medium h-section text-balance">
            Pare de cobrar extrato do cliente no dia 5.
          </h2>

          <p className="text-ink-muted text-base leading-[1.58] max-w-[32rem]">
            Contador: o extrato entra pelo lado do cliente, por OFX ou PDF, e já chega
            classificado, com a despesa pessoal separada da despesa da empresa. Você
            deixa de perseguir arquivo por WhatsApp no fechamento.
          </p>

          <p className="text-ink-faint text-xs leading-relaxed max-w-[32rem]">
            A conexão bancária automática via Open Finance está em homologação de
            cobertura e segurança. Enquanto não conclui, a entrada é por importação de
            arquivo, e nós não anunciamos o que ainda não está no ar.
          </p>

          <button
            type="button"
            onClick={() => onOpenConsultant("contadores_conciliacao")}
            className="h-10 px-4 mt-1 bg-primary hover:bg-primary-hover text-white text-sm font-normal rounded-lg transition-colors cursor-pointer"
          >
            Ver como chega na sua mesa
          </button>
        </div>
      </div>
    </section>
  )
}
