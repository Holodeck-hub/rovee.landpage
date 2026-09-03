"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Download, CheckCircle2 } from "lucide-react"

const ACCOUNTANT_TABS = [
  {
    id: "fator-r",
    title: "1. Memória de Cálculo do Fator R",
    description: "Prescrição matemática do pró-labore ótimo para garantir a alíquota de 6% no Anexo III.",
    tabSubtitle: "Competência 05/2026 · Simples Nacional",
    badgeText: "Memória Pronta",
  },
  {
    id: "sentinela",
    title: "2. Extrato PJ 100% Despoluído",
    description: "Gastos pessoais segregados antes da escrituração, evitando confusão patrimonial e retrabalho.",
    tabSubtitle: "Auditoria de Extrato Bancário PJ",
    badgeText: "100% Conciliado",
  },
  {
    id: "viewer",
    title: "3. Acesso Viewer para o Escritório",
    description: "Convite direto para o contador baixar relatórios e memórias sem cobranças via WhatsApp.",
    tabSubtitle: "Gestão de Acesso do Contador",
    badgeText: "Viewer Somente-Leitura",
  },
]

export function AccountantChannelSection() {
  const [activeTab, setActiveTab] = useState(0)
  const [progress, setProgress] = useState(0)
  const [inviteSent, setInviteSent] = useState(false)
  const [email, setEmail] = useState("")

  // Auto-cycle through tabs with smooth progress bar
  useEffect(() => {
    const duration = 8000 // 8s per tab
    const intervalTime = 50
    const step = (intervalTime / duration) * 100

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveTab((curr) => (curr + 1) % ACCOUNTANT_TABS.length)
          return 0
        }
        return prev + step
      })
    }, intervalTime)

    return () => clearInterval(timer)
  }, [activeTab])

  const handleTabClick = (idx: number) => {
    setActiveTab(idx)
    setProgress(0)
  }

  const handleInvite = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setInviteSent(true)
  }

  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Section Header */}
      <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-0 w-full py-14 sm:py-18 md:py-24 border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-start items-center">
        <div className="w-full max-w-[680px] flex flex-col justify-start items-center gap-3 text-center">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#605A57]">
            Parceria & Harmonia Contábil
          </span>

          <h2 className="text-secondary text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium font-sans h-section">
            A inteligência que o seu contador sempre quis que você tivesse
          </h2>

          <p className="text-[#605A57] text-sm sm:text-base md:text-lg leading-relaxed font-sans max-w-[580px]">
            A Rovee não substitui a sua contabilidade, nós a potencializamos. Entregamos a memória de cálculo do Fator R pronta, o extrato despoluído de gastos pessoais e o imposto provisionado no centavo.
          </p>
        </div>
      </div>

      {/* ── CONSOLE WINDOW + FEATURE CARDS ── */}
      <div className="self-stretch flex justify-center items-start">
        {/* Center Container: Live Content */}
        <div className="flex-1 w-full border-l border-r border-[rgba(55,50,47,0.12)] bg-white flex flex-col text-left">
          {/* Dashboard Content per Active Tab */}
          <div className="px-4 sm:px-6 md:px-8 py-6 sm:py-8 bg-white flex flex-col gap-6">
            <div className="grid grid-cols-1 grid-rows-1 w-full">
              {/* ── TAB 0: MEMÓRIA DE CÁLCULO FATOR R ── */}
              <div className={`col-start-1 row-start-1 w-full flex flex-col gap-5 justify-between transition-opacity duration-300 ${activeTab === 0 ? "opacity-100 pointer-events-auto z-10" : "opacity-0 pointer-events-none invisible z-0"}`}>
                {/* Header Summary */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-[rgba(55,50,47,0.12)]">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-secondary">
                      Demonstrativo Mensal de Apuração do Fator R
                    </h3>
                    <p className="text-xs text-[#605A57] mt-0.5">
                      Proporção ótima calculada para enquadramento no Anexo III (6,00%) sem estouro de caixa.
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-[#6B6560] font-mono">Fator R Apurado</span>
                    <div className="text-lg font-semibold text-emerald-700 font-mono">28,15%</div>
                  </div>
                </div>

                {/* Minimalist Financial Table */}
                <div className="w-full border border-[rgba(55,50,47,0.12)] rounded-lg overflow-hidden">
                  <div className="grid grid-cols-12 gap-2 px-4 py-2.5 bg-[#F8FAFC] border-b border-[rgba(55,50,47,0.12)] text-[11px] font-mono font-semibold text-[#605A57] uppercase">
                    <div className="col-span-5 sm:col-span-4">Parâmetro de Cálculo</div>
                    <div className="col-span-3">Status</div>
                    <div className="col-span-3 hidden sm:block">Base Normativa</div>
                    <div className="col-span-4 sm:col-span-2 text-right">Valor Apurado</div>
                  </div>

                  <div className="grid grid-cols-12 gap-2 px-4 py-3.5 border-b border-[rgba(55,50,47,0.12)] items-center text-xs hover:bg-[#F8FAFC]/60 transition-colors">
                    <div className="col-span-5 sm:col-span-4 font-medium text-secondary">
                      Receita Bruta 12 Meses (RBT12)
                    </div>
                    <div className="col-span-3">
                      <span className="px-2 py-0.5 bg-slate-100 text-[#605A57] border border-slate-200 rounded text-[10px] font-mono font-medium">
                        Realizado
                      </span>
                    </div>
                    <div className="col-span-3 hidden sm:block text-[#605A57] text-[11px]">
                      Soma dos últimos 12 meses
                    </div>
                    <div className="col-span-4 sm:col-span-2 text-right font-mono font-semibold text-secondary">
                      R$ 362.400,00
                    </div>
                  </div>

                  <div className="grid grid-cols-12 gap-2 px-4 py-3.5 border-b border-[rgba(55,50,47,0.12)] items-center text-xs hover:bg-[#F8FAFC]/60 transition-colors">
                    <div className="col-span-5 sm:col-span-4 font-medium text-secondary">
                      Folha de Salários 12 Meses (FS12)
                    </div>
                    <div className="col-span-3">
                      <span className="px-2 py-0.5 bg-slate-100 text-[#605A57] border border-slate-200 rounded text-[10px] font-mono font-medium">
                        Acumulado
                      </span>
                    </div>
                    <div className="col-span-3 hidden sm:block text-[#605A57] text-[11px]">
                      Pró-labore + INSS recolhidos
                    </div>
                    <div className="col-span-4 sm:col-span-2 text-right font-mono font-semibold text-secondary">
                      R$ 102.000,00
                    </div>
                  </div>

                  <div className="grid grid-cols-12 gap-2 px-4 py-3.5 border-b border-[rgba(55,50,47,0.12)] items-center text-xs bg-emerald-50/40">
                    <div className="col-span-5 sm:col-span-4 font-medium text-emerald-950">
                      Razão Efetiva do Fator R
                    </div>
                    <div className="col-span-3">
                      <span className="px-2 py-0.5 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded text-[10px] font-mono font-medium">
                        Anexo III Ativo
                      </span>
                    </div>
                    <div className="col-span-3 hidden sm:block text-emerald-900 text-[11px]">
                      Meta mínima de 28,00% superada
                    </div>
                    <div className="col-span-4 sm:col-span-2 text-right font-mono font-bold text-emerald-700">
                      28,15%
                    </div>
                  </div>

                  <div className="grid grid-cols-12 gap-2 px-4 py-3.5 items-center text-xs hover:bg-[#F8FAFC]/60 transition-colors">
                    <div className="col-span-5 sm:col-span-4 font-medium text-secondary">
                      Pró-labore Prescrito do Mês (p*)
                    </div>
                    <div className="col-span-3">
                      <span className="px-2 py-0.5 bg-indigo-50 text-indigo-700 border border-indigo-200 rounded text-[10px] font-mono font-medium">
                        Recomendado
                      </span>
                    </div>
                    <div className="col-span-3 hidden sm:block text-[#605A57] text-[11px]">
                      Alíquota DAS: 6,00% (-9,5% vs Anexo V)
                    </div>
                    <div className="col-span-4 sm:col-span-2 text-right font-mono font-bold text-secondary">
                      R$ 8.500,00
                    </div>
                  </div>
                </div>

                {/* Action Bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                  <span className="text-xs text-[#605A57]">
                    Economia tributária anual estimada: <b className="text-emerald-700 font-mono">+R$ 34.200,00</b>
                  </span>
                  <button
                    type="button"
                    className="px-4 py-2 bg-white hover:bg-gray-50 border border-[rgba(55,50,47,0.15)] text-secondary text-xs font-semibold rounded flex items-center gap-2 transition-all shadow-2xs cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5 text-[#605A57]" />
                    Exportar Relatório Contábil (PDF/XLSX)
                  </button>
                </div>
              </div>

              {/* ── TAB 1: EXTRATO CONCILIADO PJ x PF ── */}
              <div className={`col-start-1 row-start-1 w-full flex flex-col gap-5 justify-between transition-opacity duration-300 ${activeTab === 1 ? "opacity-100 pointer-events-auto z-10" : "opacity-0 pointer-events-none invisible z-0"}`}>
                {/* Header Summary */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-[rgba(55,50,47,0.12)]">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-secondary">
                      Conciliação Bancária & Segregação Patrimonial
                    </h3>
                    <p className="text-xs text-[#605A57] mt-0.5">
                      Extrato pronto para exportação sem contaminação de despesas pessoais (Art. 50 do Código Civil).
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-[#6B6560] font-mono">Status da Conta PJ</span>
                    <div className="text-lg font-semibold text-emerald-700 font-mono">100% Limpo</div>
                  </div>
                </div>

                {/* Minimalist Transactions Table */}
                <div className="w-full border border-[rgba(55,50,47,0.12)] rounded-lg overflow-hidden">
                  <div className="grid grid-cols-12 gap-2 px-4 py-2.5 bg-[#F8FAFC] border-b border-[rgba(55,50,47,0.12)] text-[11px] font-mono font-semibold text-[#605A57] uppercase">
                    <div className="col-span-3">Data · Conta</div>
                    <div className="col-span-4">Descrição / Origem</div>
                    <div className="col-span-3">Auditoria Fiscal</div>
                    <div className="col-span-2 text-right">Valor</div>
                  </div>

                  <div className="grid grid-cols-12 gap-2 px-4 py-3.5 border-b border-[rgba(55,50,47,0.12)] items-center text-xs hover:bg-[#F8FAFC]/60 transition-colors">
                    <div className="col-span-3 font-mono text-[#6B6560]">18/05 · Itaú PJ</div>
                    <div className="col-span-4 font-medium text-secondary">AWS Cloud Infrastructure</div>
                    <div className="col-span-3">
                      <span className="px-2 py-0.5 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded text-[10px] font-mono font-medium">
                        Despesa Operacional PJ
                      </span>
                    </div>
                    <div className="col-span-2 text-right font-mono text-secondary">-R$ 1.420,00</div>
                  </div>

                  <div className="grid grid-cols-12 gap-2 px-4 py-3.5 border-b border-[rgba(55,50,47,0.12)] items-center text-xs hover:bg-[#F8FAFC]/60 transition-colors">
                    <div className="col-span-3 font-mono text-[#6B6560]">19/05 · Itaú PJ</div>
                    <div className="col-span-4 font-medium text-secondary">Google Workspace & Cloud</div>
                    <div className="col-span-3">
                      <span className="px-2 py-0.5 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded text-[10px] font-mono font-medium">
                        Despesa Operacional PJ
                      </span>
                    </div>
                    <div className="col-span-2 text-right font-mono text-secondary">-R$ 380,00</div>
                  </div>

                  <div className="grid grid-cols-12 gap-2 px-4 py-3.5 border-b border-[rgba(55,50,47,0.12)] items-center text-xs bg-amber-50/40">
                    <div className="col-span-3 font-mono text-[#6B6560]">19/05 · Nubank PJ</div>
                    <div className="col-span-4 font-medium text-amber-950">Supermercado Pão de Açúcar</div>
                    <div className="col-span-3">
                      <span className="px-2 py-0.5 bg-amber-50 text-amber-900 border border-amber-200 rounded text-[10px] font-mono font-medium">
                        Gasto Pessoal Isolado
                      </span>
                    </div>
                    <div className="col-span-2 text-right font-mono font-semibold text-amber-900">-R$ 280,00</div>
                  </div>

                  <div className="grid grid-cols-12 gap-2 px-4 py-3.5 items-center text-xs hover:bg-[#F8FAFC]/60 transition-colors">
                    <div className="col-span-3 font-mono text-[#6B6560]">20/05 · Itaú PJ</div>
                    <div className="col-span-4 font-medium text-secondary">Nota Fiscal de Serviços 0142</div>
                    <div className="col-span-3">
                      <span className="px-2 py-0.5 bg-indigo-50 text-indigo-700 border border-indigo-200 rounded text-[10px] font-mono font-medium">
                        Faturamento Tributável
                      </span>
                    </div>
                    <div className="col-span-2 text-right font-mono font-semibold text-emerald-700">+R$ 18.500,00</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                  <span className="text-xs text-[#605A57]">
                    Relatório pronto: <b className="text-secondary font-mono">0 divergências contábeis</b>
                  </span>
                  <button
                    type="button"
                    className="px-4 py-2 bg-white hover:bg-gray-50 border border-[rgba(55,50,47,0.15)] text-secondary text-xs font-semibold rounded flex items-center gap-2 transition-all shadow-2xs cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5 text-[#605A57]" />
                    Exportar Extrato OFX/CSV Limpo
                  </button>
                </div>
              </div>

              {/* ── TAB 2: GERENCIAMENTO DE ACESSO DO CONTADOR ── */}
              <div className={`col-start-1 row-start-1 w-full flex flex-col gap-5 justify-between transition-opacity duration-300 ${activeTab === 2 ? "opacity-100 pointer-events-auto z-10" : "opacity-0 pointer-events-none invisible z-0"}`}>
                {/* Header Summary */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-[rgba(55,50,47,0.12)]">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-secondary">
                      Portal de Acesso do Escritório Contábil
                    </h3>
                    <p className="text-xs text-[#605A57] mt-0.5">
                      Permissão somente-leitura (Viewer) para consulta de extratos, notas e download de memórias fiscais.
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-[#6B6560] font-mono">Tipo de Acesso</span>
                    <div className="text-lg font-semibold text-purple-700 font-mono">Viewer (Consulta)</div>
                  </div>
                </div>

                {/* Active Member & Invite Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-1">
                  {/* Connected Account */}
                  <div className="border border-[rgba(55,50,47,0.12)] rounded-lg p-5 bg-[#F8FAFC] flex flex-col justify-between gap-3 min-h-[160px]">
                    <div>
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="font-semibold text-secondary font-mono">CONTA CONECTADA</span>
                        <span className="px-2 py-0.5 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded text-[10px] font-mono font-medium">
                          Ativo
                        </span>
                      </div>
                      <div className="text-xs font-mono text-secondary">contabilidade@escritorio.com.br</div>
                    </div>
                    <div className="text-[11px] text-[#6B6560] leading-relaxed">
                      Pode baixar relatórios, extratos conciliados e memórias de cálculo. Sem autorização de movimentação bancária.
                    </div>
                  </div>

                  {/* Invite New Form */}
                  <div className="border border-[rgba(55,50,47,0.12)] rounded-lg p-5 bg-white flex flex-col justify-between gap-3 min-h-[160px]">
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-semibold text-secondary">Convidar Novo Contador</span>
                      <span className="text-[11px] text-[#6B6560]">Envie o link de acesso seguro por e-mail:</span>
                    </div>

                    {inviteSent ? (
                      <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded text-xs text-emerald-900 font-medium flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>
                          Prévia: dentro do app, o convite de acesso seria enviado para <b>{email}</b>.
                        </span>
                      </div>
                    ) : (
                      <form onSubmit={handleInvite} className="flex gap-2">
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="contador@escritorio.com.br"
                          aria-label="E-mail do contador (prévia da interface)"
                          autoComplete="off"
                          inputMode="email"
                          className="flex-1 px-3 py-2.5 min-h-[44px] text-xs bg-white border border-[rgba(55,50,47,0.2)] rounded text-secondary placeholder-[#6B6560] focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <button
                          type="submit"
                          className="px-4 py-2.5 min-h-[44px] bg-primary hover:bg-primary-hover text-white text-xs font-semibold rounded flex items-center gap-1 transition-all shadow-xs cursor-pointer shrink-0"
                        >
                          Convidar
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </form>
                    )}
                  </div>
                </div>

                <div className="p-3 bg-[#F8FAFC] border border-[rgba(55,50,47,0.12)] rounded-md text-xs text-[#605A57]">
                  Acesso 100% gratuito e ilimitado para o seu escritório contábil, sem cobrança adicional por usuário convidado.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM FEATURE CARDS SELECTOR ── */}
      <div className="self-stretch flex justify-center items-stretch border-t border-[rgba(55,50,47,0.12)]">
        <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E0DEDB] border-l border-r border-[#E0DEDB]">
          {ACCOUNTANT_TABS.map((tab, idx) => {
            const isActive = activeTab === idx
            return (
              <div
                key={tab.id}
                onClick={() => handleTabClick(idx)}
                className={`w-full self-stretch px-6 py-5 overflow-hidden flex flex-col justify-start items-start gap-2 cursor-pointer relative transition-colors ${
                  isActive
                    ? "bg-white shadow-[0px_0px_0px_0.75px_#E0DEDB_inset]"
                    : "bg-transparent hover:bg-white/40"
                }`}
              >
                {isActive && (
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-[rgba(50,45,43,0.08)]">
                    <div
                      className="h-full bg-emerald-700 transition-all duration-100 ease-linear"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                )}

                <div className="self-stretch flex justify-center flex-col text-[#37322F] text-sm font-semibold leading-5 font-sans">
                  {tab.title}
                </div>
                <div className="self-stretch text-[#605A57] text-xs font-normal leading-relaxed font-sans">
                  {tab.description}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
