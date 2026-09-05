"use client"

import { useCallback, useEffect, useId, useRef, useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

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
      { href: "/gestao-financeira", label: "Gestão Financeira & Caixa", desc: "Cheque do Mês, Pockets e previsão de runway" },
      { href: "/inteligencia-fiscal", label: "Inteligência Fiscal & Fator R", desc: "Redução de Simples Nacional e provisão do DAS" },
    ],
  },
  {
    label: "Soluções",
    items: [
      { href: "/contadores", label: "Para Escritórios & Contadores", desc: "Acesso viewer e memórias de cálculo prontas" },
      { href: "/integracoes", label: "Bancos & Open Finance", desc: "Contas conectadas automaticamente" },
    ],
  },
  { label: "Segurança", href: "/seguranca" },
  { label: "Planos & Preços", href: "/precos" },
]

interface NavbarProps {
  onOpenConsultant: (origem?: string) => void
}

interface StickyNavbarProps extends NavbarProps {
  isScrolled: boolean
}

/* ─────────────────────────── Navegação desktop ─────────────────────────── */

function DesktopNav({ label }: { label: string }) {
  return (
    <NavigationMenu
      aria-label={label}
      className="hidden md:flex max-w-none flex-none items-center gap-1 pl-2 text-xs font-medium text-[rgba(49,45,43,0.80)] font-sans"
    >
      <NavigationMenuList className="gap-1">
        {NAV_GROUPS.map((group) =>
          group.href ? (
            <NavigationMenuItem key={group.label}>
              <NavigationMenuLink asChild>
                <Link
                  href={group.href}
                  className="rounded px-2 py-1.5 text-xs font-medium hover:bg-transparent hover:text-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {group.label}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem key={group.label}>
              <NavigationMenuTrigger className="h-auto rounded bg-transparent px-2 py-1.5 text-xs font-medium text-[rgba(49,45,43,0.80)] hover:bg-[rgba(55,50,47,0.06)] hover:text-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary data-[state=open]:bg-[rgba(55,50,47,0.06)] data-[state=open]:text-secondary">
                {group.label}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] gap-1 p-1.5">
                  {(group.items ?? []).map((item) => (
                    <li key={item.href}>
                      <NavigationMenuLink asChild>
                        <a
                          href={item.href}
                          className="block rounded-lg px-3 py-2.5 hover:bg-[#F1F5F9] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary"
                        >
                          <span className="block text-xs font-semibold text-secondary">{item.label}</span>
                          <span className="mt-0.5 block text-[11px] leading-snug text-[#6B6560]">{item.desc}</span>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ),
        )}
      </NavigationMenuList>
    </NavigationMenu>
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
        className="absolute left-0 right-0 top-[calc(100%+6px)] z-50 max-h-[70vh] overflow-y-auto bg-white/85 backdrop-blur-2xl border border-[rgba(55,50,47,0.12)] rounded-xl shadow-[0px_16px_36px_rgba(15,23,42,0.14)] p-2"
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
      className={`fixed top-0 left-0 right-0 w-full h-14 z-50 bg-white/75 backdrop-blur-xl border-b border-[rgba(55,50,47,0.08)] shadow-[0px_4px_20px_rgba(55,50,47,0.04)] px-4 sm:px-8 md:px-12 flex items-center justify-between transition-all duration-300 ease-out origin-center ${
        isScrolled
          ? "opacity-100 scale-100 pointer-events-auto translate-y-0"
          : "opacity-0 scale-95 pointer-events-none -translate-y-2"
      }`}
    >
      <div className="flex items-center justify-between w-full max-w-[1320px] mx-auto relative">
        <Link href="/" className="flex items-center hover:opacity-85 transition-opacity">
          <span className="text-secondary text-lg sm:text-xl font-bold font-sans tracking-tight">
            Rovee
          </span>
        </Link>

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

      {/* Barra de Navegação Central Transparente Fosca */}
      <div className="w-full max-w-[calc(100%-32px)] sm:max-w-[calc(100%-48px)] md:max-w-[calc(100%-64px)] lg:max-w-[820px] lg:w-[820px] h-11 sm:h-12 py-1.5 px-4 bg-white/70 backdrop-blur-xl rounded flex justify-between items-center relative z-30 border border-[rgba(55,50,47,0.12)] shadow-[0px_4px_24px_rgba(55,50,47,0.04)]">
        <Link href="/" className="flex items-center hover:opacity-85 transition-opacity">
          <span className="text-secondary text-lg sm:text-xl font-bold font-sans tracking-tight">
            Rovee
          </span>
        </Link>

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
