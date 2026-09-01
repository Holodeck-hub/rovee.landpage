"use client"

import { ArrowRight, ShieldCheck } from "lucide-react"

interface BanksIntegrationSectionProps {
  onOpenConsultant?: (origem?: string) => void
  /**
   * "full" é a seção original, com o canvas e os badges flutuantes.
   * "strip" é a faixa compacta de prova social que vai logo abaixo do hero —
   * o mesmo movimento que Brex e Firecrawl fazem com logos de clientes; aqui
   * o ativo equivalente, e verdadeiro, são os bancos suportados.
   */
  variant?: "full" | "strip"
}

const STRIP_BANKS = [
  { code: "itau", name: "Itaú" },
  { code: "nubank", name: "Nubank" },
  { code: "inter", name: "Inter" },
  { code: "bradesco", name: "Bradesco" },
  { code: "santander", name: "Santander" },
  { code: "bb", name: "Banco do Brasil" },
  { code: "btg", name: "BTG" },
  { code: "cora", name: "Cora" },
  { code: "sicoob", name: "Sicoob" },
]

// Authentic Bank Logos with exact brand colors and icons
function BankIcon({ code }: { code: string }) {
  switch (code) {
    case "itau":
      return (
        <div className="w-6 h-6 rounded-md bg-[#EC7000] flex items-center justify-center text-white font-bold text-[10px] shadow-xs shrink-0">
          <span className="font-sans font-black tracking-tighter text-[#003399] bg-[#FFF] px-1 py-0.5 rounded-[2px] scale-75">
            itaú
          </span>
        </div>
      )
    case "nubank":
      return (
        <div className="w-6 h-6 rounded-md bg-[#820AD1] flex items-center justify-center text-white font-bold text-xs shadow-xs shrink-0 font-sans">
          Nu
        </div>
      )
    case "inter":
      return (
        <div className="w-6 h-6 rounded-md bg-[#FF7A00] flex items-center justify-center text-white font-bold text-[10px] shadow-xs shrink-0 font-sans">
          inter
        </div>
      )
    case "cora":
      return (
        <div className="w-6 h-6 rounded-md bg-[#FE3E6D] flex items-center justify-center text-white font-black text-xs shadow-xs shrink-0 font-sans">
          C
        </div>
      )
    case "c6":
      return (
        <div className="w-6 h-6 rounded-md bg-[#1E1E1E] flex items-center justify-center text-white font-bold text-[11px] shadow-xs shrink-0 font-sans border border-neutral-700">
          C6
        </div>
      )
    case "bradesco":
      return (
        <div className="w-6 h-6 rounded-md bg-[#CC092F] flex items-center justify-center text-white font-bold text-[11px] shadow-xs shrink-0 font-sans">
          <div className="w-3.5 h-3.5 border-2 border-white rounded-full flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
          </div>
        </div>
      )
    case "santander":
      return (
        <div className="w-6 h-6 rounded-md bg-[#EC0000] flex items-center justify-center text-white font-bold text-[11px] shadow-xs shrink-0">
          <div className="w-3 h-3 border-b-2 border-r-2 border-white rotate-45" />
        </div>
      )
    case "btg":
      return (
        <div className="w-6 h-6 rounded-md bg-[#001E62] flex items-center justify-center text-white font-black text-[9px] shadow-xs shrink-0 font-sans">
          BTG
        </div>
      )
    case "bb":
      return (
        <div className="w-6 h-6 rounded-md bg-[#FFF000] flex items-center justify-center text-[#003882] font-black text-[10px] shadow-xs shrink-0 font-sans">
          BB
        </div>
      )
    case "sicoob":
      return (
        <div className="w-6 h-6 rounded-md bg-[#003641] flex items-center justify-center text-[#00AE9D] font-black text-[10px] shadow-xs shrink-0 font-sans">
          S
        </div>
      )
    default:
      return (
        <div className="w-6 h-6 rounded-md bg-slate-800 flex items-center justify-center text-white font-bold text-[10px] shadow-xs shrink-0">
          OFX
        </div>
      )
  }
}

export function BanksIntegrationSection({
  onOpenConsultant,
  variant = "full",
}: BanksIntegrationSectionProps) {
  if (variant === "strip") {
    return (
      <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
        {/* Mesma moldura das demais seções: as linhas verticais da grade
            mestra precisam continuar através da faixa. */}
        <div className="self-stretch flex justify-center items-stretch">
          <div className="flex-1 w-full border-l border-r border-[rgba(55,50,47,0.12)] bg-[#F8FAFC] py-8 sm:py-10 px-4 sm:px-6 md:px-8 flex flex-col items-center gap-5">
            <p className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-wider text-[#6B6560] text-center">
              Conecta com as contas PJ que você já usa
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3.5">
              {STRIP_BANKS.map((bank) => (
                <div
                  key={bank.code}
                  className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity"
                >
                  <BankIcon code={bank.code} />
                  <span className="text-xs font-medium text-[#49423D] font-sans">{bank.name}</span>
                </div>
              ))}
            </div>

            <p className="flex items-center gap-1.5 text-[11px] text-[#6B6560] text-center">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700 shrink-0" aria-hidden="true" />
              Via Open Finance regulado pelo Banco Central, em modo somente-leitura
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center overflow-hidden">
      {/* Framing Container */}
      <div className="self-stretch flex justify-center items-stretch relative">

        {/* Center Canvas with Dotted Pattern & Floating Bank Badges */}
        <div className="flex-1 w-full border-l border-r border-[rgba(55,50,47,0.12)] py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-white relative flex flex-col items-center justify-center min-h-[540px]">
          
          {/* Subtle Dot Grid Background */}
          <div
            className="absolute inset-0 opacity-[0.45] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(rgba(55, 50, 47, 0.25) 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
            }}
          />

          {/* ── FLOATING BANK BADGES (DESKTOP / TABLET) ── */}

          {/* Top Left: Itaú Empresas */}
          <div className="hidden lg:flex absolute left-8 top-12 items-center gap-2.5 px-4 py-2 bg-white/95 backdrop-blur-xs rounded-full border border-[rgba(55,50,47,0.12)] shadow-[0px_4px_16px_rgba(55,50,47,0.08)] hover:scale-105 hover:shadow-md transition-all z-20 cursor-default animate-pulse">
            <BankIcon code="itau" />
            <span className="text-xs font-semibold text-secondary font-sans">Itaú Empresas</span>
          </div>

          {/* Mid Left: Nubank PJ */}
          <div className="hidden lg:flex absolute left-4 top-48 items-center gap-2.5 px-4 py-2 bg-white/95 backdrop-blur-xs rounded-full border border-[rgba(55,50,47,0.12)] shadow-[0px_4px_16px_rgba(55,50,47,0.08)] hover:scale-105 hover:shadow-md transition-all z-20 cursor-default">
            <BankIcon code="nubank" />
            <span className="text-xs font-semibold text-secondary font-sans">Nubank PJ</span>
          </div>

          {/* Bottom Left: Banco Inter */}
          <div className="hidden lg:flex absolute left-10 bottom-14 items-center gap-2.5 px-4 py-2 bg-white/95 backdrop-blur-xs rounded-full border border-[rgba(55,50,47,0.12)] shadow-[0px_4px_16px_rgba(55,50,47,0.08)] hover:scale-105 hover:shadow-md transition-all z-20 cursor-default">
            <BankIcon code="inter" />
            <span className="text-xs font-semibold text-secondary font-sans">Inter Empresas</span>
          </div>

          {/* Top Right: Bradesco */}
          <div className="hidden lg:flex absolute right-8 top-12 items-center gap-2.5 px-4 py-2 bg-white/95 backdrop-blur-xs rounded-full border border-[rgba(55,50,47,0.12)] shadow-[0px_4px_16px_rgba(55,50,47,0.08)] hover:scale-105 hover:shadow-md transition-all z-20 cursor-default">
            <BankIcon code="bradesco" />
            <span className="text-xs font-semibold text-secondary font-sans">Bradesco PJ</span>
          </div>

          {/* Mid Right: C6 Bank PJ */}
          <div className="hidden lg:flex absolute right-4 top-44 items-center gap-2.5 px-4 py-2 bg-white/95 backdrop-blur-xs rounded-full border border-[rgba(55,50,47,0.12)] shadow-[0px_4px_16px_rgba(55,50,47,0.08)] hover:scale-105 hover:shadow-md transition-all z-20 cursor-default">
            <BankIcon code="c6" />
            <span className="text-xs font-semibold text-secondary font-sans">C6 Bank Empresas</span>
          </div>

          {/* Bottom Right: Santander */}
          <div className="hidden lg:flex absolute right-12 bottom-14 items-center gap-2.5 px-4 py-2 bg-white/95 backdrop-blur-xs rounded-full border border-[rgba(55,50,47,0.12)] shadow-[0px_4px_16px_rgba(55,50,47,0.08)] hover:scale-105 hover:shadow-md transition-all z-20 cursor-default">
            <BankIcon code="santander" />
            <span className="text-xs font-semibold text-secondary font-sans">Santander PJ</span>
          </div>

          {/* ── CENTRAL HERO CONTENT ── */}
          <div className="relative z-10 max-w-[620px] flex flex-col items-center text-center gap-4 py-4">
            {/* Tag */}
            <div className="px-3.5 py-1 bg-white border border-[rgba(55,50,47,0.15)] rounded-full text-xs font-mono font-semibold text-secondary shadow-2xs">
              Integrações
            </div>

            {/* Main Headline */}
            <h2 className="text-secondary text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight font-sans tracking-tight">
              Integre como quiser!
              <br />
              <span className="text-primary font-bold">Open Finance, OFX, PDF!</span>
            </h2>

            {/* Subtitle */}
            <p className="text-[#605A57] text-xs sm:text-sm md:text-base leading-relaxed font-sans max-w-[500px]">
              Conecte automaticamente suas contas bancárias via Open Finance a partir do Rovee Pro ou faça upload de arquivos de extrato com 1 clique no Starter.
            </p>

            {/* Action Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => onOpenConsultant?.("integracoes")}
                className="px-6 py-3 bg-primary hover:bg-primary-hover text-white text-xs sm:text-sm font-semibold rounded-full flex items-center gap-2 transition-all shadow-sm cursor-pointer"
              >
                <span>Fale com um consultor</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Footnote */}
            <div className="text-[11px] text-[#6B6560] font-sans flex items-center justify-center gap-1.5 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Conexão 100% segura e regulada pelo Banco Central</span>
            </div>
          </div>

          {/* ── MOBILE / TABLET PILLS GRID (FLEX-WRAP) ── */}
          <div className="flex lg:hidden flex-wrap items-center justify-center gap-2.5 pt-8 relative z-10 max-w-[540px]">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full border border-[rgba(55,50,47,0.12)] shadow-2xs text-xs font-medium text-secondary">
              <BankIcon code="itau" />
              <span>Itaú</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full border border-[rgba(55,50,47,0.12)] shadow-2xs text-xs font-medium text-secondary">
              <BankIcon code="nubank" />
              <span>Nubank</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full border border-[rgba(55,50,47,0.12)] shadow-2xs text-xs font-medium text-secondary">
              <BankIcon code="inter" />
              <span>Inter</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full border border-[rgba(55,50,47,0.12)] shadow-2xs text-xs font-medium text-secondary">
              <BankIcon code="cora" />
              <span>Cora</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full border border-[rgba(55,50,47,0.12)] shadow-2xs text-xs font-medium text-secondary">
              <BankIcon code="c6" />
              <span>C6 Bank</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full border border-[rgba(55,50,47,0.12)] shadow-2xs text-xs font-medium text-secondary">
              <BankIcon code="bradesco" />
              <span>Bradesco</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full border border-[rgba(55,50,47,0.12)] shadow-2xs text-xs font-medium text-secondary">
              <BankIcon code="santander" />
              <span>Santander</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full border border-[rgba(55,50,47,0.12)] shadow-2xs text-xs font-medium text-secondary">
              <BankIcon code="btg" />
              <span>BTG</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full border border-[rgba(55,50,47,0.12)] shadow-2xs text-xs font-medium text-secondary">
              <BankIcon code="bb" />
              <span>Banco do Brasil</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full border border-[rgba(55,50,47,0.12)] shadow-2xs text-xs font-medium text-secondary">
              <BankIcon code="sicoob" />
              <span>Sicoob / Sicredi</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
