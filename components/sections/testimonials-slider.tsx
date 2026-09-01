"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    quote: "A Rovee calculou meu pró-labore exato para cruzar o Fator R de 28%. Saí do Anexo V pagando 15,5% para o Anexo III em 6%. Só nisso economizei mais de R$ 2.400 todos os meses sem dor de cabeça.",
    author: "Guilherme Siqueira",
    role: "Tech Lead & Consultor PJ",
    company: "DevOps & Cloud",
    metric: "R$ 28.800/ano economizados no Simples",
  },
  {
    quote: "A melhor coisa foi o 'Cheque do Mês'. Eu olhava R$ 40k na conta da empresa e tinha medo de transferir pra minha física. Agora a Rovee separa o que é meu, o que é reserva e o que é do DAS.",
    author: "Mariana Alencar",
    role: "Fundadora & Designer",
    company: "Estúdio Lumina B2B",
    metric: "100% de clareza de caixa",
  },
  {
    quote: "Como contador, eu recomendo a Rovee para todos os meus clientes PJ de TI. Eles chegam no fechamento do mês com o extrato já limpo, o pró-labore calibrado e sem despesas pessoais misturadas.",
    author: "Roberto Mendes",
    role: "Contador Consultivo & Sócio",
    company: "Mendes & Associados Contabilidade",
    metric: "Parceria com 140+ PJs",
  },
  {
    quote: "Os modelos preditivos da Rovee são impressionantes. O alerta de sazonalidade me avisou 60 dias antes sobre a queda histórica de faturamento de fim de ano, permitindo provisionar a reserva sem susto.",
    author: "Danilo Faria",
    role: "Diretor de Engenharia",
    company: "Horizon Software House",
    metric: "Previsibilidade de 6 meses",
  },
]

export function TestimonialsSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 6000)
    return () => clearInterval(interval)
  }, [activeIndex])

  const handleNext = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
      setIsAnimating(false)
    }, 250)
  }

  const handlePrev = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
      setIsAnimating(false)
    }, 250)
  }

  const activeTestimonial = testimonials[activeIndex]

  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Header */}
      <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-0 w-full py-14 sm:py-18 md:py-24 border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-start items-center">
        <div className="w-full max-w-[680px] flex flex-col justify-start items-center gap-3 text-center">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#605A57]">
            Depoimentos Reais
          </span>

          <h2 className="text-secondary text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight font-sans tracking-tight">
            Quem empreende com a Rovee lucra mais e dorme tranquilo
          </h2>

          <p className="text-[#605A57] text-sm sm:text-base md:text-lg leading-relaxed font-sans max-w-[580px]">
            Veja como desenvolvedores, consultores PJ e contadores parceiros transformaram o caos fiscal em lucro e segurança.
          </p>
        </div>
      </div>

      {/* Main Quote Carousel */}
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

        <div className="flex-1 w-full border-l border-r border-[rgba(55,50,47,0.12)] p-6 sm:p-10 md:p-16 bg-white/70">
          <div className="flex items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#605A57]">
                {activeTestimonial.metric}
              </span>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-[#82807c]">
                {String(activeIndex + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
              </span>
              <button
                onClick={handlePrev}
                className="w-8 h-8 rounded-full border border-[rgba(55,50,47,0.12)] bg-white flex items-center justify-center hover:bg-[#F1F5F9] text-secondary cursor-pointer"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="w-8 h-8 rounded-full border border-[rgba(55,50,47,0.12)] bg-white flex items-center justify-center hover:bg-[#F1F5F9] text-secondary cursor-pointer"
                aria-label="Próximo"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div
            className={`transition-opacity duration-300 ${isAnimating ? "opacity-0" : "opacity-100"
              }`}
          >
            <blockquote className="text-xl sm:text-2xl md:text-3xl text-secondary font-normal leading-relaxed font-sans mb-8">
              &ldquo;{activeTestimonial.quote}&rdquo;
            </blockquote>

            <div className="flex items-center gap-4 pt-6 border-t border-[rgba(55,50,47,0.08)]">
              <div className="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-semibold text-sm">
                {activeTestimonial.author.charAt(0)}
              </div>
              <div>
                <div className="text-sm font-semibold text-secondary">
                  {activeTestimonial.author}
                </div>
                <div className="text-xs text-[#605A57]">
                  {activeTestimonial.role} · {activeTestimonial.company}
                </div>
              </div>
            </div>
          </div>
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
