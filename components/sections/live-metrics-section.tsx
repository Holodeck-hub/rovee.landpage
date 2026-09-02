"use client"

import { useEffect, useRef, useState } from "react"
import { PixelIcon } from "../shared/pixel-icon"

interface Metric {
  value: number
  decimals?: number
  prefix?: string
  suffix?: string
  label: string
  desc: string
  /**
   * Nota metodológica: declara a base do número. Um número forte sem base
   * declarada custa credibilidade em vez de gerar.
   */
  nota?: string
}

function formatValue(value: number, decimals: number) {
  return value.toLocaleString("pt-BR", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
}

/**
 * O valor final é o estado inicial: se o IntersectionObserver não disparar
 * (scroll programático vindo do menu, por exemplo), a seção mostra o número
 * correto em vez de zero. A contagem é só enfeite — e é pulada por quem
 * pediu menos movimento no sistema.
 */
function AnimatedCounter({ value, decimals = 0, prefix = "", suffix = "" }: Metric) {
  const [display, setDisplay] = useState(value)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion || value === 0) return

    let frame = 0

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return
        hasAnimated.current = true
        observer.disconnect()

        const duration = 1600
        const startTime = performance.now()

        const step = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setDisplay(eased * value)
          if (progress < 1) frame = requestAnimationFrame(step)
          else setDisplay(value)
        }

        frame = requestAnimationFrame(step)
      },
      { threshold: 0.3 },
    )

    observer.observe(node)
    return () => {
      observer.disconnect()
      if (frame) cancelAnimationFrame(frame)
    }
  }, [value])

  return (
    <div
      ref={ref}
      className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-secondary"
    >
      {prefix}
      {formatValue(display, decimals)}
      {suffix}
    </div>
  )
}

// ⚠️ PREENCHER: os dois primeiros números precisam de base declarada
// (período apurado e universo considerado). O campo `nota` já está pronto
// para receber esse texto — enquanto estiver vazio, nada é exibido.
const metrics: Metric[] = [
  {
    value: 14820000,
    prefix: "R$ ",
    suffix: "+",
    label: "Volume fiscal e provisões otimizadas",
    desc: "Em faturamentos gerenciados com cálculo de Fator R e Clareza de Caixa",
    nota: "",
  },
  {
    value: 99.9,
    decimals: 1,
    suffix: "%",
    label: "Precisão matemática determinística",
    desc: "Sem alucinações de IA nos seus números, precisão matemática absoluta",
    nota: "Apuração fiscal executada por regras determinísticas versionadas, sem modelo generativo no cálculo.",
  },
  {
    value: 3,
    suffix: " min",
    label: "Tempo médio para primeiro diagnóstico",
    desc: "Basta cadastrar o perfil fiscal e importar o primeiro extrato OFX/PDF",
  },
  {
    value: 0,
    label: "Surpresas no pagamento do DAS",
    desc: "Provisão contínua em tempo real com separação automática",
  },
]

export function LiveMetricsSection() {
  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Header */}
      <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-0 w-full py-12 sm:py-16 md:py-20 border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-start items-center">
        <div className="w-full max-w-[680px] flex flex-col justify-start items-center gap-3 text-center">
          <PixelIcon type="metrics" size={40} />

          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#605A57]">
            Métricas em Tempo Real
          </span>

          <h2 className="text-secondary text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium font-sans h-section">
            Números que comprovam a economia e a segurança da Rovee
          </h2>

          <p className="text-[#605A57] text-sm sm:text-base md:text-lg leading-relaxed font-sans max-w-[580px]">
            Desenvolvido para oferecer transparência cirúrgica para prestadores de serviços PJ,
            desenvolvedores e pequenas empresas.
          </p>
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="self-stretch flex justify-center items-start">
        {/* Left vertical pattern */}
        <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden hidden sm:block" aria-hidden="true">
          <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
            {Array.from({ length: 150 }).map((_, i) => (
              <div
                key={i}
                className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
              />
            ))}
          </div>
        </div>

        <div className="flex-1 w-full border-l border-r border-[rgba(55,50,47,0.12)] grid grid-cols-1 sm:grid-cols-2 gap-0">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className={`p-6 sm:p-8 md:p-12 border-b border-[rgba(55,50,47,0.12)] ${
                index % 2 === 0 ? "sm:border-r" : ""
              } flex flex-col justify-between gap-4 bg-white/60 hover:bg-white transition-colors`}
            >
              <AnimatedCounter {...metric} />
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-secondary mb-1">
                  {metric.label}
                </h3>
                <p className="text-xs sm:text-sm text-[#605A57] leading-relaxed">{metric.desc}</p>
                {metric.nota ? (
                  <p className="text-[11px] text-[#6B6560] leading-relaxed mt-2 pt-2 border-t border-[rgba(55,50,47,0.08)]">
                    {metric.nota}
                  </p>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        {/* Right vertical pattern */}
        <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden hidden sm:block" aria-hidden="true">
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
