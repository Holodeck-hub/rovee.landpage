"use client"

interface NavbarProps {
  onOpenConsultant: () => void
}

interface StickyNavbarProps extends NavbarProps {
  isScrolled: boolean
}

export function StickyNavbar({ isScrolled, onOpenConsultant }: StickyNavbarProps) {
  return (
    <div
      className={`fixed top-0 left-0 right-0 w-full h-14 z-50 bg-white/95 backdrop-blur-xl border-b border-[rgba(55,50,47,0.12)] shadow-[0px_2px_8px_rgba(55,50,47,0.04)] px-4 sm:px-8 md:px-12 flex items-center justify-between transition-all duration-300 ease-out origin-center ${
        isScrolled
          ? "opacity-100 scale-100 pointer-events-auto translate-y-0"
          : "opacity-0 scale-95 pointer-events-none -translate-y-2"
      }`}
    >
      <div className="flex items-center justify-between w-full max-w-[1320px] mx-auto">
        <div className="flex justify-center items-center gap-6">
          <a href="#" className="flex items-center hover:opacity-85 transition-opacity">
            <span className="text-secondary text-lg sm:text-xl font-bold font-sans tracking-tight">
              Rovee
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-3.5 pl-2 text-xs font-medium text-[rgba(49,45,43,0.80)] font-sans">
            <a href="#fiscal" className="hover:text-secondary transition-colors">
              Inteligência Fiscal
            </a>
            <a href="#agentes" className="hover:text-secondary transition-colors">
              Agentes
            </a>
            <a href="#contador" className="hover:text-secondary transition-colors">
              Contador
            </a>
            <a href="#integracoes" className="hover:text-secondary transition-colors">
              Integrações
            </a>
            <a href="#metricas" className="hover:text-secondary transition-colors">
              Métricas
            </a>
            <a href="#roadmap" className="hover:text-secondary transition-colors">
              Roadmap
            </a>
            <a href="#seguranca" className="hover:text-secondary transition-colors">
              Segurança
            </a>
            <a href="#planos" className="hover:text-secondary transition-colors">
              Planos
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenConsultant}
            className="px-3.5 sm:px-4 py-1.5 bg-primary hover:bg-primary/80 text-white text-xs font-semibold rounded transition-all shadow-xs cursor-pointer"
          >
            Fale com Consultor
          </button>
        </div>
      </div>
    </div>
  )
}

export function TopNavbar({ onOpenConsultant }: NavbarProps) {
  return (
    <div className="w-full h-12 sm:h-14 md:h-16 lg:h-[84px] flex justify-center items-center z-30 px-6 sm:px-8 md:px-12 lg:px-0 relative">
      {/* Linha horizontal passando por trás */}
      <div className="w-full h-0 absolute left-0 top-6 sm:top-7 md:top-8 lg:top-[42px] border-t border-[rgba(55,50,47,0.12)] shadow-[0px_1px_0px_white]"></div>

      {/* Barra de Navegação Central */}
      <div className="w-full max-w-[calc(100%-32px)] sm:max-w-[calc(100%-48px)] md:max-w-[calc(100%-64px)] lg:max-w-[820px] lg:w-[820px] h-11 sm:h-12 py-1.5 px-4 bg-[#F8FAFC]/90 backdrop-blur-md shadow-[0px_0px_0px_2px_white] overflow-hidden rounded flex justify-between items-center relative z-30 border border-[rgba(55,50,47,0.12)]">
        <div className="flex justify-center items-center gap-6">
          <a href="#" className="flex items-center hover:opacity-85 transition-opacity">
            <span className="text-secondary text-lg sm:text-xl font-bold font-sans tracking-tight">
              Rovee
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-3.5 pl-2 text-xs font-medium text-[rgba(49,45,43,0.80)] font-sans">
            <a href="#fiscal" className="hover:text-secondary transition-colors">
              Inteligência Fiscal
            </a>
            <a href="#agentes" className="hover:text-secondary transition-colors">
              Agentes
            </a>
            <a href="#contador" className="hover:text-secondary transition-colors">
              Contador
            </a>
            <a href="#integracoes" className="hover:text-secondary transition-colors">
              Integrações
            </a>
            <a href="#metricas" className="hover:text-secondary transition-colors">
              Métricas
            </a>
            <a href="#roadmap" className="hover:text-secondary transition-colors">
              Roadmap
            </a>
            <a href="#planos" className="hover:text-secondary transition-colors">
              Planos
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenConsultant}
            className="px-3.5 sm:px-4 py-1.5 bg-primary hover:bg-primary/80 text-white text-xs font-semibold rounded transition-all shadow-xs cursor-pointer"
          >
            Fale com Consultor
          </button>
        </div>
      </div>
    </div>
  )
}
