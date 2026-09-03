"use client"

interface AccountantsPortalSectionProps {
  onOpenConsultant: (origem: string) => void
}

export function AccountantsPortalSection({
  onOpenConsultant,
}: AccountantsPortalSectionProps) {
  return (
    <section aria-label="Portal do escritório" className="w-full bg-black border-b border-white/10 text-white">
      <div className="w-full max-w-[760px] mx-auto px-5 py-20 sm:py-24 flex flex-col items-start gap-5">
        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400">
          Onde estamos
        </span>
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-medium h-section text-balance">
          O painel de carteira ainda não existe.
        </h2>
        <p className="text-zinc-400 text-base leading-[1.58]">
          Hoje o acesso é por empresa, a convite do cliente, em perfil somente-leitura.
          Um painel para acompanhar todos os seus clientes num lugar só está em
          desenvolvimento — e é exatamente o que queremos desenhar junto com os
          primeiros escritórios parceiros, antes de escrever a primeira linha.
        </p>
        <button
          type="button"
          onClick={() => onOpenConsultant("contadores_parceria")}
          className="h-10 px-4 mt-2 bg-primary hover:bg-primary-hover text-white text-sm font-normal rounded-lg transition-colors cursor-pointer"
        >
          Quero participar do desenho
        </button>
      </div>
    </section>
  )
}
