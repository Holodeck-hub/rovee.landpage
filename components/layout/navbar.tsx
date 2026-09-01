"use client"

import { useCallback, useEffect, useId, useRef, useState } from "react"
import { Menu, X } from "lucide-react"

/**
 * Fonte única dos itens de navegação: os dois menus (topo e sticky) e o menu
 * mobile leem a mesma lista, então não voltam a divergir.
 */
export const NAV_ITEMS = [
  { href: "#fiscal", label: "Inteligência Fiscal" },
  { href: "#agentes", label: "Agentes" },
  { href: "#contador", label: "Contador" },
  { href: "#integracoes", label: "Integrações" },
  { href: "#metricas", label: "Métricas" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#seguranca", label: "Segurança" },
  { href: "#planos", label: "Planos" },
] as const

interface NavbarProps {
  onOpenConsultant: (origem?: string) => void
}

interface StickyNavbarProps extends NavbarProps {
  isScrolled: boolean
}

/** Links desktop, escondidos abaixo de md. */
function DesktopNav({ label }: { label: string }) {
  return (
    <nav
      aria-label={label}
      className="hidden md:flex items-center gap-3.5 pl-2 text-xs font-medium text-[rgba(49,45,43,0.80)] font-sans"
    >
      {NAV_ITEMS.map((item) => (
        <a key={item.href} href={item.href} className="hover:text-secondary transition-colors">
          {item.label}
        </a>
      ))}
    </nav>
  )
}

/**
 * Menu mobile. Abre num painel abaixo da barra, fecha no Esc, no clique fora
 * e ao escolher um item, e devolve o foco ao botão de origem.
 */
function MobileMenu({
  onOpenConsultant,
  origem,
  disabled = false,
}: {
  onOpenConsultant: (origem?: string) => void
  origem: string
  disabled?: boolean
}) {
  const [isOpen, setIsOpen] = useState(false)
  const panelId = useId()
  const buttonRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const firstLinkRef = useRef<HTMLAnchorElement>(null)

  const close = useCallback((returnFocus = true) => {
    setIsOpen(false)
    if (returnFocus) buttonRef.current?.focus()
  }, [])

  // A barra sticky some quando o usuário volta ao topo: o menu não pode
  // continuar aberto invisível.
  useEffect(() => {
    if (disabled && isOpen) setIsOpen(false)
  }, [disabled, isOpen])

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.stopPropagation()
        close()
      }
    }

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node
      if (panelRef.current?.contains(target)) return
      if (buttonRef.current?.contains(target)) return
      close(false)
    }

    document.addEventListener("keydown", handleKeyDown)
    document.addEventListener("pointerdown", handlePointerDown)

    // Foco no primeiro item para quem navega por teclado ou leitor de tela.
    firstLinkRef.current?.focus()

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("pointerdown", handlePointerDown)
    }
  }, [isOpen, close])

  return (
    <div className="md:hidden">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="w-11 h-11 -mr-1.5 flex items-center justify-center rounded-lg text-secondary hover:bg-[#F1F5F9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors cursor-pointer"
      >
        {isOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
      </button>

      <div
        ref={panelRef}
        id={panelId}
        hidden={!isOpen}
        className="absolute left-0 right-0 top-[calc(100%+6px)] z-50 bg-white border border-[rgba(55,50,47,0.12)] rounded-xl shadow-[0px_12px_32px_rgba(15,23,42,0.12)] p-2"
      >
        <nav aria-label="Menu principal (mobile)" className="flex flex-col">
          {NAV_ITEMS.map((item, index) => (
            <a
              key={item.href}
              ref={index === 0 ? firstLinkRef : undefined}
              href={item.href}
              onClick={() => close(false)}
              className="px-3 py-3 min-h-[44px] flex items-center text-sm font-medium text-[#49423D] rounded-lg hover:bg-[#F1F5F9] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => {
            close(false)
            onOpenConsultant(`${origem}_mobile`)
          }}
          className="w-full mt-2 py-3 px-4 min-h-[44px] bg-primary hover:bg-primary-hover text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer"
        >
          Falar com Consultor
        </button>
      </div>
    </div>
  )
}

function ConsultantButton({
  onOpenConsultant,
  origem,
}: {
  onOpenConsultant: (origem?: string) => void
  origem: string
}) {
  return (
    <button
      type="button"
      onClick={() => onOpenConsultant(origem)}
      className="hidden md:inline-flex px-3.5 sm:px-4 py-1.5 items-center bg-primary hover:bg-primary-hover text-white text-xs font-semibold rounded transition-all shadow-xs cursor-pointer"
    >
      Falar com Consultor
    </button>
  )
}

export function StickyNavbar({ isScrolled, onOpenConsultant }: StickyNavbarProps) {
  return (
    <div
      aria-hidden={!isScrolled}
      className={`fixed top-0 left-0 right-0 w-full h-14 z-50 bg-white/95 backdrop-blur-xl border-b border-[rgba(55,50,47,0.12)] shadow-[0px_2px_8px_rgba(55,50,47,0.04)] px-4 sm:px-8 md:px-12 flex items-center justify-between transition-all duration-300 ease-out origin-center ${
        isScrolled
          ? "opacity-100 scale-100 pointer-events-auto translate-y-0"
          : "opacity-0 scale-95 pointer-events-none -translate-y-2"
      }`}
    >
      <div className="flex items-center justify-between w-full max-w-[1320px] mx-auto relative">
        <div className="flex justify-center items-center gap-6">
          <a href="#" className="flex items-center hover:opacity-85 transition-opacity">
            <span className="text-secondary text-lg sm:text-xl font-bold font-sans tracking-tight">
              Rovee
            </span>
          </a>

          <DesktopNav label="Menu principal" />
        </div>

        <div className="flex items-center gap-2">
          <ConsultantButton onOpenConsultant={onOpenConsultant} origem="navbar_sticky" />
          <MobileMenu onOpenConsultant={onOpenConsultant} origem="navbar_sticky" disabled={!isScrolled} />
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
      <div className="w-full max-w-[calc(100%-32px)] sm:max-w-[calc(100%-48px)] md:max-w-[calc(100%-64px)] lg:max-w-[820px] lg:w-[820px] h-11 sm:h-12 py-1.5 px-4 bg-[#F8FAFC]/90 backdrop-blur-md shadow-[0px_0px_0px_2px_white] rounded flex justify-between items-center relative z-30 border border-[rgba(55,50,47,0.12)]">
        <div className="flex justify-center items-center gap-6">
          <a href="#" className="flex items-center hover:opacity-85 transition-opacity">
            <span className="text-secondary text-lg sm:text-xl font-bold font-sans tracking-tight">
              Rovee
            </span>
          </a>

          <DesktopNav label="Menu principal (topo)" />
        </div>

        <div className="flex items-center gap-2">
          <ConsultantButton onOpenConsultant={onOpenConsultant} origem="navbar_topo" />
          <MobileMenu onOpenConsultant={onOpenConsultant} origem="navbar_topo" />
        </div>
      </div>
    </div>
  )
}
