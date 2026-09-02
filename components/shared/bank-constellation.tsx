"use client"

import { BankIcon } from "../sections/banks-integration-section"

const BANCOS = [
  "bb", "inter", "bradesco", "btg", "cora", "santander",
  "nubank", "sicoob", "itau",
]

/**
 * Bancos em órbita com a marca da Rovee no centro.
 *
 * As posições saem de trigonometria sobre o índice — determinístico, então
 * servidor e cliente renderizam idêntico e não há salto de hidratação.
 */
export function BankConstellation() {
  const raio = 44 // % do lado do contêiner

  return (
    <div className="relative w-full max-w-[440px] aspect-square mx-auto">
      {/* Brilho suave no miolo */}
      <div
        className="absolute inset-[10%] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(238,237,252,0.55) 55%, rgba(238,237,252,0) 100%)",
        }}
      />

      {/* Órbita */}
      <div className="absolute inset-[10%] rounded-full border border-primary/20" />

      {/* Marca da Rovee no centro */}
      <img
        src="/logo/rovee-mark.png"
        alt="Rovee"
        width={256}
        height={256}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[24%] h-auto drop-shadow-[0_8px_24px_rgba(79,70,229,0.28)]"
      />

      {BANCOS.map((code, i) => {
        const angulo = (i / BANCOS.length) * 2 * Math.PI - Math.PI / 2
        return (
          <div
            key={code}
            className="absolute -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-[13px] bg-white flex items-center justify-center shadow-[0_4px_14px_rgba(55,50,47,0.13)]"
            style={{
              left: `${50 + raio * Math.cos(angulo)}%`,
              top: `${50 + raio * Math.sin(angulo)}%`,
            }}
          >
            <BankIcon code={code} />
          </div>
        )
      })}
    </div>
  )
}
