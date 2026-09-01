"use client"

import { Lock, ShieldCheck, FileCheck, EyeOff } from "lucide-react"

const SECURITY_PILLARS = [
  {
    icon: EyeOff,
    title: "1. Acesso 100% Somente-Leitura",
    subtitle: "Zero Risco Operacional",
    desc: "A Rovee não realiza transferências, pagamentos ou transações financeiras. O acesso é estritamente para leitura e conciliação de extratos bancários.",
    badge: "READ-ONLY",
  },
  {
    icon: Lock,
    title: "2. Criptografia AES-256 & TLS 1.3",
    subtitle: "Padrão Bancário Global",
    desc: "Todos os dados em trânsito e em repouso são protegidos com a mesma tecnologia de criptografia de ponta a ponta adotada pelas maiores instituições financeiras do mundo.",
    badge: "MILITARY-GRADE",
  },
  {
    icon: FileCheck,
    title: "3. Conformidade Integral com a LGPD",
    subtitle: "Privacidade Garantida",
    desc: "Aderência total à Lei Geral de Proteção de Dados (Lei 13.709/2018). Suas informações fiscais e bancárias são confidenciais e jamais comercializadas.",
    badge: "LGPD COMPLIANT",
  },
  {
    icon: ShieldCheck,
    title: "4. Blindagem do Art. 50 do Código Civil",
    subtitle: "Segurança Jurídica & Fiscal",
    desc: "Segregação matemática e relatórios comprobatórios que eliminam a confusão patrimonial, protegendo os sócios contra a desconsideração da personalidade jurídica.",
    badge: "BLINDAGEM JURÍDICA",
  },
]

export function SecuritySection() {
  return (
    <div id="seguranca" className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Section Header */}
      <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-0 w-full py-12 sm:py-16 md:py-20 border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-start items-center">
        <div className="w-full max-w-[680px] flex flex-col justify-start items-center gap-3 text-center">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#605A57]">
            Segurança & Conformidade
          </span>

          <h2 className="text-secondary text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight font-sans tracking-tight">
            Segurança de padrão bancário para blindar o seu negócio
          </h2>

          <p className="text-[#605A57] text-sm sm:text-base md:text-lg leading-relaxed font-sans max-w-[580px]">
            Desenvolvido sob rígidas normas de proteção financeira e jurídica. Sua empresa protegida contra riscos fiscais e vazamentos.
          </p>
        </div>
      </div>

      {/* Framing Container */}
      <div className="self-stretch flex justify-center items-stretch relative">
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

        {/* Center Container: 4 Pillars Grid */}
        <div className="flex-1 w-full border-l border-r border-[rgba(55,50,47,0.12)] grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[rgba(55,50,47,0.12)] bg-white">
          <div className="flex flex-col divide-y divide-[rgba(55,50,47,0.12)]">
            {SECURITY_PILLARS.slice(0, 2).map((pillar, idx) => {
              const Icon = pillar.icon
              return (
                <div key={idx} className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between gap-4 bg-white/60 hover:bg-[#F8FAFC]/80 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-secondary border border-[rgba(55,50,47,0.08)]">
                      <Icon className="w-5 h-5 text-secondary" />
                    </div>
                    <span className="text-[10px] font-mono text-[#82807C] font-semibold">
                      {pillar.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-secondary font-sans mb-1">
                      {pillar.title}
                    </h3>
                    <div className="text-xs font-medium text-emerald-700 font-sans mb-2">
                      {pillar.subtitle}
                    </div>
                    <p className="text-xs sm:text-sm text-[#605A57] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="flex flex-col divide-y divide-[rgba(55,50,47,0.12)]">
            {SECURITY_PILLARS.slice(2, 4).map((pillar, idx) => {
              const Icon = pillar.icon
              return (
                <div key={idx} className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between gap-4 bg-white/60 hover:bg-[#F8FAFC]/80 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-secondary border border-[rgba(55,50,47,0.08)]">
                      <Icon className="w-5 h-5 text-secondary" />
                    </div>
                    <span className="text-[10px] font-mono text-[#82807C] font-semibold">
                      {pillar.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-secondary font-sans mb-1">
                      {pillar.title}
                    </h3>
                    <div className="text-xs font-medium text-emerald-700 font-sans mb-2">
                      {pillar.subtitle}
                    </div>
                    <p className="text-xs sm:text-sm text-[#605A57] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              )
            })}
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
