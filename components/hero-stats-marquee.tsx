"use client"

export function HeroStatsMarquee() {
  const stats = [
    { value: "R$ 48.000", label: "economia média no Fator R/ano", context: "SIMPLES NACIONAL" },
    { value: "100%", label: "clareza de caixa (\"Cheque do Mês\")", context: "FLUXO REAL" },
    { value: "3 minutos", label: "para configurar perfil fiscal e extrato", context: "ONBOARDING ÁGIL" },
    { value: "6 meses à frente", label: "projeção de faturamento e fôlego de caixa", context: "IA PREDITIVA" },
    { value: "Art. 50 CC", label: "blindagem contra mistura de contas PF/PJ", context: "SEGURANÇA JURÍDICA" },
  ]

  return (
    <div className="w-full overflow-hidden border-y border-[rgba(55,50,47,0.12)] bg-[#F8FAFC] py-4 my-6 select-none">
      <style>{`
        @keyframes scrollMarquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .stats-marquee-track {
          display: flex !important;
          width: max-content !important;
          will-change: transform;
          animation: scrollMarquee 85s linear infinite !important;
        }
        .stats-marquee-track:hover {
          animation-play-state: paused !important;
        }
      `}</style>

      <div className="stats-marquee-track whitespace-nowrap">
        {[0, 1, 2, 3].map((setIndex) => (
          <div key={setIndex} className="flex items-center gap-12 pr-12 shrink-0">
            {stats.map((stat, idx) => (
              <div key={`${stat.context}-${setIndex}-${idx}`} className="flex items-center gap-3 shrink-0">
                <span className="text-xl sm:text-2xl font-semibold tracking-tight text--indigo-500">
                  {stat.value}
                </span>
                <span className="text-xs text-[#605A57] font-medium font-sans">
                  {stat.label}
                </span>
                <span className="px-2 py-0.5 text-[10px] uppercase font-mono tracking-wider bg-[rgba(55,50,47,0.06)] text-[#605A57] rounded border border-[rgba(55,50,47,0.1)]">
                  {stat.context}
                </span>
                <span className="text-[rgba(55,50,47,0.2)] ml-4">•</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
