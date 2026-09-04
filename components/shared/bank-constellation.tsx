"use client"

/**
 * Constelação de bancos com a Rovee no centro — ilustração própria, em SVG,
 * no lugar do print do site da Nibo que estava aqui (public/openfinance/
 * constelacao-bancos.png). Mesma ideia de "connected nodes" do exemplo
 * "No integrations empty state" do reui (github.com/keenthemes/reui,
 * registry-reui/bases/radix/components/empty/c-empty-19.tsx), portada à
 * mão e ampliada de 4 para 6 nós — só tokens de cor do projeto, sem ícone.
 * Usada em /contadores e em /integracoes.
 */
export function BankConstellation() {
  const raio = 85
  const centro = 120
  const nos = Array.from({ length: 6 }, (_, i) => {
    const angulo = (i * 60 * Math.PI) / 180
    return {
      x: Math.round(centro + raio * Math.cos(angulo)),
      y: Math.round(centro - raio * Math.sin(angulo)),
    }
  })

  return (
    <svg
      viewBox="0 0 240 240"
      className="w-full max-w-[360px] h-auto mx-auto"
      role="img"
      aria-label="Vários bancos conectados automaticamente ao redor da Rovee, no centro"
    >
      {nos.map((no, i) => (
        <line
          key={`linha-${i}`}
          x1={centro}
          y1={centro}
          x2={no.x}
          y2={no.y}
          className="stroke-border"
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />
      ))}

      {nos.map((no, i) => (
        <g key={`no-${i}`}>
          <circle cx={no.x} cy={no.y} r="14" className="fill-muted stroke-border" strokeWidth="1.5" />
          <circle cx={no.x} cy={no.y} r="4" className="fill-muted-foreground/25" />
        </g>
      ))}

      {/* Nó central: Rovee */}
      <circle cx={centro} cy={centro} r="24" className="fill-primary/10 stroke-primary/40" strokeWidth="1.5" />
      <circle cx={centro} cy={centro} r="9" className="fill-primary/30" />
      <circle cx={centro} cy={centro} r="3.5" className="fill-primary" />
    </svg>
  )
}
