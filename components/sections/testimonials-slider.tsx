"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Info, Quote } from "lucide-react"
import { AnimatedWave } from "../shared/animated-wave"

/**
 * ⚠️ Estes NÃO são depoimentos de clientes identificados.
 *
 * O layout é o original da seção; o que mudou foi a atribuição. Enquanto não
 * houver depoimento autorizado por escrito por um cliente real, nenhum texto
 * aqui pode ser assinado por uma pessoa nomeada — anunciar prova social
 * inexistente tem a mesma exposição jurídica de anunciar desconto inexistente.
 *
 * Para virar depoimento real: trocar `persona` pelo nome da pessoa, `segment`
 * pela empresa, guardar a autorização e remover o aviso do rodapé da seção.
 */
const testimonials = [
  {
    quote: "Com o pró-labore calibrado para cruzar os 28% do Fator R, a saída do Anexo V (15,5%) para o Anexo III (6%) representa mais de R$ 2.400 por mês em imposto que deixa de ser pago.",
    persona: "Perfil: Tech Lead & Consultor PJ",
    role: "Cenário ilustrativo",
    segment: "DevOps & Cloud",
    metric: "Diferença de alíquota: 15,5% → 6%",
  },
  {
    quote: "R$ 40 mil na conta da empresa não são R$ 40 mil disponíveis. O Cheque do Mês separa o que é retirada, o que é reserva e o que é provisão de DAS antes da transferência para a pessoa física.",
    persona: "Perfil: Fundadora & Designer",
    role: "Cenário ilustrativo",
    segment: "Estúdio B2B, sócia única",
    metric: "Caixa separado em 3 destinos",
  },
  {
    quote: "Do lado do escritório contábil, o cliente PJ chega no fechamento com o extrato já classificado, o pró-labore calibrado e sem despesa pessoal misturada — o que elimina a reclassificação manual mês a mês.",
    persona: "Perfil: Contador Consultivo",
    role: "Cenário ilustrativo",
    segment: "Escritório com carteira de PJs",
    metric: "Fechamento sem reclassificação",
  },
  {
    quote: "O alerta de sazonalidade aponta a queda histórica de faturamento de fim de ano com antecedência, e converte essa curva em meta de reserva mensal em vez de susto em dezembro.",
    persona: "Perfil: Diretor de Engenharia",
    role: "Cenário ilustrativo",
    segment: "Software house sazonal",
    metric: "Previsibilidade de 6 meses",
  },
]

export function TestimonialsSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const timeoutRef = useRef<number | null>(null)

  const goTo = useCallback((getNext: (prev: number) => number) => {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
    setIsAnimating(true)
    timeoutRef.current = window.setTimeout(() => {
      setActiveIndex(getNext)
      setIsAnimating(false)
    }, 250)
  }, [])

  const handleNext = useCallback(() => goTo((prev) => (prev + 1) % testimonials.length), [goTo])
  const handlePrev = useCallback(
    () => goTo((prev) => (prev - 1 + testimonials.length) % testimonials.length),
    [goTo],
  )

  // Rotação automática: pausa no hover/foco e para quem pediu menos movimento.
  useEffect(() => {
    if (isPaused) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const interval = window.setInterval(handleNext, 6000)
    return () => window.clearInterval(interval)
  }, [handleNext, isPaused])

  useEffect(
    () => () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
    },
    [],
  )

  const activeTestimonial = testimonials[activeIndex]

  // 44×44 é o alvo mínimo de toque (item 3.6 da auditoria).
  const arrowClass =
    "w-11 h-11 rounded-full border border-[rgba(55,50,47,0.12)] bg-white flex items-center justify-center hover:bg-[#F1F5F9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary text-secondary cursor-pointer transition-colors"

  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Header com AnimatedWave */}
      <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-0 w-full py-14 sm:py-18 md:py-24 border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-start items-center relative overflow-hidden">
        {/* Background Animated Wave */}
        <div className="absolute inset-0 w-full h-full opacity-40 sm:opacity-50 z-0 pointer-events-none">
          <AnimatedWave />
        </div>

        <div className="w-full max-w-[680px] flex flex-col justify-start items-center gap-3 text-center relative z-10">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#605A57]">
            Cenários de Uso
          </span>

          <h2 className="text-secondary text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight font-sans tracking-tight">
            Quem empreende com a Rovee lucra mais e dorme tranquilo
          </h2>

          <p className="text-[#605A57] text-sm sm:text-base md:text-lg leading-relaxed font-sans max-w-[580px]">
            Veja como desenvolvedores, consultores PJ e contadores parceiros transformam o caos fiscal em lucro e segurança.
          </p>
        </div>
      </div>

      {/* Main Quote Carousel */}
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

        <div
          className="flex-1 w-full border-l border-r border-[rgba(55,50,47,0.12)] p-6 sm:p-10 md:p-16 bg-white/70"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={() => setIsPaused(false)}
        >
          <div className="flex items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#605A57]">
                {activeTestimonial.metric}
              </span>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-[#6B6560]">
                {String(activeIndex + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
              </span>
              <button type="button" onClick={handlePrev} className={arrowClass} aria-label="Anterior">
                <ChevronLeft className="w-4 h-4" aria-hidden="true" />
              </button>
              <button type="button" onClick={handleNext} className={arrowClass} aria-label="Próximo">
                <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div
            aria-live="polite"
            className={`transition-opacity duration-300 ${isAnimating ? "opacity-0" : "opacity-100"
              }`}
          >
            <p className="text-xl sm:text-2xl md:text-3xl text-secondary font-normal leading-relaxed font-sans mb-8">
              {activeTestimonial.quote}
            </p>

            <div className="flex items-center gap-4 pt-6 border-t border-[rgba(55,50,47,0.08)]">
              <div className="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center shrink-0">
                <Quote className="w-4 h-4" aria-hidden="true" />
              </div>
              <div>
                <div className="text-sm font-semibold text-secondary">
                  {activeTestimonial.persona}
                </div>
                <div className="text-xs text-[#605A57]">
                  {activeTestimonial.role} · {activeTestimonial.segment}
                </div>
              </div>
            </div>
          </div>

          {/* Aviso obrigatório enquanto não houver depoimento autorizado */}
          <p className="flex items-start gap-2 text-[11px] leading-relaxed text-[#6B6560] mt-8 pt-4 border-t border-[rgba(55,50,47,0.08)]">
            <Info className="w-3.5 h-3.5 shrink-0 mt-px" aria-hidden="true" />
            <span>
              Cenários ilustrativos construídos sobre as regras do Simples Nacional. Não representam clientes específicos nem constituem promessa de resultado — a economia real depende do seu faturamento, da sua folha e do seu anexo.
            </span>
          </p>
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
