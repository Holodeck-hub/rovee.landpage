"use client"

import { useEffect, useState } from "react"

/**
 * Moldura de celular desenhada em CSS, com a gravação do app dentro.
 */
export function PhoneFrame({
  larguraClasse = "w-[248px] sm:w-[280px]",
}: {
  /** Classe de largura. A altura vem do aspect-ratio do recorte (720x1442). */
  larguraClasse?: string
}) {
  const [reduzirMovimento, setReduzirMovimento] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReduzirMovimento(mq.matches)
    const onChange = (e: MediaQueryListEvent) => setReduzirMovimento(e.matches)
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])

  return (
    <div
      className={`relative shrink-0 ${larguraClasse}`}
      style={{ aspectRatio: "720 / 1442" }}
    >
      {/* Corpo do aparelho */}
      <div className="absolute -inset-[10px] rounded-[42px] bg-[#1B1B1F] shadow-[0_24px_60px_-18px_rgba(15,23,42,0.45),0_0_0_1px_rgba(255,255,255,0.06)_inset]" />
      {/* Brilho da borda de titânio */}
      <div className="absolute -inset-[10px] rounded-[42px] bg-gradient-to-b from-white/18 via-transparent to-white/8 pointer-events-none" />

      {/* Tela */}
      <div className="absolute inset-0 rounded-[32px] overflow-hidden bg-[#EFE9F7]">
        {reduzirMovimento ? (
          <img
            src="/video/rovee-app-poster.jpg"
            alt="Tela de Inteligência Fiscal do app da Rovee, com a provisão de imposto do mês, a economia potencial do Fator R e a divisão do caixa em três destinos."
            className="w-full h-full object-cover"
            width={720}
            height={1442}
          />
        ) : (
          <video
            className="w-full h-full object-cover"
            poster="/video/rovee-app-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Gravação do app da Rovee: tela de Inteligência Fiscal com provisão de imposto, otimização de Fator R e divisão do caixa, seguida da tela de relatórios."
          >
            <source src="/video/rovee-app.webm" type="video/webm" />
            <source src="/video/rovee-app.mp4" type="video/mp4" />
          </video>
        )}
      </div>
    </div>
  )
}
