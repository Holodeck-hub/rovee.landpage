"use client"

import { useCallback, useEffect, useRef } from "react"
import { X } from "lucide-react"

/**
 * Abre a gravação do app em tamanho grande. Existe para que o ícone de play
 * do hero corresponda a algo: um ▶ que só rola a página é promessa falsa.
 */
export function VideoLightbox({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const fecharRef = useRef<HTMLButtonElement>(null)
  const abridorRef = useRef<HTMLElement | null>(null)

  const fechar = useCallback(() => onClose(), [onClose])

  useEffect(() => {
    if (!isOpen) return
    abridorRef.current = document.activeElement as HTMLElement | null
    document.body.style.overflow = "hidden"

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { e.preventDefault(); fechar() }
    }
    window.addEventListener("keydown", onKey)
    const t = window.setTimeout(() => fecharRef.current?.focus(), 40)

    return () => {
      window.removeEventListener("keydown", onKey)
      window.clearTimeout(t)
      document.body.style.overflow = ""
    }
  }, [isOpen, fechar])

  useEffect(() => {
    if (isOpen) return
    const a = abridorRef.current
    if (a && document.contains(a)) { a.focus(); abridorRef.current = null }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8 animate-fadeIn">
      <div onClick={fechar} aria-hidden="true" className="fixed inset-0 bg-[#0F172A]/75 backdrop-blur-sm cursor-pointer" />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Gravação do app da Rovee"
        className="relative z-10 flex flex-col items-center gap-4"
      >
        <video
          className="max-h-[78vh] w-auto rounded-[28px] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
          poster="/video/rovee-app-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          controls
        >
          <source src="/video/rovee-app.webm" type="video/webm" />
          <source src="/video/rovee-app.mp4" type="video/mp4" />
        </video>

        <button
          ref={fecharRef}
          type="button"
          onClick={fechar}
          className="inline-flex items-center gap-2 h-10 px-4 rounded-lg bg-white/95 hover:bg-white text-secondary text-sm font-normal cursor-pointer transition-colors"
        >
          <X className="w-4 h-4" aria-hidden="true" />
          Fechar
        </button>
      </div>
    </div>
  )
}
