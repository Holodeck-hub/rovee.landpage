"use client"

/**
 * Cena do hero: imagem home-background exibida diretamente à direita da página principal, sem blur
 */
export function HeroScene() {
  return (
    <div className="relative bg-card w-full h-full min-h-[460px] sm:min-h-[560px] lg:min-h-[660px] flex items-center justify-center lg:justify-end overflow-hidden">
      <img
        src="/imagens/home-page.jpg"
        alt="Rovee no smartphone"
        className="w-full h-full max-h-[680px] lg:max-h-[760px] object-contain object-center lg:object-right select-none pointer-events-none scale-105 sm:scale-110 lg:scale-115 transition-transform duration-300"
      />
    </div>
  )
}
