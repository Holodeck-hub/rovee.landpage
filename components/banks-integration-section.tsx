"use client"

const BANKS = [
  { name: "Itaú Empresas", type: "Conta Corrente PJ", protocol: "Open Finance & OFX" },
  { name: "Nubank PJ", type: "Conta Digital PJ", protocol: "Open Finance & OFX" },
  { name: "Banco Inter", type: "Inter Empresas", protocol: "Open Finance & OFX" },
  { name: "Cora", type: "Gestão Financeira PJ", protocol: "Open Finance & OFX" },
  { name: "C6 Bank PJ", type: "Conta Empresas", protocol: "Open Finance & OFX" },
  { name: "Bradesco", type: "Net Empresa PJ", protocol: "Open Finance & OFX" },
  { name: "Santander", type: "Santander Empresas", protocol: "Open Finance & OFX" },
  { name: "BTG Pactual", type: "Empresas & Corporate", protocol: "Open Finance & OFX" },
  { name: "Banco do Brasil", type: "BB Empresas", protocol: "Open Finance & OFX" },
  { name: "Sicoob & Sicredi", type: "Cooperativas PJ", protocol: "Open Finance & OFX" },
  { name: "Safra & Daycoval", type: "Bancos Médios PJ", protocol: "Open Finance & OFX" },
  { name: "Outros Bancos", type: "Qualquer Banco BR", protocol: "Importação OFX / PDF" },
]

export function BanksIntegrationSection() {
  return (
    <div id="integracoes" className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Section Header */}
      <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] py-12 sm:py-16 md:py-20 border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-start items-center">
        <div className="w-full max-w-[680px] flex flex-col justify-start items-center gap-3 text-center">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#605A57]">
            Integrações & Bancos
          </span>

          <h2 className="text-secondary text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight font-sans tracking-tight">
            Compatível com as principais contas PJ do país
          </h2>

          <p className="text-[#605A57] text-sm sm:text-base md:text-lg leading-relaxed font-sans max-w-[580px]">
            Conecte suas contas bancárias via Open Finance com leitura em tempo real ou importe arquivos de extrato OFX e PDF com 1 clique.
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

        {/* Center Container: Uniform Divided Grid */}
        <div className="flex-1 max-w-[1060px] border-l border-r border-[rgba(55,50,47,0.12)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[rgba(55,50,47,0.12)] bg-white">
          {/* Column 1 */}
          <div className="flex flex-col divide-y divide-[rgba(55,50,47,0.12)]">
            {BANKS.slice(0, 4).map((bank, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 flex flex-col justify-between gap-2 bg-white hover:bg-[#F8FAFC]/80 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold text-secondary font-sans">
                    {bank.name}
                  </h3>
                  <span className="text-[10px] font-mono text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200/60">
                    CONECTADO
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-[#605A57]">
                  <span>{bank.type}</span>
                  <span className="font-mono text-[11px] text-[#82807C]">{bank.protocol}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col divide-y divide-[rgba(55,50,47,0.12)]">
            {BANKS.slice(4, 8).map((bank, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 flex flex-col justify-between gap-2 bg-white hover:bg-[#F8FAFC]/80 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold text-secondary font-sans">
                    {bank.name}
                  </h3>
                  <span className="text-[10px] font-mono text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200/60">
                    CONECTADO
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-[#605A57]">
                  <span>{bank.type}</span>
                  <span className="font-mono text-[11px] text-[#82807C]">{bank.protocol}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Column 3 */}
          <div className="flex flex-col divide-y divide-[rgba(55,50,47,0.12)]">
            {BANKS.slice(8, 12).map((bank, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 flex flex-col justify-between gap-2 bg-white hover:bg-[#F8FAFC]/80 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold text-secondary font-sans">
                    {bank.name}
                  </h3>
                  <span className="text-[10px] font-mono text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200/60">
                    SUPORTADO
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-[#605A57]">
                  <span>{bank.type}</span>
                  <span className="font-mono text-[11px] text-[#82807C]">{bank.protocol}</span>
                </div>
              </div>
            ))}
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
