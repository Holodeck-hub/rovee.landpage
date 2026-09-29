"use client"

import { useEffect, useRef, useState } from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  /** Atraso em ms antes de iniciar a transição — usado para escalonar itens
   *  de uma lista/grid (ex.: delay={index * 80}). */
  delay?: number
  /** Distância em px de onde o elemento "sobe" ao entrar. */
  distance?: number
  /** Aplica a animação diretamente no filho (ex.: a própria `<section>`) em
   *  vez de envolver tudo numa `<div>` nova — mesmo padrão `asChild` do
   *  resto do design system (Button, etc.), via Radix Slot. */
  asChild?: boolean
}

/**
 * Anima a entrada de uma seção/bloco quando ele cruza a viewport: fade +
 * leve subida via transição CSS, sem depender de nenhuma lib de animação.
 * Dispara uma vez só (unobserve após revelar) — o objetivo é dar vida à
 * primeira leitura da página, não fazer o conteúdo sumir e reaparecer toda
 * vez que o usuário rola pra cima e pra baixo.
 *
 * Respeita `prefers-reduced-motion`: mostra o conteúdo direto, sem animação.
 * Acima da dobra (hero), o observer dispara quase de imediato — o efeito
 * vira um fade-in suave de carregamento da própria página.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  distance = 16,
  asChild = false,
  style,
  ...props
}: RevealProps) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (prefersReducedMotion) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const Comp = asChild ? Slot : "div"

  return (
    <Comp
      ref={ref as React.Ref<HTMLDivElement>}
      className={cn("w-full transition-all duration-700 ease-out", visible ? "opacity-100" : "opacity-0", className)}
      style={{
        transitionDelay: delay ? `${delay}ms` : undefined,
        transform: visible ? undefined : `translateY(${distance}px)`,
        ...style,
      }}
      {...props}
    >
      {children}
    </Comp>
  )
}
