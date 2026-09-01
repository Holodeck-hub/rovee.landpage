"use client"

import { useEffect, useState, useRef } from "react"
import { PixelIcon } from "./pixel-icon"

function AnimatedCounter({ end, suffix = "", prefix = "" }: { end: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let start = 0
          const duration = 2000
          const startTime = performance.now()

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * end))

            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, hasAnimated])

  return (
    <div ref={ref} className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#37322F]">
      {prefix}{count.toLocaleString("pt-BR")}{suffix}
    </div>
  )
}

const metrics = [
  {
    value: 14820000,
    suffix: "+",
    prefix: "R$ ",
    label: "Volume fiscal e provisões otimizadas",
    desc: "Em faturamentos gerenciados com cálculo de Fator R e Clareza de Caixa"
  },
  {
    value: 99,
    suffix: ".9%",
    prefix: "",
    label: "Precisão matemática determinística",
    desc: "Sem alucinações de IA nos seus números, precisão matemática absoluta"
  },
  {
    value: 3,
    suffix: " min",
    prefix: "",
    label: "Tempo médio para primeiro diagnóstico",
    desc: "Basta cadastrar o perfil fiscal e importar o primeiro extrato OFX/PDF"
  },
  {
    value: 0,
    suffix: "",
    prefix: "",
    label: "Surpresas no pagamento do DAS",
    desc: "Provisão contínua em tempo real com separação automática"
  },
]

export function LiveMetricsSection() {
  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Header */}
      <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] py-12 sm:py-16 md:py-20 border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-start items-center">
        <div className="w-full max-w-[680px] flex flex-col justify-start items-center gap-3 text-center">
          <PixelIcon type="metrics" size={40} />

          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#605A57]">
            Métricas em Tempo Real
          </span>

          <h2 className="text-[#37322F] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight font-sans tracking-tight">
            Números que comprovam a economia e a segurança da Rovee
          </h2>

          <p className="text-[#605A57] text-sm sm:text-base md:text-lg leading-relaxed font-sans max-w-[580px]">
            Desenvolvido para oferecer transparência cirúrgica para prestadores de serviços PJ, desenvolvedores e pequenas empresas.
          </p>
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="self-stretch flex justify-center items-start">
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

        <div className="flex-1 max-w-[1060px] border-l border-r border-[rgba(55,50,47,0.12)] grid grid-cols-1 sm:grid-cols-2 gap-0">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`p-6 sm:p-8 md:p-12 border-b border-[rgba(55,50,47,0.12)] ${index % 2 === 0 ? "sm:border-r" : ""
                } flex flex-col justify-between gap-4 bg-white/60 hover:bg-white transition-colors`}
            >
              <AnimatedCounter end={metric.value} suffix={metric.suffix} prefix={metric.prefix} />
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-[#37322F] mb-1">
                  {metric.label}
                </h3>
                <p className="text-xs sm:text-sm text-[#605A57] leading-relaxed">
                  {metric.desc}
                </p>
              </div>
            </div>
          ))}
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
