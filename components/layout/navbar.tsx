"use client"

import { useCallback, useEffect, useId, useRef, useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"

interface NavLink {
  href: string
  label: string
  desc: string
}

interface NavGroup {
  label: string
  /** Grupo com dropdown. Ausente quando o item é um link direto. */
  items?: NavLink[]
  /** Link direto, sem dropdown. Usado para páginas fora da home. */
  href?: string
}

/**
 * Fonte única da navegação: barra do topo, barra sticky e menu mobile leem
 * daqui, então não voltam a divergir. Oito links soltos não cabiam na barra —
 * viraram quatro temas, o que também abriu espaço para seções que existem na
 * página mas não apareciam no menu (#predicao, #depoimentos, #faq).
 */
export const NAV_GROUPS: NavGroup[] = [
  {
    label: "Produto",
    items: [
      { href: "/#fiscal", label: "Inteligência Fiscal", desc: "Fator R, pró-labore e provisão de DAS" },
      { href: "/#predicao", label: "Inteligência Preditiva", desc: "Projeção de caixa e runway" },
      { href: "/#agentes", label: "Agentes Proativos", desc: "Alertas antes do imposto vencer" },
    ],
  },
  {
    label: "Integrações",
    items: [
      { href: "/#integracoes", label: "Bancos & Open Finance", desc: "Contas conectadas automaticamente" },
      { href: "/#contador", label: "Canal do Contador", desc: "Acesso somente-leitura para o escritório" },
    ],
  },
  {
    label: "Confiança",
    items: [
      { href: "/#seguranca", label: "Segurança & LGPD", desc: "Criptografia e conformidade" },
      { href: "/#metricas", label: "Números", desc: "O que a Rovee já processou" },
      { href: "/#depoimentos", label: "Cenários de Uso", desc: "O que muda, caso a caso" },
      { href: "/#roadmap", label: "Roadmap", desc: "O que vem pela frente" },
    ],
  },
  // Link direto: o escritório contábil tem página própria, com outra promessa.
  { label: "Contabilidade", href: "/contadores" },
  {
    label: "Planos",
    items: [
      { href: "/#planos", label: "Planos & Preços", desc: "Mensal ou anual, a partir de R$ 79,99" },
      { href: "/#faq", label: "Dúvidas Frequentes", desc: "As perguntas que sempre chegam" },
    ],
  },
]

interface NavbarProps {
  onOpenConsultant: (origem?: string) => void
}

interface StickyNavbarProps extends NavbarProps {
  isScrolled: boolean
}

/* ─────────────────────────── Navegação desktop ─────────────────────────── */

function NavDropdown({
  group,
  isOpen,
  onToggle,
  onOpenOnHover,
  onClose,
}: {
  group: { label: string; items: NavLink[] }
  isOpen: boolean
  onToggle: () => void
  onOpenOnHover: () => void
  onClose: (returnFocus?: boolean) => void
}) {
  const panelId = useId()
  const buttonRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const firstItemRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.stopPropagation()
        onClose(true)
        buttonRef.current?.focus()
      }
    }

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node
      if (panelRef.current?.contains(target) || buttonRef.current?.contains(target)) return
      onClose(false)
    }

    document.addEventListener("keydown", handleKeyDown)
    document.addEventListener("pointerdown", handlePointerDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("pointerdown", handlePointerDown)
    }
  }, [isOpen, onClose])

  return (
    <div
      className="relative"
      onMouseEnter={onOpenOnHover}
      onBlur={(event) => {
        // So fecha quando o foco vai para outro elemento fora do grupo (Tab).
        // No mousedown o relatedTarget vem null: fechar ali removia o painel
        // antes do clique chegar no link.
        const proximo = event.relatedTarget as Node | null
        if (proximo && !event.currentTarget.contains(proximo)) onClose(false)
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        onClick={onToggle}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown") {
            event.preventDefault()
            if (!isOpen) onToggle()
            window.setTimeout(() => firstItemRef.current?.focus(), 0)
          }
        }}
        aria-expanded={isOpen}
        aria-controls={panelId}
        aria-haspopup="true"
        className={`flex items-center gap-1 px-2 py-1.5 rounded transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
          isOpen ? "text-secondary bg-[rgba(55,50,47,0.06)]" : "hover:text-secondary"
        }`}
      >
        {group.label}
        <ChevronDown
          className={`w-3 h-3 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      <div
        ref={panelRef}
        id={panelId}
        hidden={!isOpen}
        className="absolute left-1/2 -translate-x-1/2 top-full z-50 w-[300px] pt-2"
      >
        <div className="bg-white border border-[rgba(55,50,47,0.12)] rounded-xl shadow-[0px_12px_32px_rgba(15,23,42,0.14)] p-1.5">
        {group.items.map((item, index) => (
          <a
            key={item.href}
            ref={index === 0 ? firstItemRef : undefined}
            href={item.href}
            onClick={() => onClose(false)}
            className="block px-3 py-2.5 rounded-lg hover:bg-[#F1F5F9] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary transition-colors"
          >
            <span className="block text-xs font-semibold text-secondary">{item.label}</span>
            <span className="block text-[11px] text-[#6B6560] leading-snug mt-0.5">{item.desc}</span>
          </a>
        ))}
        </div>
      </div>
    </div>
  )
}

function DesktopNav({ label }: { label: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const close = useCallback(() => setOpenIndex(null), [])

  return (
    <nav
      aria-label={label}
      className="hidden md:flex items-center gap-1 pl-2 text-xs font-medium text-[rgba(49,45,43,0.80)] font-sans"
    >
      {NAV_GROUPS.map((group, index) =>
        group.href ? (
          <Link
            key={group.label}
            href={group.href}
            className="px-2 py-1.5 rounded hover:text-secondary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            {group.label}
          </Link>
        ) : (
        <NavDropdown
          key={group.label}
          group={{ label: group.label, items: group.items ?? [] }}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex((current) => (current === index ? null : index))}
          // Com um menu já aberto, passar o mouse troca de aba — como num menu de sistema.
          onOpenOnHover={() => setOpenIndex((current) => (current === null ? current : index))}
          onClose={close}
        />
        ),
      )}
    </nav>
  )
}

/* ──────────────────────────── Navegação mobile ─────────────────────────── */

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
  const [openGroup, setOpenGroup] = useState<number | null>(0)
  const panelId = useId()
  const buttonRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const firstTriggerRef = useRef<HTMLButtonElement>(null)

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
      if (panelRef.current?.contains(target) || buttonRef.current?.contains(target)) return
      close(false)
    }

    document.addEventListener("keydown", handleKeyDown)
    document.addEventListener("pointerdown", handlePointerDown)
    firstTriggerRef.current?.focus()

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
        className="absolute left-0 right-0 top-[calc(100%+6px)] z-50 max-h-[70vh] overflow-y-auto bg-white border border-[rgba(55,50,47,0.12)] rounded-xl shadow-[0px_12px_32px_rgba(15,23,42,0.12)] p-2"
      >
        <nav aria-label="Menu principal (mobile)" className="flex flex-col">
          {NAV_GROUPS.map((group, index) => {
            if (group.href) {
              return (
                <Link
                  key={group.label}
                  href={group.href}
                  onClick={() => close(false)}
                  className="px-3 py-3 min-h-[44px] flex items-center text-sm font-semibold text-secondary rounded-lg hover:bg-[#F1F5F9] border-b border-[rgba(55,50,47,0.08)] last:border-b-0 transition-colors"
                >
                  {group.label}
                </Link>
              )
            }
            const isGroupOpen = openGroup === index
            return (
              <div key={group.label} className="border-b border-[rgba(55,50,47,0.08)] last:border-b-0">
                <button
                  ref={index === 0 ? firstTriggerRef : undefined}
                  type="button"
                  onClick={() => setOpenGroup((current) => (current === index ? null : index))}
                  aria-expanded={isGroupOpen}
                  className="w-full px-3 py-3 min-h-[44px] flex items-center justify-between text-sm font-semibold text-secondary rounded-lg hover:bg-[#F1F5F9] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary transition-colors cursor-pointer"
                >
                  {group.label}
                  <ChevronDown
                    className={`w-4 h-4 text-[#6B6560] transition-transform duration-200 ${
                      isGroupOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                <div hidden={!isGroupOpen} className="pb-1.5">
                  {(group.items ?? []).map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => close(false)}
                      className="pl-6 pr-3 py-2.5 min-h-[44px] flex items-center text-sm font-medium text-[#49423D] rounded-lg hover:bg-[#F1F5F9] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            )
          })}
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

/* ──────────────────────────────── Barras ───────────────────────────────── */

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
        <a href="#" className="flex items-center hover:opacity-85 transition-opacity">
          <span className="text-secondary text-lg sm:text-xl font-bold font-sans tracking-tight">
            Rovee
          </span>
        </a>

        {/* Menu centralizado no espaco entre o logo e o CTA. Centralizar na
            barra inteira deixava 155px de folga a esquerda contra 48px a
            direita, porque o botao e bem mais largo que o logo. */}
        <div className="flex-1 flex justify-center">
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
        <a href="#" className="flex items-center hover:opacity-85 transition-opacity">
          <span className="text-secondary text-lg sm:text-xl font-bold font-sans tracking-tight">
            Rovee
          </span>
        </a>

        {/* Menu centralizado no espaco entre o logo e o CTA (ver nota acima) */}
        <div className="flex-1 flex justify-center">
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
