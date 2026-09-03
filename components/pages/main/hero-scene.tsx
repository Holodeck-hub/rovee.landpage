"use client"

import { PhoneFrame } from "../contadores/phone-frame"

/**
 * Cena do hero: superfície neutra/fotográfica ao fundo, o aparelho em
 * perspectiva sobre ela e grafismos finos.
 */
export function HeroScene() {
  return (
    <div
      className="relative w-full h-full min-h-[420px] sm:min-h-[520px] lg:min-h-[600px] overflow-hidden"
      style={{
        backgroundImage:
          "var(--hero-surface, radial-gradient(120% 90% at 18% 8%, #FFFFFF 0%, #F6F4F3 42%, #EFEBEA 72%, #E7E2E2 100%))",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* O aparelho, deitado em perspectiva sobre a superfície */}
      <div className="absolute inset-0 flex items-end justify-center lg:justify-start lg:pl-[8%] pb-0">
        <div
          className="translate-y-[14%] sm:translate-y-[12%]"
          style={{
            perspective: "1400px",
          }}
        >
          <div
            style={{
              transform: "rotateX(6deg) rotateY(-15deg) rotateZ(4deg)",
              transformStyle: "preserve-3d",
            }}
          >
            <PhoneFrame larguraClasse="w-[210px] sm:w-[250px] lg:w-[290px]" />
          </div>
        </div>
      </div>

      {/* Esfumaçado na borda esquerda */}
      <div className="absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent pointer-events-none" />
    </div>
  )
}
